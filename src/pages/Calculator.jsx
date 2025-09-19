import React from "react";

function Calculator() {

  function calculate() {
    let speed = document.getElementById("speed").value;     
    let distance = document.getElementById("distance").value; 
    let time = document.getElementById("time").value;       
    let result = "";

    if (speed == "" && distance != "" && time != "") {
      let s = (distance / (time / 60)).toFixed(2);
      result = "Speed = " + s + " km/h";
      document.getElementById("speed").value = s;
    } 
    else if (distance == "" && speed != "" && time != "") {
      let d = (speed * (time / 60)).toFixed(2);
      result = "Distance = " + d + " km";
      document.getElementById("distance").value = d;
    } 
    else if (time == "" && speed != "" && distance != "") {
      let t = ((distance / speed) * 60).toFixed(2);
      result = "Time = " + t + " minutes";
      document.getElementById("time").value = t;
    } 
    else {
      result = "Enter any two values!!";
    }

    document.getElementById("result").innerText = result;
  }

  return (
    <>
    <style>
      {`
        .calculator {
          width: 300px;
          height: 300px;
          margin: 100px auto;
          padding: 20px;
          border: 1px solid;
          text-align: center;
          background-color: lightblue;
        }
        
        .calculator input {
          margin: 5px 0;
          padding: 5px;
          width: 120px;
        }
        .calculator button {
          margin: 10px;
          padding: 10px;
        }
        .calculator p {
          margin-top: 15px;
          font-weight: bold;
        }
      `}
    </style>

    <div className="calculator">
      <h2>Speed-Distance-Time Calculator</h2>
      <div>
        <input id="speed" placeholder="Speed" /> km/h
      </div>
      <div>
        <input id="distance" placeholder="Distance" /> km
      </div>
      <div>
        <input id="time" placeholder="Time" /> mins
      </div>
      <button onClick={calculate}>Calculate</button>
      <p id="result"></p>
    </div>
    </>
  )
}

export default Calculator;
