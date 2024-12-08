import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllData from "../ADOP/Data/Data";


export default function Animal() {
  const { category, id } = useParams();  
  const [animalDetails, setAnimalDetails] = useState(null);

  useEffect(() => {
    const Data = AllData();
    const animal = Data.find(animal => animal.id === parseInt(id) && animal.category.toLowerCase() === category.toLowerCase());
    setAnimalDetails(animal);
  }, [category, id]);

  return (
    <div>
      {animalDetails ? (
        <div className="animal-details">
          <img src={animalDetails.image} alt={animalDetails.breed} />
          <h3>{animalDetails.breed}</h3>
          <p>Age: {animalDetails.age}</p>
          <p>Place: {animalDetails.place}</p>
          <p>Price: {animalDetails.price}</p>
        </div>
      ) : (
        <p>Animal not found!</p>
      )}
    </div>
  );
}
