import { useEffect } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "../Styles/DetailCard.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DetailCard = () => {
  const [dentist, setDentist] = useState([]);
  const params = useParams();

  const getDentists = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await res.json();
    setDentist(data);
  };

  useEffect(() => {
    getDentists();
  }, []);
  console.log(dentist);
  return (
    //As instruções que estão com {''} precisam ser
    //substituídas com as informações que vem da api
    <>
      <h1>Detail about Dentist {dentist.name} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`card-body row`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Name: {dentist.name}</li>
              <li className="list-group-item">Username: {dentist.email}</li>
              <li className="list-group-item">Username: {dentist.phone}</li>
              <li className="list-group-item">Username: {dentist.website}</li>
            </ul>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
