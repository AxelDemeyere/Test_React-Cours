import {useState} from "react";

export function ToggleMessage() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleMessage = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={toggleMessage}>
                {isVisible ? 'Cacher' : 'Afficher'}
            </button>
            {isVisible && <p>Hello World!</p>}
        </div>
    );
}