class Actor {
  private _name: string;
  constructor(_name: string) {
    this._name = _name;
  }
  set name(value: string) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
}

let actor = new Actor("Haider Malik");
console.log(actor.name);
//set
actor.name = "Jane Doe";
console.log(actor.name);
