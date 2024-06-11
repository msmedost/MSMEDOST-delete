import React from 'react'
import "./BecomeMember.css"
import { FaPlay } from "react-icons/fa";

function BecomeMember() {
  return (
    <div className=' w-screen h-screen flex justify-center items-center z-30 bg-black bg-opacity-80 fixed'>
        <div className='white-div w-[30vw] h-[90vh] bg-white rounded-lg z-0 bg-opacity-90 flex flex-col items-center justify-evenly py-10 lg:w-[50vw] sm:w-[85vw]'>
            <div className=' text-center flex flex-col gap-5'>
                <h1>Thank you for choosing MSMEDOST</h1>
                <h1 className=' font-medium text-2xl'>Please <button className=' bg-black text-white p-2 text-base rounded-xl'>Read Me</button></h1>

                
                <h1 className=' text-lg'>Or</h1>
                <h1 className=' font-medium text-2xl'>Watch Me</h1>
            </div>

    <div className="why-choose-us">
            <div className="spinning-circle1"></div>
            <div className="spinning-circle2"></div>
                <img id="inside-circle" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <div className="play-button-anim1"></div>
                <div className="play-button-anim2"></div>
                    <div className="play-button">
                        <div className=' flex justify-center items-center text-orange-600'><FaPlay /></div>
                    </div>
                    
            </div>
        </div>
</div>
  )
}

export default BecomeMember