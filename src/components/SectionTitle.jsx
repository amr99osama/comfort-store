import React from 'react'

const SectionTitle = ({ text }) => {
    return (
        <div className='border-b border-base-300 px-5'>
            <h2 className='text-3xl font-medium tracking-wider capitalize pb-3'>
                {text}
            </h2>
        </div>
    )
}

export default SectionTitle