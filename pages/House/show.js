import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Grid, Image, Icon, Button, Message } from "semantic-ui-react";
import RealEstate from "../../ethereum/RealEstate";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import Hoc from "../../components/Hoc";
class Show extends Component {
  static async getInitialProps(props) {
    const index = props.query.index;

    const token = await RealEstate.methods
      .indexToToken(props.query.index)
      .call();

    const { id, name, adress, price, owner, image, inSell } = token;

    let isTokenOwner = false;

    const accounts = await web3.eth.getAccounts();

    if (accounts[0] === token.owner) {
      isTokenOwner = true;
    }

    return {
      id,
      name,
      adress,
      price,
      owner,
      image,
      isTokenOwner,
      index,
      inSell,
    };
  }

  state = {
    disabled: false,
    isTokenOwner: this.props.isTokenOwner,
    inSell: this.props.inSell,
    loading: false,
  };

  buyToken = async () => {
    this.setState({ loading: true });
    try {
      const accounts = await web3.eth.getAccounts();
      await RealEstate.methods
        .BuyToken(this.props.owner, this.props.id, this.props.index)
        .send({
          from: accounts[0],
          value: this.props.price.toString(),
        });
    } catch (err) {
      console.log(err);
    }
    this.setState({ loading: false });

    Router.push("/");
  };

  componentDidMount() {
    if (this.state.isTokenOwner || !this.state.inSell) {
      this.setState({ disabled: true });
    }
  }

  render() {
    console.log("isOwner , inSell", this.state.isTokenOwner, this.state.inSell);
    const inSellMsg = !this.state.inSell ? (
      <Message warning header="This house is not for sell" content="" />
    ) : null;
    const isTokenOwnerMsg = this.state.isTokenOwner ? (
      <Message warning header="You can not Buy your own house" />
    ) : null;

    return (
      <Layout>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={`https://ipfs.io/ipfs/${this.props.image}`} />
            </Grid.Column>
            <Grid.Column width={11}>
              <h3>{this.props.name}</h3>
              <p>
                <Icon name="home" />
                Addres : {this.props.adress}
              </p>
              <p>
                <Icon name="ethereum" />
                Prix : {this.props.price} Wei
              </p>
              {inSellMsg}
              {isTokenOwnerMsg}
              <Button
                loading={this.state.loading}
                color="teal"
                icon="cart"
                disabled={this.state.disabled}
                label={{
                  as: "a",
                  basic: true,
                  content: "Buy Now",
                  color: "teal",
                }}
                labelPosition="right"
                onClick={this.buyToken}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default Show;
