import React from 'react'

export const Customer = ({name,id,rate}) => {
  return (
    <div className='w-[211px] bg-[#7eb69321] h-[211px] border-green pt-[64px] rounded-full border-4'>
        <p className='text-5xl text-primary font-extrabold'>{rate}</p>
        <h3 className='text-base font-medium text-primary'>{name}</h3>
    </div>
  )
}
