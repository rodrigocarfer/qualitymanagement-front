import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from '@material-ui/core';
import { authContext } from '../../Config/adalConfig';
import './TopMenu.scss'

const drawerWidth = 0;

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

  function TopMenu() {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <MenuItem>
          <Typography variant='h6' className={classes.title} onClick={() => {window.location.href='/'}}>
            Home
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={classes.title} onClick={() => {window.location.href='/sobre'}}>
            Sobre
          </Typography>
        </MenuItem>
        <div className='align-right'>
          <MenuItem>
            <Typography variant='h6' className={classes.title} onClick={() => {authContext.logOut();}}>
              LogOut
            </Typography>
          </MenuItem>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopMenu;