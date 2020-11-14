import React from 'react';
import { Switch, Route } from "react-router-dom";
import Project from '../components/projects/Project';

const ProjectPage = (props) => {
    return (
        <div>
            <Switch>
              <Route exact path="/projects/1">
                <Project
                  name="chiic.fr"
                  image={['https://res.cloudinary.com/dnk7fvken/image/upload/v1605353830/portfolio/chiic_1_lvt1jh.png', 
                          'https://res.cloudinary.com/dnk7fvken/image/upload/v1605353814/portfolio/chiic_2_cruik8.png']}
                  shortDesc="Give a second life to your old clothes and support local designers!"
                  tags={[
                    "ReactJS",
                    "MongoDB",
                    "Amazon S3",
                    "ExpressJS",
                    "NodeJS",
                    "REST API",
                    "MapboxGL",
                    "Bulma"
                  ]}
                  team={[
                    {
                      img: "http://www.lisaponcet.com/lisaponcet.png",
                      name: "Lisa Poncet",
                      link: "http://www.lisaponcet.com/",
                    },
                    {
                      img: "https://res.cloudinary.com/dnk7fvken/image/upload/v1605353794/portfolio/PROFIL_tk1kff.jpg",
                      name: "François Vieux",
                      link: "https://www.linkedin.com/in/fran%C3%A7ois-g-vieux/",
                    },
                      ]}
                  role="full stack - back end"
                  time="8 days"
                  link="http://www.chiic.fr"
                />
              </Route>
              <Route exact path="/projects/2">
                <Project
                  name="Coffee_Log"
                  image={['https://res.cloudinary.com/dnk7fvken/image/upload/v1605353818/portfolio/Coffee_1_ltq559.png', 
                          'https://res.cloudinary.com/dnk7fvken/image/upload/v1605353816/portfolio/Coffee_2_gntwmg.png']}
                  shortDesc="A log and dashboard for coffee lovers!"
                  tags={["HBS", "MongoDB", "ExpressJS", "NodeJS", "ChartJs", "AJAX"]}
                  team={[
                    {
                      img: "http://www.lisaponcet.com/lisaponcet.png",
                      name: "lisa Poncet",
                      link: "http://www.lisaponcet.com/",
                    },
                    {
                      img: "https://res.cloudinary.com/dnk7fvken/image/upload/v1605353794/portfolio/PROFIL_tk1kff.jpg",
                      name: "François Vieux",
                      link: "https://www.linkedin.com/in/fran%C3%A7ois-g-vieux/",
                    },
                      ]}
                  role="full stack - back end"
                  time="5 days"
                  link="https://coffeeapp-lf.herokuapp.com/"
                />
              </Route>
              <Route exact path="/projects/3">
                <Project
                  name="Mr_Ms_President"
                  image={['https://res.cloudinary.com/dnk7fvken/image/upload/v1605353804/portfolio/Mr_inst_mhd0yg.png',
                         'https://res.cloudinary.com/dnk7fvken/image/upload/v1605353807/portfolio/Mr_pc_neecnt.png',
                         'https://res.cloudinary.com/dnk7fvken/image/upload/v1605353801/portfolio/Mr_tablette_mupdq9.png',
                         'https://res.cloudinary.com/dnk7fvken/image/upload/v1605353797/portfolio/Mr_Phone_dyalyd.png']}
                  shortDesc="A simple but fully responsive management game with one rule: accept or reject propositions and keep everyone happy and budjet afloat!"
                  tags={["Javascript", "HTML", "CSS", "DOM Manipulations"]}
                  team={[
                    {
                      img: "https://res.cloudinary.com/dnk7fvken/image/upload/v1605353794/portfolio/PROFIL_tk1kff.jpg",
                      name: "François Vieux",
                      link: "https://www.linkedin.com/in/fran%C3%A7ois-g-vieux/",
                    },
                      ]}
                  role="front end"
                  time="5 days"
                  link="https://georges-seonho.github.io/Mr_president/"
                />
              </Route>
            </Switch>
        </div>
    )
}

export default ProjectPage
