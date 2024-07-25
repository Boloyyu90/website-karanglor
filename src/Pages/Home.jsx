// src/Pages/Home.jsx
import React, { useEffect, useState } from 'react';
import Body from './HomePartition/HomeBody';
import Intro from './HomePartition/HomeIntro';
import Loader from '../Components/Loader';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a loading time of 1 second
    
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <>
      <Intro />
      <Body />
    </>
  );
}

export default Home;
