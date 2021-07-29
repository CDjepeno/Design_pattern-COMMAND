import { ICommand } from '../interface/ICommand';
import { Ventillateur } from '../classes/Ventillateur';
export class CommandVentillateurFast implements ICommand {
  ventillateur: Ventillateur
  static lastSpeed: number;

  constructor(v: Ventillateur) {
    this.ventillateur = v    
  }

  execute() {
    CommandVentillateurFast.lastSpeed = this.ventillateur.getSpeed()
    return this.ventillateur.fast()
  }

  unExecute() {
    return 'ventillateur éteint'
  }

  canceled() {
    if(CommandVentillateurFast.lastSpeed === Ventillateur.FAST) {
      return this.ventillateur.fast()
    } else if(CommandVentillateurFast.lastSpeed === Ventillateur.WAY) {
      return this.ventillateur.way()
    } else if(CommandVentillateurFast.lastSpeed === Ventillateur.SLOW) {
      return this.ventillateur.slow()
    } else if(CommandVentillateurFast.lastSpeed === Ventillateur.STOP) {
      return this.ventillateur.stop()
    }
  }


}