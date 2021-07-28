export class Lamp {
  location: string

  constructor(l: string) {
    this.location = l
  }

  on() {
    return `Lampe ${this.location} allumé`;
  }

  off() {
    return 'Lampe éteinte';
  }

}