import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ProductDetail = (props) => {
  const provd = useSelector((state) => state.reducer.providers);
  const [provdList, setShowProvider] = useState([]);
  console.log(provd);

  const filterProviders = async (name) => {
    let op = [];
    for (let i = 0; i < provd.length; i++) {
      if (provd[i].attributes.subspecialties.find((u) => u === name)) {
        op.push(provd[i]);
      }
    }
    setShowProvider(op);
  };

  useEffect(() => {
    filterProviders(props?.name);
  }, [props?.name]);

  const list = provdList.map((provd) => {
    return (
      <li className="four column wide width" key={provd.id}>
        <div className="ui link cards link">
          <div className="card">
            <div className="header">{provd?.attributes?.name}</div>
            <div className="header">{provd?.id}</div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <div className="header">{props.name}</div>
      <ul>{list}</ul>
    </div>
  );
};

export default ProductDetail;
