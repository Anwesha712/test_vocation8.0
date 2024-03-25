import React, { useState } from "react";
import "./member.css";
import Icon_fb from "./assets/icon_fb.png";
import Icon_insta from "./assets/icon_insta.png";
import { Link } from "react-router-dom";
import { members } from "./dataSet";
const Member = () => {
  const [visible, setVisible] = useState(11);
  const others = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <>
      <div className="inline-flex flex-col px-2 md:px-10 lg:px-48 w-full box-border h-fit bg-black">
        <div className="font-black text-5xl text-white my-4 mx-auto center">
          MEMBERS
        </div>
        <div className=" inline-flex flex-wrap justify-center gap-2 w-full">
          {members.slice(0, visible).map((item) => {
            return (
              <div className="photo w-[45%] h-72 md:w-60 md:h-64" key={item.id}>
                <img
                  src={item.imgSrc}
                  className="image object-cover h-full w-full"
                />
                <div className="write text-white w-full h-full box-border px-2">
                  <div className="about leading-tight">{item.about}</div>
                  <div className="name text-center font-semibold">
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
          {/* <div
            onClick={others}
            className="inline-flex w-full  h-32 bg-gray-900 transition duration-500 transform hover:bg-gray-950  z-0 rounded-md text-white font-semibold text-3xl  flex-col justify-center px-4 font-font3 cursor-pointer others">
            See Others
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Member;
