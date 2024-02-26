# Smart Contract Project with Factory Deployment

## Overview

This project showcases a smart contract developed using Solidity and Hardhat. It includes a main smart contract that performs a specific functionality, and a Factory contract to deploy instances of the main contract. Additionally, a Hardhat script is used to interact with a write function in the main contract. The project is deployed to a testnet (Sepolia or Mumbai) for testing purposes.

## Features

- **Main Smart Contract**: Implements a specific functionality.
- **Factory Contract**: Deploys instances of the main smart contract.
- **Hardhat Script**: Interacts with a write function in the main contract.
- **Deployment on Testnet**: Deployed to Sepolia or Mumbai testnet for testing.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- Hardhat
- Ethereum wallet (e.g., MetaMask)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install dependencies:

   ```bash
   cd your-repo
   npm install
   ```

### Usage

1. Compile contracts:

   ```bash
   npx hardhat compile
   ```

2. Deploy contracts to a testnet:

   ```bash
   npx hardhat run scripts/deploy.js --network testnet
   ```

3. Run the Hardhat script to interact with the main contract:

   ```bash
   npx hardhat run scripts/interact.js --network testnet
   ```

4. View the transaction hash printed in the console and copy it.

## Screenshots

Screenshots are in the screenshot folder

## Transaction Hash

Paste the transaction hash from your Hardhat script interaction here:

Transaction Hashe: [0x88e392edf74289290b348035928652fb6d1231fb1eb845909f7d265bccf060f9]
Transaction Hashe: [0xad59a28ec1a78977b2fcf0af0f188b31ac232f005b4c0435b1c74b69365eb94b]
Transaction Hashe: [0xec0f9602d54269b92f88de9fd47b7bb266a339e7be6b871e82b6c1b2343b01f1]

## Authors

- Emmanuel Omemgboji
- Contact: [Emmanuel Omemgboji](mailto:emmanuelomemgboji@gmail.com)

## License

This project is licensed under the [LICENSE](LICENSE) License.

