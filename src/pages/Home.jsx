import React from 'react';
import { Link }from 'react-router-dom';
import Footer from '../components/Footer';

const Home = (props) => {
    return (
        <div className="main">
            <img src="" alt=""/>
            <div className="home-container">
                <h1> 🔥 Hello, World! 🔥 </h1>
                <p> Personal portfolio and blog by <a className="orange" href="https://www.linkedin.com/in/fran%C3%A7ois-g-vieux/">François Vieux</a></p>
                <img className="profile blur" src="./PROFIL.jpg" alt="profile me"/>
                <div className="tags">
                    <span className="tag is-primary is-light">Javascript</span>
                    <span className="tag is-primary is-light">ElectronJs</span>
                    <span className="tag is-primary is-light">ReactJS</span>
                    <span className="tag is-primary is-light">NodeJS</span>
                    <span className="tag is-primary is-light">MongoDB</span>
                    <span className="tag is-primary is-light">Express.js</span>
                </div>

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
                    <a href="mailto:admin@francoisvieux.com.com">
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
                <p>
                 My motto? <strong className="orange"> Never stop learning! </strong>
                <br/>
                People describe me as open minded, reliable, spontaneous, and proactive!
                <br/>
                <br/>
                I am passionnate about the impact of the internet in our modern society. In fact, my previous experience in academic research at <a className="orange" href="https://twitter.com/CNRS">@CRNS</a> evolved aroud the transmission of knowledge through the internet and its impact on social inovations in europe. <a className="orange" href="https://en.wikipedia.org/wiki/Social_innovation#:~:text=Social%20innovations%20are%20new%20social,extending%20and%20strengthening%20civil%20society.">Learn more here.</a><br/>
                During my last mission at <a className="orange" href="https://twitter.com/vwr">@VWR_AVANTOR</a>, I worked with my team to increse the company's online sales by enhancing the online user experience and online consumer support! 
                <br/>
                I graduated in full-stack web development at <a className="orange" href="https://twitter.com/ironhack"> @Ironhack!</a>  ⌨️🖱
                <br/>
                <br/>
                As a <strong>full-stack</strong> or <strong>back-end developer</strong>, I develop innovative solutions while maximizing clients' satisfaction.</p>
                <Link className="orange" to="/about"><h3> More 🥳 here! </h3></Link>
            </div>
            <Footer /> 
        </div>
    )
}

export default Home
