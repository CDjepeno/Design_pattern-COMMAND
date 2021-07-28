import { ICommand } from '../interface/ICommand';
import { Lamp } from '../classes/Lamp';
export class CommandLightDownLamp implements ICommand {
  lamp: Lamp 

  constructor(l: Lamp) {
    this.lamp = l    
  }

  execute() {
    return this.lamp.off()
  }
  unExecute() {
    return 'anulation commande'
  }

}