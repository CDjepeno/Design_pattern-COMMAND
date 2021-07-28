import { ICommand } from '../interface/ICommand';
import { Lamp } from '../classes/Lamp';
export class CommandLightUpLamp implements ICommand {
  lamp: Lamp 

  constructor(l: Lamp) {
    this.lamp = l    
  }

  execute() {
    return this.lamp.on()
  }
  unExecute() {
    return 'anulation commande'
  }

}