import React, {useState} from 'react'
import './member.css'
import Img1 from './assets/Img1.jpeg';
import Icon_fb from './assets/fb1.png';
import Icon_insta from './assets/insta1.png';
import {Link} from 'react-router-dom';


const Member = () => {

    let data=[
    {
        id: 1,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 2,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 3,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 4,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 5,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 6,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 7,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 8,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 9,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 10,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    },
    {
        id: 11,
        imgSrc: Img1,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
        name: "Abc Abc",
        fb: "https://www.facebook.com/",
        insta: "https://www.facebook.com/",
    }
 ]
    const[visible,setVisible] = useState(7);
    const others = ()=>{
        setVisible((prevValue)=> prevValue + 4);
    };

    return (
        <>
        <div className="inline-flex flex-col px-4 md:px-10 lg:px-24 w-full box-border h-fit bg-black">
        <div className="font-black text-5xl text-white my-4 mx-auto center">MEMBERS</div>
        <div className="member">
         {data.slice(0,visible).map((item)=>{
                return(
                    <div className="photo" key={item.id}>
                        <img src={item.imgSrc} className="image"/>
                        <div className="write">
                        <div className="about">
                            {item.about}
                        </div>
                        <div className="name">
                            {item.name}
                        </div>
                        <div className="link">
                          <div className="fb" style={{background:'transparent'}}> <Link to ={item.fb} style={{background:'transparent'}}>  <img src={Icon_fb} style={{width:'20%' }} /> </Link> </div>
                          <div className="insta" style={{background:'transparent'}} > <Link to ={item.insta} style={{background:'transparent'}}>  <img src={Icon_insta} style={{width:'25%' }} /> </Link></div>
                        </div>
                        </div>
                        
                    </div> 
                     )
                    }
                )
         }
        <div onClick={others} className="inline-flex w-full  h-32 bg-gray-900 transition duration-500 transform hover:bg-gray-950  z-0 rounded-md text-white font-semibold text-3xl  flex-col justify-center px-4 font-font3 cursor-pointer others">
          See Others
        </div>
        </div>
        </div>
        </>
        
        )

}

export default Member;
