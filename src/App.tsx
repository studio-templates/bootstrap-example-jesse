import { useState } from 'react';
import styles from './App.module.scss';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function App() {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
    ];
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div>
                <Image
                    src="https://static.wixstatic.com/media/68d3a9_e54bc05fc07647e189baeee0441eb104~mv2.jpg"
                    alt="descriptive text"
                    fluid
                />
                <div>
                    <Badge pill bg="primary">
                        Primary
                    </Badge>
                    <Button variant="danger">Danger</Button>
                </div>
                <ProgressBar variant="primary" now={44} />
            </div>
        </div>
    );
}

export default App;
