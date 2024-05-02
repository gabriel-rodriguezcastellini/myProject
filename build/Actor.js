class Actor {
    constructor(_name) {
        this._name = _name;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
}
let actor = new Actor("Haider Malik");
console.log(actor.name);
actor.name = "Jane Doe";
console.log(actor.name);
