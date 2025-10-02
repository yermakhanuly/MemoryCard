import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './Components/Body'
import Header from './Components/Header'
import Body from './Components/Body'
function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  function handleCardClick(name){
    if(clicked.includes(name)){
      setScore(0);
      setClicked([]);
    }
    else{
      setScore(score + 1);

      if(score + 1 > bestScore) setBestScore(score + 1);

      setClicked([...clicked, name]);
    }
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />

      <Body onCardClick={handleCardClick} />
    </>
    
  )
  
}

export default App
