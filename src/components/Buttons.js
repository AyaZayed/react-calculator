import React from 'react'

export default function Buttons({ calculate }) {
    const buttons = [
        { id: 'seven', value: '7', class: 'button button-number' },
        { id: 'eight', value: '8', class: 'button button-number' },
        { id: 'nine', value: '9', class: 'button button-number' },
        { id: 'del', value: 'DEL', class: 'button button-delete' },
        { id: 'four', value: '4', class: 'button button-number' },
        { id: 'five', value: '5', class: 'button button-number' },
        { id: 'six', value: '6', class: 'button button-number' },
        { id: 'add', value: '+', class: 'button button-operator' },
        { id: 'one', value: '1', class: 'button button-number' },
        { id: 'two', value: '2', class: 'button button-number' },
        { id: 'three', value: '3', class: 'button button-number' },
        { id: 'subtract', value: '-', class: 'button button-operator' },
        { id: 'decimal', value: '.', class: 'button button-number' },
        { id: 'zero', value: '0', class: 'button button-number' },
        { id: 'divide', value: '/', class: 'button button-operator' },
        { id: 'multiply', value: '*', class: 'button button-operator' },
        { id: 'clear', value: 'RESET', class: 'button button-clear' },
        { id: 'equals', value: '=', class: 'button button-operator' },
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
                            {button.value}
                        </button>
                    )
                })
            }
        </>

    )
}
