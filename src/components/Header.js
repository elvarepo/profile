import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import {HomeRounded, Telegram } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import resumeData from '../uitilities/resumeData';
import CustomButton from './CustomBtn';
import { Link } from "react-scroll";

function Header({ location }) {

  const pathName = location?.pathname;

  return (
    <Navbar expand='lg' stikcy='top' className='header' animation="false" >
      <Nav.Link as={NavLink} to='/' className='header__navLink' href='#id'>
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
          {Object.keys(resumeData.socials).map((key,i) => (
            <a key={i} href={resumeData.socials[key].link} target='_blank' rel='noreferrer'>
              {resumeData.socials[key].icon}
            </a>
          ))}
          <Link to='contact' smooth={true} duration={1500}>
            <CustomButton   text='Hire me' icon={<Telegram/>} />
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header);
