#pragma strict

var player : Rigidbody;
var bounceAmount = 10f;
var deathParticles : Transform;
var deathNoise : AudioSource;
var colliders : Transform;

var enemyAnim : Animator;
private var centerAnim : Animator;

function Awake(){
    centerAnim = transform.GetComponent("Animator") as Animator;
}
function Die() {
    player.GetComponent.<Rigidbody>().velocity.y = bounceAmount;
    Instantiate (deathParticles, enemyAnim.transform.position, enemyAnim.transform.rotation);
    deathNoise.Play();
    centerAnim.SetTrigger("idle");
    enemyAnim.SetTrigger("Die");
    yield WaitForSeconds(2);
    Destroy (gameObject);
}