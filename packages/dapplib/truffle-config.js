require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net protect just enroll flip throw'; 
let testAccounts = [
"0x2a7ccf93f9a1cac4cd3ca5e2b7ebb0031d377469ae33933c835f3d47cc206b4f",
"0xe57b3ce5e0fab2c55b66997664e5844e4097ea18871a8caf456851d689131278",
"0x1ab3927176e14829890d187c300479c5b7fd9ab509c167139974fd43fc58b83b",
"0x0ca2a844ba5678447873bcdfdefc0dfb19bcf1cf25c39a4a5aa62c67ec343d67",
"0x784c3c9b7be2158f86bf33b1fc7735a046b001af7890f5c35e945e08a8d87326",
"0x9f0d211ed1e7fe0943f86357a16a779f74762d75d2ad89ee2212c8570103a274",
"0x992ac76dbe36635eec4ccc1e66c2ff379ec87ebb316a0ae28c2de475d90a4a62",
"0x1161fd23344e48685942f3a2aab2073f746104cb8861eaf10f408de902839342",
"0x8488916859883333afb8cca718e58b30a3e6171abb47cdd4331fbeac87eea655",
"0xd28381fdf5fd35b7751815a7983389142dd83ff25e734568e1baa38099320277"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

