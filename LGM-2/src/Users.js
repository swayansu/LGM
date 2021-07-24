import React from 'react'
import style from './users.module.css'

const Users = ({img,fname,lname,email,id}) => {
  return(
    <div className={style.user} id='main'>
      <div className={style.imgBoX}>
        <img className={style.avatar} src={img} alt='profile image'></img>
      </div>
      <h2>{fname} {lname}</h2>
      <a href='#'><p>{email}</p></a>
      <p className={style.id}>User ID: {id}</p>
    </div>
  )
}

export default Users;