import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/cart/selectors";
import logoSvg from "../assets/img/pizza-logo.svg";
import cart from "../assets/img/cart.svg";
import { Search } from "./search/search";

export const Header = (): JSX.Element => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = React.useRef(false);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/vincento-pizza">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>Vincento Pizza</h1>
              <p>we have the best pizza in the city</p>
            </div>
          </div>
        </Link>
        {location.pathname !== "/vincento-pizza/cart" && <Search />}
        <div className="header__cart">
          {location.pathname !== "/vincento-pizza/cart" && (
            <Link to="/vincento-pizza/cart" className="button button--cart">
              <span>{totalPrice} грн.</span>
              <div className="button__delimiter"></div>
              <img src={cart} alt="Pizza logo" />
              <span>{totalCount}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
