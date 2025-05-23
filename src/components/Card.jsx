import React from 'react'

const Card = ({ children, bg = 'bg-slate-50', p = 'p-6', gap = 'gap-3', justify = 'items-center' }, ) => {
  return (
    <div className={`${bg} ${p} rounded-xl shadow-md h-auto flex flex-col ${justify} ${gap}`}>
        { children }
    </div>
  )
}

export default Card