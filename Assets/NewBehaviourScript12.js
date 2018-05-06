#pragma strict
import UnityEngine.UI;
var scoreText : Text;

function Start () {
    scoreText.text = "FAINOL SQOR: " + NewBehaviourScript4.finalScore;
}