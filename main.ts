basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) === 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) === 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 255)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
