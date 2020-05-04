import React from "react"

class input extends React.Component {
    render(){
        return(
            <input type="text" name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} />
        )
    }
}
export default input;