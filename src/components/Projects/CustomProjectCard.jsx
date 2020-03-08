import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import copy from "../../utils/copy";
import { FiMonitor } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import CustomIconLinkGroup from "./CustomIconLinkGroup";

const {
    githubLinkTitle,
    demoLinkTitle
} = copy.Projects;

const CustomProjectCard = ({ project }) => {
    
    const {
        title,
        techStack,
        description,
        githubLink,
        demoLink
    } = project;

    return(
        <>
            <Card>
            <CardHeader color="primary">{title}</CardHeader>
            <CardBody>
                <h4 className="project-card-heading">{techStack}</h4>
                <p className="project-card-body">{description}</p>
                <div className="container-flex">
                    <CustomIconLinkGroup
                        icon={<FaGithub size={25} />}
                        link={githubLink}
                        linkTitle={githubLinkTitle}
                    />
                    {demoLink &&
                        <CustomIconLinkGroup
                            icon={<FiMonitor size={25} />}
                            link={demoLink}
                            linkTitle={demoLinkTitle}
                        />
                    }
                </div>
                
            </CardBody>
            </Card>
        </>
    );
}

export default CustomProjectCard;

CustomProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        techStack: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
        demoLink: PropTypes.string
    })
}