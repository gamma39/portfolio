import React from "react";
import ProjectCard from "./ProjectCard";
import classes from './Projects.module.css'

const Projects = () => {
    return (
        <div id="projects" className={classes.projects}>
            <h2>Projects</h2>
            <ProjectCard />
        </div>
    )
}

export default Projects