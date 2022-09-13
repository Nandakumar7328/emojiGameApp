import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProcess} = props

  return (
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo-resize"
      />
      <h1 className="logo-heading">Emoji Game</h1>
      {isGameInProcess ? (
        <div className="score-container">
          <p className="scorePara">Score: {currentScore}</p>
          <p className="scorePara">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
