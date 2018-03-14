import * as React from 'react';

export enum Achs {
  mostCalls = 'Ringt mest idag',
  mostCallsInGroup = 'Ringt mest i gruppa'
}

export interface User {
  name: string;
}

export interface Props {
  className?: string;
  type: string;
  who: User;
  measure: number;
}

class Achievement extends React.Component<Props> {
  render() {
    const { className, type, who, measure } = this.props;

    return (
      <div className={className}>
        <div className="achievementBox">
          <p className="achievementText">{type}</p>
          <p className="acheivementInfo">{who.name} {measure}</p>
        </div>
      </div>
    );
  }
}

export default Achievement;
