// import { useState, useEffect } from 'react'

// export default function Sidebar({ score, onReload }){
//     let a='./photos/'
//     let [strike, setStrike] = useState(3)
//     let [flip, setFlip] = useState(0)
//     let [maxscore, setMaxscore] = useState(0)

//     useEffect(() => {
//         setMaxscore(prev => Math.max(prev, score))
//     }, [score])

//     const handleReload = () => {
//         setStrike(3)
//         setFlip(0)
//         onReload && onReload()
//     }

//     return (
//         <div style={{marginBottom:'0px',backgroundColor:'#043026',width:'30%',color:'white'}}>
//             <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>Score</h1></div>
//             <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{score}</h1>
//             <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>Flip</h1></div>
//             <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{flip}</h1>
//             <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>Strike Left</h1></div>
//             <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{strike}</h1>
//             <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>High Score</h1></div>
//             <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{maxscore}</h1>
//             <img 
//                 height='70px' 
//                 width='70px' 
//                 style={{
//                     backgroundColor:'#043026',
//                     marginLeft:'150px',
//                     marginBottom:'10px',
//                     cursor: 'pointer'
//                 }} 
//                 src={`${a+'reload.jpeg'}`}
//                 onClick={handleReload}
//             />
//         </div>
//     )
// }
// // import { useState } from 'react'
// // // import Ran from './random.jsx'
// // export default function Sidebar(){
// //     let a='./photos/'
// //   let [score,changescore]=useState(0)
// //   let [strike,changestrike]=useState(3)
// //   let [flip,changeflip]=useState(0)
// //   let [maxscore,changemaxscore]=useState(0)
// //    return  <div style={{marginBottom:'0px',backgroundColor:'#043026',width:'30%',color:'white'}}>
// //    <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>Score</h1></div>
// //    <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{score}</h1>
// //  <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>Flip</h1></div>
// //    <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{flip}</h1>
// //    <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>Strike Left</h1></div>
// //    <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{strike}</h1>
// //   <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>High Score</h1></div>
// //    <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{maxscore}</h1>
// //     <img   height='70px' width='70px' style={{backgroundColor:'#043026' ,marginLeft:'150px',marginBottom:'10px'}} src={`${a+'reload.jpeg'}`} />
// //    </div>
// // }
export default function Sidebar({ score, maxScore, strike, flip, onReload,gameWon }){
    let a='./photos/'

    return (
        <div style={{marginBottom:'0px',backgroundColor:'#043026',width:'30%',color:'white'}}>
            <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>Score</h1></div>
            <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{score}</h1>
            <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>Pairs Found</h1></div>
            <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{flip}</h1>
            <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>Strike Left</h1></div>
            <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{strike}</h1>
            <div><h1 style={{backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>High Score</h1></div>
            <h1 style={{marginTop:'0px',backgroundColor:'#043026',color:'white',fontSize:'50px',textAlign:'center'}}>{maxScore}</h1>
            <img 
                height='70px' 
                width='70px' 
                style={{
                    backgroundColor:'#043026',
                    marginLeft:'150px',
                    marginBottom:'10px',
                    cursor: 'pointer'
                }} 
                src={`${a+'reload.jpeg'}`}
                onClick={onReload}
            />
             <div>
                <h1 style={{
                    backgroundColor:'#043026',
                    color: gameWon ? 'gold' : 'white',
                    fontSize:'50px',
                    textAlign:'center'
                }}>
                    {gameWon ? 'Congratulations!' : ''}
                </h1>
            </div>
        </div>
    )
}
