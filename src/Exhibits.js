//Exhibits.js

import './Background.css';
import TextType from './Text-Type-For-Exhibit/Text-Type';

function Exhibits() {
    return (
        <div className = "center-container">
            <TextType
            textColors={"#2e4057"}
            text = {["Greetings.", "2025 Exhibition Coming This November.", "Stay Tuned."]}
            typeSpeed = {75}
            pauseDuration = {1500}
            showCursor = {true}
            cursorCharacter = "_"
            />
        </div>
    );
}

export default Exhibits;