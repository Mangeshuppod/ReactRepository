import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Fav Food Here</h2>
        <p>
          Chose From Diverse Menu we have a variety of items to fulfill your
          cravings
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
