import Rover from "./Rover";
import { Heading } from "./Heading";

it("rover moves north correctly", () => {
  // Arrange
  let rover = new Rover(1, 1, "N");

  // Act
  rover.move();

  // Assert
  expect(rover.location.x).toEqual(1);
  expect(rover.location.y).toEqual(2);
  expect(rover.heading).toEqual(Heading.N);
});

it("rover moves east correctly", () => {
  // Arrange
  let rover = new Rover(1, 1, "E");

  // Act
  rover.move();

  // Assert
  expect(rover.location.x).toEqual(2);
  expect(rover.location.y).toEqual(1);
  expect(rover.heading).toEqual(Heading.E);
});

it("rover moves west correctly", () => {
  // Arrange
  let rover = new Rover(1, 1, "W");

  // Act
  rover.move();

  // Assert
  expect(rover.location.x).toEqual(0);
  expect(rover.location.y).toEqual(1);
  expect(rover.heading).toEqual(Heading.W);
});

it("rover moves south correctly", () => {
  // Arrange
  let rover = new Rover(1, 1, "S");

  // Act
  rover.move();

  // Assert
  expect(rover.location.x).toEqual(1);
  expect(rover.location.y).toEqual(0);
  expect(rover.heading).toEqual(Heading.S);
});

it("rover should move correctly from input command: 1 2 N", () => {
  // Arrange
  let command = "LMLMLMLMM";
  let rover = new Rover(1, 2, "N");
  
  // Act
  rover.execute(command);

  // Assert
  expect(rover.location.x).toEqual(1);
  expect(rover.location.y).toEqual(3);
  expect(rover.heading).toEqual(Heading.N);
});

it("rover should move correctly from input command: 3 3 E", () => {
  // Arrange
  let command = "MMRMMRMRRM";
  let rover = new Rover(3, 3, "E");
  
  // Act
  rover.execute(command);

  // Assert
  expect(rover.location.x).toEqual(5);
  expect(rover.location.y).toEqual(1);
  expect(rover.heading).toEqual(Heading.E);
});


