import * as React from 'react';

declare module "em1" {
    interface LoginCodeProps {
        onFilled: (code: string) => void;
        status: string;
        length?: number;
    }

    export default class LoginCode extends React.Component<LoginCodeProps> { }
}
