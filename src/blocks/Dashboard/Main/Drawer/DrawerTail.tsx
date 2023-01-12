import { Sidebar } from "flowbite-react";
import React, { Dispatch } from "react";

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<React.SetStateAction<boolean>>,
    children: JSX.Element,
    sideChildren: JSX.Element
}
export default function Drawer({isOpen, setIsOpen, children, sideChildren }: Props) {
  return (
    <>
    <div className="w-fit h-full bg-slate-100 flex items-start ease-in duration-1000 transition p-4">
    {isOpen && (
      <>
        <div className="relative left-[290px] cursor-pointer hover:opacity-70" 
        onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-x"></i>
        </div>
        <div className="w-[200px] m-4 mx-8">
            {sideChildren}
        </div>
      </>
    )}
    {children}
    </div>
    </>

  );
}
