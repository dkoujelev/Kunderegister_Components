import * as React from 'react';
import '../Style/LoginCodeStyle.css';

interface Props {
    onFilled: (code: string) => void;
    status: string;
    length?: number;
}

export enum Status {
    fetching = 'Logger inn...',
    error = 'Noe gikk galt. Kunne ikke logge inn.',
    ready = ''
}

export default class LoginCode extends React.Component<Props> {
    public static defaultProps: Partial<Props> = {
        length: 5
    };

    codeInputRefs: HTMLInputElement[] = new Array<HTMLInputElement>(this.props.length ? this.props.length : 5);
    displays: string[] = new Array<string>(this.props.length ? this.props.length : 5).fill('');

    constructor(props: Props) {
        super(props);
    }

    keyEvent (event: React.KeyboardEvent<HTMLInputElement>, i: number) {
        let BACKSPACE = 8;
        if (event.keyCode === BACKSPACE) {
            event.preventDefault();
            let cir1 = this.codeInputRefs[i];
            if (i > 0) {
                let cir2 = this.codeInputRefs[i - 1];
                cir1.setAttribute('class', 'input');
                cir1.disabled = true;
                this.displays[i - 1] = '';
                cir2.disabled = false;
                cir2.value = '';
                cir2.focus();
            } else {
                this.displays[i] = '';
                cir1.value = '';
            }
        }
    }

    clear() {
        for (let i = 1; i < this.codeInputRefs.length; i++) {
            this.displays[i] = '';
            this.codeInputRefs[i].value = '';
            this.codeInputRefs[i].setAttribute('class', 'input');
        }

        let cir0 = this.codeInputRefs[0];
        cir0.value = '';
        cir0.disabled = false;
        cir0.focus();
    }

    update(i: number) {
        let {length, onFilled} = this.props;
        let cir1 = this.codeInputRefs[i];

        this.displays[i] = this.codeInputRefs[i].value;
        cir1.disabled = true;
        if (length && i < length - 1) {
            let cir2 = this.codeInputRefs[i + 1];
            cir2.disabled = false;
            cir2.focus();
            cir2.setAttribute('class', 'highlight');
        } else if (length && i === length - 1) {
            let code: string = '';
            for (let j = 0; j < this.displays.length; j++) {
                code += this.displays[j];
            }
            
            this.clear();
            onFilled(code);
        }
    }

    componentDidMount() {
        this.codeInputRefs[0].focus();
    }

    render() {
        let { status } = this.props;
        return(
            <div className="loginCode">
                <div className="display">
                <p className="Message">Kode sendt til ditt mobilnummer</p>
                {this.displays.map((x: string, i: number) => {
                    if (i === 0) { return (
                            <input
                                ref={(ref: HTMLInputElement) => { this.codeInputRefs[i] = ref; }}
                                type="tel"
                                key={i}
                                autoFocus={true}
                                className={'highlight'}
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
                            disabled={true}
                            className={(this.displays[i - 1] === '' ? 'input' : 'highlight')}
                            maxLength={1}
                            size={1}
                            onKeyDown={(event => { this.keyEvent(event, i); })}
                            onChange={() => this.update(i)}
                        />
                    );
                })}
                <p className="statusMessage">{status}</p>
                </div>
            </div>
        );
    }
}