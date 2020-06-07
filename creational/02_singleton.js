class Singleton {
  constructor(data) {
    if (Singleton.exists) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    Singleton.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }

}

const data1 = new Singleton('data');
const data2 = new Singleton('data2');

console.log(data1.getData()); // => data
console.log(data2.getData()); // => data

console.log(data1 === data2); // => true

