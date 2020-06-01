import React from 'react';
import './MenuIcon.scss'
import PropTypes from 'prop-types';
import FormImage from '../../Icons/form.png';
import DashboardImage from '../../Icons/dashboard.png';
import OperationImage from '../../Icons/operation.png';

function MenuIcon({
    titulo,
    icone,
    onClick,
}) {

const ObterIcone = (icone) => {
    if(icone === 'form')
        return FormImage;
    if(icone === 'dashboard')
        return DashboardImage;

    return OperationImage;
} 

  return (
      <div className='menuicon' onClick={onClick}>
        <div className='menuicon-titulo'>
            <b>{titulo}</b>
        </div>
        <div title={titulo}>
            <img className={`image-${icone}`} src={ObterIcone(icone)}/>
        </div>
      </div>
  );
}

MenuIcon.defaultProps = {
    onClick: () => {},
};

MenuIcon.propTypes = {
    titulo: PropTypes.string.isRequired,
    icone: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default MenuIcon;
