import React from "react";

const HOC = function (Child) {
  return class Higher extends React.Component {
    static getInitialProps(ctx) {
      return Child.getInitialProps(ctx);
    }

    render() {
      console.log("render");
      let display = null;
      if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
        display = <Child {...this.props} />;
      } else {
        console.log(
          "we are on the client side maybe and metamask is not defined"
        );
        display = <p>Please install a Wallter in order to use this Dapp</p>;
      }
      return <div>{display}</div>;
    }
  };
};

export default HOC;
