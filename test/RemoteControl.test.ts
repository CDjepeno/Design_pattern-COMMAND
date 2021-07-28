import { Lamp } from '../src/classes/Lamp';
import { CommandLightUpLamp } from '../src/commands/CommandLightUpLamp';
import { ICommand } from '../src/interface/ICommand';
import { CommandControl } from '../src/classes/CommandControl';
import { GarageDoor } from '../src/classes/GarageDoor';
import { CommandOpenGarageDoor } from '../src/commands/CommandOpenGarageDoor';
import { RemoteControl } from '../src/classes/RemoteControl';
import { CommandCloseGarageDoor } from '../src/commands/CommandCloseGarageDoor';
describe('test remote control',() => {
  it('should be return "Lampe garage allumé"', () => {
    let lamp: Lamp = new Lamp("garage")
    let lightUpLamp: ICommand = new CommandLightUpLamp(lamp)
    let commandControl: CommandControl = new CommandControl(lightUpLamp)
    
    commandControl.setCommand(lightUpLamp)
    let result = commandControl.buttonPress()

    expect(result).toBe("Lampe garage allumé") 
  })
  it('should be return "Porte du garage ouverte"', () => {
    let garageDoor: GarageDoor = new GarageDoor()
    let garaDoorOpen: ICommand = new CommandOpenGarageDoor(garageDoor)
    let commandControl: CommandControl = new CommandControl(garaDoorOpen)
    
    commandControl.setCommand(garaDoorOpen)
    let result = commandControl.buttonPress()

    expect(result).toBe("Porte du garage ouverte") 
  })
  it('should be return "Porte garage ouvert"', () => {
    let garageDoor: GarageDoor = new GarageDoor()
    let garageDoorOpen: ICommand = new CommandOpenGarageDoor(garageDoor)
    let garageDoorClose: ICommand = new CommandCloseGarageDoor(garageDoor)
    let remoteControl: RemoteControl = new RemoteControl()

    remoteControl.setCommand(0, garageDoorOpen, garageDoorClose)
    let result = remoteControl.buttonOnPress(0)

    expect(result).toBe("Porte du garage ouverte") 
  })
  it('should be return "anulation commande"', () => {
    let garageDoor: GarageDoor = new GarageDoor()
    let garageDoorOpen: ICommand = new CommandOpenGarageDoor(garageDoor)
    let garageDoorClose: ICommand = new CommandCloseGarageDoor(garageDoor)
    let remoteControl: RemoteControl = new RemoteControl()

    remoteControl.setCommand(0, garageDoorOpen, garageDoorClose)
    remoteControl.buttonOnPress(0)
    let result = remoteControl.buttonCanceledPress()

    expect(result).toBe("anulation commande") 
  })
})