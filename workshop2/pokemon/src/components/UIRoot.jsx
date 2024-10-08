import { Component } from "react";

import Header from "./Header";
import Reaction from "./Reaction";
import ReactionContainer from "./ReactionContainer";

class UIRoot extends Component {

    render() {
        return ( <>
        <Header />
        <ReactionContainer />
        </>);

    }
}

export default UIRoot;