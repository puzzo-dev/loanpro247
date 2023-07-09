import React from "react";

function Header() {
  return (
    <nav className="navbar r-all">
      <div className="container">
        <div className="logo mx-auto" style={{ maxWidth: 220 + "px" }}>
          <span
            id="logo"
            style={{
              display: "block",
              minWidth: 150 + "px",
              height: 65 + "px",
            }}
          >
            <object
              title="SVG icon for pleasant user experience"
              type="image/svg+xml"
              role="presentation"
              data="https://imgcmn.s3.us-west-2.amazonaws.com/funnel/v1/svg/logo-247loanpros-slow.svg"
            ></object>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
