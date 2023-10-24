import React from 'react';
import Luz from './Luz';
import { useState } from 'react';


const Semaforo = () => {
    const [luzEncendida, setLuzEncendida] = useState(null);


const setLuzOn = (color) => {
    if (luzEncendida === color) {
      setLuzEncendida(null); 
    } else {
      setLuzEncendida(color);
    }
  };

  return (
    <div className="semaforo">
      <Luz color="roja" setLuzOn={setLuzOn} luzOn={luzEncendida} />
      <Luz color="amarilla" setLuzOn={setLuzOn} luzOn={luzEncendida} />
      <Luz color="verde" setLuzOn={setLuzOn} luzOn={luzEncendida} />
    </div>
  );
};

export default Semaforo;