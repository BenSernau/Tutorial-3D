#pragma strict

import UnityEngine.UI;

var scoreText : Text;

function Update () {
    scoreText.text = "SQOR: " + NewBehaviourScript4.currentScore;
}