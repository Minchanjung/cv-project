import React from 'react';

/*class Inputs extends Component {

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input name={this.props.name} id={this.props.id} className={this.props.class} onChange={this.props.handleOnChange} value={this.props.val} type='text'></input>
            </div>
        )
    }
}*/

const Inputs = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input name={props.name} id={props.id} className={props.class} onChange={props.handleOnChange} value={props.val} type="text"></input>
        </div>
    )
}

export default Inputs