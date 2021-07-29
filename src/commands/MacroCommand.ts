import { ICommand } from '../interface/ICommand';
export class MacroCommand implements ICommand {
  command: ICommand[]

  constructor(c: ICommand[]) {
    this.command = c    
  }

  execute() {
    for (let i = 0; i < this.command.length; i++) {
      this.command[i].execute()
    }
  }

  unExecute() {

  }
}