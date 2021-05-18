import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import './Portfolio.css';
import resumeData from '../uitilities/resumeData';
import CustomGallery from './CustomGallery';

function Portfolio() {
  const [tabValue, setTabValue] = useState('All React Projects');
  const [projectDialog, setProjectDialog] = useState({});

  return (
    <Grid  container className='section pb__45 pt__45'>
      {/* Title */}
      <Grid item className="section__title mb__30">
          <span></span>
          <h6 className='section__title__text'>Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12} >
        <Tabs 
          value={tabValue} 
          TabIndicatorProps={{ 
            style: {
                display: "none",
            },
          }}
          className='customTabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab label='All React Projects' value='All React Projects' className={tabValue === 'All React Projects' ? 'customTabs__item active' : 'customTabs__item'} />

        
          {[...new Set(resumeData.projects.map((item, idx) => item.tag))].map((tag, i ) => (
            <Tab key={i} label={tag} value={tag} className={tabValue === tag ? 'customTabs__item active' : 'customTabs__item'}/>
          ))}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3} className={'p__30'} >
          {resumeData.projects.map((project,i ) => (
            <>
            {tabValue === project.tag || tabValue === 'All React Projects' ? (
            <Grid key={i} item xs={12} sm={6} >
              <Grow in timeout={1000}>
                <Card key={i} className='customCard' onClick={() => setProjectDialog(project)}>
                  <CardActionArea >
                    <CardMedia className='customCard__image' image={project.images[0]} title={project.title}/>
                    <CardContent>
                      <Typography className="customCard__title" variant='body2'>{project.title} </Typography>
                      <Typography className='customCard__caption' variant='caption'><span>{project.caption}</span> </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>   
            </Grid>
            ) : null }
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog 
        open={Object.keys(projectDialog).length !== 0} 
        onClose={() => setProjectDialog({})} 
        className='projectDialog'
        maxWidth={'lg'}
        fullWidth
        >
        <DialogTitle onClose={() => setProjectDialog({})}>
          {projectDialog.title}
        </DialogTitle>
        
        <DialogContent style={{height: '70vh'}}>
          {projectDialog.images && (
            <CustomGallery images={projectDialog.images} />
          )}
          <div className='projectDialog__description'>
            {projectDialog.description}
          </div>
        </DialogContent>

        <DialogActions className='projectDialog__actions'>
          {projectDialog?.links?.map((link, i) => (
            <a 
              key={i}
              href={link.link} 
              target='_blank' 
              rel='noreferrer'
              className='projectDialog__icon'>
              {link.icon}
            </a>
          ))}
        </DialogActions>
    </Dialog>

    </Grid>
  )
}

export default Portfolio
