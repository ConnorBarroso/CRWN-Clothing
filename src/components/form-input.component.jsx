import React from 'react';
import './component-styles/form-input.styles.scss';

const FormInput = ({ label, setUserData, ...otherProps }) => (
    

    <div className='group'>
        <input className='form-input'  onChange={e => setUserData(e.target.value)} {...otherProps}/>
        {
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
            </label>)
            :null
        }
    </div>
)

export default FormInput;