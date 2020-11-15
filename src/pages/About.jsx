import React from 'react'

const About = () => {
    return (
        <div className="main column">
            <img className="profile-about-right" src="https://res.cloudinary.com/dnk7fvken/image/upload/v1605353794/portfolio/PROFIL_tk1kff.jpg" alt="profile me"/>
            <div className="about-container">
                <h1 className="main-color"><span className="orange">_</span> ABOUT ME <span className="orange">_</span></h1>
                <p className="description">
                    I am passionnate about the impact of the internet in our modern society. In fact, my previous experience in academic research at <a className="orange" href="https://twitter.com/CNRS">@CRNS</a> evolved aroud the transmission of knowledge through the internet and its impact on social inovations in europe. <a className="orange" href="https://en.wikipedia.org/wiki/Social_innovation#:~:text=Social%20innovations%20are%20new%20social,extending%20and%20strengthening%20civil%20society.">Learn more here.</a>
                    <br/>    
                    <br/>
                    During my last mission at <a className="orange" href="https://twitter.com/vwr">@VWR_AVANTOR</a>, I worked with my team to increse the company's online sales by enhancing the online user experience and online consumer support! 
                    <br/>
                    <br/>
                    I graduated in full-stack web development at <a className="orange" href="https://twitter.com/ironhack"> @Ironhack!</a>  ⌨️🖱 I am now looking for an opportunity to <b>work</b> with you and develop my knowledge among inspiring people. 
                    <br/>
                </p>
                    
            
            <a
            className="has-text-primary has-text-bold"
            href="mailto:admin@francoisvieux.com"
            id="mail"
            >
            <span className="button big-text orange">admin@francoisvieux.com</span>
            
            </a>

            <a href="/Francois Vieux_CV.pdf" download="CV_Francois_Vieux"><span className="button big-text is-light is-small">check out my resume</span></a>   
            </div>
            <img className="profile-about-left" src="https://res.cloudinary.com/dnk7fvken/image/upload/v1605353794/portfolio/PROFIL_tk1kff.jpg" alt="profile me"/>
        </div>
    )
}

export default About;
