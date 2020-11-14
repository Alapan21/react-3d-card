import React from 'react';
import logo from '../../assets/images/nike2.png';
import './Card.scss';

function Card(props) {

  const x = props.xAxis;
  const y = props.yAxis;
  const anim = props.animation;

  return (
    <div className="card" style={{ transform: `rotateY(${x}deg) rotateX(${y}deg)`, transition: `${anim}` }}>

      <div className="sneaker">
        <div className="circle"></div>
        <img src={logo} alt="" />
      </div>

      <div className="info">
        <h1 className="title">Nike ZX1</h1>
        <h3 className="description">Track Ready Lightweight with Comfort</h3>

        <div className="sizes">
          <button className="btn-primary active">7</button>
          <button className="btn-primary">8</button>
          <button className="btn-primary">9</button>
          <button className="btn-primary">10</button>
          <button className="btn-secondary">More..</button>
        </div>

        <div className="purchase">
          <button className="btn-purchase">Purchase</button>
        </div>

      </div>
    </div>
  )
}

export default Card
