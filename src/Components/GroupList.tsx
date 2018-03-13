import * as React from 'react';
import ListItem from './GroupListItem';

class GroupList extends React.Component {
  render() {
    const data = [
      {name: 'Møllenberg WARRIORS', leadsTotal: 200, leadsContacted: 146,
        streak: 31, rising: false, sinking: false, contactedByYou: 101, top: true},
      {name: 'Moholt Space Rum', leadsTotal: 100, leadsContacted: 52,
        streak: 23, rising: true, sinking: false, contactedByYou: 50, top: false},
      {name: '1337 Tiller Tigers', leadsTotal: 100, leadsContacted: 49,
        streak: 1, rising: false, sinking: true, contactedByYou: 20, top: false}
    ];

    return (
      <ul>
        {data.map((item, i) => <ListItem key={i} {...item} />)}
      </ul>
    );
  }
}

export default GroupList;
