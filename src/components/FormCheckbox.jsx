import React from 'react'

const FormCheckbox = ({ name, label, defaultValue, size }) => {
    return (
        <div className='form-control items-center flex flex-col' >
            <label className='label cursor-pointer mx-2 py-2' htmlFor={name}>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input name={name} defaultValue={defaultValue} className={`checkbox checkbox-primary ${size}`} type="checkbox" />
        </div>
    )
}

export default FormCheckbox