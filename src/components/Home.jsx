import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Home = () => {
  const [crypto, setCrypto] = useState(null);
  const fetchData = async () => {
    const response = await fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&currency=GBP"
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
          {crypto.coins.map((currElem, i) => {
            return (
              <div className="card" key={i}>
                <h3>
                  <Link
                    className="link"
                    to={`coin/${currElem.id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {currElem.name}
                  </Link>
                </h3>
                <h4>
                  Price:
                  <span> £{currElem.price}</span>
                </h4>
                <h4>
                  Market Cap:
                  <span> {currElem.marketCap}</span>
                </h4>
                <h4>
                  Volume:
                  <span> {currElem.volume}</span>
                </h4>
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
