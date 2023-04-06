import React, { useContext } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../Context/GlobalContext";

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const { items } = state;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {items.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            username={item.username}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
