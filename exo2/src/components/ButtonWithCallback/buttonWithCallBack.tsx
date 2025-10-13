interface ButtonWithCallbackProps {
    onClick: () => void;
}

export function ButtonWithCallback({ onClick }: ButtonWithCallbackProps) {
    return (
        <button onClick={onClick}>
            Cliquez-moi
        </button>
    );
}