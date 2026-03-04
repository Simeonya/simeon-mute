RegisterNetEvent('simeon-mute:mute')
AddEventHandler('simeon-mute:mute', function(id)
    MumbleSetPlayerMuted(id, true)
end)

RegisterNetEvent('simeon-mute:unmute')
AddEventHandler('simeon-mute:unmute', function(id)
    MumbleSetPlayerMuted(id, false)
end)
