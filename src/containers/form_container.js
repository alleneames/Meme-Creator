import React from "react";
import autoBind from "react-autobind";

//get the thing to connect react to redux
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux";

//get all the actions and put them in an object called actionCreators
import * as actionCreators from "../actions/";

import Form from "../components/forms.js";



class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            top: "",
            bottom: "",
            url: ""
        };
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Form handleClick={this.props.makeMeme} handleChange={this.handleChange} info={this.state} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);