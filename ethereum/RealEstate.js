import web3 from "./web3";
import RealEstate from "./build/RealEstate.json";

const instance = new web3.eth.Contract(
  JSON.parse(RealEstate.interface),
  "0x2E9Cff79442b5837Ff6FfE720D15161F2aa8bCf0"
);

export default instance;
