import './index.css'

const WinOrLoseCard = props => {
  const {yourScore, resetGame} = props
  const winOrNot = yourScore === 12 ? 'You Won' : 'You Lose'
  const bestScoreOrNot = yourScore === 12 ? 'Best Score' : 'Score'
  const imageWinLose =
    yourScore === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onResetGame = () => {
    resetGame()
  }

  return (
    <div className="result-container">
      <div className="btn-and-para-container">
        <h1 className="result-heading">{winOrNot}</h1>
        <p className="result-para">{bestScoreOrNot}</p>
        <p className="score">{yourScore}/12</p>
        <button className="btn" type="button" onClick={onResetGame}>
          Play Again
        </button>
      </div>
      <img src={imageWinLose} className="win-or-lose-img" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
