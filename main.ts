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
    /*if (L1 == 1 && R1 == 1) {
        if (R3 == 1 && L3 == 0) {
            DFRobotMaqueenPlus.mototStop(Motors.M2)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 200)
            basic.pause(600)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        }
    } else {
        if (L3 == 1 && L1 == 0 && L2 == 0 && R1 == 0 && R2 == 0 && R3 == 0) {
            DFRobotMaqueenPlus.mototStop(Motors.M1)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 200)
            basic.pause(600)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } if (R3 == 1 && L1 == 0 && L2 == 0 && L3 == 0 && R1 == 0 && R2 == 0) {
            DFRobotMaqueenPlus.mototStop(Motors.M2)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 200)
            basic.pause(600)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else if (R1 == 1 && R2 == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
            basic.pause(300)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else if (L1 == 1 && L2 == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
            basic.pause(300)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        }
    }*/
})