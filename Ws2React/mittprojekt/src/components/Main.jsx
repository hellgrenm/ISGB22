import { Component } from "react";

class Main extends Component{


  render() {

    let a = this.props.a;
    let b = this.props.b;
    return (
        <>
        <main> {a * b}</main>
        
        
        </>
    );
  }

}

export default Main;