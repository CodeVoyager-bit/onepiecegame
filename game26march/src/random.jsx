import './App.css'
import { useState ,useEffect} from 'react'

// export default function Ran() {
//   // export default function Ran(){
//   //   let a='./photos/'
//     // let [isflip,changeinflip]=useState(true)
//     let l=['goldrogger.jpg','luffy.jpg','mihawk.jpg','nami.jpg','sanji.jpg','shanks.jpg','zoro.jpg','goldrogger.jpg','luffy.jpg','mihawk.jpg','nami.jpg','sanji.jpg','shanks.jpg','zoro.jpg','strike.jpg','strike.jpg']
//   for (let i=l.length-1;i>0;i--) {
//     const j =Math.floor(Math.random()*(i+1)); // Random index
//     [l[i],l[j]]=[l[j],l[i]]; // Swap elements
//   }
//   // return   <div style={{width:'90%',color:'white',backgroundColor: 'black'}}>
//   //   {l.map((w)=><div class={`card${isflip ? 'flip':''}`} onClick={()=>changeinflip(!isflip)} style={{border:'10px solid transparent',display:'inline',height:'100px',width:'100px'}}><img  height={'200px'} width={'250px'} src={a+w}/></div>)}
//   //  {console.log(isflip)}
//   //  </div>

//     let a = './photos/'
//     let [cards, setCards] = useState(l.map((card, index) => ({
//         id: index,
//         value: card,
//         isFlipped: false,
//         isMatched: false
//     })))
//     let [firstCard, setFirstCard] = useState(null)
//     // let [secondCard, setSecondCard] = useState(null)

//     const handleCardClick = (index) => {
//         if (cards[index].isMatched || cards[index].isFlipped) return;
        
//         const newCards = [...cards]
//         newCards[index].isFlipped = true
//         setCards(newCards)

//         if (firstCard === null) {
//             setFirstCard(index)
//         } else {
//             // setSecondCard(index)
//             checkMatch(firstCard, index)
//         }
//     }

//     const checkMatch = (first, second) => {
//         if (cards[first].value === cards[second].value) {
//             const newCards = [...cards]
//             newCards[first].isMatched = true
//             newCards[second].isMatched = true
//             setCards(newCards)
//             setScore(prev => prev + 1)
//         } else {
//             setTimeout(() => {
//                 const newCards = [...cards]
//                 newCards[first].isFlipped = false
//                 newCards[second].isFlipped = false
//                 setCards(newCards)
//             }, 1000)
//         }
//         setFirstCard(null)
//         setSecondCard(null)
//     }

//     return <div style={{width:'90%', color:'white', backgroundColor:'black'}}>
//         {cards.map((card, index) => (
//             <div 
//                 key={index}
//                 className={`card ${card.isFlipped ? 'flipped' : ''}`} 
//                 onClick={() => handleCardClick(index)}
//                 style={{
//                     border:'10px solid transparent',
//                     display:'inline-block',
//                     height:'200px',
//                     width:'250px',
//                     cursor: 'pointer',
//                     perspective: '1000px',
//                     // transform: card.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
//                     // transition: 'transform 0.6s'
//                 }}
//             >
//                 <img 
//                     height={'200px'} 
//                     width={'250px'} 
//                     src={card.isFlipped ? a + card.value : a + 'onepeice.jpg'}
//                 />
//             </div>
//         ))}
//     </div>
// }
// {/* <div class={`card${isflip ? 'flip':''}`} onClick={()=>changeinflip(!isflip)} style={{border:'10px solid transparent',display:'inline',height:'100px',width:'100px'}}><img  height={'200px'} width={'250px'} src={a+w}/></div> */}

// // import './App.css'
// // import { useState } from 'react'

