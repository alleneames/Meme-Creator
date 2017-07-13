import React from "react";


class Meme extends React.Component {
    render() {
        return (
            <div>
                <div className="image" style={{backgroundImage: `url('${this.props.url}')`}} >
                <h2 className="top-text" >{this.props.top}</h2>
                <h2 className="bottom-text">{this.props.bottom}</h2>
                </div>
            </div>
        )
    }
}

export default Meme;