import  { useState } from 'react'
import {GoChevronDown} from 'react-icons/go'

function Dropdown({options,value,onChange}) {
    const [isopen,setIsOpen]=useState(false)

    const handleClick=()=>{
        setIsOpen(!isopen)
    }

    const handleOptionClick=(option)=>{
        setIsOpen(false)
        onChange(option)
    }

    const renderedOptions=options.map((option)=>{
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={()=> handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    })

   

    

  return (
    <div className='w-48 relative'>
        <div className='flex justify-between items-center cursor-pointer vorder rounded p-3 shadow bg-white w-full'
         onClick={handleClick}>{value?.label||'Select...'} <GoChevronDown/> </div>
        {   isopen && <div className='absoluete top-full border rounded p-3 shadow bg-white w-full' >{renderedOptions}</div>}
    </div>
  )
}
export default  Dropdown
