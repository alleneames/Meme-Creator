import React from "react";

//get the ting that connects react to redux
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux";

//get all the actions and put them in an object called actionCreators
import * as actionCreators from "../actions/";

import Meme from "../components/meme.js";

class MemeContainer extends React.Component {
    render() {
        return (
            <div>
                <Meme top={this.props.top} bottom={this.props.bottom} url={this.props.url} />
            </div>
        )
    }
}
//tell redux how to connect the state to component via props
const mapStateToProps = (state)=> {
    return state;
}

//tell redux how to turn actions into functions that can be called in react via props
const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}
//connect store to memecontainer
export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);