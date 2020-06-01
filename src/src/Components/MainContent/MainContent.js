import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '../MenuIcon/MenuIcon';
import { Typography } from '@material-ui/core';
import './MainContent.scss'

const useStyles = makeStyles(theme => ({
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

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h3'>Portal Gestão da Qualidade</Typography>
      </div>
      <div className={`icones-menu ${classes.content}`}>
        <MenuIcon titulo={'Registro de Não Conformidades'} icone={'form'} onClick={() => {window.location.href='/registro'}}/>
        <MenuIcon titulo={'Relatórios Gráficos'} icone={'dashboard'} onClick={() => {window.location.href='/dashboard'}}/>
        <MenuIcon titulo={'Operação 1'} icone={'operation'}/>
        <MenuIcon titulo={'Operação 2'} icone={'operation'}/>
        <MenuIcon titulo={'Operação 3'} icone={'operation'}/>
        <MenuIcon titulo={'Operação 4'} icone={'operation'}/>
      </div>
    </main>
  );
}

export default MainContent;