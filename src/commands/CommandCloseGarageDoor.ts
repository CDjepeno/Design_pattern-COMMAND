import { ICommand } from '../interface/ICommand';
import { GarageDoor } from '../classes/GarageDoor';
export class CommandCloseGarageDoor implements ICommand {
  garageDoor: GarageDoor 

  constructor(g: GarageDoor) {
    this.garageDoor = g    
  }

  execute() {
    return this.garageDoor.close()
  }

  unExecute() {
    return 'anulation commande'
  }


}