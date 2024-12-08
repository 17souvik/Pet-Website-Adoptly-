import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AllData from "../Data/Data";
import './ShowPage.css';

export default function ShowPage() {
    const { category } = useParams(); 
    const [filteredAnimals, setFilteredAnimals] = useState([]);

    useEffect(() => {
        const Data = AllData();
        const animals = Data.filter(animal => animal.category === category);
        setFilteredAnimals(animals);
    }, [category]);

    return (
        <div className="showpage-container">
            <h1 className="category-title">Animals in {category} Category</h1>
            <div className="animal-card-container-show">
                {filteredAnimals.length > 0 ? (
                    filteredAnimals.map((animal, idx) => (
                        <NavLink key={idx} to={`/adoptly/${animal.category.toLowerCase()}/${animal.id}`} className="animal-card-link">
                            <div className="animal-card-show">
                                <img src={animal.image} alt={animal.breed} className="animal-image"/>
                                <div className="animal-details">
                                    <h3 className="brid">{animal.breed}</h3>
                                    <p className="age">Age: {animal.age}</p>
                                    <p className="place">Place: {animal.place}</p>
                                    <p className="price">Price: {animal.price}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))
                ) : (
                    <p>No animals found in this category.</p>
                )}
            </div>
        </div>
    );
}
