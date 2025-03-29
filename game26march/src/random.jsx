import './App.css'
import { useState, useEffect } from 'react'

export default function Ran({ 
    setScore,
    setStrike, 
    setFlip, 
    gameOver, 
    setGameOver,
    resetTrigger 
}) {    
    let a = '/photos/'
    const cardList = ['goldrogger.jpg','luffy.jpg','mihawk.jpg','nami.jpg','sanji.jpg','shanks.jpg','zoro.jpg','goldrogger.jpg','luffy.jpg','mihawk.jpg','nami.jpg','sanji.jpg','shanks.jpg','zoro.jpg','strike.jpg','strike.jpg']
    
    const shuffleCards = (array) => {
        const newArray = [...array]
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
        }
        return newArray
    }

    let [cards, setCards] = useState(shuffleCards(cardList).map((card, index) => ({
        id: index,
        value: card,
        isFlipped: false,
        isMatched: false
    })))
    let [firstCard, setFirstCard] = useState(null)

    useEffect(() => {
        const shuffledCards = shuffleCards(cardList)
        setCards(shuffledCards.map((card, index) => ({
            id: index,
            value: card,
            isFlipped: false,
            isMatched: false
        })))
        setFirstCard(null)
    }, [resetTrigger])

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
                        alt={card.value}
                    />
                </div>
            ))}
        </div>
    )
}
