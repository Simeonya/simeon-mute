const muteContainer = document.querySelector('.mute-container');

window.addEventListener('message', function (event) {
    if (event.data.type === 'show') {
        muteContainer.classList.remove('hide');
        muteContainer.classList.add('show');
        muteContainer.style.display = 'flex';
    }
    else if (event.data.type === 'hide') {
        muteContainer.classList.remove('show');
        muteContainer.classList.add('hide');
        
        setTimeout(() => {
            muteContainer.style.display = 'none';
            muteContainer.classList.remove('hide');
        }, 500);
    }
});
