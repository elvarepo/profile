import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';
import resumeData from '../uitilities/resumeData';

function Footer() {
  return (
    <div className='footer'>
      <div className='footter__left'>
        <Typography className='footer__name'>
          {resumeData.name}
        </Typography>
      </div>
      <div className='footter__right'>
        <Typography className='footer__copyright'>
          Designed and Developed by <a href='/' target='_blank'>Elva Wang</a>
          <br/>
          Clone idea from <a href='https://themeforest.net/user/travonline'  target='_blank'>Travonline</a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer
