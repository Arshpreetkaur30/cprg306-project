<<<<<<< HEAD
import React from 'react';
import Clock from './local-clock'; 

const LocalTimeBackground = ({ time }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src="/local_clock.webp" alt="Local Clock Background" 
           className="absolute w-full h-full object-cover z-0 opacity-50" />
      <div className="flex flex-col items-center justify-center w-full h-full absolute z-15">
        <Clock time={time} />
      </div>
    </div>
  );
};

=======
import React from 'react';
import Clock from './local-clock'; 

const LocalTimeBackground = ({ time }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src="/local_clock.webp" alt="Local Clock Background" 
           className="absolute w-full h-full object-cover z-0 opacity-50" />
      <div className="flex flex-col items-center justify-center w-full h-full absolute z-15">
        <Clock time={time} />
      </div>
    </div>
  );
};

>>>>>>> a94ee18406908d1f64985510a400b32b67515cb2
export default LocalTimeBackground;