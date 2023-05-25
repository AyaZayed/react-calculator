import React from 'react'

export default function Buttons({ calculate }) {
    const buttons = [
        { id: 'seven', text: '7', value: '7', class: 'button button-number' },
        { id: 'eight', text: '8', value: '8', class: 'button button-number' },
        { id: 'nine', text: '9', value: '9', class: 'button button-number' },
        { id: 'del', text: 'DEL', value: 'DEL', class: 'button button-delete' },
        { id: 'four', text: '4', value: '4', class: 'button button-number' },
        { id: 'five', text: '5', value: '5', class: 'button button-number' },
        { id: 'six', text: '6', value: '6', class: 'button button-number' },
        { id: 'add', text: '+', value: '+', class: 'button button-operator' },
        { id: 'one', text: '1', value: '1', class: 'button button-number' },
        { id: 'two', text: '2', value: '2', class: 'button button-number' },
        { id: 'three', text: '3', value: '3', class: 'button button-number' },
        { id: 'subtract', text: '-', value: '-', class: 'button button-operator' },
        { id: 'decimal', text: '.', value: '.', class: 'button button-number' },
        { id: 'zero', text: '0', value: '0', class: 'button button-number' },
        { id: 'divide', text: '/', value: '/', class: 'button button-operator' },
        { id: 'multiply', text: 'x', value: '*', class: 'button button-operator' },
        { id: 'clear', text: 'RESET', value: 'RESET', class: 'button button-clear' },
        { id: 'equals', text: '=', value: '=', class: 'button button-operator' },
    ]
    return (
        <>
            {
                buttons.map((button) => {
                    return (
                        <button
                            key={button.id}
                            id={button.id}
                            className={button.class}
                            value={button.value}
                            onClick={(e) => {
                                calculate(e)
                            }}
                        >
                            {button.text}
                        </button>
                    )
                })
            }
        </>

    )
}
