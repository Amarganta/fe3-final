import { Link } from "react-router-dom";
import styles from "../Styles/Card.module.css";

const Card = ({ name, username, id }) => {
  return (
    <>
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <Link to={`/detail/${id}`}>
            <h5 className={`card-title ${styles.title}`}>
              {name} | {username}
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
