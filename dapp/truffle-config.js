const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = '13eb2f7a24d048379237d1a85912203c';
const mnemonic = 'poesía azote litro minero alma poder negocio capaz dueño secta ocurrir ochenta';


module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // matching any id
    }
  }
};
