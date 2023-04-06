import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import styles from "../Styles/Card.module.css";
import { useLocation } from "react-router-dom";
const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(GlobalContext);
  const location = useLocation();
  console.log(location.pathname);

  const handleClickGuardar = () => {
    dispatch({ type: "add_item", payload: { id, name, username } });
  };

  const handleClickEliminar = () => {
    dispatch({ type: "remove_item", payload: { id } });
  };

  return (
    <>
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <h5 className={`card-title ${styles.title}`}>
            {name} | {username}
          </h5>
          {location.pathname === "/Fav" ? (
            <button onClick={handleClickGuardar}>Guardar</button>
          ) : (
            <button onClick={handleClickEliminar}>Eliminar</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
