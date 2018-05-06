#pragma strict

var coinEffect : Transform;
var coinValue = 1; 

function OnTriggerEnter (info : Collider) 
{
    if (info.tag == "Player") {
        
        NewBehaviourScript4.currentScore += coinValue;
        var effect = Instantiate(coinEffect, transform.position, transform.rotation);
        GetComponent.<AudioSource>().Play();
        yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
        Destroy(effect.gameObject, 1.5);
        Destroy(gameObject); }
}