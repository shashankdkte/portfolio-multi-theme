import ProjectCategories from '../../components/project_categories/ProjectCategories'
import './portfolio.css'
import Projects from "../../components/projects/Projects"
import { useState } from 'react';
import data from './data';

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  console.log(data);
  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

    const filterProjectsHandler = (category) => {
    if(category === "all") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
      Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      <div className="container profile__container">
        <ProjectCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio