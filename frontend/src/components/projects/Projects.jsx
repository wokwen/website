import React from "react";
import './Projects.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import projects from "../../data/projects";


function Projects() {
    return (
        <div id="projects">
            <h1>Projects</h1>

            {projects.map((project, index) => (
                <Card key={index} project={project} variant="outlined">
                    <CardContent>
                        {project.title}
                        {project.url}
                    </CardContent>
                </Card>

            ))}
        </div>
    );
}

export default Projects;