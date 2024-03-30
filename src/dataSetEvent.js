import Img1 from "./assets/Img1.webp";
import Img2 from "./assets/Img2.webp";
import rap from "./assets/rap.jpg";
import Wow from "./assets/wow.jpeg";
import ekant from "./assets/ekant.png";
import amp from "./assets/amp.jpeg";
import sync from "./assets/sync.png";
import come from "./assets/comings.png";
import ant from "./assets/ant.jpeg";
const eventData = [
  {
    id: 1,
    imgSrc: rap,
    guide: `	Each round must not exceed 1-3 minutes, with an overall event limit of 4 minutes (3+1). 
      	Offensive language or inappropriate content is strictly prohibited. 
      	Rappers will be evaluated based on lyrical content, flow, delivery, and creativity. 
      	Respect towards opponents and judges is mandatory; failure to comply will result in disqualification. 
      	The registration fee for Havoc is Rs. 70. (non-refundable)
      `,
    headline: "Hip-Hop Havoc",
    cdName1: "Sampreeti Das",
    cdNumber1: "9903090975",
    cdName2: "Joyorshi De",
    cdNumber2: "9432669245",
    deadline: "7th April",
    finalDate: "7th April",
    finalTime: "9:30 AM",
    finalVenue: "MSIT Campus",
    formUrl: "https://forms.gle/7d68JMjBpon56pGv7",
    btnName: "REGISTER HERE",
  },
  {
    id: 2,
    imgSrc: Wow,
    guide: `	The program will commence promptly at 9:30 am. 
        	Participants can choose to recite a piece of writing in English, Hindi, or Bengali, or they can recite their own compositions in the mentioned languages. 
        	There is a rigorous 4-minute time limit. Evaluations will be made exclusively based on the participant's performance and presentation. The judges' verdict shall be considered final. 
          Wings of Words registration is Rs. 70. (non-refundable).
         `,
    headline: "Wings of Words",
    cdName1: "Sampreeti Das",
    cdNumber1: "9903090975",
    cdName2: "Parag Chakraborty ",
    cdNumber2: "8013139984",
    deadline: "7th April",
    finalDate: "7th April",
    finalTime: "9:30 AM",
    finalVenue: "MSIT Campus",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzyLf-8tI7RQSxMCDorKQ2Fw3zpBtL3n6xCpdXPsmlH4AwiA/viewform?usp=sf_link",
    btnName: "REGISTER HERE",
  },
  {
    id: 3,
    imgSrc: ekant,
    guide: `	The program will commence promptly at 09:30 am.
          	Participants may utilize backing tracks, to be uploaded to a pen drive. Another individual may accompany them with a musical instrument or an electronic Tanpura.
            There's a strict 4-minute time limit, including 1 minute for sound check and 3 minutes for performance.
          	Mashups are not allowed; contestants must perform one full song.
          	Evaluation is solely based on the vocalist's performance, with the judges' decision being final.
          	The registration fee for Ekant is Rs. 100 (non-refundable).
          `,
    headline: "Ekant",
    cdName1: "Patatri Sinha",
    cdNumber1: "9088641494",
    cdName2: "Sarban Bose",
    cdNumber2: "8697377856",
    deadline: "7th April",
    finalDate: "7th April",
    finalTime: "9:30 AM",
    finalVenue: "MSIT Campus",
    formUrl:
      "https://docs.google.com/forms/d/1DhJKWlb_b3eQH7BUhzvku2hh2ibDYvepLjCExODDAkc/edit#settings",
    btnName: "REGISTER HERE",
  },
  {
    id: sync,
    imgSrc: sync,
    guide: `	The program will commence promptly at 9.30 am.
          	The participating band is expected to bring all of the musical equipments. There will only be a five-piece drum kit available. 
            Bands must perform within a 15-minute time limit, including a 3- minute sound check and 12-minute performance, with a minimum of four and a maximum of eight members. 
          	Any profane or inappropriate behavior will result in immediate disqualification of the band. The judges’ verdict shall be considered as final, depending upon the band’s performance and time management. 
          	The Sync registration fee is Rs. 600.(non-refundable).
          `,
    headline: "Sync",
    cdName1: "Sammonnay Sarcar",
    cdNumber1: "7605802236",
    cdName2: "Joyorshi De",
    cdNumber2: "9432669245",
    deadline: "7th April",
    finalDate: "7th April",
    finalTime: "9:30 AM",
    finalVenue: "MSIT Campus",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdUxyXQRpiC--rIubXxmwtA_ZKVjIJdARhm7mJt8OT3gZEa-A/viewform?usp=sf_link",
    btnName: "REGISTER HERE",
  },
  {
    id: 5,
    imgSrc: amp,
    guide: `	The program will commence promptly at 9:30 am.
          	Participants are required to bring all their musical equipments, only a drum kit will be provided. The performance must adhere to a 4-minute time limit, including 1 minute for sound check and 3 minutes for the performance.
          	The performance will be the only factor used to make the decision. The decision-making process will solely be based on the performance exhibited by the participants. The verdict rendered by the judges shall be regarded as conclusive and final.
          	The Amplify registration fee is Rs. 70.(not refundable)
          `,
    headline: "Amplify",
    cdName1: "Parag Chakraborty",
    cdNumber1: "8013139984",
    cdName2: "Srinjoy Ghosh",
    cdNumber2: "7059815797",
    deadline: "7th April",
    finalDate: "7th April",
    finalTime: "9:30 AM",
    finalVenue: "MSIT Campus",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeT7l22O88wZuvjv_-8xvYgYrTOfuTbxOdNSCUDyR9VhUEOBw/viewform?usp=sf_link",
    btnName: "REGISTER HERE",
  },
  {
    id: 6,
    imgSrc: ant,
    guide: `	This is an on-the-spot competition where three teams compete in each round, with the winner receiving a CASH PRIZE right away.
          	There will be two people in each team. 
          	The Antakshari standard rules will apply to the event, along with a few amendments. Details about the modifications will be announced during the event. 
            Teams will be instantly eliminated from the competition in case of any if any misconduct or malpractice. 
            The registration fee is Antakshari Rs. 50. (non refundable).
          `,
    headline: "Antakshari",
    cdName1: "Sammonnay Sarcar",
    cdNumber1: "7605802236",
    cdName2: "Sarban Bose",
    cdNumber2: "8697377856",
    deadline: "7th April",
    finalDate: "7th April",
    finalTime: "9:30 AM",
    finalVenue: "MSIT Campus",
    formUrl: "",
    btnName: "ON SPOT REGISTRATION",
  },
];

export { eventData };
