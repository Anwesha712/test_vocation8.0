import React from 'react'
import Icon_fb from "../assets/icon_fb.webp";
import Icon_insta from "../assets/icon_insta.webp";
import { Link } from "react-router-dom";
export const MemberCard = ({item}) => {
  return (
    
          <div className="a_photo w-[45%] h-72 md:w-60 md:h-64 " key={item.id}>
                {/* <img
                  src="https://drive.google.com/file/d/11uVqKHl6fLWnjjg_-F5kakREYDiXpLWa/view?usp=sharing"
                  className="image object-cover h-full w-full"
                /> */}
                <iframe src={item.imgSrc} width="100%"  height="100%"  className="image object-cover h-full w-full grayscale "></iframe>
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
            
          
  )
}
