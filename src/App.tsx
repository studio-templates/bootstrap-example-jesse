import { useState } from 'react';
import styles from './App.module.scss';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

function App() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
    ];
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Carousel activeIndex={index} onSelect={setIndex} slide={false}>
                <Carousel.Item>
                    <Image
                        src="https://static.wixstatic.com/media/68d3a9_e54bc05fc07647e189baeee0441eb104~mv2.jpg"
                        alt="First Slide"
                        fluid
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://static.wixstatic.com/media/68d3a9_e54bc05fc07647e189baeee0441eb104~mv2.jpg"
                        alt="Second Slide"
                        fluid
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://static.wixstatic.com/media/68d3a9_e54bc05fc07647e189baeee0441eb104~mv2.jpg"
                        alt="Third Slide"
                        fluid
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className={styles.content}>
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
                    <Badge pill={true} bg="secondary">
                        Primary
                    </Badge>
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
