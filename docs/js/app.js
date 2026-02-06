window.perfil = window.perfil || {};

window.perfil.playTurnSignal = () => {
    try {
        if (navigator && typeof navigator.vibrate === "function") {
            navigator.vibrate([80, 40, 80]);
        }
    } catch (e) {
        // Ignore vibration errors
    }

    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) {
            return;
        }
        const context = new AudioContext();
        const oscillator = context.createOscillator();
        const gain = context.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = 880;
        gain.gain.value = 0.05;

        oscillator.connect(gain);
        gain.connect(context.destination);

        oscillator.start();
        oscillator.stop(context.currentTime + 0.12);

        oscillator.onended = () => {
            context.close();
        };
    } catch (e) {
        // Ignore audio errors
    }
};
