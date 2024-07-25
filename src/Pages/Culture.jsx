import React, { useEffect, useState } from 'react';
import Intro from './CulturePartition/CultureIntro';
import Body from './CulturePartition/CultureBody';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
`;

function Culture() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a loading time of 5 seconds
    
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <PropagateLoader
          color="#7DA148"
          loading={loading}
          css={override}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="w-full bg-transparent">
      <Intro />
      <Body />
    </div>
  );
}

export default Culture;
