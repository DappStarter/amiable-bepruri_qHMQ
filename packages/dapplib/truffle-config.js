require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note maze puppy include process olympic gather'; 
let testAccounts = [
"0x1e135ee6fe117b05160d47a448337d9b32ef216de90022907dfbf3e7635880f9",
"0x3aa893f858d5c84fe80cfa6db6ce27ead5e3ca50e38d53a71e6875bdde308b53",
"0x698ba76811893205c450500f1b8a90f72fa91cf38ca684b709940dceeba90889",
"0xd09885a32d263b2400aa0539100c4ffd243442dd542f1fd3970852f7a45519d9",
"0x7bafcc29980215da782dc43fe997b440101d8c4c1b06f7911c915806486c31d0",
"0x3ee97fa7b18472fe555db8b6efd475309559f5d797c3e0ec3fd6d39785ddbcf9",
"0xe47e861d84626d025c8aa86e8ef3192379ccd1e42eeafcf3cf3b371b702d9313",
"0x122123c8edc74881da085656b3c8be15028761248536af60897f03d2bb68eb11",
"0x3d65197d8cdfe5e73acb6914afce78011bc5fa45d2dce3006ff4963ec12fd118",
"0x0f04e06a9cb8a373461e2e513b3c739455bba620921a4f09c2e4809dedbc38e6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

