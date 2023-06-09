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
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
                className={Classnames(styles.carousel, styles['font-style'])}
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
                <div className={Classnames(styles['flex-row'], styles.badges)}>
                    <Badge pill bg="dark" text="light">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="dark" text="light">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="dark" text="light">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="dark" text="light">
                        PRIMARY
                    </Badge>
                    <Badge pill bg="dark" text="light">
                        PRIMARY
                    </Badge>

                    <Badge pill bg="dark" text="light">
                        PRIMARY
                    </Badge>
                </div>
                <div className={Classnames(styles['font-style'], styles['text-layout'])}>
                    <h3>Heading 1</h3>
                    <p className={styles['text-width']}>
                        People on Meetup have fostered community, learned new skills, started
                        businesses, and made life-long friends. Learn how.
                    </p>
                </div>
                <div className={Classnames(styles['flex-row'], styles['diff-layout'])}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://static.wixstatic.com/media/ff6bf6_b35da181dc7f4e9480802618b23e8253~mv2.png"
                        />
                        <Card.Body className={styles['font-style']}>
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
                            src="https://static.wixstatic.com/media/ff6bf6_b35da181dc7f4e9480802618b23e8253~mv2.png"
                        />
                        <Card.Body className={styles['font-style']}>
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
                            src="https://static.wixstatic.com/media/ff6bf6_b35da181dc7f4e9480802618b23e8253~mv2.png"
                        />
                        <Card.Body className={styles['font-style']}>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="dark">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://static.wixstatic.com/media/ff6bf6_48cfdd8060e54b9cb7227fadb86cf0e0~mv2.png"
                        />
                        <Card.Body className={styles['font-style']}>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div
                    className={Classnames(styles['bg-section'], styles['text-color'], styles.mika)}
                >
                    <div className={styles['footer-flex']}>
                        <span>About Us</span>
                        <span>Privacy Policy</span>
                        <span>Our App</span>
                        <span>The company</span>
                    </div>
                    <div className={styles['join-our']}>
                        join our newsletter
                        <InputGroup className={Classnames(styles['text-layout'], styles.shaked)}>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Recipient's username"
                            />
                            <InputGroup.Text id="addon" className={styles['form-button']}>
                                @example.com
                            </InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
