import React from "react";
import imageproductive from "../images/illustration-stay-productive.png";
function Products() {
  return (
    <div className="productive-container">
      <div className="productive container">
        <div className="productive-img">
          <img src={imageproductive} alt={imageproductive} />
        </div>
        <div className="productive-txt">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="#">See how Fylo works</a>
        </div>
      </div>
    </div>
  );
}

export default Products;
