import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';
import FormResponse from './assets/FormResponse.csv';
import { MemberCard } from './utils/MemberCard';

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
      {data.length ? (
        data.map((element, index) => {
          const obj = {
            name: element.Name,
            id: index,
            about: element.About,
            imgSrc: element.imgSrc,
            fb: element.Facebook,
            insta: element.Instagram,
          };
          return <MemberCard key={index} item={obj} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
