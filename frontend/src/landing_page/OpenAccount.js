// import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1
          className="mt-5 mb-4"
          style={{ fontSize: "3rem", lineHeight: "1.25", fontWeight: "500" }}
        >
          Open a Zerodha account
        </h1>
        <p style={{ fontSize: "1.25rem", fontWeight: "400" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
