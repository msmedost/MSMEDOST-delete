import React, { useEffect, useState } from "react";
import "./BecomeMember.css";
import { FaPlay } from "react-icons/fa";
import { Collapse } from "@material-tailwind/react";
import { HiMiniXMark } from "react-icons/hi2";

function BecomeMember({setShowMemberRegGuide}) {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => (document.documentElement.style.overflow = "auto");
  }, []);

  const [open, setOpen] = useState(false);
 

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div>
    <div className=" animation1 w-screen h-screen flex justify-center items-center z-30 bg-black bg-opacity-80 fixed top-0 overflow-y-scroll">
      <div className=" animation2 white-div w-[30vw] bg-white rounded-lg z-0 bg-opacity-90 flex flex-col items-center justify-evenly py-10 lg:w-[50vw] sm:w-[85vw] absolute top-20 overflow-hidden mb-11">
        <div onClick={()=>setShowMemberRegGuide(false)} className=" absolute top-4 right-4 text-3xl cursor-pointer"><HiMiniXMark /></div>
        <div className=" text-center justify-center items-center flex flex-col gap-5 relative">
          <h1 className=" text-2xl font-medium">
            Thank you for choosing msmedost!
          </h1>
          <p className=" bg-black text-white w-4/5 text-left p-4">
            {" "}
            Before you begin your registration, please take a moment to review
            our community guidelines. If you require further assistance, feel
            free to watch our video guide.
          </p>
          <div className=" relative w-full">
          <h1 className=" font-medium text-2xl">
            Please{" "}
            <button onClick={toggleOpen} className=" bg-black text-white p-2 text-base rounded-xl hover:opacity-80 transition-all duration-100 active:scale-95">
              Read Me
            </button>
          </h1>
          <div className=" absolute w-full z-10 p-6">
            <Collapse open={open}>
              <p className=" w-full bg-white p-8 rounded-xl">
              <span className=" text-lg font-semibold">Guidelines :</span> Please read this information before filling out the form: You are requested to fill the form very patiently and some fields are compulsory and highlighted without which it will not be submitted. The registered mobile number can't be used for 2nd time registration. Your professional passport-size photograph, logo, website, email ID, and business description all will help to build your brand so try to fill it all properly and no edit option is available once submitted. One member/ mobile number is allowed for 1 location (city) as well as a category only so choose the details accordingly. In case your category is not listed or find any issues, connect with us through contact us form. Please note your profile will be approved and made active after due verification and acceptance, subject to management discretion for approval as well as any future point of time.

Thanks Team MSME Dost Serving Community with Responsibility
              </p>
            </Collapse>
          </div>
            </div>

          <h1 className=" text-lg">Or</h1>
          <h1 className=" font-medium text-2xl">Watch Me</h1>
        </div>

        <div className="why-choose-us">
          <div className="spinning-circle1"></div>
          <div className="spinning-circle2"></div>
          <img
            id="inside-circle"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            />
          <div className="play-button-anim1"></div>
          <div className="play-button-anim2"></div>
          <div className="play-button">
            <div className=" flex justify-center items-center text-orange-600">
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
  );
}

export default BecomeMember;
