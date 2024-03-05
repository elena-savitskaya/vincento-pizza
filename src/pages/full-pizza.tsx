import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza = (): JSX.Element => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://640b3f3465d3a01f981564e8.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Сталася помилка під час отримання даних!");
        navigate("/vincento-pizza");
      }
    }

    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <div className="full">
        <img src={pizza.imageUrl} alt={pizza.title} />
        <h2>{pizza.title}</h2>
        <h4>{pizza.price} грн.</h4>
        <Link to="/vincento-pizza">
          <button className="button button--outline button--add">
            <span>Назад</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FullPizza;
