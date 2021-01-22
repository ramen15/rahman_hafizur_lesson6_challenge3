while True:
    print("Light Level:" + input.light_level())
    if input.light_level() > 2:
        light.set_brightness(5)
        light.set_all(light.rgb(51,255,255))
        music.set_volume(50)
        music.play_melody("E B C5 A B G A F ", 120)