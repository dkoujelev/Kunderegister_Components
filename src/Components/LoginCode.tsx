import * as React from 'react';
import '../Style/LoginCodeStyle.css';

interface Props {
    onFilled: (code: string) => void;
    status: string;
    length?: number;
}

export default class LoginCode extends React.Component<Props> {
    public static defaultProps: Partial<Props> = {
        length: 5
    };

    constructor(props: Props) {
        super(props);
    }

    onClick() {
        return 0;
    }

    render() {
        let {length} = this.props;
        let displays: string[] = new Array(length);
        displays.fill('-');

        return(
            <div className="loginCode">
                <div className="display">
                {displays.map((x: string, i: number) => {
                    return <div key={i} className="displayNum">{x}</div>;
                })}
                </div>
                <div className="numPad">
                    <button className="numButton" onClick={this.onClick}>1</button>
                    <button className="numButton" onClick={this.onClick}>2</button>
                    <button className="numButton" onClick={this.onClick}>3</button>
                    <button className="numButton" onClick={this.onClick}>4</button>
                    <button className="numButton" onClick={this.onClick}>5</button>
                    <button className="numButton" onClick={this.onClick}>6</button>
                    <button className="numButton" onClick={this.onClick}>7</button>
                    <button className="numButton" onClick={this.onClick}>8</button>
                    <button className="numButton" onClick={this.onClick}>9</button>
                    <div className="centerButton">
                        <button className="numButton" onClick={this.onClick}>0</button>
                    </div>      
                </div>
            </div>
        );
    }
}