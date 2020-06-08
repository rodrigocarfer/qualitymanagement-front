import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../../Components/TopMenu/TopMenu';
import Footer from '../../Components/Footer/Footer';
import { Typography } from '@material-ui/core';
import Item from './Item/Item'
import Chart from './Chart'
import './Dashboard.scss';

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

const Dashboard = () =>{
  const classes = useStyles();
  const [dados, setdados] = useState(false);

  return (
    <div>
      <TopMenu />
      <main className={classes.fullWidth}>
        <div className={classes.toolbar} />
        <div className={classes.title}>
          <Typography variant='h3'>Portal Gestão da Qualidade - Dashboards</Typography>
        </div>
        <div className='dashboards'>
        <div className='item-dashboard'>
        <div className='titulo-dashboard'>
        <h1 className=''><b> Registros de Ocorrências Recentes </b></h1>
        </div>
        <div className='dashboard'>                
        {dados ? (<ul>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
          </ul>) : <div className='loader'></div> }  
        </div>
        </div>
        <div className='item-dashboard'>
        <div className='titulo-dashboard'>
        <h1 className=''><b> Relatórios Gráficos </b></h1>
        </div>
        <div className='dashboard'>          
          <Chart/>
        </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;