import React, { Component } from "react";
import Layout from "../../components/Layout";
import {
  Form,
  Input,
  Button,
  Segment,
  Message,
  Checkbox,
} from "semantic-ui-react";
import RealEstate from "../../ethereum/RealEstate";
import web3 from "../../ethereum/web3";
import nextId from "react-id-generator";
import ipfs from "../../ethereum/ipfs";
import { Router } from "../../routes";
import Hoc from "../../components/Hoc";
class New extends Component {
  static async getInitialProps() {
    return {};
  }

  id = nextId();
  state = {
    name: "",
    address: "",
    price: "",
    image: "",
    buffer: null,
    id: Date.now(),
    loading: false,
    inSell: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    ipfs.files.add(this.state.buffer, async (error, result) => {
      this.setState({ loading: true });
      if (error) {
        console.log("this is the erre:1 ", error);
        return;
      }
      try {
        this.setState({ image: result[0].hash });
        const accounts = await web3.eth.getAccounts();

        await RealEstate.methods
          .createToken(
            this.state.id,
            this.state.name,
            this.state.address,
            this.state.price,
            this.state.image,
            this.state.inSell
          )
          .send({ from: accounts[0] });

        Router.pushRoute("/");
      } catch (err) {
        console.log("errror");
      }
      this.setState({ loading: false });
    });
  };

  captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
    };
  };

  inSellHandler = (event, { checked }) => {
    this.setState({ inSell: checked });
  };

  render() {
    console.log("inSell", this.state.inSell);
    return (
      <Layout>
        <div>
          <h3>Create a new Home</h3>
          <Segment inverted>
            <Form
              inverted
              onSubmit={this.onSubmit}
              loading={this.state.loading}
            >
              <Form.Field>
                <Input
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(event) =>
                    this.setState({ name: event.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>House Price</label>
                <Input
                  label="wei"
                  labelPosition="right"
                  placeholder="House Price"
                  value={this.state.price}
                  onChange={(event) =>
                    this.setState({ price: event.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>House Address</label>
                <Input
                  placeholder="House Address"
                  value={this.state.address}
                  onChange={(event) =>
                    this.setState({ address: event.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Upload Image</label>
                <Input type="file" onChange={this.captureFile} />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="Put it in Sell"
                  name="inSell"
                  checked={this.state.inSell}
                  onChange={this.inSellHandler}
                />
              </Form.Field>
              <Message error header="Oops!" content="sfsdf" />
              <Button primary>Create!</Button>
            </Form>
          </Segment>
        </div>
      </Layout>
    );
  }
}

export default Hoc(New);
