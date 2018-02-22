import EthClient, { Method } from './eth-client';
import { BlockWithFullTransactions, BlockWithTransactionHashes, LogFilter } from '../model';
import { MethodParameter, serializeParameter } from './util';
import BigNumber from 'bignumber.js';
import logger from '../logger';
import * as fetch from 'isomorphic-fetch';

export default class EthHttpsClient implements EthClient {
  nextRequestId: number = 0;
  endpointUrl: string;

  constructor({ endpointUrl }: { endpointUrl: string }) {
    this.endpointUrl = endpointUrl;
  }

  web3_clientVersion = () => this.cmd<string>(Method.web3_clientVersion);

  eth_getBlockByHash = (hash: string, includeFullTransactions: boolean = false) =>
    this.cmd<BlockWithFullTransactions | BlockWithTransactionHashes>(Method.eth_getBlockByHash, [hash, includeFullTransactions]);

  eth_getBlockByNumber = (block: string | BigNumber | 'earliest' | 'latest' | 'pending', includeFullTransactions: boolean = false) =>
    this.cmd<BlockWithFullTransactions | BlockWithTransactionHashes | null>(Method.eth_getBlockByNumber, [block, includeFullTransactions]);

  eth_blockNumber = () => this.cmd<string>(Method.eth_blockNumber).then(s => new BigNumber(s));

  eth_getLogs = (filter: LogFilter) => this.cmd<any>(Method.eth_getLogs, [filter]);

  private async cmd<TResponse>(method: Method, params: MethodParameter[] = []): Promise<TResponse> {
    const requestId = this.nextRequestId++;
    const { endpointUrl } = this;

    const request = {
      jsonrpc: '2.0',
      id: requestId,
      method,
      params: serializeParameter(params)
    };

    logger.debug({ method, request }, 'sending request');

    const response = await fetch(
      endpointUrl,
      {
        body: JSON.stringify(request),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    const json = await response.json();

    if (response.status !== 200) {
      logger.error({
        responseStatus: response.status,
        responseBody: json
      }, 'not 200 repsonse from json rpc');

      throw new Error('failed to fetch: ' + response.status);
    }

    if (typeof json.result === 'undefined') {
      logger.error({
        responseBody: json
      }, 'no `result` key in the body');
      throw new Error(`failed to fetch: no result in the body`);
    }

    return json.result;
  }

}
