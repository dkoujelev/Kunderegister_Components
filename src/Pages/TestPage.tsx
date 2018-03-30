import * as React from 'react';
// import ListItem from '../Components/GroupListItem';
// import { default as Achievement, Achs } from '../Components/Achievement';
import LoginCode, { Status } from '../Components/LoginCode';

class TestPage extends React.Component {
  render() {
    /*const dataListItem = [
      {
        name: 'Møllenberg WARRIORS', leadsTotal: 200, leadsContacted: 146,
        streak: 31, rising: false, sinking: false, contactedByYou: 101, top: true
      },
      {
        name: 'Moholt Space Rum', leadsTotal: 100, leadsContacted: 52,
        streak: 23, rising: true, sinking: false, contactedByYou: 50, top: false
      },
      {
        name: '1337 Tiller Tigers', leadsTotal: 100, leadsContacted: 49,
        streak: 1, rising: false, sinking: true, contactedByYou: 20, top: false
      }
    ];

    const dataAchievements = [
      { className: '', type: Achs.mostCalls, who: {name: 'Kha Nguyen'}, measure: 4 },
      { type: Achs.firstCallOfTheDay, who: {name: 'Dmitry Koujelev'},
        measure: new Date('2018-03-06T08:15:00') }
    ];
    */
    return (
      <div>
        {/*
        {dataAchievements.map((item, i) => <Achievement key={i} {...item} />)}
        <ul style={{clear: 'both'}}>
          {dataListItem.map((item, i) => <ListItem key={i} {...item} />)}
        </ul>
        */}
        <LoginCode onFilled={(code) => { alert(code); }} status={Status.error}/>
      </div>
    );
  }
}

export default TestPage;
