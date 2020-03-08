import React from "react";
import CustomSeparator from "../CustomSeparator";
import CustomProjectList from "./CustomProjectList";
import copy from "../../utils/copy";
import "../../assets/css/project-section.css";

const { projectSectionHeader } = copy.Projects;

const ProjectSection = () => {
    return(
        <>
            <section id="projects" className="site-section">
                <h3 className="section-header">{projectSectionHeader}</h3>
                <CustomProjectList />
            </section>
            <CustomSeparator />
        </>
    );
}

export default ProjectSection;