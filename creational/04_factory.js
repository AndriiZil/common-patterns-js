class FullTime {
  constructor() {
    this.hourly = '12'
  }
}
class PartTime {
  constructor() {
    this.hourly = '11'
  }
}

class Temporary {
  constructor() {
    this.hourly = '10'
  }
}

class Contractor {
  constructor() {
    this.hourly = '15'
  }
}

class Factory {
  createEmployee(type, name) {
    let employee;

    switch (type) {
      case 'fullTime':
        employee = new FullTime()
        break;
      case 'partTime':
        employee = new PartTime()
        break;
      case 'temporaty':
        employee = new Temporary()
        break;
      case 'contractor':
        employee = new Contractor()
        break;
    }

    employee.type = type;
    employee.name = name;

    employee.say = function () {
      console.log(`Name: ${this.name} has ${this.type} : rate ${this.hourly}$.`);
    }

    return employee;
  }

}

function run() {
  const employeers = [];
  const factory = new Factory();

  employeers.push(factory.createEmployee('fullTime', 'Andrii'));
  employeers.push(factory.createEmployee('partTime', 'Bob'));
  employeers.push(factory.createEmployee('temporaty', 'Igor'));
  employeers.push(factory.createEmployee('contractor', 'Elena'));

  for (let employee of employeers) {
    employee.say();
  }

}

run();

/*
  Name: Andrii has fullTime : rate 12$.
  Name: Bob has partTime : rate 11$.
  Name: Igor has temporaty : rate 10$.
  Name: Elena has contractor : rate 15$.
 */
