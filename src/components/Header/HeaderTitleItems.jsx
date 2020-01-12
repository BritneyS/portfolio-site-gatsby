import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Button from "../CustomButtons/Button";
import copy from '../../utils/copy';
import PropTypes from "prop-types";

const {
    projectsLinkTitle,
    projectsLink,
    resumeLinkTitle,
    resumeLink,
    contactLinkTitle,
    contactLink
} = copy.HeaderTitleItems;

const headerTitles = [
    {
        id: "projects",
        title: projectsLinkTitle,
        link: projectsLink,
    },
    {
        id: "resume",
        title: resumeLinkTitle,
        link: resumeLink,
    },
    {
        id: "contact",
        title: contactLinkTitle,
        link: contactLink,
    }
];

const HeaderTitleItems = ({ ...props }) => {
    const { classes } = props;
    return (
        headerTitles.map(headerTitle => {
            return (
                <ListItem className={classes.listItem} key={headerTitle.id}>
                    <Button
                        href={headerTitle.link}
                        color="transparent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.navLink}
                    >
                        {headerTitle.title}
                    </Button>
                </ListItem>
            )
        })
    );
}

export default HeaderTitleItems;

HeaderTitleItems.propTypes = {
    classes: PropTypes.object.isRequired
}