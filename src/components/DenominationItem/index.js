// Write your code here
import './index.css'

const Solution = props => {
  const {items, Answer} = props
  const {value} = items

  const removeEl = () => {
    Answer(value)
  }
  return (
    <li className="listEl">
      <p>
        <button onClick={removeEl} className="buttonEl2" type="button">
          {value}
        </button>
      </p>
    </li>
  )
}

export default Solution
