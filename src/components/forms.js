import React from "react";



class Form extends React.Component {
    render() {
        return (
            <div>
                <input onChange={(event)=> {
                    this.props.handleChange("url", event);
                }} value={this.props.info.url} type="text" placeholder="Image URL" className="form-control" />
                <input onChange={(event)=> {
                    this.props.handleChange("top", event);
                }} value={this.props.info.top} placeholder="top text" className="form-control"/>
                <input onChange={(event)=> {
                    this.props.handleChange("bottom", event);
                }} value={this.props.info.bottom} placeholder="bottom text" className="form-control"/>
                <div id="btn">
                    <button onClick={()=> {
                        this.props.handleClick(this.props.info);
                    }} className="custom-btn">Make Me Laugh</button>
                </div>
            </div>
            
                        
        
                
                
            
        )
    }
}

export default Form;