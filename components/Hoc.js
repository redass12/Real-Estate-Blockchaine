import React from "react";
import { Link } from "../routes";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";

const HOC = function (Child) {
  return class Higher extends React.Component {
    static getInitialProps(ctx) {
      return Child.getInitialProps(ctx);
    }
    render() {
      let display = null;
      if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
        display = <Child {...this.props} />;
      } else {
        console.log(
          "we are on the client side maybe and metamask is not defined"
        );
        display = <p> Install metamask</p>;
      }
      return <div>{display}</div>;
    }
  };
};

export default HOC;
