import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import {HomeRounded, Telegram } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import resumeData from '../uitilities/resumeData';
import CustomButton from './CustomBtn';
import Resume from '../images/elva.pages';


function Header(props) {

  const pathName = props?.location?.pathname;

  return (
    <Navbar expand='lg' stikcy='top' className='header'>
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
          <a href={Resume} download='elva.pages' target="_blank" rel="noopener noreferrer"  
          style={{'text-decoration': 'none'}}>
            <CustomButton   text='Hire me' icon={<Telegram/>}/>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header);
