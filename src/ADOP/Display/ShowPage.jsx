import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AllData from "../Data/Data";
// import './ShowPage.css';

export default function ShowPage() {
    const { category } = useParams(); 
    const [filteredAnimals, setFilteredAnimals] = useState([]);

    useEffect(() => {
        const Data = AllData();
        const animals = Data.filter(animal => animal.category === category);
        setFilteredAnimals(animals);
    }, [category]);

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Logo with image */}
                    <NavLink to="/" className="navbar-logo">
                        <img src="/logo.png" alt="Adoptly Logo" className="navbar-logo-image" />
                    </NavLink>
                    <ul className="navbar-menu">
                        <li><NavLink to="/category/dogs" className="navbar-link">Dogs</NavLink></li>
                        <li><NavLink to="/category/cats" className="navbar-link">Cats</NavLink></li>
                        <li><NavLink to="/category/birds" className="navbar-link">Birds</NavLink></li>
                        <li><NavLink to="/category/others" className="navbar-link">Others</NavLink></li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <div>
                <h1>Animals in {category} Category</h1>
                <div className="animal-card-container">
                    {filteredAnimals.length > 0 ? (
                        filteredAnimals.map((animal, idx) => (
                            <NavLink key={idx} to={`/adoptly/${animal.category.toLowerCase()}/${animal.id}`}>
                                <div className="animal-card">
                                    <img src={animal.image} alt={animal.breed} />
                                    <h3>{animal.breed}</h3>
                                    <p>Age: {animal.age}</p>
                                    <p>Place: {animal.place}</p>
                                    <p>Price: {animal.price}</p>
                                </div>
                            </NavLink>
                        ))
                    ) : (
                        <p>Sorry, no animals found in this category.</p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Adoptly. All rights reserved.</p>
                <ul className="footer-links">
                    <li><NavLink to="/terms" className="footer-link">Terms & Conditions</NavLink></li>
                    <li><NavLink to="/privacy" className="footer-link">Privacy Policy</NavLink></li>
                </ul>
            </footer>
        </div>
    );
}
