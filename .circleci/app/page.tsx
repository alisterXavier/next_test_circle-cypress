/* eslint-disable react/no-unescaped-entities */
'use client';
import { HeaderCarousel } from './Components/Mainsection/headerCarousel';
import { MasonryComp } from './Components/Mainsection/masonrySection';

const MainSection = () => {
  return (
    <main className="main-section">
      <div className="relative flex w-full h-screen">
        <HeaderCarousel />
      </div>
      <div
        style={{
          padding: '10px',
          background: 'var(--testColor)',
          height: '100vh',
        }}
      >
        <MasonryComp />
      </div>
    </main>
  );
};



export default function Home() {
  return (
    <>
      <MainSection />
    </>
  );
}
