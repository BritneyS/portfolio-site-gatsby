import React from "react";
import PropTypes from "prop-types";

const CustomIconLinkGroup = ({ icon, link, linkTitle }) => {
    return (
        <div className="container-flex icon-link-container">
            {icon}
            <a
                className="group-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {linkTitle}
            </a>
        </div>
    );
}

export default CustomIconLinkGroup;

CustomIconLinkGroup.propTypes = {
    icon: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired
}