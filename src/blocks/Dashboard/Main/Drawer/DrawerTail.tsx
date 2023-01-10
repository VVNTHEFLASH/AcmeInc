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
    {!isOpen && (
    <div className="w-[200px] m-4 mx-8">
        {/* <div className="flex justify-end">
            <i className="fa-solid fa-x" onClick={() => setIsOpen(false)} ></i>
        </div> */}
        {sideChildren}
    </div>)}
    {children}
    </div>
    </>

  );
}
