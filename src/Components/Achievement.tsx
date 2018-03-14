import * as React from 'react';
import * as moment from 'moment';
import 'moment/locale/nb';

moment.locale('nb');

export enum Achs {
  mostCalls = 'Ringt mest idag ☎️',
  mostCallsInGroup = 'Ringt mest i gruppa ☎️',
  firstCallOfTheDay = 'Først Ut 🏎'
}

export interface User {
  name: string;
}

export interface Props {
  className?: string;
  type: string;
  who: User;
  measure: number | Date;
}

class Achievement extends React.Component<Props> {
  render() {
    const { className, type, who, measure } = this.props;

    return (
      <div className={className}>
        <div className="achievementBox">
          <p className="achievementText">{type}</p>
          <p className="achievementInfo">
            {who.name} {measure instanceof Date ? moment(measure).format('LT') : measure}
          </p>
        </div>
      </div>
    );
  }
}

export default Achievement;
