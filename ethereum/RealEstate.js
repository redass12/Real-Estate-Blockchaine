import web3 from "./web3";
import RealEstate from "./build/RealEstate.json";

const instance = new web3.eth.Contract(
  JSON.parse(RealEstate.interface),
  "0x11e62599C6D4961350f051e7Bd0827283E087217"
);

export default instance;
