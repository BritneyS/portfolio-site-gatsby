import React from "react";
import projects from "../../data/projects";
import CustomProjectCard from "../Projects/CustomProjectCard.jsx";

const CustomProjectList = () => {
    return(
        <ul className="section-list">
            {projects && projects.map(project => {
                return(
                    <li className="project-card-list-item" key={project.id}>
                        <CustomProjectCard project={project} />
                    </li>
                );
            })}
        </ul>
    );
}

export default CustomProjectList;