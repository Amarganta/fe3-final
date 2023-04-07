import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DentistsContex from "./Context/DentistsContext";
import { GlobalContext } from "./Context/GlobalContext";

function App() {
  const [dentists, setDentists] = useState();
  const { state } = useContext(GlobalContext);

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data);
  };

  useEffect(() => {
    getDentists();
  }, []);

  return (
    <>
      <div className={state?.theme === "light" ? "app light" : "app dark"}>
        <Navbar />
        <main>
          <DentistsContex.Provider value={dentists}>
            <Outlet />
            <div className="info">
              <h1>Trabajo Final</h1>
              <p>Este trabajo pertence a:</p>
              <h3>Victoria Peluffo</h3>
              <h3>Amaranta González</h3>
              <p>
                Es la entrega final de Frontend III <br /> materia que pertenece
                al ciclo de estudio de la carrera <br /> Certified Web Developer
                de Digital House
              </p>
            </div>
          </DentistsContex.Provider>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
