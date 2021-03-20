/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/products/productsSlice";
import { killToken } from "../features/session/sessionSlice";
import SearchBar from "../Components/UI/SearchBar"
import Template from "./Template"


function Home (){
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.session.token);
  //const products = useSelector((state) => state.products.items);
  //const cartItems = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  if (status === "idle") {
    dispatch(fetchProducts(token));
  }

  if (!token) {
    return <Redirect to="/login" />;
  }

  return(
    <Template>
      <SearchBar placeholder="Search"/>
    </Template>
    );
}

export default Home;