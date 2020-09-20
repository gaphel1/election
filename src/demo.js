import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Home from './components/Pages/Home';
import ChartPage from './components/Pages/ChartPage';
import Tooltip from "@material-ui/core/Tooltip";
import {
  // ChevronLeftOutlined as PreviousIcon,
  // ChevronRightOutlined as NextIcon,
  DashboardOutlined as DashboardIcon,
  FeedbackOutlined as FeedbackIcon,
  FlagOutlined as GoalIcon,
  GradeOutlined as GradeIcon,
  HelpOutline as HelpIcon,
  InfoOutlined as InfoIcon,
  // Star as StarIcon,
  SupervisorAccountOutlined as SubordinatorIcon
} from "@material-ui/icons";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    // The navigation bar (app toolbar) need to be ontop of the drawer
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "#2196f3"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up("lg")]: {
      // The drawer is always shown on this resolution, hide thee bugger icon
      display: "none"
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    [theme.breakpoints.up("sm")]: {
      // Keep the drawer as minimum visibility
      width: theme.spacing(7)
    },
    [theme.breakpoints.up("lg")]: {
      // Screen is large enough to keep drawer open as always
      width: drawerWidth
    },
    [theme.breakpoints.down("xs")]: {
      // Hide the drawer on mobile screen
      width: 0
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden"
  },
  toolbarGap: theme.mixins.toolbar,
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.up("xs")]: {
      minHeight: 48,
      paddingLeft: 16,
      paddingRight: 16
    }
  },
  content: {
    flexGrow: 1,
    // paddingLeft:theme.spacing(2),
    // paddingRight:theme.spacing(2)
    padding: theme.spacing(2)
  },
  userButton: {
    marginRight: -12
  },
  userMenu: {
    marginTop: 48,
    zIndex: theme.zIndex.modal + 1
  },
  infoMenuItem: {
    fontStyle: "italic",
    fontWeight: "normal"
  },
  hide: {
    display: "none"
  }
});

class MiniDrawer extends React.Component {
  state = {
    isDrawerOpen: false,
    userMenuEl: null
  };

  toggleDrawer = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  openUserMenu = event => {
    this.setState({ userMenuEl: event.currentTarget });
  };

  closeUserMenu = () => {
    this.setState({ userMenuEl: null });
  };

  openUserGuidelinesLink = event => {
    event.preventDefault();
    // window.open('./', '_blank');
  };

  openFeedbackLink = event => {
    event.preventDefault();
    // window.open('https://www.google.com.vn', '_blank');
    // this.toggleDrawer();
  };

  render() {
    const { classes } = this.props;
    const { userMenuEl } = this.state;
    const isUserMenuOpen = Boolean(userMenuEl);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters={false} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap
            >
              Digitalize Employee
            </Typography>
            <Hidden xsDown>
              <Typography variant="body1" color="inherit" noWrap>
                Nice day, John Doe!
              </Typography>
            </Hidden>
            <IconButton
              aria-owns={isUserMenuOpen ? "user-menu" : undefined}
              aria-haspopup="true"
              onClick={this.openUserMenu}
              color="inherit"
              className={classes.userButton}
            >
              <Avatar
                alt="John Doe"
                src="https://material-ui.com/static/images/avatar/1.jpg"
                // className={classes.avatar}
              />
            </IconButton>
            <Menu
              id="user-menu"
              anchorEl={userMenuEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={isUserMenuOpen}
              onClose={this.closeUserMenu}
              className={classes.userMenu}
            >
              <MenuItem onClick={this.closeUserMenu}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer
          variant={
            isWidthDown("sm", this.props.width) ? "temporary" : "permanent"
          }
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.isDrawerOpen,
            [classes.drawerClose]: !this.state.isDrawerOpen
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.isDrawerOpen,
              [classes.drawerClose]: !this.state.isDrawerOpen
            })
          }}
          open={this.state.isDrawerOpen}
          onClose={this.toggleDrawer}
        >
          <div className={classes.toolbarGap} />
          <List className={classes.grow}>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText primary="Skillsets" />
              <ListItemSecondaryAction
                className={classNames({
                  [classes.hide]: !this.state.isDrawerOpen
                })}
              >
                <Tooltip
                  title="Skillsets explaination"
                  aria-label="Skillsets explaination"
                >
                  <IconButton>
                    <HelpIcon color="disabled" fontSize="small" />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GoalIcon />
              </ListItemIcon>
              <ListItemText primary="Personal Goals" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SubordinatorIcon />
              </ListItemIcon>
              <ListItemText primary="My Employees" />
            </ListItem>
          </List>

          <List>
            <ListItem button onClick={this.openFeedbackLink}>
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItem>
            <ListItem button onClick={this.openUserGuidelinesLink}>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="User Guidelines" />
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem>
              <Hidden smDown>
                <ListItemIcon
                  className={classNames({
                    [classes.hide]:
                      this.state.isDrawerOpen ||
                      isWidthUp("xl", this.props.width)
                  })}
                >
                  <InfoIcon />
                </ListItemIcon>
              </Hidden>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      align="right"
                      className={classes.infoMenuItem}
                      noWrap
                    >
                      0.0.0-PLACEHOLDER
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      align="right"
                      className={classes.infoMenuItem}
                      noWrap
                      gutterBottom
                    >
                      &copy; 2019 KMS Technology
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbarGap} />
          <BrowserRouter> 
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/chart" component={ChartPage}/>
                {/* <Route path="/register" component={Register}/> */}
              </Switch>
          </BrowserRouter>
        {/* copyright */}
          <Box pt={4}>
            <Copyright />
          </Box>
        </main>
        
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(withWidth()(MiniDrawer));
