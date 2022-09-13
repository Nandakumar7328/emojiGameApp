/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    currentList: [],
    isGameInProcess: true,
  }

  resetGame = () => {
    const {currentScore, topScore} = this.state
    if (currentScore > topScore) {
      this.setState({
        topScore: currentScore,
        currentScore: 0,
        isGameInProcess: true,
        currentList: [],
      })
    } else {
      this.setState({currentScore: 0, isGameInProcess: true, currentList: []})
    }
  }

  onResult = () => {
    const {currentScore} = this.state
    return <WinOrLoseCard resetGame={this.resetGame} yourScore={currentScore} />
  }

  onChangeScore = id => {
    const {currentList, currentScore} = this.state
    const isIncludeList = currentList.includes(id)

    if (isIncludeList) {
      this.setState({isGameInProcess: false})
    } else {
      if (currentScore === 11) {
        this.setState({isGameInProcess: false})
      }
      this.setState(prevState => ({
        currentScore: prevState.currentScore + 1,
        currentList: [...prevState.currentList, id],
      }))
    }
  }

  onListOfEmoji = () => {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <ul className="ul-list-container">
        {shuffledEmojisList.map(eachList => (
          <EmojiCard
            key={eachList.id}
            onChangeScore={this.onChangeScore}
            listOfEmoji={eachList}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {currentScore, topScore, isGameInProcess} = this.state

    return (
      <div className="bg-container">
        <NavBar
          isGameInProcess={isGameInProcess}
          currentScore={currentScore}
          topScore={topScore}
        />

        {isGameInProcess ? this.onListOfEmoji() : this.onResult()}
      </div>
    )
  }
}

export default EmojiGame
