import './Use.css'
import React, { useRef, useState, useEffect } from 'react';

function use({ setMenu }) {

  useEffect(() => {
    setMenu('Use')
  }, []);

  return (
    <div className='Use'>

    </div>
  )
}

export default use