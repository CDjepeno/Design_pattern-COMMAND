import { ICommand } from '../interface/ICommand';
import { Lamp } from '../classes/Lamp';
import { GarageDoor } from '../classes/GarageDoor';
export class CommandOpenGarageDoor implements ICommand {
  garageDoor: GarageDoor 

  constructor(g: GarageDoor) {
    this.garageDoor = g    
  }

  execute() {
    return this.garageDoor.open()
  }
  unExecute() {
    return 'anulation commande'
  }

}