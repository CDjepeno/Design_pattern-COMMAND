import { ICommand } from '../interface/ICommand';
export class RemoteControl {
  commandOn: any[] = [] 
  commandOff: any[] = []   
  canceledCommand: ICommand | null



  constructor() {
   this.commandOff = Array.from(Array(7).keys())
   this.commandOn = Array.from(Array(7).keys())

   let notCommand: Array<number> = Array.from(Array().keys())

   for (let i = 0; i < 7; i++) {
     this.commandOn[i] = notCommand
     this.commandOff[i] = notCommand
   }
   this.canceledCommand = null
  }

  setCommand(empt: number, cOn: ICommand, cOff: ICommand) {
    this.commandOn[empt] = cOn
    this.commandOff[empt] = cOff
  }

  buttonOnPress(empt: number) {
    this.canceledCommand = this.commandOn[empt]
    return this.commandOn[empt].execute()
  }

  buttonOffPress(empt: number) {
    this.canceledCommand = this.commandOff[empt]
    return this.commandOff[empt].execute()
  }

  buttonCanceledPress() {
    if(this.canceledCommand) {
      return this.canceledCommand.unExecute()
    }
  }

}