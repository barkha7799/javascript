import React from 'react';

export class Lable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, onClickButton } = this.props;
        return (
            <div className="lable-value">
                <lable>
                    {value}
                </lable>
                <button onClick={onClickButton}><br></br>
                   <br /> Click Child Button
                </button>
            </div>
        );
    }

    onClickButton(data) {
        alert(data);
    };
} 