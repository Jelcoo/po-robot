let running = false
let L1 = 0
let L2 = 0
let L3 = 0
let R1 = 0
let R2 = 0
let R3 = 0
let L1Gray = 0
let R1Gray = 0
input.onButtonPressed(Button.A, function () {
    running = !(running)
})
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
    if (R3 && !(L3) && (L1 || L2 || R1 || R2)) {
        basic.pause(300)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 75)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 75)
        basic.pause(400)
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
