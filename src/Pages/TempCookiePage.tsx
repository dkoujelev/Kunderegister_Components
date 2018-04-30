import * as React from 'react';
import CookieAlert from '../Components/CookieAlert';

export default class TempCookiePage extends React.Component {
    render() {
        return(
            <div>
                <CookieAlert 
                    show={false} 
                    onAccept={() => { alert('Accepted'); }} 
                    onDecline={() => { alert('Declined'); }}
                />
            </div>
        );
    }
}