import { Grid, Icon, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import './Resume.css';
import resumeData from '../uitilities/resumeData';
import CustomTimeline, { CustomTimeLineSeparator } from './CustomTimeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomButton from './CustomBtn';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';


function Resume() {
  console.log(resumeData)
  return (
    <>
    {/* About me  */}
    <Grid container className='section pb__45' >
      <Grid item className='section__title mb__30' >
        <span></span>
        <h6 className='section__title__text'>About Me</h6>
      </Grid>
      <Grid item xs='12'>
        <span></span>
        <Typography variant='body2' className='aboutme__text'>{resumeData.about}</Typography>
      </Grid>
    </Grid>

    {/* Education and experiences  */}
    <Grid container className='section pb__45'>
      <Grid item className='section__title mb__30' >
        <span></span>
        <h6 className='section__title__text'>Resume</h6>
      </Grid>
      <Grid item xs='12'>
        <Grid container className='resume_timeline'>
          {/* Experiences */}
          <Grid item sm={12} md={6}>
            <CustomTimeline 
              title="Work Experiences"
              icon={<WorkIcon/>}
             >
                {resumeData.experiences.map(experience => (
                  <TimelineItem>
                    {/* <TimelineSeparator className='separator__padding' >
                      <TimelineDot 
                        varian='outlined'
                        className='timeline_dot'
                      />
                      <TimelineConnector/>
                    </TimelineSeparator> */}
                    <CustomTimeLineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className="timeline_title">{experience.title} </Typography>
                      <Typography className="timeline_date" variant='caption'>{experience.date} </Typography>
                      <Typography className="timeline_description" variant="body2">{experience.description} </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
            </CustomTimeline>
          </Grid>
          {/* Education */}
          <Grid item sm={12} md={6}>
            <CustomTimeline 
              title="Education"
              icon={<SchoolIcon/>}
             >
                {resumeData.educations.map(experience => (
                  <TimelineItem>
                    {/* <TimelineSeparator className='separator__padding' >
                      <TimelineDot 
                        varian='outlined'
                        className='timeline_dot'
                      />
                      <TimelineConnector/>
                    </TimelineSeparator> */}
                    <CustomTimeLineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className="timeline_title">{experience.title} </Typography>
                      <Typography className="timeline_date" variant='caption'>{experience.date} </Typography>
                      <Typography className="timeline_description" variant="body2">{experience.description} </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    {/* <CustomTimeline icon={<PersonOutlineOutlinedIcon/>} >
          <CustomTimelineItem title='Name' text={resumeData.name}/>
          <CustomTimelineItem title='Title' text={resumeData.title}/>
          <CustomTimelineItem title='Email' text={resumeData.email}/>

          {Object.keys(resumeData.socials).map((key,idx) => (
            <CustomTimelineItem key={idx} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].text} />
          ))}
        </CustomTimeline> */}

    {/* Services  */}
    <Grid container className='section pb__45' >
      <Grid item className='section__title mb__30' >
        <span></span>
        <h6 className='section__title__text'>My Services</h6>
      </Grid>
      <Grid item xs='12'>
        <Grid container spacing={3} justify='space-around'>
          {resumeData.services.map( service => (
            <Grid item xs={12} sm={6} md={3}>
              <div className='service'>
                <Icon className='service__icon'>{service.icon}</Icon>
                <Typography className='service__title' variant='h6'>{service.title}</Typography>
                <Typography className='service__description' variant='body2'>{service.description}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

    {/* Skills  */}
    <Grid 
      // xs={12}
      container  
      spacing={3} 
      justify='space-between' 
      className='section graybg pb__45 p__50'>
        {resumeData.skills.map(skill => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className='skill'>
              <Typography variant='h6' className='skill__title'>
                {skill.title}
                {skill.description.map(element => (
                  <Typography variant='body2' className='skill__description'>
                    <TimelineDot variant={'outlined'} className='timeline__dot'/>
                    {element}
                  </Typography>
                ))}
              </Typography>
            </Paper>
          </Grid>
        ))}
    </Grid>

    {/* Contact */}
    <Grid container spacing={6} className='section pt__45 pb__45'>
      <Grid item xs={12} lg={7} className='mb__30'>
        <Grid container>
          <Grid item className='section__title mb__30'>
            <span></span>
            <h6 className='section__title__text'>Contact Form</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='name'/>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='email' label='email'/>
              </Grid>
              <Grid item xs={12}>
                  <TextField fullWidth name='message' label='message' multiline  rows={4}/>
              </Grid>
              <Grid className='top__30' >
                <CustomButton text='Submit'/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item sm={12} md={6}> */}
      <Grid item xs={12} lg={5} >
        <Grid container>
          <Grid item className='section__title mb__30'>
            <span></span>
            <h6 className='section__title__text'>Contact Infomation</h6>
          </Grid>
          
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography className='contactInfo__item'>
                  <span> Address: </span> {resumeData.address}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className='contactInfo__item'>
                  <span> Phone: </span> {resumeData.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className='contactInfo__item'>
                  <span> Email: </span> {resumeData.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container className='contactInfo__socialsContainer'>
              {Object.keys(resumeData.socials).map(key => (
                <Grid item className='contactInfo__social'>
                  <a href={resumeData.socials[key].link}  target='_blank'>
                    {resumeData.socials[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default Resume
