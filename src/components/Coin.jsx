import "./style.css";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";

const Coin = () => {
  const [coin, setCoin] = useState(null);
  const { name } = useParams();
  const fetchData = async () => {
    const res = await fetch(
      `https://api.coinstats.app/public/v1/coins/${name}?currency=INR`
    );
    setCoin(await res.json());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section>
      <Link to="/">
        <button className="btn-back">Back</button>
      </Link>
      {coin ? (
        <div className="coin-details">
          <img src={coin.coin.icon} alt="coin-icon" />
          <div className="content">
            <h2>
              <span>{coin.coin.name}</span>
            </h2>
            <h3>
              Rank:<span>{coin.coin.rank}</span>
            </h3>
            <h4>
              Symbol:<span>{coin.coin.symbol}</span>
            </h4>
            <h4>
              Price:<span>{coin.coin.price} INR</span>
            </h4>
            <h4>
              Volume:<span>{coin.coin.volume}</span>
            </h4>
            <h4>
              Volume:<span>{coin.coin.volume}</span>
            </h4>
            <h4>
              Circulating Supply:<span>{coin.coin.availableSupply}</span>
            </h4>
            <a href={coin.coin.websiteUrl} target="_blank" rel="noreferrer">
              Website
            </a>
            <a href={coin.coin.twitterUrl} target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default Coin;
