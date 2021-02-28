import React from "react";
import { Menu, Icon } from "semantic-ui-react";
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
        <img
          style={{ cursor: "pointer" }}
          src="/logo.png"
          width="50px"
          height="50px"
        />
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
          <a
            style={{ backgroundColor: "rgb(252,179,50)", color: "#ffffff" }}
            className="item"
          >
            <Icon name="plus" size="small" />
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
