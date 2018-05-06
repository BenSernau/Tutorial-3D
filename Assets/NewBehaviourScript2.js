#pragma strict

var MaxFallDistance = -10;

var gameMaster : NewBehaviourScript4;

function Update () {
    if (transform.position.y <= MaxFallDistance) {
        if (NewBehaviourScript4.isRestarting == false){
            if (gameMaster != null) {
                NewBehaviourScript4.isRestarting = true;
                gameMaster.RestartLevel();
                NewBehaviourScript4.isRestarting = false;
            }
        }
    }
}

