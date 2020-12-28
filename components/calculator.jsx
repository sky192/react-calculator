import React, { useState } from 'react'

export default () => {
  const [numOne, setNumOne] = useState('')
  const [numTwo, setNumTwo] = useState('')
  const [answer, setAnswer] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [operator, setOperator] = useState('')

  const updateNumOne = (event) => {
    setNumOne(event.target.value)
  }
  const updateNumTwo = (event) => {
    setNumTwo(event.target.value)
  }

  const updateOperator = (event) => {
    setOperator(event.target.value)
  }

  const calculateAnswer = () => {
    if (
      (Number(numOne) || Number(numOne) === 0) &&
      (Number(numTwo) || Number(numTwo) === 0)) {
      if (errorMsg) setErrorMsg('')

      switch (operator) {
        case 'add':
          setAnswer(Number(numOne) + Number(numTwo))
          break
        case 'divide':
          setAnswer(Number(numOne) / Number(numTwo))
          break
        case 'multiply':
          setAnswer(Number(numOne) * Number(numTwo))
          break
        default:
          setAnswer(Number(numOne) - Number(numTwo))
      }
    } else {
      setErrorMsg('Please enter a NUMBER in both inputs.')
      setErrorMsg('')
    }
  }

  return (
    <div className="page">
      <h1>React Calculator</h1>
      <input type="text" onChange={updateNumOne} />
      <select className="operator" onChange={updateOperator}>
        <option value="subtract">-</option>
        <option value="add">+</option>
        <option value="divide"> / </option>
        <option value="multiply">*</option>
      </select>
      <input type="text" onChange={updateNumTwo} />
      <button type="button" className="equals" onClick={calculateAnswer}> = </button>
      <input name="answer" disabled defaultValue={answer} />
      <div className="error">{errorMsg ? `${errorMsg}` : null}</div>
    </div>
  )
}