import * as React from "react";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<IHelloProps, undefined> {
  public render() {
    return (
      <div>
        <h1>Hello from { this.props.compiler} and {this.props.framework}!</h1>
        <input type="text" />
        <button onClick={this.onClick}>Click me...</button>
      </div>
    )
  }

  private onClick = () => {
    console.log("Button clicked")
  }
}
