import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../../Components/TopMenu/TopMenu';
import { Typography } from '@material-ui/core';
import Footer from '../../Components/Footer/Footer';
import './About.scss'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    textAlign: "center",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

const About = () =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h3'>Sobre</Typography>
      </div>
      <div className="about">
        <p> Trabalho de Conclusão de Curso Arquitetura de Sistemas Distribuídos </p>
        <p> PUC Minas </p>
        <p><b> Rodrigo Carvalho Ferreira </b></p>
      </div>
    </main>
      <Footer />
    </div>
  );
}

export default About;