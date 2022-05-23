import React from "react";
import { Link } from "react-router-dom";
import snickersImg from "./snickers.png";
import Message from "./Message";

const Snickers = () => {
  return (
    <div className="Snickers" style={{ backgroundImage: `url(${snickersImg})` }} >
      <Message>
        <h1>You're not you when you're hungry!</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
    </div>
  );
}

export default Snickers;