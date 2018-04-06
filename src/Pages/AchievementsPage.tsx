import * as React from 'react';
import { default as Achievement, Achs } from '../Components/Achievement';

export default class AchievementsPage extends React.Component {
    render() {
        const dataAchievements = [
            { className: '', type: Achs.mostCalls, who: {name: 'Kha Nguyen'}, measure: 4 },
            { type: Achs.firstCallOfTheDay, who: {name: 'Dmitry Koujelev'},
              measure: new Date('2018-03-06T08:15:00') }
        ];

        return(
            <div>
                {dataAchievements.map((item, i) => <Achievement key={i} {...item} />)}
            </div>
        );
    }
}
