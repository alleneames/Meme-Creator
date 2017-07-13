import React from "react";
import ReactDOM from "react-dom"

//this provides store to the app
import { Provider } from "react-redux";
//this makes the store
import { createStore } from "redux"
//get the reducer to handle state
import reducers from "./reducers/";

//css
import "./styles.css";

//import containers & components
import MemeContainer from "./containers/meme_container";
import FormContainer from "./containers/form_container";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

const store = createStore(reducers);


class App extends React.Component {
    render() {
        return(
            <view>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header />
                <div className="row">
                    <div className="col-md-6">
                            <FormContainer />
                    </div>
                    <div className="col-md-6">
                            <MemeContainer />
                    </div>
                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Footer />
                    </div>
                </div>
            </div>
            </view>
        )
    }
}
//give it to the app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));