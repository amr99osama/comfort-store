import React from 'react'

const FormSelect = ({ label, name, list, defaultValue, size }) => {
    return (
        <div className='form-control'>
            <label className='label' htmlFor={name}>
                <span className='label-text capitialize'>{label}</span>
            </label>
            <select name={name} id={name} defaultValue={defaultValue} className={`select select-bordered ${size}`}>
                {list.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FormSelect