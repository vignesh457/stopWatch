import React,{useState} from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState({hr:0,min:0,sec:0});
  const [timer, setTimer] = useState(null);
  const [status, setStatus] = useState("start");
  var {hr:newHr,min:newMin,sec:newSec}=time;

  const start = ()=>{
    setStatus("pause");
    setTimer(setInterval(run,1000));
    console.log(timer);
  }
  const stop = ()=>{
    setStatus("resume");
    clearInterval(timer);
  }
  const reset = ()=>{
    setStatus("start");
    clearInterval(timer);
    setTime({hr:0,min:0,sec:0});
  }
  const run = ()=>{
    newSec++;
    if(newSec===60){
      newSec=0; newMin++; 
    }
    if(newMin===60){
      newMin=0; newHr++;
    }
    setTime({hr:newHr,min:newMin,sec:newSec});
  }
  return (
    <div className='container'>
        <div className='outerBox'>
        <div className='innerBox'>
            <h2>React Stopwatch</h2>
            <h1>{(time.hr<10)?"0"+time.hr : time.hr}:{(time.min<10)?"0"+time.min : time.min}:{(time.sec<10)?"0"+time.sec : time.sec}</h1>
            <div className='btnCtn'>
                {status==="start" && <button onClick={start}>Start</button>}
                {status==="pause" && <button onClick={stop}>Pause</button>}
                {status==="resume" && <button onClick={start}>Resume</button>}
                {status==="start" && <button disabled onClick={reset}>Reset</button>}
                {status!=="start" && <button onClick={reset}>Reset</button>}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Stopwatch