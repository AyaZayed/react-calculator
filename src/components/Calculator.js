import React, { useState } from 'react'
import Buttons from './Buttons'

export default function Calculator() {
    const [result, setResult] = useState('0')
    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [operator, setOperator] = useState('')

    function calculate(e) {
        if (e.target.value === 'RESET') {
            setResult('0')
            setFirstNumber('')
            setSecondNumber('')
            setOperator('')
        } else if (e.target.value === 'DEL') {
            if (operator === '') {
                setFirstNumber(firstNumber.slice(0, -1))
                setResult(firstNumber.slice(0, -1))
            } else {
                setSecondNumber(secondNumber.slice(0, -1))
                setResult(secondNumber.slice(0, -1))
            }
        }
        else if (e.target.value === '=') {
            if (operator === '+') {
                setResult(parseFloat(firstNumber) + parseFloat(secondNumber))
            } else if (operator === '-') {
                setResult(parseFloat(firstNumber) - parseFloat(secondNumber))
            } else if (operator === '*') {
                setResult(parseFloat(firstNumber) * parseFloat(secondNumber))
            } else if (operator === '/') {
                setResult(parseFloat(firstNumber) / parseFloat(secondNumber))
            }
        } else if (e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === '/') {
            setOperator(e.target.value)
        } else if (operator === '') {
            setFirstNumber(firstNumber + e.target.value)
            setResult(firstNumber + e.target.value)
        }
        else {
            setSecondNumber(secondNumber + e.target.value)
            setResult(secondNumber + e.target.value)
        }
    }

    return (
        <>
            <div className='display'>
                <div className='display-result'>{result}</div>
            </div>
            <div className='calculator'>
                <Buttons calculate={calculate} />
            </div>
        </>
    )
}
