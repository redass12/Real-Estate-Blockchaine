const HDWalletProider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledRealEstate = require("./build/RealEstate.json");

const provider = new HDWalletProider(
  "organ maid decorate venue cattle grant build letter castle frequent world swamp",
  "https://rinkeby.infura.io/v3/635d4cec77c14b168bf2e21595b861e9"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledRealEstate.interface)
  )
    .deploy({ data: compiledRealEstate.bytecode })
    .send({ gas: "3000000", from: accounts[0] });

  console.log("Contact deployed to ", result.options.address); //0x11e62599C6D4961350f051e7Bd0827283E087217
};

deploy();
