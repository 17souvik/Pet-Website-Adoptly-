import React, { useState, useEffect } from "react";
import AllData from "../Data/Data";
import { NavLink } from "react-router-dom";
import './Home.css';

export default function AnimalList() {
    const [speficAnimal, setSpeficAnimal] = useState([]);

    useEffect(() => {
        const Data = AllData();

        // Define the categories you want to display
        const categories = ["Dog", "Cat", "Rabbit", "Bird", "Tiger", "Lion"];
        
        // Get the first animal from each category
        const uniqueAnimals = categories.map(category =>
            Data.find(animal => animal.category === category)
        );

        setSpeficAnimal(uniqueAnimals);
    }, []);

    return (
        <div>
            {speficAnimal.length > 0 && (
                <div className="animal">
                    {/* Display cards for each unique animal */}
                    {speficAnimal.map((animal, idx) =>
                        animal ? (
                            <NavLink key={idx} to={`/adoptly/${animal.category}`}>
                                <div className="animal_card">
                                    <img src={animal.image} alt={animal.breed} />
                                    <i>{animal.breed}</i>
                                    <p>{animal.place}</p>
                                </div>
                            </NavLink>
                        ) : null
                    )}
                </div>
            )}
        </div>
    );
}
