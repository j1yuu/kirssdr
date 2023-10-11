
type Props = {
    classNM?: string,
    text: string,
    onClick: () => void
}

export default function Button({ classNM, text, onClick }: Props) {
    return (
        <button className={`button ${classNM}`} onClick={onClick}>
            {text}
        </button>
    )
}