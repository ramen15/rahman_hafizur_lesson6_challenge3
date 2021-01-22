while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 2) {
        light.setBrightness(5)
        light.setAll(light.rgb(51, 255, 255))
        music.setVolume(50)
        music.playMelody("E B C5 A B G A F ", 120)
    }
    
}
