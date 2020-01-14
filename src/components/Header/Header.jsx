import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "../../assets/jss/material-kit-react/components/headerStyle"

import { Link } from "gatsby"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      screenWidth: 0
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerBoxShadowChange = this.headerBoxShadowChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  handleResize() {
    this.setState({ screenWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    if (this.props.changeBoxShadowOnScroll) {
      window.addEventListener("scroll", this.headerBoxShadowChange);
    }
  }

  headerBoxShadowChange() {
    const { classes, changeBoxShadowOnScroll } = this.props;
    const windowsScrollTop = typeof window !== 'undefined' && window.pageYOffset;
    if (windowsScrollTop > changeBoxShadowOnScroll.height) {
      document.body
      .getElementsByTagName("header")[0]
      .classList.remove(classes.noShadow);
    } else {
        document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes.noShadow);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.props.changeBoxShadowOnScroll) {
      typeof window !== 'undefined'
      && window.removeEventListener("scroll", this.headerBoxShadowChange);
    }
  }

  render() {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed,
      [classes.noShadow]: true
    });
    const brandComponent = <Button className={classes.title}>
                            <Link to="/" style={{ textDecoration: `none` }}>{brand}</Link>
                          </Button>;
    const FULL_HEADER_LINK_SCREEN_WIDTH = 959;

    return (
      <AppBar className={appBarClasses} elevation={0}>
        <Toolbar className={classes.container} style={{ padding: "0 0.25rem" }}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={
              this.state.mobileOpen &&
              this.state.screenWidth <= FULL_HEADER_LINK_SCREEN_WIDTH
            }
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeBoxShadowOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired
  })
};

export default withStyles(headerStyle)(Header);
