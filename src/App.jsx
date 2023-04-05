import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DentistsContex from "./Context/DentistsContext";

function App() {
  const [dentists, setDentists] = useState();

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
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app light}`}>
        <Navbar />
        <main>
          <DentistsContex.Provider value={dentists}>
            <Outlet />
          </DentistsContex.Provider>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
