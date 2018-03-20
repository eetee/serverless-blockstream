export const ETHBOT_ABI =
  [ {
    'constant': false,
    'inputs': [ { 'name': '_newElement', 'type': 'uint8[]' } ],
    'name': 'addMeleeParts',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newBestProb', 'type': 'uint8' } ],
    'name': 'setBestProbability',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_interfaceID', 'type': 'bytes4' } ],
    'name': 'supportsInterface',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'address' } ],
    'name': 'cratesMigrated',
    'outputs': [ { 'name': '', 'type': 'uint16' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'address' } ],
    'name': 'hasOpenedOldCrates',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [ { 'name': '_name', 'type': 'string' } ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_to', 'type': 'address' }, { 'name': '_deedId', 'type': 'uint256' } ],
    'name': 'approve',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'implementsERC721',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'openCrates',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_index', 'type': 'uint256' } ],
    'name': 'deedByIndex',
    'outputs': [ { 'name': '_deedId', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'openPendingPartCrates',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newScrapAuctionDuration', 'type': 'uint256' } ],
    'name': 'setScrapAuctionDuration',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_from', 'type': 'address' }, { 'name': '_to', 'type': 'address' }, {
      'name': '_tokenId',
      'type': 'uint256'
    } ],
    'name': 'transferFrom',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'uint256' } ],
    'name': 'meleeElementBySubtypeIndex',
    'outputs': [ { 'name': '', 'type': 'uint8' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' }, { 'name': '_index', 'type': 'uint256' } ],
    'name': 'tokenOfOwnerByIndex',
    'outputs': [ { 'name': '_tokenId', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': 'partId', 'type': 'uint256' } ],
    'name': 'scrap',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': 'partIds', 'type': 'uint256[]' } ],
    'name': 'hasOrderedRobotParts',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_subtypeIndexToDeprecate', 'type': 'uint8' } ],
    'name': 'deprecateBodySubtype',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'partsMinted',
    'outputs': [ { 'name': '', 'type': 'uint16' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'redeemBattleCrates',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'unpause',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_partId', 'type': 'uint256' }, {
      'name': '_startPrice',
      'type': 'uint256'
    }, { 'name': '_endPrice', 'type': 'uint256' }, { 'name': '_duration', 'type': 'uint256' } ],
    'name': 'createAuction',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'uint256' } ],
    'name': 'partIndexToApproved',
    'outputs': [ { 'name': '', 'type': 'address' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_count', 'type': 'uint16' }, { 'name': '_owner', 'type': 'address' } ],
    'name': 'mintParts',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' }, { 'name': '_index', 'type': 'uint256' } ],
    'name': 'deedOfOwnerByIndex',
    'outputs': [ { 'name': '_deedId', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': 'partIds', 'type': 'uint256[]' } ],
    'name': 'totalLevel',
    'outputs': [ { 'name': '', 'type': 'uint32' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'paused',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_rate', 'type': 'uint8' } ],
    'name': 'setBurnRate',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'withdrawBalance',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'address' }, { 'name': '', 'type': 'uint256' } ],
    'name': 'pendingRewards',
    'outputs': [ { 'name': 'blocknumber', 'type': 'uint256' }, { 'name': 'exp', 'type': 'int32' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_deedId', 'type': 'uint256' } ],
    'name': 'ownerOf',
    'outputs': [ { 'name': '_owner', 'type': 'address' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_min', 'type': 'int8' } ],
    'name': 'setMinScaled',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_to', 'type': 'address' }, { 'name': '_tokenIds', 'type': 'uint256[]' } ],
    'name': 'transferAll',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_tokenId', 'type': 'uint256' } ],
    'name': 'tokenMetadata',
    'outputs': [ { 'name': 'infoUrl', 'type': 'string' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_user', 'type': 'address' } ],
    'name': 'getUserByAddress',
    'outputs': [ { 'name': '', 'type': 'uint32' }, { 'name': '', 'type': 'uint8[32]' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' }, {
      'name': '_start',
      'type': 'uint256'
    }, { 'name': '_numToSearch', 'type': 'uint256' } ],
    'name': 'tokensOfOwnerWithinRange',
    'outputs': [ { 'name': 'ownerTokens', 'type': 'uint256[]' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'openOldCrates',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_id', 'type': 'uint256' } ],
    'name': 'getPartById',
    'outputs': [ { 'name': 'tokenId', 'type': 'uint32' }, {
      'name': 'partType',
      'type': 'uint8'
    }, { 'name': 'partSubType', 'type': 'uint8' }, { 'name': 'rarity', 'type': 'uint8' }, {
      'name': 'element',
      'type': 'uint8'
    }, { 'name': 'battlesLastDay', 'type': 'uint32' }, {
      'name': 'experience',
      'type': 'uint32'
    }, { 'name': 'forgeTime', 'type': 'uint32' }, { 'name': 'battlesLastReset', 'type': 'uint32' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' } ],
    'name': 'balanceOf',
    'outputs': [ { 'name': 'count', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_i', 'type': 'uint8' } ],
    'name': 'choosePerk',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newElement', 'type': 'uint8[]' } ],
    'name': 'addBodyParts',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newMediumMultiple', 'type': 'uint8' } ],
    'name': 'setMedium',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newMinProb', 'type': 'uint8' } ],
    'name': 'setMediumProbability',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_user', 'type': 'address' }, { 'name': '_partIds', 'type': 'uint256[]' }, {
      'name': '_exps',
      'type': 'int32[]'
    } ],
    'name': 'addExperience',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' }, { 'name': '_tokenId', 'type': 'uint256' } ],
    'name': 'owns',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'pause',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' } ],
    'name': 'tokensOfOwner',
    'outputs': [ { 'name': 'ownerTokens', 'type': 'uint256[]' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [ { 'name': '', 'type': 'address' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'redeemShardsIntoPending',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'migrate',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'uint256' } ],
    'name': 'bodyElementBySubtypeIndex',
    'outputs': [ { 'name': '', 'type': 'uint8' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' } ],
    'name': 'countOfDeedsByOwner',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_address', 'type': 'address' } ],
    'name': 'setAuctionAddress',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [ { 'name': '_smbol', 'type': 'string' } ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_to', 'type': 'address' }, { 'name': '_tokenIds', 'type': 'uint256[]' } ],
    'name': 'approveMany',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newMinEndPrice', 'type': 'uint256' } ],
    'name': 'setScrapMinEndPrice',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newMin', 'type': 'uint8' } ],
    'name': 'setMinShards',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_subtypeIndexToDeprecate', 'type': 'uint8' } ],
    'name': 'deprecateDefenceSubtype',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_battle', 'type': 'address' } ],
    'name': 'addApprovedBattle',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newBestMultiple', 'type': 'uint8' } ],
    'name': 'setBest',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_to', 'type': 'address' }, { 'name': '_tokenId', 'type': 'uint256' } ],
    'name': 'transfer',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_battleId', 'type': 'uint256' }, {
      'name': 'partIds',
      'type': 'uint256[]'
    }, { 'name': 'commit', 'type': 'bytes32' }, { 'name': 'revealLength', 'type': 'uint256' } ],
    'name': 'createBattle',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' }, { 'name': '_tokenIds', 'type': 'uint256[]' } ],
    'name': 'ownsAll',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_exp', 'type': 'uint32' } ],
    'name': 'getLevel',
    'outputs': [ { 'name': '', 'type': 'uint32' } ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_deedId', 'type': 'uint256' } ],
    'name': 'takeOwnership',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' } ],
    'name': 'getPartsOfOwner',
    'outputs': [ { 'name': '', 'type': 'bytes24[]' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'scrapPercent',
    'outputs': [ { 'name': '', 'type': 'uint8' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_deedId', 'type': 'uint256' } ],
    'name': 'deedUri',
    'outputs': [ { 'name': '_uri', 'type': 'string' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'convertReward',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'burnRate',
    'outputs': [ { 'name': '', 'type': 'uint8' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_index', 'type': 'uint256' } ],
    'name': 'ownerByIndex',
    'outputs': [ { 'name': '_owner', 'type': 'address' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' }, {
      'name': '_start',
      'type': 'uint256'
    }, { 'name': '_numToSearch', 'type': 'uint256' } ],
    'name': 'getPartsOfOwnerWithinRange',
    'outputs': [ { 'name': '', 'type': 'bytes24[]' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'countOfDeeds',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_user', 'type': 'address' } ],
    'name': 'userPendingCrateNumber',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_subtypeIndexToDeprecate', 'type': 'uint8' } ],
    'name': 'deprecateMeleeSubtype',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'countOfOwners',
    'outputs': [ { 'name': '_count', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'scrapCount',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newElement', 'type': 'uint8[]' } ],
    'name': 'addTurretParts',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newWorstMultiple', 'type': 'uint8' } ],
    'name': 'setWorst',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_base', 'type': 'string' } ],
    'name': 'setMetadataBase',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'uint256' } ],
    'name': 'defenceElementBySubtypeIndex',
    'outputs': [ { 'name': '', 'type': 'uint8' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'uint256' } ],
    'name': 'partIndexToOwner',
    'outputs': [ { 'name': '', 'type': 'address' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'uint256' } ],
    'name': 'turretElementBySubtypeIndex',
    'outputs': [ { 'name': '', 'type': 'uint8' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '_user', 'type': 'address' } ],
    'name': 'getPendingBattleRewardsCount',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'getPendingPartCrateLength',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'address' } ],
    'name': 'hasMigrated',
    'outputs': [ { 'name': '', 'type': 'bool' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newChance', 'type': 'uint256' } ],
    'name': 'setRewardChance',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [],
    'name': 'withdrawAuctionBalance',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newMinStartPrice', 'type': 'uint256' } ],
    'name': 'setScrapMinStartPrice',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newPercent', 'type': 'uint8' } ],
    'name': 'setScrapPercent',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_subtypeIndexToDeprecate', 'type': 'uint8' } ],
    'name': 'deprecateTurretSubtype',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'PART_REWARD_CHANCE',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [ { 'name': '', 'type': 'address' } ],
    'name': 'addressToUser',
    'outputs': [ { 'name': 'numShards', 'type': 'uint32' }, { 'name': 'experience', 'type': 'uint32' } ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': 'newOwner', 'type': 'address' } ],
    'name': 'transferOwnership',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_partArray', 'type': 'uint8[4]' }, { 'name': '_owner', 'type': 'address' } ],
    'name': 'mintParticularPart',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [ { 'name': '_newElement', 'type': 'uint8[]' } ],
    'name': 'addDefenceParts',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
    'payable': true,
    'stateMutability': 'payable',
    'type': 'fallback'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': false, 'name': 'battleId', 'type': 'uint256' }, {
      'indexed': false,
      'name': 'duelId',
      'type': 'uint256'
    } ],
    'name': 'NewDuel',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': true, 'name': '_from', 'type': 'address' }, {
      'indexed': false,
      'name': '_quantity',
      'type': 'uint8'
    } ],
    'name': 'CratesOpened',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': true, 'name': '_from', 'type': 'address' } ],
    'name': 'OpenedOldCrates',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': true, 'name': '_from', 'type': 'address' }, {
      'indexed': false,
      'name': '_quantity',
      'type': 'uint16'
    }, { 'indexed': false, 'name': 'isMigrationComplete', 'type': 'bool' } ],
    'name': 'MigratedCrates',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': false, 'name': 'caller', 'type': 'address' }, {
      'indexed': false,
      'name': 'shards',
      'type': 'uint32'
    } ],
    'name': 'ShardsAdded',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': false, 'name': 'user', 'type': 'address' }, {
      'indexed': false,
      'name': 'partId',
      'type': 'uint256'
    } ],
    'name': 'Scrap',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': false, 'name': '', 'type': 'string' }, {
      'indexed': false,
      'name': '',
      'type': 'uint8'
    }, { 'indexed': false, 'name': '', 'type': 'uint8[32]' } ],
    'name': 'PrintPerk',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': true, 'name': 'upgradedUser', 'type': 'address' }, {
      'indexed': true,
      'name': 'perk',
      'type': 'uint8'
    } ],
    'name': 'PerkChosen',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': true, 'name': 'from', 'type': 'address' }, {
      'indexed': true,
      'name': 'to',
      'type': 'address'
    }, { 'indexed': true, 'name': 'deedId', 'type': 'uint256' } ],
    'name': 'Transfer',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': true, 'name': 'owner', 'type': 'address' }, {
      'indexed': true,
      'name': 'approved',
      'type': 'address'
    }, { 'indexed': true, 'name': 'deedId', 'type': 'uint256' } ],
    'name': 'Approval',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': false, 'name': 'owner', 'type': 'address' }, {
      'indexed': false,
      'name': 'partID',
      'type': 'uint256'
    }, {
      'components': [ { 'name': 'tokenId', 'type': 'uint32' }, {
        'name': 'partType',
        'type': 'uint8'
      }, { 'name': 'partSubType', 'type': 'uint8' }, { 'name': 'rarity', 'type': 'uint8' }, {
        'name': 'element',
        'type': 'uint8'
      }, { 'name': 'battlesLastDay', 'type': 'uint32' }, {
        'name': 'experience',
        'type': 'uint32'
      }, { 'name': 'forgeTime', 'type': 'uint32' }, { 'name': 'battlesLastReset', 'type': 'uint32' } ],
      'indexed': false,
      'name': 'part',
      'type': 'tuple'
    } ],
    'name': 'Forge',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': false, 'name': 'newContract', 'type': 'address' } ],
    'name': 'ContractUpgrade',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': false, 'name': 'paused', 'type': 'bool' } ],
    'name': 'SetPaused',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [ { 'indexed': true, 'name': 'previousOwner', 'type': 'address' }, {
      'indexed': true,
      'name': 'newOwner',
      'type': 'address'
    } ],
    'name': 'OwnershipTransferred',
    'type': 'event'
  } ];
