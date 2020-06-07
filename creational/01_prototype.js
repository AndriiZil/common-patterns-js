class CustomerPrototype {
  constructor(proto) {
    this.proto = proto;
  }

  clone() {
    let constumer = new Costumer();
    constumer.first = this.proto.first;
    constumer.last = this.proto.last;
    constumer.status = this.proto.status;

    return constumer;
  }
}

class Costumer {
  constructor(first, last, status) {
    this.first = first;
    this.last = last;
    this.status = status;
  }

  info() {
    console.log(`Name: ${this.first} ${this.last} status: ${this.status}`);
  }

}

const proto = new Costumer('Bob', 'Silver', 'developer');
const prototype = new CustomerPrototype(proto);

const costumer = prototype.clone();

console.log(costumer.info()); // => Name: Bob Silver status: developer