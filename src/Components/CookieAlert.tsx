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

class Achievement extends React.Component<Props, State> {
    public static defaultProps: Partial<Props> = {
        show: true
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            show: (props.show ? true : false)
        }
    }
  
    render() {
    let {onAccept, onDecline} = this.props;
    let {show} = this.state;

    return (
      <div className={show ? 'cookieAlertBox' : 'cookieAlertBox cookieAlertBox--hide'}>
        <p className="cookieAlertBox--text">
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
                this.setState({ show: false }); 
            }}
        >
            Godta bruk av cookies
        </button>
        <button 
            className="cookieAlertBox__declineButton"
            onClick={() => { 
                onDecline();
                this.setState({ show: false});
            }}
        >
            Ikke godta bruk av cookies
        </button>
      </div>
    );
  }
}

export default Achievement;
