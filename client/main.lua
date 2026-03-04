local isMuted = false

RegisterKeyMapping(Config.CommandName, Config.KeyText, 'keyboard', Config.Key)

RegisterCommand(Config.CommandName, function()
    isMuted = not isMuted

    local playerId = GetPlayerServerId(PlayerId())
    local event = isMuted and 'simeon-mute:mute' or 'simeon-mute:unmute'
    local uiState = isMuted and 'show' or 'hide'

    TriggerServerEvent(event, playerId)
    SendNUIMessage({ type = uiState })
end, false)
