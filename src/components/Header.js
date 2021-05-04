import React from 'react';
import './Header.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {HomeRounded, SchoolRounded, WorkRounded, Facebook, LinkedIn, Twitter, GitHub, Telegram } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import resumeData from '../uitilities/resumeData';
import CustomButton from './CustomBtn';

function Header(props) {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand='lg' stikcy='top' className='header'>
      <Nav.Link as={NavLink} to='/' className='header__navLink'>
        <Navbar.Brand className='header__home'>
          <HomeRounded/>
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header__left'>
          <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' : 'header_link'} >
            Resume
          </Nav.Link>
          <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'} >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className='header__right'>
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target='_blank'>
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text='Hire me' icon={<Telegram/>} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header);
