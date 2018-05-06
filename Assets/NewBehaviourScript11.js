#pragma strict

var gameMaster : NewBehaviourScript4;

function OnTriggerEnter (colInfo : Collider){
    if (colInfo.tag == "Player"){
        gameMaster.LoadNextLevel();
    }
}