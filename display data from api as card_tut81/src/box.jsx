import React from 'react';

const Box = ({ data }) => {
  return (
    <div className='border-2 p-4 flex flex-col items-center border-white w-72 m-4'>
      <h1 className='text-xl mb-2'>{data.title}</h1>
      <p className='text-xs'>{data.body}</p>
    </div>
  );
};

export default Box;

