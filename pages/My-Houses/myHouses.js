import React, { Component } from "react";
import { Card, Button, Image, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import RealEstate from "../../ethereum/RealEstate";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";
import Hoc from "../../components/Hoc";

class myHouses extends Component {
  state = {
    loadingInSell: false,
    loadingNotSell: false,
  };
  static async getInitialProps(props) {
    // const owner = props.query.address;
    let owner;
    if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
      owner = ethereum.selectedAddress;
    }
    const numberOfTokens = await RealEstate.methods
      .getNoOfTokenByOwner(owner)
      .call();
    const tokens = await Promise.all(
      Array(parseInt(numberOfTokens))
        .fill()
        .map((element, index) => {
          return RealEstate.methods.getTokenByOwner(owner, index).call();
        })
    );
    return { tokens, owner };
  }
  renderTokens = () => {
    console.log("Non filtred array filtred Array ", this.props.tokens);
    //https://ipfs.io/ipfs/0x22059D87851EE41A824FEa59A4336E444679E37a

    const tokens = this.props.tokens.map((item, index) => {
      return item[3] !== "" ? (
        <Card>
          <Image src={`https://ipfs.io/ipfs/${item[3]}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{item[1]}</Card.Header>
            <Card.Meta>
              <span className="date">{item[2]}</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
            <Card.Content extra>
              <Button
                color="teal"
                disabled={item[4]}
                loading={this.state.loadingInSell}
                onClick={this.sellToken.bind(null, index, item[5], item[0])}
              >
                Put In Sell
              </Button>
              <Button
                color="red"
                disabled={!item[4]}
                loading={this.state.loadingNotSell}
                onClick={this.stopSellToken.bind(null, index, item[5], item[0])}
              >
                Stop In Sell
              </Button>
            </Card.Content>
          </Card.Content>
        </Card>
      ) : null;
    });
    return tokens;
  };

  sellToken = async (index, id1, id2) => {
    console.log(index, id1, id2);
    this.setState({ loadingInSell: true });
    try {
      await RealEstate.methods
        .putTokenInSell(index, parseInt(id1, 10), parseInt(id2, 10))
        .send({ from: this.props.owner });
    } catch (err) {
      console.log(err);
    }
    this.setState({ loadingInSell: false });
  };

  stopSellToken = async (index, id1, id2) => {
    console.log(index, id1, id2);
    this.setState({ loadingNotSell: true });
    try {
      console.log("fasdfsadf");

      const accounts = await web3.eth.getAccounts();
      await RealEstate.methods
        .stopSellToken(index, parseInt(id1, 10), parseInt(id2, 10))
        .send({ from: this.props.owner });
    } catch (err) {
      console.log(err);
    }
    this.setState({ loadingNotSell: false });
  };

  render() {
    console.log("reda");
    return (
      <Layout owner={this.props.owner}>
        <div>
          <h3>My Homes </h3>
          <Card.Group>{this.renderTokens()}</Card.Group>
        </div>
      </Layout>
    );
  }
}
export default Hoc(myHouses);
