import React from 'react';

const SideBar = (props) => {
  return (
    <div className="side-nav">
      <h1> Notable </h1>
      <div>
        <h3> PHYSICIANS </h3>
        <ul>
          {props.physicians.map(dr => {
            if (dr.id === props.selected) {
              return (
                <li className="selected" key={dr.id} onClick={() => props.getAppts(dr.id)}> {dr.lastName}, {dr.firstName} </li>
              )
            } else {
              return (
                <li key={dr.id} onClick={() => props.getAppts(dr.id)}> {dr.lastName}, {dr.firstName} </li>
              )
            }
          })}
        </ul>
        <div id="logout">
          <button className="logout-btn"> Logout </button>
        </div>
      </div>
    </div>
  )
}

export default SideBar;
