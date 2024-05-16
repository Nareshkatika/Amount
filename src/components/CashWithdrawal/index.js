// Write your code here
import {useState} from 'react'
import './index.css'
import Solution from '../DenominationItem'

const CashWithdrawal = props => {
  const {denominationsList} = props
  const [amount, setAmount] = useState(2000)
  const Answer = value => {
    setAmount(amount - value)
  }
  return (
    <div className="BgImg">
      <div className="rowArrangeEl1">
        <p className="para2">S</p>
        <p className="para1">Sarah Williams </p>
      </div>
      <div className="rowArrangeEl2">
        <p className="para3">Your Balance</p>
        <div>
          <p className="whiteEl">{amount}</p>
          <p className="para3">In Rupees</p>
        </div>
      </div>
      <p className="headingEl2">Withdraw</p>
      <p className="para3 ">CHOOSE SUM (IN RUPEES)</p>
      <ul className="wrapArrangeEl">
        {denominationsList.map(eachItem => (
          <Solution Answer={Answer} key={eachItem.id} items={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default CashWithdrawal
