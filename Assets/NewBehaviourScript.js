#pragma strict
var rotationSpeed = 100;
var jumpHeight = 8;
var hit01 : AudioClip;
var distToGround : float;

function Start (){
    distToGround = GetComponent.<Collider>().bounds.extents.y;
}
function Update () 
{
    var rotation : float = Input.GetAxis("Horizontal") * rotationSpeed;
    var rotationother : float = Input.GetAxis("Vertical") * rotationSpeed;
    rotation *= Time.deltaTime;
    rotationother *= Time.deltaTime;
    GetComponent.<Rigidbody>().AddTorque (Vector3.back * rotation);
    GetComponent.<Rigidbody>().AddTorque (Vector3.right * rotationother);
    
	if (Input.GetKeyDown(KeyCode.Space) && isGrounded())
	{
	    GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}
	
}

function isGrounded() : boolean {
    return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}



function OnCollisionEnter () {
    GetComponent.<AudioSource>().clip = hit01;
    GetComponent.<AudioSource>().pitch = Random.Range(1, 3);
    GetComponent.<AudioSource>().Play();
    }