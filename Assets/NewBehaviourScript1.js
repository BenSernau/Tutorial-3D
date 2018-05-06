#pragma strict

var target : Transform;
var distance = -10;
var lift = 2;
function LateUpdate () 
{
    transform.position = target.position + Vector3(0, lift, distance);
    transform.LookAt (target);
}