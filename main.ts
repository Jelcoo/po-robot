input.onButtonPressed(Button.A, function () {
    running = !(running)
})
let R1Gray = 0
let L1Gray = 0
let R3 = 0
let R2 = 0
let R1 = 0
let L3 = 0
let L2 = 0
let L1 = 0
let running = false
radio.setGroup(88)
basic.forever(function () {
    L1 = DFRobotMaqueenPlus.readPatrol(Patrol.L1)
    L2 = DFRobotMaqueenPlus.readPatrol(Patrol.L2)
    L3 = DFRobotMaqueenPlus.readPatrol(Patrol.L3)
    R1 = DFRobotMaqueenPlus.readPatrol(Patrol.R1)
    R2 = DFRobotMaqueenPlus.readPatrol(Patrol.R2)
    R3 = DFRobotMaqueenPlus.readPatrol(Patrol.R3)
    L1Gray = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L1)
    R1Gray = DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R1)
    if (!(running)) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        return
    }
    if (L1Gray > 3000 && L1Gray < 3600 && R1Gray > 3000 && R1Gray < 3600) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    } else if (L1 && L3 && R1 && R3) {
        radio.sendNumber(1)
    } else if (L1 && !(L3) && R1 && R3) {
        radio.sendNumber(2)
    } else if (!(R1) && L1 && L2) {
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 125)
    } else if (R1 && R2 && !(L1)) {
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 125)
    } else if (R1 && L1 && !(R2) && !(L2)) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 200)
    }
})
basic.forever(function () {
    if (running) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    }
})
