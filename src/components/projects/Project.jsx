import React from 'react';
import Footer from '../Footer';

const Project = (props) => {
    return (
        <>
        <div className="project-page main">
          <div className="project-header">
            <h1 className="main-color"><span className="orange">_</span>{props.name}<span className="orange">_</span></h1>
            <p>{props.shortDesc}</p>
          </div>
            {props.image && props.image.map(e => (
                <img src={e} alt="project-screenshot" />
            ))}
          
          <div className="project-tech-details">
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
            <div className="team">
              <p>
                <b>
                  <i className="fas fa-users"></i> Team:
                </b>
                <br/>
                {props.team && props.team.map(e => (
                  <span>
                    <a href={e.link}>{e.name}</a>
                    <br/>
                  </span>
                ))}
              </p>
            </div>
            <div className="my-role">
              <p>
                <b>
                  <i className="far fa-dot-circle"></i> My role:
                </b>{" "}
                {props.role}
              </p>
            </div>
            <div className="timing">
              <p>
                <b>
                  {" "}
                  <i class="far fa-clock"></i> Time:
                </b>
                  {props.time}
              </p>
            </div>
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
            <a className="orange" href='' target="_blank" rel="noopener noreferrer">
              Back to projects
            </a>
          </div>
        </div>
        <Footer />
      </>
    )
}

export default Project;
