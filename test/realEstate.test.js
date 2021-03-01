const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledRealEstate = require("../ethereum/build/RealEstate.json");

let accounts;
let realEstate;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  realEstate = await new web3.eth.Contract(
    JSON.parse(compiledRealEstate.interface)
  )
    .deploy({ data: compiledRealEstate.bytecode })
    .send({ from: accounts[0], gas: "3000000" });

  await realEstate.methods
    .createToken(
      1,
      "Appartement 1",
      "509 Smoky Hollow StPearl, MS 39208",
      9999999
    )
    .send({ from: accounts[0], gas: "3000000" });
});

describe("Real Estate Contract", () => {
  it("deploys the contract", () => {
    assert.ok(realEstate.options.address);
  });

  it("can get a specifique token", async () => {
    const token = await realEstate.methods.tokens(0).call();
    console.log(token);
  });

  it("put token to sell by the token owner", async () => {
    try {
      await realEstate.methods.putTokenInSell(1).send({ from: accounts[0] });
      console.log("yeayyyy");
    } catch (err) {
      console.log("rerwrqr", err);
      assert.fail();
    }
  });

  it("User can buy a token that already put in sell", async () => {
    const TokenOwner = await realEstate.methods.OwnerToIsTokenOwner(1).call();
    await realEstate.methods.putTokenInSell(1).send({ from: accounts[0] });
    await realEstate.methods
      .BuyToken(accounts[0], 1)
      .send({ from: accounts[1], value: "9999999", gas: "1000000" });
    const isInSell = await realEstate.methods.tokenIdToInsell(1).call();

    console.log("Token Owner : ", TokenOwner);
    console.log("is in sell ? ", isInSell);

    assert.strictEqual(TokenOwner, accounts[0]);
  });

  it("get token by owner address and token index", async () => {
    await realEstate.methods
      .createToken(
        1,
        "Appartement 1",
        "509 Smoky Hollow StPearl, MS 39208",
        9999999
      )
      .send({ from: accounts[0], gas: "3000000" });

    const token = await realEstate.methods.getLand(accounts[0], 1).call();

    console.log("afasfasf", token);
  });
});
