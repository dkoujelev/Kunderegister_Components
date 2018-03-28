import * as React from 'react';
import '../Style/LoginCodeStyle.css';

interface Props {
    onFilled: (code: string) => void;
    status: string;
    length?: number;
}

interface State {
    update: boolean;
}

export default class LoginCode extends React.Component<Props, State> {
    public static defaultProps: Partial<Props> = {
        length: 5
    };

    codeInputRefs: HTMLInputElement[] = new Array<HTMLInputElement>(this.props.length ? this.props.length : 5);
    displays: string[] = new Array<string>(this.props.length ? this.props.length : 5).fill('');

    constructor(props: Props) {
        super(props);
        this.state = {
            update: false
        };
    }

    keyEvent (event: React.KeyboardEvent<HTMLInputElement>, i: number) {
        let BACKSPACE = 8;
        if (event.keyCode === BACKSPACE) {
            event.preventDefault();
            if (this.displays[i] !== '') {
                this.displays[i] = '';
                this.codeInputRefs[i].value = '';
            } else if (i > 0) {
                this.codeInputRefs[i].setAttribute('class', 'input');
                this.codeInputRefs[i - 1].focus();
            }
        }
    }

    clear() {
        for (let i = 0; i < this.codeInputRefs.length; i++) {
            this.codeInputRefs[i].value = '';
        }
    }

    update(i: number) {
        let {length, onFilled} = this.props;

        if (length && i < length) {
            this.displays[i] = this.codeInputRefs[i].value;
            this.codeInputRefs[i].blur();
            if (i < length - 1) {
                this.codeInputRefs[i + 1].focus();
                this.codeInputRefs[i + 1].setAttribute('class', 'highlight');
            } else if (length && i === length - 1) {
                let code: string = '';
                for (let j = 0; j < this.displays.length; j++) {
                    code += this.displays[j];
                    this.codeInputRefs[j].value = '';
                }
                
                onFilled(code);
            }
        }
    }

    render() {
        return(
            <div className="loginCode">
                <div className="display">
                {this.displays.map((x: string, i: number) => {
                    if (i === 0) { return (
                            <input
                                ref={(ref: HTMLInputElement) => { this.codeInputRefs[i] = ref; }}
                                type="tel"
                                key={i}
                                className={'highlight'}
                                autoFocus={true}
                                maxLength={1}
                                size={1}
                                onKeyDown={(event => { this.keyEvent(event, i); })}
                                onChange={() => this.update(i)}
                            />
                        ); 
                    }
                    return (
                        <input 
                            ref={(ref: HTMLInputElement) => { this.codeInputRefs[i] = ref; }}
                            type="tel" 
                            key={i} 
                            className={(this.displays[i - 1] === '' ? 'input' : 'highlight')}
                            maxLength={1}
                            size={1}
                            onKeyDown={(event => { this.keyEvent(event, i); })}
                            onChange={() => this.update(i)}
                        />
                    );
                })}
                </div>
            </div>
        );
    }
}