import { useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [login, setLogin] = useState(true);
  const HandleLogin = () => {
    setLogin(!login);
  };
  return (
    <div className="nav-list">
      <div>
        <Link to="/">
          <img
            src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
            alt="logo"
            className="logo"
          />
        </Link>
      </div>
      <div>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button onClick={HandleLogin}>{login ? "Login" : "Logout"}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
