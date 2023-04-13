import { useState } from 'react';
import styles from './App.module.scss';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <div className={styles.content}>
                <Image
                    src="https://static.wixstatic.com/media/68d3a9_e54bc05fc07647e189baeee0441eb104~mv2.jpg"
                    alt="descriptive text"
                    fluid
                />
                <div className={styles['flex-row']}>
                    <Badge pill bg="primary">
                        Primary
                    </Badge>
                    <Badge pill bg="info">
                        Primary
                    </Badge>
                    <Badge pill bg="primary">
                        Primary
                    </Badge>
                    <Badge pill bg="primary">
                        Primary
                    </Badge>
                    <Badge pill bg="primary">
                        Primary
                    </Badge>
                    <Badge pill bg="primary">
                        Primary
                    </Badge>
                    <Badge pill bg="primary">
                        Primary
                    </Badge>
                    <Badge pill bg="primary">
                        Primary
                    </Badge>
                </div>
                <div>
                    <p>This is a title</p>
                    <p>This is a paragraph.</p>
                </div>
                <div className={styles['flex-row']}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://static.wixstatic.com/media/68d3a9_3a56618c342d4f86bfff387937c50bb2~mv2.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://static.wixstatic.com/media/68d3a9_3a56618c342d4f86bfff387937c50bb2~mv2.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://static.wixstatic.com/media/68d3a9_3a56618c342d4f86bfff387937c50bb2~mv2.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
