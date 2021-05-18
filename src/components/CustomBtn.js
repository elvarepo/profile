import React from 'react';
import './CustomBtn.css';
import { Button } from '@material-ui/core';

function CustomButton({text, icon, type}) {
  return (
    <Button 
    className='custom__btn' 
    type={type}
    endIcon={
      icon ? ( <div className='btn__icon__container' >{icon}</div>  ) : null }>
        <span className='custom__btn__text' >{text}</span>
    </Button>
  )
}

export default CustomButton
