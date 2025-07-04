import React from 'react';
import Image from 'next/image';
import './globals.css';
import '@/app/layout';
import mission from '@/app/images/mission.png';


export default function Home() {
  return (

    <div className="grid-container">
      <div className="grid-item">
        <Image src={mission} alt="Mission Image" width={500} height={300} /></div>
      <div className="grid-item">
        <h2>Column Two Content</h2>
        <p>This is the content for the second column, often used for sidebars, related information, or advertisements.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
}
// 