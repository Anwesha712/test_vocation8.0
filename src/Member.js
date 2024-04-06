import React, { useState } from "react";
import "./member.css";
import { members ,founders } from "./dataSet";
import { MemberCard } from "./utils/MemberCard";
import Icon_fb from "./assets/icon_fb.webp";
import Icon_insta from "./assets/icon_insta.webp";
import { Member_Page } from "./routeProvider";
import { useNavigate, Link } from "react-router-dom";
const Member = () => {
  const [visible, setVisible] = useState(16);
  // const others = () => {
  //   setVisible((prevValue) => prevValue + 4);
  // };
  return (
    <>
      <div className="inline-flex flex-col px-2 md:px-8 my-10 lg:px-48 w-full box-border h-fit bg-black">
        <div className="font-font2 text-5xl text-white my-4 mx-auto center">
          Members
          </div>  
          <div className=" inline-flex flex-wrap justify-center gap-2 w-full pb-12">
        {founders.map((item, index) => {
        return (
            <div className="photo w-[45%] h-72 md:w-60 md:h-64" key={item.id}>
                <img
                  src={item.imgSrc}
                  className="image object-cover h-full w-full grayscale"
                />
                <div className="write text-white w-full h-full box-border px-2">
                  <div className="about leading-tight">{item.about}</div>
                  <div className="name text-center font-semibold font-font5">
                    {item.name}
                  </div>
                  <div className="link inline-flex">
                    {item.fb.length > 5 && (
                      <div className="fb" style={{ background: "transparent" }}>
                        <Link
                          to={item.fb}
                          style={{ background: "transparent" }}>
                          <img src={Icon_fb} style={{ width: "70%" }} alt="" />
                        </Link>
                      </div>
                    )}

                    {item.insta.length > 5 && (
                      <div
                        className="insta"
                        style={{ background: "transparent" }}>
                        <Link
                          className=" mx-auto p-0 inline-flex"
                          to={item.insta}
                          style={{ background: "transparent" }}>
                          <img
                            src={Icon_insta}
                            style={{ width: "70%" }}
                            alt=""
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
  );
})}
</div>

        <div className=" inline-flex flex-wrap justify-center gap-2 w-200">
        {members.slice(0, visible).map((item, index) => {
        return (
            <div className="photo w-[45%] h-72 md:w-60 md:h-64" key={item.id}>
                <img
                  src={item.imgSrc}
                  className="image object-cover h-full w-full grayscale"
                />
                <div className="write text-white w-full h-full box-border px-2">
                  <div className="about leading-tight">{item.about}</div>
                  <div className="name text-center font-semibold font-font5">
                    {item.name}
                  </div>
                  <div className="link inline-flex">
                    {item.fb.length > 5 && (
                      <div className="fb" style={{ background: "transparent" }}>
                        <Link
                          to={item.fb}
                          style={{ background: "transparent" }}>
                          <img src={Icon_fb} style={{ width: "70%" }} alt="" />
                        </Link>
                      </div>
                    )}

                    {item.insta.length > 5 && (
                      <div
                        className="insta"
                        style={{ background: "transparent" }}>
                        <Link
                          className=" mx-auto p-0 inline-flex"
                          to={item.insta}
                          style={{ background: "transparent" }}>
                          <img
                            src={Icon_insta}
                            style={{ width: "70%" }}
                            alt=""
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
  );
})}

        </div>
        <div className="otherMembers">
        <Link to={`/${Member_Page}`} style={{width:"100%", display:"flex", justifyContent: "center"}}>
          <button className="btn_others  bg-[#DAFFED] font-bold text-black rounded-xl  hover:cursor-pointer hover:bg-gradient-to-r hover:font-bold from-[#3e3b92] to-[#f44369] hover:text-transparent hover:bg-clip-text">
            SEE  OTHERS
          </button>
        </Link>

        </div>
      </div>
    </>
  );
};

export default Member;

{/* <div
            onClick={others}
            className="inline-flex w-full  h-32 bg-gray-900 transition duration-500 transform hover:bg-gray-950  z-0 rounded-md text-white font-semibold text-3xl  flex-col justify-center px-4 font-font3 cursor-pointer others">
            See Others
          </div> */}
