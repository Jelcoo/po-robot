/*let L1 = 0
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
    if (L1 == 1 && R1 == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else {
        if (L1 == 1 && L2 == 1 && R1 == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
            basic.pause(700)
        } else if (R1 == 1 && R2 == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
            basic.pause(300)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else if (L1 == 1 && L2 == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
            basic.pause(300)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        }
    }
})*/

function turn(degrees: number, direction: string) {
    if (direction == 'right') {
        DFRobotMaqueenPlus.mototStop(Motors.M2)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 200)
        basic.pause(7 * degrees)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        //DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    }
}

input.onButtonPressed(Button.A, function() {
    turn(90, 'right')
})
