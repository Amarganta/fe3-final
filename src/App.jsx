import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DentistsContex from "./Context/DentistsContext";
import GlobalContextProvider, { GlobalContext } from "./Context/GlobalContext";

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
          </DentistsContex.Provider>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
