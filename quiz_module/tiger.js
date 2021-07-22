class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    return 'grrrrrrr';
  }
}

const myTiger = new Tiger();
// TODO: 1
export default Tiger;