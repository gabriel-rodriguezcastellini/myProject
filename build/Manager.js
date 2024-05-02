class Manager extends Employee {
    constructor(name, age, mobile) {
        super(name, age, mobile);
        this.age = 24;
    }
}
let manager = new Manager("Jane", 23, "0343-23332233");
console.log(manager.getName());
console.log(manager.getAge());
