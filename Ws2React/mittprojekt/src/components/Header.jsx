import { Component } from "react";

class Header extends Component{


  render() {

    let a = 10;
    let b = 5;

    return (
        <>
        <header>{ a * b } </header>
        
        </>
    );
  }

}

export default Header;