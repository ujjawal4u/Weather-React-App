import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from  './button.jsx' 
import SearchBox from './searchbox.jsx'
import InfoBox from './infobox.jsx'
import WeatherApp from './weatherApp.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp />
    </>
  )
}

export default App
