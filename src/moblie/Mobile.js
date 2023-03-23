import React, { useState } from 'react';
import './Mobile.css';
const Mobile = () => {
  const [countDown, setCountDown] = useState(100)
  function BatteryCountDown(){
    const newCountDown = countDown - 10;
    if(countDown < 10){
      return
    }
    else{
      setCountDown(newCountDown)
    }
    
  }
  return (
    <div className='mobile-batter'>
     <h1>Mobile Battery</h1>
     <h3>Battery down: {countDown}</h3>
     <button onClick={BatteryCountDown} className='btn btn-primary'>Battery down</button>
    </div>
  );
};

export default Mobile;