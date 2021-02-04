import React from 'react';
import './ProjectCards.css';
import projects from '../../data/projects';
import ProjectCardItem from './ProjectCardItem'

function ProjectCards() {
  return (
    <section className="project-section">
      <div className="project-section-container">
        <h1 className="projects-title">Projects</h1>
        <div className="project-gallery-container">
          {projects.map((project) => {
            return <ProjectCardItem key={project.id} projectObject={project} />
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectCards;
