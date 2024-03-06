import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

export const CartEmpty = (): JSX.Element => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Ви нічого не замовили.
      <br />
      Щоб зробити замовлення, перейдіть на готовну сторінку.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/vincento-pizza" className="button button--black">
      <span>Назад</span>
    </Link>
  </div>
);
