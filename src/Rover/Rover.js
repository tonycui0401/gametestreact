import { Heading } from "./Heading";

export default class Rover {
  constructor(x, y, heading) {
    this.location = {};
    this.location.x = x;
    this.location.y = y;
    this.heading = heading;
  }

  move() {
    switch (this.heading) {
      case Heading.N:
        this.location.y += 1;
        break;
      case Heading.S:
        this.location.y -= 1;
        break;
      case Heading.E:
        this.location.x += 1;
        break;
      case Heading.W:
        this.location.x -= 1;
        break;
    }
  }

  rotateL() {
    switch (this.heading) {
      case Heading.N:
        this.heading = Heading.W;
        break;
      case Heading.S:
        this.heading = Heading.E;
        break;
      case Heading.E:
        this.heading = Heading.N;
        break;
      case Heading.W:
        this.heading = Heading.S;
        break;
    }
  }

  rotateR() {
    switch (this.heading) {
      case Heading.N:
        this.heading = Heading.E;
        break;
      case Heading.S:
        this.heading = Heading.W;
        break;
      case Heading.E:
        this.heading = Heading.S;
        break;
      case Heading.W:
        this.heading = Heading.N;
        break;
    }
  }

  execute(commands) {
    let commandCharsArr = commands.split("");

    for (const c of commandCharsArr) {
      switch (c) {
        case "M":
          this.move();
          break;
        case "L":
          this.rotateL();
          break;
        case "R":
          this.rotateR();
          break;
      }
    }
  }

  getPosition() {
    return `${this.location.x} ${this.location.y} ${this.heading}`;
  }
}
