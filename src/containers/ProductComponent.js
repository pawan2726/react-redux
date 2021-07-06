import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductDetail from "./ProductDetail";

const ProductComponent = (props) => {
  const products = useSelector((state) => state.reducer.products);
  const [showDetail, setShowDetail] = useState(false);
  const [prodName, setProdName] = useState();
  const setProducts = (name) => {
    setProdName(name);
    console.log(name);
    if (name != prodName) {
      setShowDetail(true);
    } else {
      setShowDetail(false);
    }
  };
  const list = products.map((product) => {
    return (
      <li className="four column wide width" key={product.id}>
        <div className="ui link cards link">
          <div className="card">
            <div
              className="content"
              onClick={() => setProducts(product?.attributes?.name)}
            >
              <div className="header">{product?.attributes?.name}</div>
              <div className="header">{product?.id}</div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="flex">
      <div>
        <div>Control Section</div>
        <ul>{list}</ul>
      </div>
      <div className="card p-l">
        <div>Result Section</div>
        {showDetail && <ProductDetail name={prodName} />}
      </div>
    </div>
  );
};

export default ProductComponent;
