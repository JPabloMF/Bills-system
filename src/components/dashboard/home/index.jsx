import { useState, useEffect } from "react";
import Cards from "./Cards";
import "../../../style/Home.css";
import TableBills from "./TableBills";

function Home() {
  // Almacenar la data que viene del backend aqui en un estado
  const [data, setData] = useState();

  useEffect(() => {
    // Hacer el fetch de la data del backend aqui
    fetch("https://data-bills-system-production.up.railway.app/home")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      {data ? (
        <>
          <Cards cardData={data} />
          <TableBills tableData={data} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Home;
