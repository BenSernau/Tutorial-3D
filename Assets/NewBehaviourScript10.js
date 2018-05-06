#pragma strict

var ballrigidbody : Rigidbody;
var ballcollider : SphereCollider;
var piecesPrefab : Transform;
var piecesParent : Transform;
var WholeBall : GameObject;

function Destruct () {
    GetComponent.<Rigidbody>().isKinematic = true;
    GetComponent.<Collider>().enabled = false;
    var clone = Instantiate (piecesPrefab, piecesParent.position, piecesParent.rotation);
    Destroy (clone.gameObject, 10f);
    WholeBall.SetActive(false);
}

function DeDestruct () {
    GetComponent.<Rigidbody>().isKinematic = false;
    GetComponent.<Collider>().enabled = true;
    WholeBall.SetActive(true);
}