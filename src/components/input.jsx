import React from 'react'

const input = ({label, type, name, defaultValue}) => {
  return (
    <fieldset className="fieldset">
    <legend className="fieldset-legend">{label}</legend>
    <input className='input input-bordered input-lg w-full' type={type}  defaultValue={defaultValue} name={name} />
  </fieldset>
  )
}

export default input