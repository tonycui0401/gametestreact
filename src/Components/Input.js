import React from "react";
import Rover from "../Rover/Rover";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", output: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let totalOutput = "";

    let userInputLines = this.state.input.split("\n");

    if (userInputLines.length < 3) {
      this.setState({
        output: "Please enter input in the correct format! \n"
      });
      return;
    }

    // TODO use this for bounds checking
    let topRightCoords = userInputLines[0].split(" ");

    if (topRightCoords.length !== 2) {
      this.setState({
        output:
          "Please enter input in the correct format, need 2 positive integers! \n"
      });
      return;
    }

    // TODO check they are both integers
    let maxX = topRightCoords[0];
    let maxY = topRightCoords[1];

    // Get the number of rover locations plus commands
    if ((userInputLines.length - 1) % 2 != 0) {
      this.setState({
        output:
          "Please enter input in the correct format, need list of rover location followed by command! \n"
      });
      return;
    }

    let numCommands = (userInputLines.length - 1) / 2;

    for (let i = 0; i < numCommands; i++) {
      // Get Rover coords and heading (miss the first line which is the topright coords)
      let roverLocation = userInputLines[2 * i + 1].split(" ");

      if (roverLocation.length != 3) {
        this.setState({
          output:
            "Please enter input in the correct format, need 2 positive integers followed by a heading seperated by spaces! \n"
        });
        return;
      }

      let roverX = parseInt(roverLocation[0]);
      let roverY = parseInt(roverLocation[1]);
      let heading = roverLocation[2];

      let rover = new Rover(roverX, roverY, heading);

      // Get the command
      let command = userInputLines[2 * i + 2];

      // Move the rover
      rover.execute(command);

      // Append the new location to the output
      totalOutput += rover.getPosition() + "\n";
    }

    // Set the output state
    this.setState({
      output: totalOutput
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input:
            <textarea value={this.state.input} onChange={this.handleChange} rows="6" cols="30"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <label>
          Ouput:
          <textarea value={this.state.output} readonly rows="6" cols="30"/>
        </label>
      </>
    );
  }
}
