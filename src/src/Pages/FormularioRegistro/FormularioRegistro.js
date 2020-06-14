import React, { Component } from 'react';
import './FormularioRegistro.scss'; 

import { Typography } from '@material-ui/core';
import TopMenu from '../../Components/TopMenu/TopMenu';
import Footer from '../../Components/Footer/Footer';
import TextInput from './TextInput';
import DateInput from './DateInput';
import Validate from './Validate';
import TextArea from './TextArea';
import Select from './Select';
import Radio from './Radio';
import axios from 'axios';

class FormularioRegistro extends Component {  
  constructor() {
    super();
    
    this.state = {
      formIsValid: false,
      formControls: {
        
        tituloOcorrencia: {
          value: '',
          placeholder: 'Título da Ocorrência',
          valid: true,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        dataOcorrencia: {
          value: '',
          placeholder: 'Data da Ocorrência',
          valid: true,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        descricaoOcorrencia: {
          value: '',
          placeholder: 'Descrição da Ocorrência',
          valid: true,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        tipoOcorrencia: {
          value: 0,
          placeholder: 'Tipo de Ocorrência',
          valid: true,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 0, displayValue: 'Auditoria Interna' },
            { value: 1, displayValue: 'Erro de Cadastro'},
            { value: 2, displayValue: 'Evento Adverso'},
            { value: 3, displayValue: 'Falha na Execução do Processo'},
            { value: 4, displayValue: 'Temperatura inadequada'},
            { value: 5, displayValue: 'Acidente de Trabalho'},
            { value: 6, displayValue: 'Quase Acidente de Trabalho'},
          ]
        },
        prioridadeOcorrencia: {
          value: '',
          placeholder: 'Prioridade da Ocorrência',
          valid: true,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 0, displayValue: 'Baixa' },
            { value: 1, displayValue: 'Média' },
            { value: 2, displayValue: 'Alta' },
          ]
        }         
      }
    }
  }

  changeHandler = event => {
    
      const name = event.target.name;
      const value = event.target.value;

      const updatedControls = {
        ...this.state.formControls
      };
      const updatedFormElement = {
        ...updatedControls[name]
      };
      updatedFormElement.value = value;
      updatedFormElement.touched = true;
      updatedFormElement.valid = Validate(value, updatedFormElement.validationRules);

      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }

      this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
      });

  }  
  
  formSubmitHandler = () => {  
    document.getElementsByClassName("btnEnviar")[0].disabled = true;

	const formData = {};
	for (let formElementId in this.state.formControls) {
	    formData[formElementId] = this.state.formControls[formElementId].value;
  }    

    formData.prioridadeOcorrencia = parseInt(formData.prioridadeOcorrencia);
    formData.tipoOcorrencia = parseInt(formData.tipoOcorrencia);

    axios.post(
      'https://gestaoqualidade-api.azurewebsites.net/api/v1/nao-conformidades',
      formData).then(() => {
        document.getElementsByClassName("form")[0].style.display = 'none';
        document.getElementsByClassName("btnEnviar")[0].style.display = 'none';
        document.getElementsByClassName("salvo")[0].style.display = 'block';
      });
  }



  render(salvo) {    
    return (
      <div className='classe'>
      <TopMenu />
      <main className='classes.fullWidth'>
      <div className='classes.toolbar' />
      <div className='classes-title'>
        <Typography className='titulo' variant='h3'>Registro de Não Conformidade</Typography>
      </div>
      <div className="salvo"> <b> Registro Salvo Com sucesso! </b> </div>
      <div className="form">
          <Select name="tipoOcorrencia"
                  value={this.state.formControls.tipoOcorrencia.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.tipoOcorrencia.options}
                  touched={this.state.formControls.tipoOcorrencia.touched}
                  valid={this.state.formControls.tipoOcorrencia.valid}
                  placeholder={this.state.formControls.tipoOcorrencia.placeholder}
          />
          <Radio name="prioridadeOcorrencia"
            value={this.state.formControls.prioridadeOcorrencia.value}
            onChange={this.changeHandler}
            options={this.state.formControls.prioridadeOcorrencia.options}
            touched={this.state.formControls.prioridadeOcorrencia.touched}
            valid={this.state.formControls.prioridadeOcorrencia.valid}
            placeholder={this.state.formControls.prioridadeOcorrencia.placeholder}
          />
          <TextInput name="tituloOcorrencia" 
                     placeholder={this.state.formControls.tituloOcorrencia.placeholder}
                     value={this.state.formControls.tituloOcorrencia.value}
                     onChange={this.changeHandler}
                     touched={this.state.formControls.tituloOcorrencia.touched}
                     valid={this.state.formControls.tituloOcorrencia.valid}
          />
          <DateInput name="dataOcorrencia" 
                     placeholder={this.state.formControls.dataOcorrencia.placeholder}
                     value={this.state.formControls.dataOcorrencia.value}
                     onChange={this.changeHandler}
                     touched={this.state.formControls.dataOcorrencia.touched}
                     valid={this.state.formControls.dataOcorrencia.valid}
          />
          <TextArea name="descricaoOcorrencia"
                    placeholder={this.state.formControls.descricaoOcorrencia.placeholder}
                    value={this.state.formControls.descricaoOcorrencia.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.descricaoOcorrencia.touched}
                    valid={this.state.formControls.descricaoOcorrencia.valid}
          />      
      </div> 
      <button className="btnEnviar" onClick={this.formSubmitHandler} disabled={! this.state.formIsValid}>Enviar</button>
    </main>
      <Footer />
    </div>
    );
  }
}

export default FormularioRegistro;