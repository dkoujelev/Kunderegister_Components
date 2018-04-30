import * as React from 'react';
import { Link } from 'react-router-dom';
import '../Style/CookieAlertStyle.css';

export interface Props {
    show?: boolean;
    onAccept: () => void;
    onDecline: () => void;
}

export interface State {
    show: boolean;
} 

class CookieAlert extends React.Component<Props, State> {
    public static defaultProps: Partial<Props> = {
        show: true
    }

    c: number = 0;
    
    constructor(props: Props) {
        super(props);
        this.state = {
            show: (props.show ? true : false)
        }
    }

    render() {
        const {onAccept, onDecline} = this.props;
        const {show} = this.state;

        if (this.c === 0 && !show) {
            return null;
        }

        return (
            <div className={show ? 'cookieAlertBox' : 'cookieAlertBox cookieAlertBox--hide'}>
                <p className="cookieAlertBox__text">
                    {/* Tekst hentet fra sparebank 1 sin side */}
                    BN Bolig bruker informasjonskapsler og analyseverktøy for 
                    å analysere det generelle brukermønsteret på våre nettsider. 
                    Informasjonskapsler er små tekstfiler som våre 
                    nettsider lagrer på din datamaskin. 
                    Her finner du mer informasjon om BN Bolig sin 
                    bruk av informasjonskapsler.{' '}
                    <span className="cookieAlertBox__link">
                        <Link to="">Mer informasjon om bruk av informasjonskapsler.</Link>
                    </span>
                </p>
                <button 
                    className="cookieAlertBox__acceptButton"
                    onClick={() => { 
                        onAccept();
                        this.c++;
                        this.setState({ show: false }); 
                    }}
                >
                    Godta bruk av cookies
                </button>
                <button 
                    className="cookieAlertBox__declineButton"
                    onClick={() => { 
                        onDecline();
                        this.c++;
                        this.setState({ show: false});
                    }}
                >
                    Ikke godta bruk av cookies
                </button>
            </div>
        );
  }
}

export default CookieAlert;
