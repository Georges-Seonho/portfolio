import React from 'react';
import { Link }from 'react-router-dom';
import Footer from '../components/Footer';

const Home = (props) => {
    return (
        <div className="main">
            <div className="home-container">
                <h1> 🔥 Hello, World! 🔥 </h1>
                <p> Personal portfolio and blog by <a className="orange" href="https://www.linkedin.com/in/fran%C3%A7ois-g-vieux/">François Vieux</a></p>
                <img className="profile" src="https://res.cloudinary.com/dnk7fvken/image/upload/v1605353794/portfolio/PROFIL_tk1kff.jpg" alt="profile me"/>
                <div className="social-links">
                    <a
                        href="https://www.linkedin.com/in/fran%C3%A7ois-g-vieux/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="icon is-medium">
                        <i className="fab fa-lg fa-linkedin"></i>
                        </span>
                    </a>
                    <a
                        href="https://github.com/Georges-Seonho"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="icon is-medium">
                        <i className="fab fa-lg fa-github"></i>
                        </span>
                    </a>
                    <a href="mailto:admin@francoisvieux.com">
                        <span className="icon is-medium">
                            <i className="fas fa-lg fa-envelope"></i>
                        </span>
                    </a>
                    <a href="https://www.codewars.com/users/SeonHo21">
                        <span className="icon is-medium">
                           <i class="fab fa-js-square"></i>
                        </span>
                    </a>
                </div>
                <div className="tags">
                    <span className="tag is-primary is-light">Python</span>
                    <span className="tag is-primary is-light">Django</span>
                    <span className="tag is-primary is-light">Javascript</span>
                    <span className="tag is-primary is-light">ReactJS</span>
                    <span className="tag is-primary is-light">NodeJS</span>
                    <span className="tag is-primary is-light">MongoDB</span>
                    <span className="tag is-primary is-light">Express.js</span>
                </div>
                <p>
                 My motto? <strong className="orange"> Never stop learning! </strong>
                <br/>
                People describe me as open minded, reliable, spontaneous, and proactive!
                <br/>
                As a <strong> Technical Account Manager </strong> or <strong> Project Manager </strong>, I help developing innovative solutions while maximizing clients' satisfaction.</p>
                <br/>
                <Link className="orange" to="/about"><h3> More 🥳 here! </h3></Link>
            </div>
            <Footer /> 
        </div>
    )
}

export default Home
