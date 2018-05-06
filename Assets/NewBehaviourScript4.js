#pragma strict

static var currentScore : int = 0;
static var isRestarting = false;
static var finalScore : int = 0;

var player : Transform;

var musicPrefab : Transform;

var gameOverSound : AudioClip;

function Start () {
    currentScore = 0;
    if (!GameObject.FindGameObjectWithTag("MM")) {
        var mManager = Instantiate (musicPrefab, transform.position, Quaternion.identity);
        mManager.name = musicPrefab.name;
        DontDestroyOnLoad (mManager);
    }
}


function RestartLevel () {
    isRestarting = true;
    GetComponent.<AudioSource>().pitch = 1;
    GetComponent.<AudioSource>().clip = gameOverSound;
    GetComponent.<AudioSource>().Play();
    yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
    
    if (NewBehaviourScript6.ReachedPoint.x < 10.6) {
        Application.LoadLevel("scenetest");
        isRestarting = false;
    }
    else {
        player.position = NewBehaviourScript6.ReachedPoint;
        var destructible : NewBehaviourScript10 = player.GetComponent("NewBehaviourScript10") as NewBehaviourScript10;
        destructible.DeDestruct();
        isRestarting = false;  
    }
}

function LoadNextLevel(){
    finalScore += currentScore;
    Application.LoadLevel(Application.loadedLevel + 1);
    }
    

    