// // export default function Ran(){
// //     let a='./photos/'
// //     let [isflip,changeinflip]=useState(true)
// //     let l=['goldrogger.jpg','luffy.jpg','mihawk.jpg','nami.jpg','sanji.jpg','shanks.jpg','zoro.jpg','goldrogger.jpg','luffy.jpg','mihawk.jpg','nami.jpg','sanji.jpg','shanks.jpg','zoro.jpg','strike.jpg','strike.jpg']
// //   for (let i=l.length-1;i>0;i--) {
// //     const j =Math.floor(Math.random()*(i+1)); // Random index
// //     [l[i],l[j]]=[l[j],l[i]]; // Swap elements
// //   }console.log(l)
// //   return   <div style={{width:'90%',color:'white',backgroundColor: 'black'}}>
// //     {l.map((w)=><div class={`card${isflip ? 'flip':''}`} onClick={()=>changeinflip(!isflip)} style={{border:'10px solid transparent',display:'inline',height:'100px',width:'100px'}}><img  height={'200px'} width={'250px'} src={a+w}/></div>)}
// //    {console.log(isflip)}
// //    </div>
// // }
export default function Ran({ 
    score, 
    setScore, 
    strike, 
    setStrike, 
    flip, 
    setFlip, 
    gameOver, 
    setGameOver,
    resetTrigger 
}) {    let a = './photos/'
    let l=['goldrogger.jpg','luffy.jpg','mihawk.jpg','nami.jpg','sanji.jpg','shanks.jpg','zoro.jpg','goldrogger.jpg','luffy.jpg','mihawk.jpg','nami.jpg','sanji.jpg','shanks.jpg','zoro.jpg','strike.jpg','strike.jpg']
  for (let i=l.length-1;i>0;i--) {
    const j =Math.floor(Math.random()*(i+1)); // Random index
    [l[i],l[j]]=[l[j],l[i]]; // Swap elements
  }
    let [cards, setCards] = useState(l.map((card, index) => ({
        id: index,
        value: card,
        isFlipped: false,
        isMatched: false
    })))
    let [firstCard, setFirstCard] = useState(null)
    // let [gameOver, setGameOver] = useState(false)

    const handleCardClick = (index) => {
        if (gameOver || cards[index].isMatched || cards[index].isFlipped) return;
        
        const newCards = [...cards]
        newCards[index].isFlipped = true
        setCards(newCards)

        // Check if clicked on strike card
        if (cards[index].value === 'strike.jpg') {
            setStrike(prev => {
                const newStrike = prev - 1
                if (newStrike === 0) setGameOver(true)
                return newStrike
            })
            setTimeout(() => {
                newCards[index].isFlipped = false
                setCards(newCards)
            }, 1000)
            return
        }

        if (firstCard === null) {
            setFirstCard(index)
        } else {
            checkMatch(firstCard, index)
        }
    }

    const checkMatch = (first, second) => {
        if (cards[first].value === cards[second].value) {
            const newCards = [...cards]
            newCards[first].isMatched = true
            newCards[second].isMatched = true
            setCards(newCards)
            setScore(prev => prev + 1)
            setFlip(prev => prev + 1)
        } else {
            setTimeout(() => {
                const newCards = [...cards]
                newCards[first].isFlipped = false
                newCards[second].isFlipped = false
                setCards(newCards)
            }, 1000)
        }
        setFirstCard(null)
    }

    return (
        <div style={{width:'90%', color:'white', backgroundColor:'black', position: 'relative'}}>
            {gameOver && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '50px',
                    color: 'red',
                    zIndex: 1000
                }}>
                    GAME OVER!
                </div>
            )}
            {cards.map((card, index) => (
                <div 
                    key={index}
                    className={`card ${card.isFlipped ? 'flipped' : ''}`} 
                    onClick={() => handleCardClick(index)}
                    style={{
                        border:'10px solid transparent',
                        display:'inline-block',
                        height:'200px',
                        width:'250px',
                        cursor: 'pointer',
                        opacity: gameOver ? 0.5 : 1
                    }}
                >
                    <img 
                        height={'200px'} 
                        width={'250px'} 
                        src={card.isFlipped ? a + card.value : a + 'onepeice.jpg'}
                    />
                </div>
            ))}{
    useEffect(()=>{setCards(l.map((card, index) => ({
            id: index,
            value: card,
            isFlipped: false,
            isMatched: false
        })))
        setFirstCard(null)}, [resetTrigger])}
        </div>
    )
}
// export default function Ran({ 
//     score, 
//     setScore, 
//     strike, 
//     setStrike, 
//     flip, 
//     setFlip, 
//     gameOver, 
//     setGameOver,
//     resetTrigger 
// }) {
//     // ... existing code ...

//    useEffect(() => {
//         // Reset all cards when resetTrigger changes
//         setCards(l.map((card, index) => ({
//             id: index,
//             value: card,
//             isFlipped: false,
//             isMatched: false
//         })))
//         setFirstCard(null)
//     }, [resetTrigger])

//     // ... rest of the code ...
// }