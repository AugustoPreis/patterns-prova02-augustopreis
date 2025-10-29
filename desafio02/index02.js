class Device {
  turnOn() {}
  turnOff() {}
  setVolume(level) {}
}

class TV extends Device {
  turnOn() {
    console.log("TV ligada.");
  }

  turnOff() {
    console.log("TV desligada.");
  }
}

class Radio extends Device {
  turnOn() {
    console.log("Rádio ligado.");
  }

  turnOff() {
    console.log("Rádio desligado.");
  }
}

class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  pressPowerButton(on) {
    on ? this.device.turnOn() : this.device.turnOff();
  }
}

class AdvancedRemoteControl extends RemoteControl {
  mute() {
    console.log("Dispositivo no modo mudo.");
  }
}

const tv = new TV();
const remoteForTV = new RemoteControl(tv);

remoteForTV.pressPowerButton(true);
remoteForTV.pressPowerButton(false);

const radio = new Radio();
const advancedRemote = new AdvancedRemoteControl(radio);

advancedRemote.pressPowerButton(true);
advancedRemote.mute();
advancedRemote.pressPowerButton(false);
