import EthClient, { BlockParameter, Method } from './eth-client';
import { BlockWithFullTransactions, BlockWithTransactionHashes, LogFilter } from '../model';
import { MethodParameter, serializeToMethodParameter } from './util';
import BigNumber from 'bignumber.js';
import logger from '../logger';
import * as fetch from 'isomorphic-fetch';

export default class EthHttpsClient implements EthClient {
  nextRequestId: number = 0;

  endpointUrl: string;

  constructor({ endpointUrl }: { endpointUrl: string }) {
    this.endpointUrl = endpointUrl;
  }

  public eth_getBlockByHash(hash: string, includeFullTransactions: false): Promise<BlockWithTransactionHashes | null>;
  public eth_getBlockByHash(hash: string, includeFullTransactions: true): Promise<BlockWithFullTransactions | null>;
  public eth_getBlockByHash(hash: string, includeFullTransactions: boolean): any {
    return this.cmd<BlockWithFullTransactions | BlockWithTransactionHashes>(Method.eth_getBlockByHash, [hash, includeFullTransactions]);
  }

  public eth_getBlockByNumber(block: BlockParameter, includeFullTransactions: false): Promise<BlockWithTransactionHashes | null>;
  public eth_getBlockByNumber(block: BlockParameter, includeFullTransactions: true): Promise<BlockWithFullTransactions | null>;
  public eth_getBlockByNumber(block: BlockParameter, includeFullTransactions: boolean): any {
    return this.cmd<BlockWithFullTransactions | BlockWithTransactionHashes | null>(Method.eth_getBlockByNumber, [block, includeFullTransactions]);
  }

  public web3_clientVersion = () => this.cmd<string>(Method.web3_clientVersion);

  public eth_blockNumber = () => this.cmd<string>(Method.eth_blockNumber).then(s => new BigNumber(s));

  public eth_getLogs = (filter: LogFilter) => this.cmd<any>(Method.eth_getLogs, [filter]);

  private async cmd<TResponse>(method: Method, params: MethodParameter[] = []): Promise<TResponse> {
    const requestId = this.nextRequestId++;
    const { endpointUrl } = this;

    const request = {
      jsonrpc: '2.0',
      id: requestId,
      method,
      params: serializeToMethodParameter(params)
    };

    logger.debug({ method, request }, 'sending request');

    const response = await fetch(
      endpointUrl,
      {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    let bodyText: string;
    try {
      bodyText = await response.text();
    } catch (err) {
      logger.error({ err }, 'body text couldnt be extracted');
      throw err;
    }

    if (response.status !== 200) {
      logger.error({
        request,
        responseStatus: response.status,
        responseBody: bodyText
      }, 'not 200 response from json rpc');

      throw new Error('failed to fetch: ' + response.status);
    }

    let json: any;
    try {
      json = JSON.parse(bodyText);
    } catch (err) {
      logger.error({ err, bodyText }, 'body was not valid json');
      throw err;
    }

    if (typeof json.result === 'undefined') {
      logger.error({ request, responseBody: json }, 'no `result` key in the body');
      throw new Error(`failed to fetch: no result in the body`);
    }

    return json.result;
  }

}