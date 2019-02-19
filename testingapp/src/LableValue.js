import React from 'react';
import { Lable } from './Lable';
import Notification, {notify} from 'react-notify-toast'

export class LableValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lablevalue: " " };
        this.lableRef = React.createRef();
     
    }



    render() {
        return (
            <div className="lable-value">
                <input type="text" value={this.state.lableValue} onChange={this.onValueChange} />
                <Lable onClickButton={this.onClickButton} value={this.state.lableValue} ref={this.lableRef} />
                <button onClick={this.onClick} >
                    Click here
                </button>
            </div>
        );
    }

    onValueChange = (e) => {
        const { value } = e.target;
        this.setState({
            lableValue: value
        });
    };

    onClick = (e) => {
        this.lableRef.current.onClickButton("data");
    };

    onClickButton = (data)  => {
        alert(data);
    };
}