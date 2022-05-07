import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Home = () => {
  const [crypto, setCrypto] = useState(null);
  const fetchData = async () => {
    const response = await fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=INR"
    );
    setCrypto(await response.json());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home">
      {crypto ? (
        <>
          <div className="table header">
            <h3>Name</h3>
            <h3>Price</h3>
            <h3>Market Cap</h3>
            <h3>Volume</h3>
          </div>
          {crypto.coins.map((currElem, i) => {
            return (
              <div className="table elements" key={i}>
                <span>
                  <Link
                    className="link"
                    to={`coin/${currElem.id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {currElem.name}
                  </Link>
                </span>
                <span>₹{currElem.price}</span>
                <span>{currElem.marketCap}</span>
                <span>{currElem.volume}</span>
              </div>
            );
          })}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
