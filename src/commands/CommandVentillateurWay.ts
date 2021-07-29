import { ICommand } from '../interface/ICommand';
import { Ventillateur } from '../classes/Ventillateur';
export class CommandVentillateurWay implements ICommand {
  ventillateur: Ventillateur
  static lastSpeed: number;

  constructor(v: Ventillateur) {
    this.ventillateur = v    
  }

  execute() {
    CommandVentillateurWay.lastSpeed = this.ventillateur.getSpeed()
    return this.ventillateur.way()
  }

  unExecute() {
    return 'ventillateur éteint'
  }

  canceled() {
    if(CommandVentillateurWay.lastSpeed === Ventillateur.FAST) {
      this.ventillateur.fast()
    } else if(CommandVentillateurWay.lastSpeed === Ventillateur.WAY) {
      this.ventillateur.way()
    } else if(CommandVentillateurWay.lastSpeed === Ventillateur.SLOW) {
      this.ventillateur.slow()
    } else if(CommandVentillateurWay.lastSpeed === Ventillateur.STOP) {
      this.ventillateur.stop()
    }
  }


}