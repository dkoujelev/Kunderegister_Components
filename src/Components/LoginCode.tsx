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
            displays: new Array(this.props.length).fill('')
        };
    }

    clearInput() {
        this.setState({focus: 0, displays: new Array(this.props.length).fill('-')});
    }

    update(i: number) {
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
        let {displays, focus} = this.state;

        return(
            <div className="loginCode">
                <div className="display">
                {displays.map((x: string, i: number) => {
                    if (i === 0) { return (
                            <input
                                type="tel"
                                key={i}
                                className={'highlight'}
                                maxLength={1}
                                size={10}
                                onChange={() => this.update(i)}
                            />
                        ); 
                    }
                    return (
                        <input 
                            type="tel" 
                            key={i} 
                            className={(displays[i - 1] === '-' ? 'input' : 'highlight')}
                            autoFocus={i === focus}
                            maxLength={1}
                            size={10}
                            onChange={() => this.update(i)}
                        />
                    );
                })}
                </div>
            </div>
        );
    }
}