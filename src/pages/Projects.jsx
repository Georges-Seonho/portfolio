import React from 'react';
import Title from '../components/tools/Title';
import ProjectsList from '../components/projects/ProjectsList';
import Footer from '../components/Footer';

const projects = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        name: 'chiic.fr',
        description: 'An app to promote clothes recycling and help designers find the materials they need for their projects.',
        technos: ['Full MERN stack', 'Amazon S3', 'Bulma', 'MapboxGL']
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1563014217-df8aea007374?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        name: 'coffee_log',
        description: 'An app to help barista and coffee lovers track their experiments and get useful insights about their consumption.',
        technos: ['HBS','Express','MongoDB','ChartJS']
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1578318974720-9d0eea26957d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1081&q=80',
        name: 'Mr_Ms_President',
        description: 'A simple management game with one rule: accept or reject propositions and keep everyone happy and budjet afloat! Good luck.',
        technos: ['Javascript','HTML','CSS']
    }
];

const Projects = () => {
    return (
        <div className="main">
            <Title name={'My Projects'}/> 
            <ProjectsList projects={projects}/>
            <Footer /> 
        </div>
    )
}

export default Projects
