import React from 'react'

interface props {
    age: number
}

const AgeIdentifier = ({ age }: props) => {


    function setStyleByAge(age: number): string | undefined {
        if(age < 18) {
            return "text-red-400"
        }
        else if(age > 45){
            return "text-yellow-400"
        }
        else {
            return "text-green-400"
        }
    }

  return (
    <div>
        <span className={setStyleByAge(age) || "text-black-400"} >{age}</span>
    </div>
  )
}

export default AgeIdentifier