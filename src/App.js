import React, { useState } from 'react';
import Card from './Components/Card/Card';


function App() {

  //! sets the 3d transform angle
  function fun(e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
    setXa(xAxis);
    setYa(yAxis);
  }

  //! mouse enter container
  function enter(e) {
    setAnim("none");
  }

  //! mouse leaves container
  function back(e) {
    setAnim("all 0.5s ease");
    setXa(0);
    setYa(0);
  }
  //
  const [xA, setXa] = useState(0);
  const [yA, setYa] = useState(0);
  const [anim, setAnim] = useState("none");
  //
  return (
    <div className="container" onMouseMove={fun} onMouseLeave={back} onMouseEnter={enter}>
      <Card xAxis={xA} yAxis={yA} animation={anim} />
    </div>
  )
}

export default App
