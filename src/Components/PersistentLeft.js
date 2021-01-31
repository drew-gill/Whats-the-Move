import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; 
import SwitchesGroup from './SwitchesGroup';
import AgeSlider from './AgeSlider';
import AddData from './AddData'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [openLeft, setOpenLeft] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  const handleDrawerOpenLeft = () => {
      setOpenLeft(true);
  };

  const handleDrawerCloseLeft = () => {
      setOpenLeft(false);
  };

  const handleDrawerOpenRight = () => {
      setOpenRight(true);
  };

  const handleDrawerCloseRight = () => {
      setOpenRight(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openLeft,
        })}
      >
        <Toolbar>
          {/*Left menu button*/}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenLeft}
            edge="start"
            className={clsx(classes.menuButton, openLeft && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" id="centertext"noWrap>
            Whats The Move?
          </Typography>

          {/*Right menu button*/}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenRight}
            edge="end"
            className={clsx(classes.addButton, openRight && classes.hide)}
            id="rightButton"
          >
            <p>Add new item!</p>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/*Left side drawer: set advanced filters for search */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openLeft}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerCloseLeft}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <SwitchesGroup/>
        </List>
        <Divider />
        <AgeSlider/>
      </Drawer>

      {/*Right side drawer: add new items to DB*/}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={openRight}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerCloseRight}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <AddData/>
        <Divider />
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openLeft,
        })}
      >
        <div className={classes.drawerHeader} />
        
      </main>
    </div>
  );
}
