import React from 'react';
import { useSelector } from 'react-redux';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import Currency from '../components/Currency';

export default function Home() {
  const data = useSelector((state) => state.currencies);

  return (
    <>
      <header className="App-header">
        <nav>
          <div>
            <h3>2023</h3>
          </div>
          <h4>Crypto Analyzer</h4>
          <div className="icons-container">
            <FaMicrophone />
            <FaCog />
          </div>
        </nav>
      </header>
      <section>
        <h1>Welcome to the world of crypto</h1>
        <p>
          Browse through your favourite cryptos and find the best one for you
        </p>
        <h2>What is a Crypto?</h2>
        <p>
          Cryptocurrency, sometimes called crypto-currency or crypto, is any
          form of currency that exists digitally or virtually and uses
          cryptography to secure transactions. Cryptocurrencies do not have a
          central issuing or regulating authority, instead using a decentralized
          system to record transactions and issue new units.
        </p>
      </section>
      <div className="currencies">
        {data.map((currency) => {
          if (currency.rank % 4 === 1 || currency.rank % 4 === 0) {
            return (
              <Currency key={currency.rank} currency={currency} bg="bg1" />
            );
          }
          return <Currency key={currency.rank} currency={currency} bg="bg2" />;
        })}
      </div>
    </>
  );
}
