import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState(true);
  const HandleLogin = () => {
    setLogin(!login);
  };
  return (
    <div className="nav-list">
      <div>
        <a href="/">
          <img
            src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
            alt="logo"
            className="logo"
          />
        </a>
      </div>
      <div>
        <ul className="nav-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>Contact</li>
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
