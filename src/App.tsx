import { useState } from 'react';
import styles from './App.module.scss';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Classnames from 'classnames';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

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
            <Navbar className={styles['navbar-width']}>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Carousel
                activeIndex={index}
                onSelect={setIndex}
                slide={false}
                className={styles.carousel}
            >
                <Carousel.Item>
                    <Image
                        sizes={'880'}
                        src="https://static.wixstatic.com/media/ff6bf6_41086d5ad29048078d9269648858d341~mv2.png"
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
                        src="https://static.wixstatic.com/media/ff6bf6_d522ee5f79944b419ef0182cbd4a0fef~mv2.png"
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
                        src="https://static.wixstatic.com/media/ff6bf6_0a9b4b8da128497f840962f9c50e44d4~mv2.png"
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
                <div
                    className={Classnames(
                        styles['flex-row'],
                        styles['bg-for-badges'],
                        styles.badges
                    )}
                >
                    <Badge pill bg="light" text="dark" className={styles['my-badge']}>
                        PRIMARY
                    </Badge>
                    <Badge pill bg="light" text="dark">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="light" text="dark">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="light" text="dark">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="light" text="dark">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="light" text="dark">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="light" text="dark">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="light" text="dark">
                        PRIMARY
                    </Badge>
                </div>
                <div>
                    <h3 className={styles['font-style']}>Heading 1</h3>
                    <p className={styles['text-width']}>
                        People on Meetup have fostered community, learned new skills, started
                        businesses, and made life-long friends. Learn how.
                    </p>
                </div>
                <div className={Classnames(styles['flex-row'], styles['diff-layout'])}>
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
