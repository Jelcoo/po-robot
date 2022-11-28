input.onButtonPressed(Button.A, function () {
    running = false
    searching = false
})
input.onButtonPressed(Button.AB, function () {
    running = true
    searching = true
})
input.onButtonPressed(Button.B, function () {
    running = true
    searching = false
})
let L3Gray = 0
let R3Gray = 0
let L1Gray = 0
let R1Gray = 0
let R3 = 0
let R2 = 0
let R1 = 0
let L3 = 0
let L2 = 0
let L1 = 0
let searching = false
let running = false
DFRobotMaqueenPlus.I2CInit()
radio.setFrequencyBand(88)
basic.forever(function () {
    L1 = DFRobotMaqueenPlus.readPatrol(Patrol.L1)
    L2 = DFRobotMaqueenPlus.readPatrol(Patrol.L2)
    L3 = DFRobotMaqueenPlus.readPatrol(Patrol.L3)
    R1 = DFRobotMaqueenPlus.readPatrol(Patrol.R1)
    R2 = DFRobotMaqueenPlus.readPatrol(Patrol.R2)
    R3 = DFRobotMaqueenPlus.readPatrol(Patrol.R3)
    R1Gray = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R1)
    L1Gray = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L1)
    R3Gray = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R3)
    L3Gray = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L3)
    if (!(running)) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        return
    }
    if (R1Gray > 3000 && L1Gray > 3000 && R3Gray < 3000) {
        searching = true
    }
    if (searching) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    } else {
        if (R3 && L3) {
            radio.sendNumber(1)
        }
        if (R3 && !(L3) && !(R2 || L2)) {
            radio.sendNumber(0)
            radio.sendNumber(2)
            basic.pause(300)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 75)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 75)
            basic.pause(500)
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
    basic.clearScreen()
    if (searching) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
    } else if (running) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    }
})
