import React from 'react';
import { Link }from 'react-router-dom';

const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <img className='project-pic' src={props.img} alt='props.name'/>
            <h1>{props.name}</h1>
            <div className="stack">
                {props.technos.map(t => (
                    <span key={t} className="tag is-small is-light is-primary">
                    {t}
                    </span>
                ))}
            </div>
            <p className="has-text-grey-light">{props.description}</p>
            <div className="cta-btn">
                <Link to={`/projects/${props.id}`}>
                    <button className="cta-btn grey-darker-background orange">
                        Learn more
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;
