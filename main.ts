let L1 = 0
let L2 = 0
let L3 = 0
let R1 = 0
let R2 = 0
let R3 = 0

basic.forever(function () {
    L1 = DFRobotMaqueenPlus.readPatrol(Patrol.L1)
    L2 = DFRobotMaqueenPlus.readPatrol(Patrol.L2)
    L3 = DFRobotMaqueenPlus.readPatrol(Patrol.L3)
    R1 = DFRobotMaqueenPlus.readPatrol(Patrol.R1)
    R2 = DFRobotMaqueenPlus.readPatrol(Patrol.R2)
    R3 = DFRobotMaqueenPlus.readPatrol(Patrol.R3)

    if (!L1 && !L2 && L3 && !R1 && !R2 && !R3) {
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 200)
    } else if (!L1 && !L2 && !L3 && !R1 && !R2 && R3) {
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 200)
    } else if (!R1 && L1 && L2) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
    } else if (R1 && R2 && !L1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
    } else if (R1 && L1 && !R2 && !L2) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    }
})