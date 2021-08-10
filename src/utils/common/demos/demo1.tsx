import React from 'react';
import { isEmpty, getTimeZone } from '../index';

const Demo = () => {
  return (
    <ul>
      <li>{isEmpty('').toString()}</li>
      <li>{isEmpty(0).toString()}</li>
      <li>{getTimeZone()}</li>
    </ul>
  );
};

export default Demo;
