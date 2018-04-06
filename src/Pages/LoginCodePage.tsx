import * as React from 'react';
import LoginCode, { Status } from '../Components/LoginCode';

export default class LoginCodePage extends React.Component {
    render() {
        return(
            <div>
                <LoginCode onFilled={(code) => { alert(code); }} status={Status.error}/>
            </div>
        );
    }
}
