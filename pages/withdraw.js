import React, { Component } from "react";
import { Card, Button, Icon, Image } from "semantic-ui-react";
import Layout from "../components/Layout";
import RealEstate from "../ethereum/RealEstate";
import web3 from "../ethereum/web3";

class Withdraw extends Component {
  static async getInitialProps() {
    const balance = await RealEstate.methods.ContractBalance().call();

    return { balance };
  }

  withdrawHandler = async () => {
    try {
      let selectedAccount = "";
      if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
        selectedAccount = ethereum.selectedAddress;
      }
      await RealEstate.methods.withdraw().send({ from: selectedAccount });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Layout isContractOwner={true}>
        <div>
          <Card>
            <Card.Content>
              <Image floated="right">
                <Icon
                  styles={{ float: "right" }}
                  floated="right"
                  name="ethereum"
                  size="big"
                />
              </Image>
              <Card.Header>Your Wallet</Card.Header>
              <Card.Meta>Ethereum</Card.Meta>
              <Card.Description>
                <h3>{web3.utils.fromWei(this.props.balance, "ether")}</h3>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="yellow" onClick={this.withdrawHandler}>
                Withdraw
              </Button>
            </Card.Content>
          </Card>
        </div>
      </Layout>
    );
  }
}
export default Withdraw;
