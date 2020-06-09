import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, Bar
} from 'recharts';

const data03 = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

const Chart = ({dados, ObterPrioridade, ObterTipo,}) => {

    if(dados){
      dados.quantidadeNaoConformidadePorTipo.every((v) => 
      v.name = ObterTipo(v.tipoOcorrencia));

      dados.quantidadeNaoConformidadePorPrioridade.every((v) => 
      v.name = ObterPrioridade(v.prioridadeOcorrencia));

      dados.quantidadeNaoConformidadePorDataEPrioridade.every((v) => {
        v.name = v.anoMes.substring(0,7);
        v.Baixa = v.quantidadeBaixa;
        v.Media = v.quantidadeMedia;
        v.Alta = v.quantidadeAlta;

        return v;
      });
    }     

    return (
      dados ? 
      (<>
      <div className='titulo-grafico'>
        <p><b> Quantidade de Ocorrências por tipo em Aberto </b></p>
      </div>
      <PieChart width={500} height={200}>
        <Pie dataKey="quantidade" isAnimationActive={true} data={dados.quantidadeNaoConformidadePorPrioridade} cx={150} cy={100} outerRadius={50} fill="#8884d8" label />
        <Pie dataKey="quantidade" isAnimationActive={true} data={dados.quantidadeNaoConformidadePorTipo} cx={380} cy={100} outerRadius={50} fill="#82ca9d" label/>
        <Tooltip />
      </PieChart>
      <div className='legendas'>
        <div className='legenda-grafico'>
          <p><b> Total Ocorrências Por Prioridade </b></p>
        </div>
        <div className='legenda-grafico'>
          <p><b> Total Ocorrências Por Tipo </b></p>
        </div>
      </div>
      <div className='titulo-grafico'>
        <p><b> Registros de Ocorrências por Prioridade Mês a Mês </b></p>
      </div>
      <BarChart
      width={500}
      height={300}
      data={dados.quantidadeNaoConformidadePorDataEPrioridade}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Baixa" stackId="a" fill="#e3e332" />
      <Bar dataKey="Media" stackId="a" fill="#e38017" />
      <Bar dataKey="Alta" stackId="a" fill="#e31717" />
    </BarChart>
    </>) :
    <div class="loader"></div>
    );
}

export default Chart;