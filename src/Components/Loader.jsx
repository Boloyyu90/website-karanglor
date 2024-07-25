// src/components/Loader.js
import React from 'react';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loader = ({ loading }) => (
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

export default Loader;
