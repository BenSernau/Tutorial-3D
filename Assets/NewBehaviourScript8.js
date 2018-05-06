function OnTriggerEnter () {
    var enemy = transform.GetComponentInParent(NewBehaviourScript9);
    enemy.Die();
}