# Moralis NextJS NFT Gating Demo
This is a demo of a NextJS token gated website utilizing the blockchain, Metamask and CDC wallet. It allows users to access content based on ownership of a particular NFT.

Documentation is available at https://docs.moralis.io/docs/nextjs-nft-gated-website


## Table of Contents
Technologies Used
How to Use
Contributing
License

## Technologies Used
This demo uses the following technologies:

NextJS
Moralis
Ethereum Blockchain
Metamask
CDC wallet


## How to Use
To use this demo, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running npm install in the root directory.
3. Create a .env.local file and add your Moralis server URL and application ID as follows:

```
NEXT_PUBLIC_MORALIS_APPLICATION_ID=your_application_id
NEXT_PUBLIC_MORALIS_SERVER_URL=https://your_moralis_server_url.com/server
```

4. Create a new smart contract on the Ethereum blockchain and deploy it using a tool like Remix.
5. Mint a new NFT and transfer ownership to your Metamask wallet.
6. Add the NFT contract address and the specific NFT ID to the nfts.json file.
7. Run npm run dev to start the development server.
8. Access the website at http://localhost:3000 and connect your Metamask wallet.
9. If you own the NFT specified in the nfts.json file, you should be able to access the gated content.

## Contributing
If you find any errors or have any suggestions for improving this demo, feel free to open an issue or submit a pull request.


## License
This repository is licensed under the MIT License. See the LICENSE file for details.






