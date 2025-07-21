// import React from "react";

function RightSection({
  productName,
  productDescription,
  extLink,
  LinkName,
  productImg,
}) {
  return (
    <div className="container mt-5">
      <div className="row" style={{ alignItems:"center", justifyContent:"center", display:"flex" }}>
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={extLink}>
            {LinkName} <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={productImg} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
