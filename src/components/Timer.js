import React, { useEffect } from 'react'
import { useTimer } from '../hooks/useTimer';
//styles
import './Timer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

export default function Timer() {
    const { tick, playPause, reset, isRunning, timeString, isSession  } = useTimer()

    useEffect(() => {
        let timer
        if (isRunning) {
        timer = setInterval(() => tick(), 1000)
        }
            
        return () => {
            clearInterval(timer)
        }
    }
, [isRunning, tick, isSession])
   //useEffect(() => {
   // if(secondsLeft === 0) {
   //     onAudioPlay()
   // }

   //}, [secondsLeft]

   

  return (
    <div id='timer'>
        <div id='timer-frame'>
            <h2 id='timer-label'>{isSession ? 'Session' : 'Break'}</h2>
            <div id='time-left'>{timeString}</div>
        </div>
        <div id='button-box'>
            <button id='start_stop' className="icon" onClick={() => playPause(Date.now())}>{isRunning ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
            <button id='reset' className="icon" onClick={() => reset()}><FontAwesomeIcon icon={faPowerOff} /></button>
        </div>
    </div>
  )
}