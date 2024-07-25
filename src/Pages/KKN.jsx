// src/Pages/KKN.jsx
import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader';

function KKN() {
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

  return <div>KKN</div>;
}

export default KKN;
