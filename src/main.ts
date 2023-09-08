import './styles/reset.css'
import './styles/style.css'
import './styles/panel.css'

const nbLed = 540;
const ledPanel = document.querySelector(".led-panel__wrapper");

for (let i = 0; i < +nbLed; i++) {
    const led = document.createElement('div');
    led.className = "led";

    if (ledPanel) {
        ledPanel.appendChild(led);
    }
}
