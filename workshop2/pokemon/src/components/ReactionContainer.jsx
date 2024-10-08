import { Component } from "react";
import Reaction from "./Reaction";

class ReactionContainer extends Component{

    render(){
        return(
        <div>
            <h1>Pokemon list</h1>
            <div>
                <input type="text" />
            </div>
            <Reaction />
        </div>

        )
    };
}

export default ReactionContainer;