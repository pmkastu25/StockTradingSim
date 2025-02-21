import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/homeHero.png" alt="Hero IMAGE" className="mb-3" />
        <h1
          className="mt-5"
          style={{ fontSize: "3rem", lineHeight: "1.25", fontWeight: "500" }}
        >
          Invest in everything
        </h1>
        <p style={{ fontSize: "1.25rem", fontWeight: "400" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <form action="/signup">
          <button
            className="mt-4 p-2 btn btn-primary fs-5"
            style={{ width: "200px", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
