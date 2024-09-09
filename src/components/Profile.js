import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css';
import CustomTimeline, { CustomTimeLineSeparator } from './CustomTimeline';
import resumeData from '../uitilities/resumeData';
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineItem from "@material-ui/lab/TimelineItem"
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CustomButton from './CustomBtn';
import GetAppIcon from '@material-ui/icons/GetApp';
import Resume from '../images/elva2024.pdf';

const CustomTimelineItem = ({title, text, link}) => {
  return (
    <TimelineItem>
      <CustomTimeLineSeparator/>
      <TimelineContent className='timeline__content'>
        {link ? (<Typography className='timelineItem__text'>
          <span>{title}:</span> <a href={link} target="_blank" rel='noreferrer'>{text}</a>
        </Typography >) : (
          <Typography className='timelineItem__text'>
            <span>{title}:</span>{text}
          </Typography>
        )}

      </TimelineContent>
    </TimelineItem>
  )
}

function Profile() {
  return (
    <div className="profile container__shadow">
      <div className="profile__name">
        <Typography className="name"> {resumeData.name} </Typography>
        <Typography className="title"> {resumeData.title } </Typography>
      </div>

      <figure className="profile__image">
        {/* <img src={require('../images/m1.jpg').default} alt="" /> */}
      </figure>
      <div className="profile__info">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon/>} >
          <CustomTimelineItem title='Name' text={resumeData.name}/>
          <CustomTimelineItem title='Title' text={resumeData.title}/>
          <CustomTimelineItem title='Email' text={resumeData.email}/>

          {Object.keys(resumeData.socials).map((key,idx) => (
            <CustomTimelineItem key={idx} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
          ))}
        </CustomTimeline>
        <br/>
        
        <div className="button__container" >
          <a href={Resume} download='elva.pdf' target="_blank" rel="noopener noreferrer" style={{'textDecoration': 'none'}} >
            <CustomButton   text={'Download Cv'} icon={<GetAppIcon/>} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
