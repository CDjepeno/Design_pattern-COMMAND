export class Ventillateur {
  static FAST: number = 3;
  static WAY: number = 2;
  static SLOW: number = 1;
  static STOP: number = 0;
  localisation: string;
  speed: number;

  constructor(l: string) {
    this.localisation = l 
    this.speed = Ventillateur.STOP 
  }

  fast() {
    this.speed = Ventillateur.FAST
    return 'ventillateur sur rapide'
  }

  way() {
    this.speed = Ventillateur.WAY
    return 'ventillateur sur moyen'
  }

  slow() {
    this.speed = Ventillateur.SLOW
    return 'ventillateur sur lent'
  }

  stop() {
    this.speed = Ventillateur.STOP
    return 'ventillateur éteint'
  }

  getSpeed() {
    return this.speed
  }


}