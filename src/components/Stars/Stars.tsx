import Star from '../Star/Star.tsx';
import {v4 as uuidv4} from 'uuid';
import '../../App.css';

type starCount = {
    count: number
}

export const Stars = ({ count = 0 }: starCount) => {
    if (count < 1 || count > 5) return null;
    if (Number.isNaN(count)) return null;

    const starsObjects = [];

    for (let i = 1; i <= count; i += 1) {
        let myuuid = uuidv4();
        starsObjects.push(<li key={`object_${myuuid}`}><Star /></li>);
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {[starsObjects]}
        </ul>
    )
}


export default Stars;
