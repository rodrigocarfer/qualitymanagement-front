import React from 'react';

const Radio = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (        
        <div className="form-group"> 
            <p><b> {props.placeholder}: </b></p>
            {props.options.map(option => (
                <div className="form-group-radio" key={option.value}>                    
                    <input type="radio"
                        name={props.name}
                        value={option.value}
                        onChange={props.onChange}
                        className={formControl}
                    />
                    <label>{option.displayValue}</label>
                </div>
            ))}

        </div>
    );
}

export default Radio;