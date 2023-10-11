import React from 'react'
import Button from '../components/Button'
import SecondRoll from '../utils/SecondRoll'

export default function SecondScreen() {
    return (
        <div className='secondscreen screen'>
            <h2 className='title'>Опять ты всё уронила</h2>
            <p className='subtitle'>Но в этот день тебе можно я считаю!</p>
            <p>Итак, идём дальше?</p>
            <Button text='Поплыли уже блин' onClick={SecondRoll} />
        </div>
    )
}