import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "../CustomButtons/Button";
import {
    FaTwitter,
    FaLinkedin,
    FaEnvelope,
    FaDev,
    FaGithub
} from 'react-icons/fa';
import copy from '../../utils/copy';
import PropTypes from "prop-types";


const {
    twitterTooltip,
    twitterIconLink,
    githubTooltip,
    githubIconLink,
    devtoToolTip,
    devtoIconLink,
    linkedinToolTip,
    linkedinIconLink,
    emailTooltip,
    emailIconLink
} = copy.HeaderIconItems;

const headerIcons = [
    {
        id: "twitter",
        tooltipId: "twitter-icon",
        tooltipTitle: twitterTooltip,
        link: twitterIconLink,
        icon: <FaTwitter />
    },
    {
        id: "github",
        tooltipId: "github-icon",
        tooltipTitle: githubTooltip,
        link: githubIconLink,
        icon: <FaGithub />
    },
    {
        id: "devto",
        tooltipId: "devto-icon",
        tooltipTitle: devtoToolTip,
        link: devtoIconLink,
        icon: <FaDev />
    },
    {
        id: "linkedin",
        tooltipId: "linkedin-icon",
        tooltipTitle: linkedinToolTip,
        link: linkedinIconLink,
        icon: <FaLinkedin />,
    },
    {
        id: "email",
        tooltipId: "email-icon",
        tooltipTitle: emailTooltip,
        link: emailIconLink,
        icon: <FaEnvelope />,
    }
];

const HeaderIconItems = ({ ...props }) => {
    const { classes } = props;
    return (
        headerIcons.map(headerIcon => {
            return (
                <ListItem className={classes.listItem} key={headerIcon.id}>
                    <Tooltip
                        id={headerIcon.tooltipId}
                        title={headerIcon.tooltipTitle}
                        placement={
                            window &&
                            window.innerWidth > 959
                            ? "top"
                            : "left"
                        }
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button style={{ padding: "12px 15px" }}
                            href={headerIcon.link}
                            color="transparent"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {headerIcon.icon}
                        </Button>
                    </Tooltip>
                </ListItem>
        )})
    );
};

export default HeaderIconItems;

HeaderIconItems.propTypes = {
    classes: PropTypes.object.isRequired
}
