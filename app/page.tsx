import React from 'react';
import Image from 'next/image';
import './globals.css';
import '@/app/layout';
import mission from '@/app/images/mission.png';


export default function Home() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
      <div className="row">
        <div className="column"><Image src={mission} alt="mission statement" /></div>
        <div className="column">TBP</div>
      </div>
    </>
  );
}
// 