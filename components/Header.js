import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = (props) => {
  return (
    <Menu color="grey" style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">HouseBuy&Sell</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Home</a>
        </Link>

        <Link route={`/My-Houses/${props.owner}`}>
          <a className="item">My Houses</a>
        </Link>

        <Link route="/House/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
