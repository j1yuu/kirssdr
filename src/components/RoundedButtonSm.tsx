
type Props = {
    text: string,
    onClick: () => void
}

export default function RoundedButtonSm({ text, onClick }: Props) {
    return (
        <button onClick={onClick} className='rounded-button-sm'>
            {text}
        </button>
    )
}