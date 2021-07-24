import React from 'react'

const Navbar = ({onBtnIsClicked}) => {
    const clicked = () => {
      onBtnIsClicked(1)
    }


  return(
    <nav className='Top--nav'>
          <h1 className= 'logo'>Tora <span>Beru</span></h1>
          <button className='get--users--btn' onClick={clicked}>Get Users</button>
    </nav>
  )
}

export default Navbar