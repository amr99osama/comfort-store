import React from 'react'
import { useNavigation } from 'react-router-dom'
const SubmitBtn = ({text}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
  return (
    <button type='submit' className='btn btn-primary btn-block mb-2' disabled={isSubmitting}>{isSubmitting ? 
        <span className='loading loading-spinner loading-sm' />
        : text}</button>
  )
}

export default SubmitBtn 