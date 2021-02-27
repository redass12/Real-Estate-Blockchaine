import web3 from "./web3";
import RealEstate from "./build/RealEstate.json";

const instance = new web3.eth.Contract(
  JSON.parse(RealEstate.interface),
  "0x2Ae841d3276D7f1D6e44f6169C7E96d8e5354BD7"
);

export default instance;
