import React from 'react';
import Footer from '../Footer';
import { Link }from 'react-router-dom';

const Project = (props) => {
    return (
        <>
        <div className="project-page main">
          <div className="project-header">
            <h1 className="main-color"><span className="orange">_</span>{props.name}<span className="orange">_</span></h1>
          </div>
          <p>{props.shortDesc}</p>
            {props.image && props.image.map(e => (
                <img src={e} alt="project-screenshot" />
            ))}
          
            <div className="technologies">
              <p>
                <b> Technologies :</b> 
              </p>
              <div className="tags">
                {props.tags.map((techno) => (
                  <span key={techno} className="tag is-primary is-light">
                    {techno}
                  </span>
                ))}
              </div>
            </div>
            <div >
              <p>
                <b>Team:</b>
                <br/>
                <div className="team">
                {props.team && props.team.map(e => (
                  <span className="infos">
                    <img className="profil-pic" src={e.img} alt={e.name}/>
                    <a href={e.link}>{e.name}</a>
                    <br/>
                  </span>
                ))}
                </div>
              </p>
            </div>
            <div>
              <p>
                <b>
                  My role:
                </b>
                <br/>
                {props.role}
              </p>
            </div>
            <div>
              <p>
                <b>
                  <i class="far fa-clock"></i> Time:
                </b>
                <br/>
                  {props.time}
              </p>
            </div>
          <div className="project-long-description">
            <p className="has-text-grey">{props.longDesc}</p>
          </div>
          <div>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button className="cta-btn grey-darker-background">
                go to the app
              </button>
            </a>
            <br/>
            <Link className="orange" to='/projects'>
              Back to projects
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
}

export default Project;
