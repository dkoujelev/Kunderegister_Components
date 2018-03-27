import * as React from 'react';
import '../Style/LoginCodeStyle.css';

interface Props {
    onFilled: (code: string) => void;
    status: string;
    length?: number;
}

interface State {
    focus: number;
    displays: string[];
}

export default class LoginCode extends React.Component<Props, State> {
    public static defaultProps: Partial<Props> = {
        length: 5
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            focus: 0,
            displays: new Array(this.props.length).fill('-')
        };
    }

    clearInput() {
        this.setState({focus: 0, displays: new Array(this.props.length).fill('-')});
    }

    onClick(i: number) {
        let {displays, focus} = this.state;
        let {length, onFilled} = this.props;

        if (length && focus < length) {
            displays[focus] = i.toString();
            this.setState({displays: displays, focus: focus + 1});
        }

        if (length && focus === length - 1) {
            let code: string = '';
            displays = this.state.displays;
            for (i = 0; i < displays.length; i++) {
                code += displays[i];
            }

            alert(code);
            onFilled(code);
            setTimeout(() => { this.clearInput(); }, 2000);
            // this.setState({focus: focus + 1});
        }
    }

    render() {
        let {displays} = this.state;
        let keys = new Array(10).fill(0);

        return(
            <div className="loginCode">
                <div className="display">
                {displays.map((x: string, i: number) => {
                    if (i === 0) { return <div key={i} className={'displayNumHL'}>{x}</div>; }
                    return <div key={i} className={(displays[i - 1] === '-' ? 'displayNum' : 'displayNumHL')}>{x}</div>;
                })}
                </div>
                <div className="numPad">
                {
                    keys.map((x: number, i: number) => {
                        i = i + 1;
                        if (i === 10) {
                            return (
                                <span className="centerButton">
                                    <button key={0} className="numButton" onClick={() => this.onClick(0)}>0</button>
                                </span>
                            );
                        }
                        return (
                            <button key={i} className="numButton" onClick={() => this.onClick(i)}>{i}</button>
                        );
                    })
                }    
                </div>
            </div>
        );
    }
}