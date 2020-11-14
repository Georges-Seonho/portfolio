import React from 'react'; 
import ProjectCard from './ProjectCard';

const ProjectsList = (props) => {
    return (
        <div className='projects-list'>
            {props.projects.map(p => {
                return (
                    <ProjectCard name={p.name} img={p.img} technos={p.technos} description={p.description} id={p.id}/>
                )
            })} 
        </div>
    )
}

export default ProjectsList
