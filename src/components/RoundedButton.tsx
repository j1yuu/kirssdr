import React from 'react'

type Props = {
    classNM?: string,
    text: string,
    onClick: () => void
}

export default function RoundedButton({ classNM, text, onClick }: Props) {
    return (
        <button className={`rounded-button ${classNM}`} onClick={onClick}>
            {text}
        </button>
    )
}