import React, { Component } from "react";
import RealEstate from "../ethereum/RealEstate";
import { Card, Button, Grid } from "semantic-ui-react";
import Layout from "../components/Layout";

class RealEstateIndex extends Component {
  static async getInitialProps() {
    const tokenCount = await RealEstate.methods.getTokensCount().call();

    const tokens = await Promise.all(
      Array(parseInt(tokenCount))
        .fill()
        .map((element, index) => {
          return RealEstate.methods.tokens(index).call();
        })
    );

    return { tokens };
  }

  renderTokens() {
    const tokens = this.props.tokens.map((item) => {
      return {
        image: "../static/house1.jpg",
        header: item.name,
        meta: item.address,
        description:
          "Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.",
      };
    });

    return <Card.Group items={tokens} />;
  }

  render() {
    console.log("tokens", this.props.tokens);
    return (
      <Layout>
        <div>{this.renderTokens()}</div>
      </Layout>
    );
  }
}

export default RealEstateIndex;
