import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from "./state/index"
import { useSelector } from 'react-redux'

const Shop = () => {
  const amount = useSelector(state => state.amount)
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='bkcolor'>
      <h2 className='my-5 '>Deposit/Withdraw Money From Here</h2>
      <h2 className='point'>&#128071;</h2><br />
      <button onClick={() => { actions.withdrawMoney(200) }} className='shopbtn btn btn-primary mx-2'> - </button>
      Updated Balance: {amount}
      <button onClick={() => { actions.depositMoney(100) }} className='shopbtn btn btn-primary mx-2'> + </button>
    </div>
  )
}

export default Shop