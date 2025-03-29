import './App.css'
import Ran from './random.jsx'
import Sidebar from './sidebar.jsx'
import { useState,useEffect} from 'react'

// function App() {
//   const [score, setScore] = useState(0)
//   const [maxScore, setMaxScore] = useState(0)
  
//   return (
//     <div style={{display:'flex'}}>
//       <Ran score={score} setScore={setScore} />
//       <Sidebar score={score} maxScore={maxScore} />
//     </div>
//   )
// }

// export default App

// // import { useState } from 'react'
// // import './App.css'
// // import Ran from './random.jsx'
// // import Sidebar from './sidebar.jsx'

// // function App() {
// //   // let a='./photos/'
// //   // let [score,changescore]=useState(0)
// //   // let [strike,changestrike]=useState(3)
// //   // let [flip,changeflip]=useState(0)
// //   // let [maxscore,changemaxscore]=useState(0)
// //   // { changemaxscore(Math.max(score,maxscore))}
  
// //   return (<div style={{display:'flex'}}>
// //     <Ran/>
// //    <Sidebar/>
   
// //     </div>
// //       )
// // }

// // export default App


function App() {
  const [score, setScore] = useState(0)
  const [strike, setStrike] = useState(3)
  const [flip, setFlip] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [resetTrigger, setResetTrigger] = useState(0)  // Add this line

  useEffect(() => {
    setMaxScore(prev => Math.max(prev, score))
  }, [score])

  const handleReload = () => {
    setScore(0)
    setStrike(3)
    setFlip(0)
    setIsGameOver(false)
    setResetTrigger(prev => prev + 1)  // Add this line
  }
  
  return (
    <div style={{display:'flex'}}>
      <Ran 
        score={score} 
        setScore={setScore}
        strike={strike}
        setStrike={setStrike}
        flip={flip}
        setFlip={setFlip}
        gameOver={isGameOver}
        setGameOver={setIsGameOver}
        resetTrigger={resetTrigger}  // Add this line
      />
      <Sidebar 
        score={score} 
        maxScore={maxScore}
        strike={strike}
        flip={flip}
        onReload={handleReload}
      />
    </div>
  )
}
export default App