import React from 'react'
import "./ev_page.css";
import Img1 from "./assets/Img1.jpeg"
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Ev_page() {
  return (
    <>
    <Navbar className="hidden lg:relative" />
    <div className="ev_page_main bg-black text-white">
    <div className="hero_pic">
        <img src={Img1} />
    </div>
    <h1 style={{textAlign:'center',fontSize:'50px'}}>HEADING</h1>
    <div className="ev_body">
      <div className="ev_left">
        <div className="ev_leftTop">
          <h1 style={{fontSize:'30px'}} >GUIDELINE</h1>
          <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur, Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sint aspernatur asperiores voluptates ad optio error ratione non tempore dolore! Provident doloribus, magnam quibusdam suscipit laudantium libero enim sint soluta necessitatibus neque alias illo recusandae praesentium esse quisquam optio, temporibus reprehenderit earum labore culpa dignissimos incidunt quis maiores nam? Repellat. ipsum dolor sit amet consectetur adipisicing elit. Eos inventore eaque cumque, saepe natus doloremque a aut consequuntur odio itaque omnis quo repellat ratione nobis. Repellat voluptatibus enim, beatae accusantium iure similique reiciendis natus explicabo amet laudantium sit, commodi illo sint necessitatibus voluptates ipsum voluptatem expedita ducimus nisi impedit aliquam? adipisicing elit. Repellendus nihil, perspiciatis dolore architecto fugiat dicta autem debitis ea culpa. Ad, culpa quasi. Voluptate minus et esse quidem maxime, quisquam inventore ullam obcaecati fuga culpa fugit eveniet repellat mollitia maiores? Cupiditate minima veritatis quis explicabo ratione vitae quas, aut fuga voluptas. dolor sit amet consectetur adipisicing elit. Unde est vel, commodi inventore possimus minima animi ullam deleniti dolorum veniam nemo temporibus perferendis, totam aspernatur labore officiis consectetur, nulla facere eius. Ex laboriosam tempore optio. Dolorem voluptate nihil, fuga at minus autem omnis animi tenetur voluptatum quae pariatur atque asperiores voluptatem labore necessitatibus, ea consequatur possimus numquam? Doloremque recusandae facere rerum itaque suscipit iusto, culpa est repudiandae? At quo ipsa neque, architecto, modi voluptatum maiores, unde nam dolore odio recusandae? Veniam, corrupti reprehenderit. Ullam rerum laudantium vel dolorum itaque! Rem inventore repellat id autem recusandae ipsa corrupti maxime quo non!</p>       
        </div>
        <div className="prelims">
        <h2 style={{fontSize:'30px'}}>PRELIMS</h2>
        <span>Date : <span>abc</span> </span>
        <span>Time : <span>abc</span> </span>
        <span>Venue : <span>abc</span> </span>
      </div>
      <div className="finals">
        <h2 style={{fontSize:'30px'}}>FINALS</h2>
        <span>Date : <span>abc</span> </span>
        <span>Time : <span>abc</span> </span>
        <span>Venue : <span>abc</span> </span>
      </div>
      </div>
        <div className="ev_right">
        <h2 style={{fontSize:'30px'}}>COORDINATORS</h2>
        <p>ABC - 99876134287</p>
        <p>ABC - 99876134287</p>
        <h3 style={{fontSize:'24px'}}>DEADLINE</h3>
        <p>DDyymm</p>
        <button className='btn'>REGISTER HERE</button>
        </div>
      </div>
    </div>
    <Footer />

    </>
  )
}
