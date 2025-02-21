import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-5">
          <img src="\media\zerodhaFundhouse.png" className="LogoImg" />
          <p className="text-small text-muted p-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="\media\sensibullLogo.svg" className="LogoImg" />
          <p className="text-small text-muted p-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="\media\goldenpiLogo.png" className="LogoImg" />
          <p className="text-small text-muted p-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 mt-5 mb-4">
          <img src="\media\streakLogo.png" className="LogoImg" />
          <p className="text-small text-muted p-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5 mb-4">
          <img src="\media\smallcaseLogo.png" className="LogoImg" />
          <p className="text-small text-muted p-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5 mb-4">
          <img src="\media\dittoLogo.png" className="LogoImg" />
          <p className="text-small text-muted p-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <form action="./signup">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "200px", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </form>
      </div>
    </div>
  );
}

export default Universe;
