import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';
import "./MemberPage.css";
import FormResponse from './assets/FormResponse.csv';
import { MemberCard } from './utils/MemberCard';
import Navbar from "./Navbar";
import Footer from "./Footer";

export const MemberPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(FormResponse);
      const text = await response.text();
      const parsedData = Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar/>
      <div className="allmembers gap-4 bg-black">
      {data.length ? (
        data.map((element, index) => {
          const obj = {
            name: element.Name,
            id: index,
            about: element.About,
            imgSrc: element.imgSrc+"/preview",
            fb: element.Facebook,
            insta: element.Instagram,
          };
          console.log(obj.imgSrc);
          return <MemberCard key={index} item={obj} />  ;
        })
      ) : (
        <p>Loading...</p>
      )}
      </div>
      <Footer/>
    </>
  );
};
