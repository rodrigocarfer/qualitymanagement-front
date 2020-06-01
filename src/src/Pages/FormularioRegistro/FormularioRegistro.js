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

class FormularioRegistro extends Component {  
  constructor() {
    super();
    
    this.state = {
      formIsValid: false,
      formControls: {
        
        titulo: {
          value: '',
          placeholder: 'Título da Ocorrência',
          valid: true,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        data: {
          value: '',
          placeholder: 'Data da Ocorrência',
          valid: true,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        descricao: {
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
          value: '',
          placeholder: 'Tipo de Ocorrência',
          valid: true,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'auditoriainterna', displayValue: 'Auditoria Interna' },
            { value: 'errodecadastro', displayValue: 'Erro de Cadastro'},
            { value: 'eventoadverso', displayValue: 'Evento Adverso'},
            { value: 'falhanaexecucaodoprocesso', displayValue: 'Falha na Execução do Processo'},
            { value: 'temperaturainadequada', displayValue: 'Temperatura inadequada'},
            { value: 'acidentedetrabalho', displayValue: 'Acidente de Trabalho'},
            { value: 'quaseacidentedetrabalho', displayValue: 'Quase Acidente de Trabalho'},
          ]
        },
        prioridade: {
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
            { value: 1, displayValue: 'Alta' },
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
	const formData = {};
	for (let formElementId in this.state.formControls) {
	    formData[formElementId] = this.state.formControls[formElementId].value;
	}    
    	console.dir(formData);
  }
  
  render() {    
    return (
      <div className='classe'>
      <TopMenu />
      <main className='classes.fullWidth'>
      <div className='classes.toolbar' />
      <div className='classes-title'>
        <Typography className='titulo' variant='h3'>Registro de Não Conformidade</Typography>
      </div>
      <div className="form">
          <Select name="tipoOcorrencia"
                  value={this.state.formControls.tipoOcorrencia.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.tipoOcorrencia.options}
                  touched={this.state.formControls.tipoOcorrencia.touched}
                  valid={this.state.formControls.tipoOcorrencia.valid}
                  placeholder={this.state.formControls.tipoOcorrencia.placeholder}
          />
          <Radio name="prioridade"
            value={this.state.formControls.prioridade.value}
            onChange={this.changeHandler}
            options={this.state.formControls.prioridade.options}
            touched={this.state.formControls.prioridade.touched}
            valid={this.state.formControls.prioridade.valid}
            placeholder={this.state.formControls.prioridade.placeholder}
          />
          <TextInput name="titulo" 
                     placeholder={this.state.formControls.titulo.placeholder}
                     value={this.state.formControls.titulo.value}
                     onChange={this.changeHandler}
                     touched={this.state.formControls.titulo.touched}
                     valid={this.state.formControls.titulo.valid}
          />
          <DateInput name="data" 
                     placeholder={this.state.formControls.data.placeholder}
                     value={this.state.formControls.data.value}
                     onChange={this.changeHandler}
                     touched={this.state.formControls.data.touched}
                     valid={this.state.formControls.data.valid}
          />
          <TextArea name="descricao"
                    placeholder={this.state.formControls.descricao.placeholder}
                    value={this.state.formControls.descricao.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.descricao.touched}
                    valid={this.state.formControls.descricao.valid}
          />      
      </div>
      <button onClick={this.formSubmitHandler} disabled={! this.state.formIsValid}>Enviar</button>
    </main>
      <Footer />
    </div>
    );
  }
}

export default FormularioRegistro;