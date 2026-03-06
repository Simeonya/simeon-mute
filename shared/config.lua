Config = {}

Config.CommandName = "simeon-mute" -- The command that will be used to toggle the mute state. You can change this to whatever you want.
Config.Key = "M" -- On which default key the command should be bound to.
Config.KeyText = "Mute or unmute your microphone in the voicechat" -- The text that appears in the keybind menu. You can change this to whatever you want, but make sure to keep it short so it doesn't look weird in the menu. 

Config.Style = { -- The style of the NUI box. You can change these values to customize the look of the box. The colors are in RGBA format, so you can adjust the alpha value to make it more or less transparent.
    BoxGlowColor = "rgba(255, 255, 255, 0.25)", -- The color of the glow around the box. You can change this to whatever you want, but make sure to keep the alpha value low so it doesn't look too bright.
    BackgroundColorPrimary = "rgba(61, 168, 197, 0.69)", -- The primary background color of the box. You can change this to whatever you want, but make sure to keep the alpha value low so it doesn't look too bright.
    BackgroundColorSecondary = "rgba(41, 45, 89, 0.69)" -- The secondary background color of the box. You can change this to whatever you want, but make sure to keep the alpha value low so it doesn't look too bright.
}
