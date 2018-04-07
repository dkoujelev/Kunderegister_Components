import * as React from 'react';
import '../Style/GroupListItemStyle.css';

export interface Props {
  name?: string;
  leadsTotal: number;
  leadsContacted: number;
  streak?: number;
  rising?: false | true;
  sinking?: false | true;
  contactedByYou?: number;
  top?: false | true;
}

class GroupListItem extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    name: 'Name not found',
    leadsTotal: 0,
    leadsContacted: 0,
    streak: 0,
    contactedByYou: 0
  };

  constructor(props: Props) {
    super(props);
  }

  getProgress() {
    return Math.round(100 * this.props.leadsContacted / this.props.leadsTotal);
  }

  getStatus() {
    const { streak, top, rising, sinking, contactedByYou } = this.props;
    let status = '';

    if (streak && streak >= 3) { status += streak + '🔥'; }
    if (top) { status += '👑'; }
    if (rising) { status += '🚀'; }
    if (sinking) { status += '🥀'; }

    if (contactedByYou) {
      if (contactedByYou > 100) {
        status += '🤩';
      } else if (contactedByYou >= 50) {
        status += '😎';
      } else if (contactedByYou >= 20) {
        status += '😃';
      } else if (contactedByYou >= 1) {
        status += '🙂';
      }
    }

    return status;
  }

  render() {
    return (
      <li className="list">
        <div className="list__groupInfo">
          <p className="list__groupInfo--name">{this.props.name}</p>
          <p className="list__groupInfo--progress">{this.getProgress()}% fullført</p>
        </div>
        <div className="list__statusField">
          <p className="list__statusField--info">{this.getStatus()}</p>
        </div>
      </li>
    );
  }
}

export default GroupListItem;
