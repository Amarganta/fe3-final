import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import styles from "../Styles/Card.module.css";

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(GlobalContext);

  const handleClick = () => {
    // Aquí se envía el objeto al context para ser guardado en el local storage
    dispatch({ type: "add_item", payload: { id, name, username } });
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
          <button onClick={handleClick}>Guardar</button>
        </div>
      </div>
    </>
  );
};

export default Card;
