import '../Style/main.css'

function Header({score = 0, bestScore = 0}){
    return (
        <header>
            <div className="headerBlock">
            <h1 className="headerText">Memory Card Game</h1>

            <div className='showScore'>
                <p>Score: {score}</p>
                <p>Best Score: {bestScore} </p>
            </div>
            
            </div>

            <p style={{fontSize: '20px'}}>Get points by clicking on an image but don't click on any more than once!</p>
        </header>
        
    )
}

export default Header;