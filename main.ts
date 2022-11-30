input.onButtonPressed(Button.A, function () {
    running = false
    searching = false
    found = false
    locked = false
})
input.onButtonPressed(Button.AB, function () {
    running = true
    searching = true
    found = false
    locked = false
})
input.onButtonPressed(Button.B, function () {
    running = true
    searching = false
    found = false
    locked = false
})
let sonic = 0
let R3 = 0
let R2 = 0
let R1 = 0
let L3 = 0
let L2 = 0
let L1 = 0
let locked = false
let found = false
let searching = false
let running = false
radio.setGroup(88)
basic.forever(function () {
    L1 = DFRobotMaqueenPlus.readPatrol(Patrol.L1)
    L2 = DFRobotMaqueenPlus.readPatrol(Patrol.L2)
    L3 = DFRobotMaqueenPlus.readPatrol(Patrol.L3)
    R1 = DFRobotMaqueenPlus.readPatrol(Patrol.R1)
    R2 = DFRobotMaqueenPlus.readPatrol(Patrol.R2)
    R3 = DFRobotMaqueenPlus.readPatrol(Patrol.R3)
    if (!(running)) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        return
    }
    if (!(searching)) {
        if (L3 && R3 && (R1 || L1)) {
            radio.sendNumber(1)
        }
        if (!(L1) && !(L2) && L3 && !(R1) && !(R2) && R3) {
            running = true
            searching = true
            found = false
            locked = false
            return
        }
        if (R3 && !(L3) && !(R2 || L2) && (R1 && L1)) {
            radio.sendNumber(0)
            radio.sendNumber(2)
            basic.pause(300)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 75)
            basic.pause(400)
        } else if (!(R1) && L1 && L2) {
            DFRobotMaqueenPlus.mototStop(Motors.M1)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
        } else if (R1 && R2 && !(L1)) {
            DFRobotMaqueenPlus.mototStop(Motors.M2)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 60)
        } else if (R1 && L1 && !(R2) && !(L2)) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
        }
    }
})
basic.forever(function () {
    if (found) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    } else if (searching) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
    } else if (running) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    }
})
basic.forever(function () {
    if (!(running)) {
        return
    }
    if (!(searching)) {
        return
    }
    if (found) {
        return
    }
    sonic = DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12)
    if (sonic < 6) {
        found = true
        running = false
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        music.playMelody("C5 G B A F A C5 B ", 120)
    }
    if (sonic < 20 && !(locked)) {
        locked = true
        basic.pause(50)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else {
        if (locked) {
            return
        }
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
    }
})
