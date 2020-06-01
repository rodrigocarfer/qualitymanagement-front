import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../../Components/TopMenu/TopMenu';
import Footer from '../../Components/Footer/Footer';
import MainContent from '../../Components/MainContent/MainContent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const Home = () =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;