import React, { useState, useEffect } from "react";
import "../css/Inicio.css";

function Count() {
  const [totalBreeds, setTotalBreeds] = useState(0);
  const [totalSubBreeds, setTotalSubBreeds] = useState(0);

  //Aca contamos las razas y sub razas que tiene la API.
  useEffect(() => {
    const fetchBreedsCount = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message);
        const subBreeds = breeds.reduce((total, breed) => {
          if (data.message[breed].length > 0) {
            return total + data.message[breed].length;
          } else {
            return total;
          }
        }, 0);
        setTotalBreeds(breeds.length);
        setTotalSubBreeds(subBreeds);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };

    fetchBreedsCount();
  }, []);

  return (
    <div>
      <div className="Total">
        <h2>Numero Total de Razas: {totalBreeds}</h2>
        <h2>Numero Total de Sub-Razas: {totalSubBreeds}</h2>
      </div>
    </div>
  );
}

export default Count;
