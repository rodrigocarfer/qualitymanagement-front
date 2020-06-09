import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../../Components/TopMenu/TopMenu';
import Footer from '../../Components/Footer/Footer';
import { Typography } from '@material-ui/core';
import Item from './Item/Item'
import Chart from './Chart'
import './Dashboard.scss';
import axios from 'axios';

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

  useEffect(() => {
    axios.get('https://gestaoqualidade-api.azurewebsites.net/api/v1/nao-conformidades/relatorio').then(
      (result) => setdados(result.data),
    );
  }, []);

  const ObterPrioridade = (prioridade) => {
    if(prioridade === 0) return 'Baixa';
    if(prioridade === 1) return 'Média';
    if(prioridade === 2) return 'Alta';
  }

  const ObterTipo = (tipo) => {
    if(tipo === 0) return 'Auditoria Interna';
    if(tipo === 1) return 'Erro de Cadastro';
    if(tipo === 2) return 'Evento Adverso';
    if(tipo === 3) return 'Falha na Execução do Processo';
    if(tipo === 4) return 'Temperatura inadequada';
    if(tipo === 5) return 'Acidente de Trabalho';
    if(tipo === 6) return 'Quase Acidente de Trabalho';
  }

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
        {dados ? (
          <ul>
            {dados.registrosRecentes.map((v) => 
            <li className='listagem'><Item dados={v} ObterPrioridade={ObterPrioridade} ObterTipo={ObterTipo}/></li>)}
          </ul>
          ) : <div className='loader'></div> }  
        </div>
        </div>
        <div className='item-dashboard'>
        <div className='titulo-dashboard'>
        <h1 className=''><b> Relatórios Gráficos </b></h1>
        </div>
        <div className='dashboard'>          
          <Chart dados={dados} ObterPrioridade={ObterPrioridade} ObterTipo={ObterTipo}/>
        </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;