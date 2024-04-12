import React, { useEffect, useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser,RedirectToSignIn } from "@clerk/clerk-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {

  const [menuOpened, setmenuOpened] = useState(false)

  const {isSignedIn,user,isLoaded}=useUser()

  try {
    console.log(user.emailAddresses[0].emailAddress,user.fullName)
  } catch (error) {
    console.log(error)
  }

  const handle=async()=>{
    const response=await fetch("http://localhost:5000/api/createUser",{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:user.emailAddresses[0].emailAddress,name:user.fullName})
    })
  }

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" }
    }
  }

  if(!isSignedIn){
    return <RedirectToSignIn/>
  }

  handle()

  return (
    <div className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} > <img src='./BOB_Logo.png' style={{ height: '30px', width: '30px', marginRight: '10px' }} />   <h2>Battle Of Bytes</h2> </div>


        <OutsideClickHandler
          onOutsideClick={() => setmenuOpened(false)}
        >
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <a href="">Home</a>
            <a href="#all-teams">All Teams</a>
            <a href="#poll">Poll</a>
            <a href="#gallary">Gallary</a>
            <a href="#contact-us">Contact Us</a>
            <SignedOut>
              <SignInButton/>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </OutsideClickHandler>



        <div className="menu">
          <BiMenuAltRight onClick={() => setmenuOpened((prev) => !prev)} size={30} />
        </div>
      </div>

    </div>
  )
}

export default Header