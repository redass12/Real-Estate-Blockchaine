import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = (props) => {
  const withdrawRoute = props.isContractOwner ? (
    <Link route={"/withdraw"}>
      <a className="item">withdraw</a>
    </Link>
  ) : null;
  return (
    <Menu color="grey">
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
        {withdrawRoute}
        <Link route="/House/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
