import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Button from "../CustomButtons/Button";
import copy from '../../utils/copy';
import PropTypes from "prop-types";

const {
    homeLinkTitle,
    homeLink,
    techLinkTitle,
    techLink,
    projectsLinkTitle,
    projectsLink,
    contactLinkTitle,
    contactLink
} = copy.HeaderTitleItems;

const headerTitles = [
    {
        id: "home",
        title: homeLinkTitle,
        link: homeLink,
    },
    {
        id: "tech",
        title: techLinkTitle,
        link: techLink,
    },
    {
        id: "projects",
        title: projectsLinkTitle,
        link: projectsLink,
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