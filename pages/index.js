import React, { Component } from "react";
import RealEstate from "../ethereum/RealEstate";
import { Card, Button, Grid } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";
import web3 from "../ethereum/web3";
import HOC from "../components/Hoc";
class RealEstateIndex extends Component {
  state = {
    owner: "",
    isContractOwner: false,
  };
  static async getInitialProps() {
    const tokenCount = await RealEstate.methods.indexx().call();
    const contractOwner = await RealEstate.methods.owner().call();
    const tokens = await Promise.all(
      Array(parseInt(tokenCount))
        .fill()
        .map((element, index) => {
          return RealEstate.methods.indexToToken(index).call();
        })
    );

    return { tokens, contractOwner };
  }

  getAccount = async () => {
    const accounts = await web3.eth.getAccounts();
    const owner = accounts[0];
    if (this.props.contractOwner === accounts[0]) {
      this.setState({ isContractOwner: true });
    } else {
      this.setState({ isContractOwner: false });
    }
    this.setState({ owner: owner });
  };

  componentDidMount() {
    if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
      ethereum.on("accountsChanged", (accounts) => {
        this.getAccount();
      });
    }
    this.getAccount();
  }

  renderTokens() {
    const tokens = this.props.tokens.map((item, index) => {
      return {
        image: `https://ipfs.io/ipfs/${item.image}`,
        header: `${item.name} add: ${item.owner.slice(0, 5)}`,
        meta: item.adress,
        extra: (
          <div>
            <a
              style={{ backgroundColor: "rgba(6,84,113,1", color: "#ffff" }}
              className="ui tag label"
            >
              {item.price} Wei
            </a>
            {item.inSell ? (
              <a className="ui teal tag label">In Sell</a>
            ) : (
              <a className="ui red tag label">Not In sell Yet</a>
            )}
          </div>
        ),
        description: (
          <Link route={`/House/${index}`}>
            <a>view Home</a>
          </Link>
        ),
      };
    });

    return <Card.Group items={tokens} />;
  }

  render() {
    console.log("tokens", this.props.tokens);
    console.log(this.state.owner);
    return (
      <Layout
        owner={this.state.owner}
        isContractOwner={this.state.isContractOwner}
      >
        <div>{this.renderTokens()}</div>
      </Layout>
    );
  }
}

export default HOC(RealEstateIndex);
