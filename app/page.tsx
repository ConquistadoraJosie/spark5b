import React from 'react';
import Image from 'next/image';
import './globals.css';
import '@/app/layout';
import mission from '@/app/images/mission.png';


export default function Home() {
  return (

    <main className="main-content">
      <div className="column-left">
        <h2>Welcome to Our Site!</h2>
        <p>This is the primary content area. You can place important information, articles, or features here.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="column-right">
        <h2>Sidebar Content</h2>
        <p>This column is perfect for secondary content like ads, related links, or user profiles.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </main>
  );
}
// 