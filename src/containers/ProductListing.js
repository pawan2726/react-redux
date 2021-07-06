import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts, setProviders} from '../redux/actions/commonActions';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  //console.log(products);
  const fetchProducts = async () => {
    const response = await axios
      .get(
        "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services"
      )
      .catch((err) => {
        console.log(err);
      });
    console.log("response");
    dispatch(setProducts(response?.data?.data));
  };

  const fetchProviders = async () => {
    const response = await axios
      .get(
        "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=1000"
      )
      .catch((err) => {
        console.log(err);
      });
    console.log("response");
    dispatch(setProviders(response?.data?.data));
  };

  useEffect(() => {
    fetchProducts();
    fetchProviders();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
