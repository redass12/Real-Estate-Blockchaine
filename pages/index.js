import React, { Component } from "react";
import RealEstate from "../ethereum/RealEstate";
import { Card, Button, Grid } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";
import web3 from "../ethereum/web3";
class RealEstateIndex extends Component {
  state = {
    owner: "",
  };
  static async getInitialProps() {
    const tokenCount = await RealEstate.methods.indexx().call();
    const tokens = await Promise.all(
      Array(parseInt(tokenCount))
        .fill()
        .map((element, index) => {
          return RealEstate.methods.indexToToken(index).call();
        })
    );

    return { tokens };
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const owner = accounts[0];

    this.setState({ owner: owner });
  }

  renderTokens() {
    const tokens = this.props.tokens.map((item, index) => {
      return {
        image: `https://ipfs.io/ipfs/${item.image}`,
        header: `${item.name} add: ${item.owner.slice(0, 5)}`,
        meta: item.adress,
        extra: (
          <div>
            <a class="ui tag label">{item.price} Wei</a>
            {item.inSell ? (
              <a class="ui teal tag label">In Sell</a>
            ) : (
              <a class="ui red tag label">Not In sell Yet</a>
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
      <Layout owner={this.state.owner}>
        <div>{this.renderTokens()}</div>
      </Layout>
    );
  }
}

export default RealEstateIndex;
