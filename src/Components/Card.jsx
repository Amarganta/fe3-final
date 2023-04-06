import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import styles from "../Styles/Card.module.css";
import { useLocation } from "react-router-dom";
const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const location = useLocation();

  const handleClickGuardar = () => {
    dispatch({ type: "add_item", payload: { id, name, username } });
  };

  const handleClickEliminar = () => {
    dispatch({ type: "remove_item", payload: { id, name, username } });
  };

  return (
    <>
      <div className={state.theme === "dark" ? "card bg-dark" : `card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <h5 className={`card-title ${styles.title}`}>
            {name} | {username}
          </h5>
          {location.pathname === "/home" ? (
            <button onClick={handleClickGuardar}>Save in Fav's</button>
          ) : (
            <button onClick={handleClickEliminar}>Delete from Fav's</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
