require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

    networks: {
        development: {
            host: "127.0.0.1",
            port: 9545,
            network_id: "*"
        },

        production: {
            provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, process.env.NODE_URL),
            network_id: "*",
            gasPrice: process.env.GAS_PRICE,
            timeoutBlocks: 5000
        }
    },

    mocha: {
        timeout: 100000
    },

    compilers: {
        solc: {
            version: "0.6.12",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    },

    db: {
        enabled: false
    }

};
