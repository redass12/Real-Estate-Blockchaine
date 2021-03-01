import React from "react";
import { Link } from "../routes";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";

const HOC = function (Child) {
  return class Higher extends React.Component {
    static getInitialProps(ctx) {
      if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
        return Child.getInitialProps(ctx);
      } else {
        return {};
      }
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
        display = (
          <Layout>
            <div
              style={{
                width: "100%",
                height: "90vh",
                backgroundColor: "rgba(0,0,0,.85)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h3 style={{ color: "white" }}>
                Please Create a Wallet{" "}
                <span>
                  <img
                    src="/wallet.svg"
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>{" "}
                in order to use this functionality.
              </h3>
              <Link route="/">
                <Button
                  style={{ width: "200px", marginTop: "50px" }}
                  color="orange"
                >
                  Go Home
                </Button>
              </Link>
            </div>
          </Layout>
        );
      }
      return <div>{display}</div>;
    }
  };
};

export default HOC;
