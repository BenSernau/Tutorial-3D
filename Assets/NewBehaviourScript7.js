#pragma strict

var gameMaster : NewBehaviourScript4;

function OnTriggerEnter (colInfo : Collider) {
    if (NewBehaviourScript4.isRestarting == false){
        if (colInfo.tag == "Player"){
            var destructible : NewBehaviourScript10 = colInfo.GetComponent("NewBehaviourScript10") as NewBehaviourScript10;
            destructible.Destruct();
        }
        gameMaster.RestartLevel();
    }
}