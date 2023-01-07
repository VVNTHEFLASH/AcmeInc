import React from 'react'

interface props {
    gender: 'male' | 'female' | string
}

const classes = {
    male: 'bg-sky-300 rounded-md p-1 rounded-l-full',
    female: 'bg-pink-300 rounded-md p-1 rounded-l-full',
    maleIcon: "fa-solid fa-mars",
    femaleIcon: "fa-solid fa-venus"
}

const GenderIdentifier = ({ gender }: props) => {
  return (
    <div className={gender === "male" ? classes.male : classes.female }>
        <span>{gender} {gender === "male" ? <i className={classes.maleIcon}></i> : <i className={classes.femaleIcon}></i> }</span>
    </div>
  )
}

export default GenderIdentifier