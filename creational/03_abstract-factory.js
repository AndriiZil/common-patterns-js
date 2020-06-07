class Employee {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`I am employee: ${this.name}`);
  }
}

class EmployeeFactory {
  create(name) {
    return new Employee(name);
  }
}

class Vendor {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`I am vendor: ${this.name}`)
  }
}

class VendorFactory {
  create(name) {
    return new Vendor(name);
  }
}

function run() {
  const persons = [];

  const employeeFactory = new EmployeeFactory();
  const vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create('Andrii'));
  persons.push(employeeFactory.create('Bill'));
  persons.push(vendorFactory.create('Nicka'));
  persons.push(vendorFactory.create('Ted'));

  for (let person of persons) {
    person.say();
  }

}

run();
/*
  I am employee: Andrii
  I am employee: Bill
  I am vendor: Nicka
  I am vendor: Ted
 */
