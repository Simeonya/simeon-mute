const muteContainer = document.querySelector('.mute-container');
const root = document.documentElement;
const styleMap = {
    BoxGlowColor: '--mute-glow-color',
    BackgroundColorPrimary: '--mute-bg-primary',
    BackgroundColorSecondary: '--mute-bg-secondary'
};
let hideTimer = null;

const normalizeColor = (value) => {
    if (typeof value !== 'string') {
        return null;
    }

    const trimmed = value.trim();
    if (!trimmed) {
        return null;
    }

    const match = trimmed.match(/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
    if (match) {
        return `rgb(${match[1]}, ${match[2]}, ${match[3]})`;
    }

    return trimmed;
};

const applyStyle = (style) => {
    if (!style || typeof style !== 'object') {
        return;
    }

    Object.entries(styleMap).forEach(([configKey, cssVar]) => {
        const color = normalizeColor(style[configKey]);
        if (color) {
            root.style.setProperty(cssVar, color);
        }
    });
};

const showMute = () => {
    if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
    }

    muteContainer.style.display = 'flex';
    muteContainer.classList.remove('hide');
    muteContainer.classList.add('show');
};

const hideMute = () => {
    if (hideTimer) {
        clearTimeout(hideTimer);
    }

    muteContainer.classList.remove('show');
    muteContainer.classList.add('hide');

    hideTimer = setTimeout(() => {
        muteContainer.style.display = 'none';
        muteContainer.classList.remove('hide');
        hideTimer = null;
    }, 500);
};

window.addEventListener('message', function (event) {
    if (!event.data || typeof event.data !== 'object') {
        return;
    }

    if (event.data.type === 'setStyle') {
        applyStyle(event.data.style);
        return;
    }

    if (event.data.type === 'show') {
        showMute();
        return;
    }

    if (event.data.type === 'hide') {
        hideMute();
    }
});
