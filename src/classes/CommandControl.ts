import { ICommand } from '../interface/ICommand';
export class CommandControl {
  location: ICommand

  constructor(l: ICommand) {
    this.location = l
  }

  setCommand(command: ICommand) {
    this.location = command
  }

  buttonPress() {
    return this.location.execute()
  }

}
