/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/products/productsSlice";
import { killToken } from "../features/session/sessionSlice";
import SearchBar from "../Components/UI/SearchBar"
import FoodCard from "../Components/Contents/FoodCard"
import Template from "./Template"

const ListProducts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  overflow: auto;
`;

function Home (){
  const dispatch = useDispatch();
  //const history = useHistory();
  const token = useSelector((state) => state.session.token);
  const products = useSelector((state) => state.products.items);
  console.log(products)
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
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && (
        <p>
          {error}{" "}
          <Link to="/login" onClick={(e) => dispatch(killToken())}>
            Try to login again
          </Link>
        </p>
      )}
      {status === "succeeded" && (
        <ListProducts>
        {products.map((product) =>{
          return(
            <FoodCard 
              key={product.id}
              name={product.name}
              price={product.price}
              img_url={product.picture_url}
          />)
        })}
        </ListProducts>
      )}
    </Template>
    );
}

export default Home;