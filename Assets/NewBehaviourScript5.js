#pragma strict

var music : AudioSource;

function quitGame () {
    Debug.Log("Application closing...");
    Application.Quit ();
}

function startGame (level : String) {
    Debug.Log("Application beginning...");
    Application.LoadLevel(level);
}

function setGameVolume (vol : float) {
    music.volume = vol;
}