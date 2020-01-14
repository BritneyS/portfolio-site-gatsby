/*eslint-disable*/
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import HeaderIconItems from "../Header/HeaderIconItems";
import HeaderTitleItems from "../Header/HeaderTitleItems";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle"

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <HeaderTitleItems {...props} />
      <HeaderIconItems {...props} />
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
