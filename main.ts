let running = false
let L1 = 0
let L2 = 0
let L3 = 0
let R1 = 0
let R2 = 0
let R3 = 0

basic.forever(function () {
    if (!running) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        return
    }

    L1 = DFRobotMaqueenPlus.readPatrol(Patrol.L1)
    L2 = DFRobotMaqueenPlus.readPatrol(Patrol.L2)
    L3 = DFRobotMaqueenPlus.readPatrol(Patrol.L3)
    R1 = DFRobotMaqueenPlus.readPatrol(Patrol.R1)
    R2 = DFRobotMaqueenPlus.readPatrol(Patrol.R2)
    R3 = DFRobotMaqueenPlus.readPatrol(Patrol.R3)

    if (!R1 && L1 && L2) {
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
    } else if (R1 && R2 && !L1) {
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
    } else if (R1 && L1 && !R2 && !L2) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    }
})

basic.forever(function () {
    if (running) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    }
})

input.onButtonPressed(Button.A, function () {
    running = !running
})
