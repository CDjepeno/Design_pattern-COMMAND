import { ICommand } from '../interface/ICommand';
import { Ventillateur } from '../classes/Ventillateur';
export class CommandVentillateurStop implements ICommand {
  ventillateur: Ventillateur
  static lastSpeed: number;

  constructor(v: Ventillateur) {
    this.ventillateur = v    
  }

  execute() {
    CommandVentillateurStop.lastSpeed = this.ventillateur.getSpeed()
    return this.ventillateur.stop()
  }

  unExecute() {
    return 'ventillateur éteint'
  }

  canceled() {
    if(CommandVentillateurStop.lastSpeed === Ventillateur.FAST) {
      this.ventillateur.fast()
    } else if(CommandVentillateurStop.lastSpeed === Ventillateur.WAY) {
      this.ventillateur.way()
    } else if(CommandVentillateurStop.lastSpeed === Ventillateur.SLOW) {
      this.ventillateur.slow()
    } else if(CommandVentillateurStop.lastSpeed === Ventillateur.STOP) {
      this.ventillateur.stop()
    }
  }


}