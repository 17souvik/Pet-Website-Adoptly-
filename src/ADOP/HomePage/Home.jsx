import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllData from "../Data/Data";
import './Home.css';

export default function AnimalList() {

    /*header js by souvik*/
    const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = [
    {
      title: "Meet Thumper",
      description:
        "Thumper is a four-month-old brown rabbit. He has been in the shelter for 3 months after being rescued by our team. He loves to hop around, munch on fresh greens, and enjoys gentle cuddles. Thumper is comfortable around other rabbits and makes a wonderful companion.",
      adoptText: "Adopt Thumper",
      fosterText: "Foster Thumper",
      image: "https://www.shutterstock.com/image-photo/cute-fluffy-rabbit-on-green-600nw-2205833403.jpg",
    },
    {
      title: "Meet Max",
      description:
        "Max is a two-year-old golden retriever. He is full of energy and loves fetch games. He is looking for a loving family!",
      adoptText: "Adopt Max",
      fosterText: "Foster Max",
      image: "https://www.carecredit.com/sites/cc/image/article_golden_retriever.jpg",
    },
    {
      title: "Meet Luna",
      description:
        "Luna is a calm and affectionate tabby cat. She enjoys lounging by the window and is great with kids.",
      adoptText: "Adopt Luna",
      fosterText: "Foster Luna",
      image: "https://fumipets.com/wp-content/uploads/2023/06/Types-of-Tabby-Cats.webp",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Automatically change slides every 4 seconds
 // Updated useEffect for cleaner interval management
useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 7000);

    return () => clearInterval(interval); // Cleanup to prevent memory leaks
}, [sliderData.length]);

// Improved slide transition
const changeSlide = (index) => {
    setCurrentSlide(index);
    document.querySelector('.hero').classList.add('slide-transition');
    setTimeout(() => document.querySelector('.hero').classList.remove('slide-transition'), 500); // Remove class after animation
};

    /*js by tamanna*/
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
        <>
            <div className="main_contener">
            <header className="header">
                <nav className="navbar">
                    <img className="logo" src="logo.png" />
                    <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#adopt">Adopt</a>
                        </li>
                        <li>
                            <a href="#donate">Donate</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <button className="login-btn">Sign in</button>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </div>
                </nav>

                <section
                    className={`hero slide-transition`}
                    style={{
                        backgroundImage: `url(${sliderData[currentSlide].image})`,
                
                        height: "100%", // Set desired height
                        width: "100%",

                        // marginTop: "220px",
                    }}
                >
                    <div className="hero-content">
                        <div className="hero">
                            <div className="card">
                                <div className="description">
                                    <h2>{sliderData[currentSlide].title}</h2>
                                    <p>{sliderData[currentSlide].description}</p>
                                    <div className="buttons">
                                        <button className="adopt-btn">{sliderData[currentSlide].adoptText}</button>
                                        <button className="foster-btn">{sliderData[currentSlide].fosterText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination">
                            {sliderData.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentSlide ? "active" : ""}`}
                                    onClick={() => setCurrentSlide(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </section>
            </header>
            
            {/* /*Product card by tamanna*/ }

            <div>
                {speficAnimal.length > 0 && (
                    <div className="animal">
                        {/* Display cards for each unique animal */}
                        {speficAnimal.map((animal, idx) => animal ? (
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
            <section className="about-shelter">
                <div className="about-content">
                    <img
                        src="image.png" // Replace with the actual image path or URL
                        alt="Dog and Cat"
                        className="about-image" />
                    <div className="about-text">
                        <h2>About the shelter<br />“Cozy House”</h2>
                        <p>The customer is very important, the customer
                            will be followed by the customer. The cream
                            is made with a flattering sauce. A layer
                            of protein or fat. ecological Smartphones
                            Mauris like a pillow now.
                        </p>
                        <p>Until it is accomplished, let the time be at
                            the door, and let it be a little time for the
                            vestibule; It's a matter of real estate. But the
                            time of the illness is very sad. Maecenas
                            dignissim just orci, in laoreet urna dapibus
                            nec Praesent quis tortor faucibus, tristique
                            ante vitae, dignissim lorem. But he was
                            pregnant with the ligula and the salad.
                        </p>
                    </div>
                </div>
            </section>

        </div>
        </>
    );
}
