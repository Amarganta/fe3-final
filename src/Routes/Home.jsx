import { useContext } from "react";
import Card from "../Components/Card";
import DentistsContex from "../Context/DentistsContext";

const Home = () => {
  const dentists = useContext(DentistsContex);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentists &&
          dentists.map((item) => (
            <Card name={item.name} username={item.username} id={item.id} />
          ))}
      </div>
    </>
  );
};

export default Home;
