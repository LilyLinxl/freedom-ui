import React from 'react';
import currying from '../index';

const fn = (x: number, y: number) => x + y;
const fn2 = (x: number, y: number, z: number) => x + y + z;

const Demo = () => {
  return (
    <ul>
      <li>{currying(fn)(1, 2)}</li>
      <li>{currying(fn)(1)(2)}</li>
      <li>{currying(fn, 1)(2)}</li>
      <li>{currying(fn, 1, 2)}</li>
      <li>{currying(fn, 1, 2, 3)}</li>
      <li>{currying(fn2)(1)(2)(3)}</li>
    </ul>
  );
};

export default Demo;
