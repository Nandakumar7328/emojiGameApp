import './index.css'

const EmojiCard = props => {
  const {listOfEmoji, onChangeScore} = props
  const {emojiName, emojiUrl, id} = listOfEmoji

  const onClickEmoji = () => {
    onChangeScore(id)
  }

  return (
    <li className="li-container">
      <button className="btn-emoji" onClick={onClickEmoji} type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-resize" />
      </button>
    </li>
  )
}

export default EmojiCard
