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
    displays: string[] = Array<string>(this.props.length ? this.props.length : 5).fill('');
    index: number = 0;

    keyEvent (event: React.KeyboardEvent<HTMLInputElement>, i: number) {
        const BACKSPACE = 8;
        if (event.keyCode === BACKSPACE) {
            event.preventDefault();
            if (i > 0) {
                this.codeInputRefs[i].setAttribute('class', 'input');
                this.displays[i - 1] = '';
                this.codeInputRefs[i - 1].value = '';
                this.index--;
                this.codeInputRefs[i - 1].focus();
            } else {
                this.displays[i] = '';
                this.codeInputRefs[i].value = '';
            }
        }
    }

    clear() {
        for (let i = 0; i < this.codeInputRefs.length; i++) {
            this.displays[i] = '';
            this.codeInputRefs[i].value = '';
            this.codeInputRefs[i].setAttribute('class', 'input');
        }

        this.index = 0;
        this.codeInputRefs[0].focus();
    }

    update(i: number) {
        const {length, onFilled} = this.props;
        let cir1 = this.codeInputRefs[i];
        this.displays[i] = this.codeInputRefs[i].value;

        cir1.setAttribute('class', 'input input-highlight');
        if (length && i < length - 1) {
            this.index++;
            this.codeInputRefs[i + 1].focus();  
        } else if (length && i === length - 1) {
            let code: string = '';
            for (let j = 0; j < this.displays.length; j++) {
                code += this.displays[j];
            }
            
            this.clear();
            onFilled(code);
        }
    }

    onInputFocus(i: number) {
        if (i !== this.index) {
            this.codeInputRefs[this.index].focus();
            this.codeInputRefs[i].blur();            
        }
    }

    render() {
        const { status } = this.props;

        return(
            <div className="loginCode">
                <div className="display">
                <p className="Message">Kode sendt til ditt mobilnummer</p>

                {this.displays.map((x: string, i: number) => {
                    const first = i === 0;

                    return (
                        <input 
                            ref={(ref: HTMLInputElement) => { this.codeInputRefs[i] = ref; }}
                            type="tel"
                            key={i}
                            autoFocus={first}
                            className={(this.displays[i] === '' ? 'input' : 'input input-highlight')}
                            maxLength={1}
                            size={1}
                            onFocus={() => { this.onInputFocus(i); }}
                            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => { this.keyEvent(event, i); }}
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