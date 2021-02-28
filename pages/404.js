import React from "react";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

function FourOhFour() {
  const Imgstyle = {
    display: "block",
    width: "80%",
  };
  const containerSytle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  console.log(Button);
  return (
    <Layout>
      <div style={containerSytle}>
        <img style={Imgstyle} src="/13.png" size="small" fluid />
        <Link route="/">
          <Button style={{ width: "200px" }} secondary>
            Go Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}

export default FourOhFour;
