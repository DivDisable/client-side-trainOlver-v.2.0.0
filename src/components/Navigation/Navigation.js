import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Figure from '../Figure/Figure';

import { ThemeContext } from '../../theme-context';
import logo from '../../logo.svg';
import { sports, sportImages } from '../../initial.data';
import { useThemeContext } from '../../customHooks';

function Navigation() {
  const [theme] = useThemeContext(ThemeContext);
  return (
    <Navbar
      className='navigation'
      style={{ backgroundColor: theme.bgColor, transition: '0.5s' }}
      expand='lg'>
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            className='d-inline-block align-top'
            alt='logo'
            width='30'
            height='30'
          />{' '}
          Trainolver
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>О приложении</Nav.Link>
            <Nav.Link href='#link'>О нас</Nav.Link>
            <NavDropdown
              title='Выбрать спорт'
              id='basic-nav-dropdown'
              align={{ lg: 'end' }}>
              <Container className='container_custom'>
                <Row className='justify-content-center'>
                  {sports.map((sport, index) => (
                    <Col xs={3} key={index}>
                      <NavDropdown.Item className='p-0'>
                        <Figure figcaption={sport} img={sportImages[index]} />
                      </NavDropdown.Item>
                    </Col>
                  ))}
                </Row>
              </Container>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
