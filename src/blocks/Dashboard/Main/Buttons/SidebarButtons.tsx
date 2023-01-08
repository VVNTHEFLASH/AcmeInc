import React from 'react'

interface Props {
    iconClass: string,
    text: string,
    onClick?: () => void,
    extraStyle?: string
}
const SidebarButtons = ({iconClass, text, onClick, extraStyle}: Props) => {
  return (
    <div className={"flex flex-row items-center p-[6px] hover:bg-slate-200 rounded-md "+ extraStyle}
    onClick={onClick}>
        <i className={iconClass}></i>
        <p className='pl-4'>{text}</p>
    </div>
  )
}

export default SidebarButtons;