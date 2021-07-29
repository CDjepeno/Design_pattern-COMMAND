import { CommandVentillateurWay } from './commands/CommandVentillateurWay';
import { Lamp } from './classes/Lamp';
import { ICommand } from './interface/ICommand';
import { CommandLightUpLamp } from './commands/CommandLightUpLamp';
import { CommandControl } from './classes/CommandControl';
import { GarageDoor } from './classes/GarageDoor';
import { CommandOpenGarageDoor } from './commands/CommandOpenGarageDoor';
import { RemoteControl } from './classes/RemoteControl';
import { CommandCloseGarageDoor } from './commands/CommandCloseGarageDoor';
import { Ventillateur } from './classes/Ventillateur';
import { CommandVentillateurFast } from './commands/CommandVentillateurFast';
import { CommandVentillateurStop } from './commands/CommandVentillateurStop';
export class RunRemoteControl {
  main() {
    let lamp: Lamp = new Lamp("garage")
    let lightUpLamp: ICommand = new CommandLightUpLamp(lamp)
    let commandControl: CommandControl = new CommandControl(lightUpLamp)
    
    commandControl.setCommand(lightUpLamp)

    return commandControl.buttonPress()
  }

  main2() {
    let garageDoor: GarageDoor = new GarageDoor()
    let garaDoorOpen: ICommand = new CommandOpenGarageDoor(garageDoor)
    let commandControl: CommandControl = new CommandControl(garaDoorOpen)
    
    commandControl.setCommand(garaDoorOpen)
    return  commandControl.buttonPress()
  }

  main3() {
    let garageDoor: GarageDoor = new GarageDoor()
    let garageDoorOpen: ICommand = new CommandOpenGarageDoor(garageDoor)
    let garageDoorClose: ICommand = new CommandCloseGarageDoor(garageDoor)
    let remoteControl: RemoteControl = new RemoteControl()

    remoteControl.setCommand(0, garageDoorOpen, garageDoorClose)
    return remoteControl.buttonOnPress(0)
  }

  main4() {
    let garageDoor: GarageDoor = new GarageDoor()
    let garageDoorOpen: ICommand = new CommandOpenGarageDoor(garageDoor)
    let garageDoorClose: ICommand = new CommandCloseGarageDoor(garageDoor)
    let remoteControl: RemoteControl = new RemoteControl()

    remoteControl.setCommand(0, garageDoorOpen, garageDoorClose)
    remoteControl.buttonOnPress(0)
    return remoteControl.buttonCanceledPress()
  }

  main5() {
    let remoteControl: RemoteControl = new RemoteControl()
    let ventillateur: Ventillateur = new Ventillateur("séjour")
    
    let ventillateurFast: CommandVentillateurFast = new CommandVentillateurFast(ventillateur)
    let ventillateurWay: CommandVentillateurWay = new CommandVentillateurWay(ventillateur)
    let ventillateurStop: CommandVentillateurStop = new CommandVentillateurStop(ventillateur)

    remoteControl.setCommand(0, ventillateurWay, ventillateurStop)
    remoteControl.setCommand(1, ventillateurFast, ventillateurStop)

    return remoteControl.buttonOnPress(1)
  }

  main6() {
    let remoteControl: RemoteControl = new RemoteControl()
    let ventillateur: Ventillateur = new Ventillateur("séjour")
    
    let ventillateurFast: CommandVentillateurFast = new CommandVentillateurFast(ventillateur)
    let ventillateurWay: CommandVentillateurWay = new CommandVentillateurWay(ventillateur)
    let ventillateurStop: CommandVentillateurStop = new CommandVentillateurStop(ventillateur)

    remoteControl.setCommand(0, ventillateurWay, ventillateurStop)
    remoteControl.setCommand(1, ventillateurFast, ventillateurStop)

    return remoteControl.buttonOnPress(0)
  }

  main7() {
    let remoteControl: RemoteControl = new RemoteControl()
    let ventillateur: Ventillateur = new Ventillateur("séjour")
    
    let ventillateurFast: CommandVentillateurFast = new CommandVentillateurFast(ventillateur)
    let ventillateurWay: CommandVentillateurWay = new CommandVentillateurWay(ventillateur)
    let ventillateurStop: CommandVentillateurStop = new CommandVentillateurStop(ventillateur)

    remoteControl.setCommand(0, ventillateurWay, ventillateurStop)
    remoteControl.setCommand(1, ventillateurFast, ventillateurStop)
    remoteControl.buttonOnPress(0)

    return remoteControl.buttonCanceledPress()
  }

}