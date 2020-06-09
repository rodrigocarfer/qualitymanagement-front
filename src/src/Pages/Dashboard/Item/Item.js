import React from 'react';

const Item = ({dados, ObterPrioridade, ObterTipo,}) =>{
  return (
    <div>
      <p><b>Título:</b> {dados.tituloOcorrencia}</p>
      <p><b>Data:</b> {dados.dataOcorrencia.replace('T', ' ')}</p>
      <p><b>Data Inclusão Registro:</b> {dados.dataInclusao.replace('T', ' ')}</p>
      <p><b>Prioridade:</b> {ObterPrioridade(dados.prioridadeOcorrencia)}</p>
      <p><b>Tipo:</b> {ObterTipo(dados.tipoOcorrencia)}</p>
      <p><b>Descrição:</b> {dados.descricaoOcorrencia}</p>
    </div>
  );
}

export default Item;