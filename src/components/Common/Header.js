import React from "react";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <header className="kpmg-header fixed-top">
      <section style={{ float: "left" }}>
        <span>
          <img
            src={logo}
            alt="KPMG"
            style={{ width: "120px", height: "40px" }}
          />
        </span>
      </section>
      <section
        style={{
          fontFamily: "lotto",
          fontSize: "1.84rem",
          color: "white",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "70%",
        }}
      >
        <span>MVP- Extended Public Key</span>
      </section>
    </header>
  );
};

export default Header;
