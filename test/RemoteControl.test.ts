import { Lamp } from "../src/classes/Lamp";
import { CommandLightUpLamp } from "../src/commands/CommandLightUpLamp";
import { ICommand } from "../src/interface/ICommand";
import { CommandControl } from "../src/classes/CommandControl";
import { GarageDoor } from "../src/classes/GarageDoor";
import { CommandOpenGarageDoor } from "../src/commands/CommandOpenGarageDoor";
import { RemoteControl } from "../src/classes/RemoteControl";
import { CommandCloseGarageDoor } from "../src/commands/CommandCloseGarageDoor";
import { RunRemoteControl } from "../src/RunRemoteControl";
describe("test remote control", () => {
  const runRemote = new RunRemoteControl();
  it('should be return "Lampe garage allumé"', () => {
    const result = runRemote.main();

    expect(result).toBe("Lampe garage allumé");
  });
  it('should be return "Porte du garage ouverte"', () => {
    const result = runRemote.main2();

    expect(result).toBe("Porte du garage ouverte");
  });
  it('should be return "Porte garage ouvert"', () => {
    const result = runRemote.main3();

    expect(result).toBe("Porte du garage ouverte");
  });
  it('should be return "anulation commande"', () => {
    const result = runRemote.main4();

    expect(result).toBe("Porte du garage fermé");
  });
  it('should be return "ventillateur sur rapide"', () => {
    const result = runRemote.main5();

    expect(result).toBe("ventillateur sur rapide");
  });
  it('should be return "ventillateur sur moyen"', () => {
    const result = runRemote.main6();

    expect(result).toBe("ventillateur sur moyen");
  });
  it('should be return "ventillateur éteint"', () => {
    const result = runRemote.main7();

    expect(result).toBe("ventillateur éteint");
  });
});
