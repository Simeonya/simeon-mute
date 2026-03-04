fx_version('cerulean')
games({ 'gta5' })
author({ 'Simeonya' })
description({ 'A simple script that allows you to mute yourself in the voice chat by pressing a key.' })
version({ '1.0.0' })

ui_page('html/index.html');
shared_script('shared/*');

server_scripts({
    'server/main.lua'
});

client_scripts({
    'client/main.lua'
});

files({
    'html/index.html',
    'html/css/style.css',
    'html/javascript/script.js'
})
