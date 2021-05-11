import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
// import { GitHub} from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';

export default {
  name: 'Elva Wang',
  title: 'Full stack React developer',
  birthday: '',
  email: 'Elva316@gmail.com',
  phone: '+1 408 6379917',
  address: 'San Jose, CA',
  socials: {
    Twitter: {
      link: 'https://twitter.com/home',
      text: 'Twitter',
      icon: <TwitterIcon />
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/in/elva-wang/',
      text: 'LinkedIn',
      icon: <LinkedInIcon />
    },
    Github: {
      link: 'https://github.com/elvaworkingstation',
      text: 'Github',
      icon: <GitHubIcon />
    }
  },

  about: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n\n Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",
  experiences: [
    {
      title:'Work 1',
      date: '2018',
      description:'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor'
    }, 
    {
      title:'Work 2',
      date: '2014 - 2017',
      description:'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor'
    }, 
    {
      title:'Work 3',
      date: '2012-2013',
      description:'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor'
    }, 
  ],
  educations: [
    {
      title:'Education 1',
      date: '2018',
      description:'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor'
    }, 
    {
      title:'Education 2',
      date: '2014 - 2017',
      description:'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor'
    }, 
    {
      title:'Education 3',
      date: '2012-2013',
      description:'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor'
    }, 
  ],
  services: [
    {
      title: 'Web Dev',
      description:'I have been working on web design for 10 years.',
      icon: <WebOutlinedIcon/>
    }, 
    {
      title: 'Bran Identity',
      description:'We will make you a brand that is catchy and leaves a traces.',
      icon: <AssignmentOutlinedIcon/>
    }, 
    {
      title: 'Illustrator',
      description:'I have been working on illustration design for 6 years.',
      icon: <AssignmentOutlinedIcon/>
    }, 
  ],
  skills: [
    {
      title: 'FRONT-END',
      description: ['ReactJS','Angular', 'Javascript', 'Typescript', 'Bootstrap','Material UI']
    },
    {
      title: "BACK-END",
      description: ['NodeJS', 'Python']
    },
    {
      title: 'DATABASES',
      description: ['Firebase', 'AWS', 'MongoDB', 'SQL', 'MySQL']
    },
    {
      title: 'SOURCE CONTROL',
      description: ['Git', 'Github']
    }
  ],
  projects: [
    {
      tag: 'Stripe_Payment',
      images:[
        require(`../images/projects/amazon1.png`).default,
        require(`../images/projects/amazon2.png`).default,
        require(`../images/projects/amazon3.png`).default,
      ],
      title: 'Amazon',
      caption: 'A short description.',
      description: 'This is my project description. Please fill it in.',
      links: [
        { link: 'https://github.com/elvaworkingstation/amazon-clone/tree/master', icon: <GitHubIcon /> },
        { link: 'https://clone-fa79a.web.app', icon: <LinkIcon /> },  
      ]
    },
    {
      tag: 'Stripe_Payment',
      images:[
        require(`../images/projects/p11.png`).default,
        require(`../images/projects/p12.png`).default,
        require(`../images/projects/p13.png`).default,
      ],
      title: 'Consumer Posts',
      caption: 'A short description.',
      description: 'This is my project description. Please fill it in.',
      links: [
        { link: 'https://github.com/elvaworkingstation/consumer-voice', icon: <GitHubIcon /> },
        { link: 'https://consumer-voice.web.app/', icon: <LinkIcon /> },       
      ]
    },
    {
      tag: 'Alan_AI',
      images:[
        require(`../images/projects/ai1.png`).default,
        require(`../images/projects/ai2.png`).default,
      ],
      title: 'Alan AI',
      caption: 'A short description.',
      description: 'This is my project description. Please fill it in.',
      links: [
        { link: 'https://github.com/elvaworkingstation/react-alan-ai-voice-application', icon: <GitHubIcon /> },
        { link: 'https://alan-ai-project.web.app', icon: <LinkIcon /> },       
      ]
    },
    {
      tag: 'Movie_Music_API',
      images:[
        require(`../images/projects/netflex2.png`).default,
      ],
      title: 'Netflex',
      caption: 'A short description.',
      description: 'This is my project description. Please fill it in.',
      links: [
        { link: 'https://github.com/elvaworkingstation/netflix_alike', icon: <GitHubIcon /> },
        { link: 'https://netflix-alike.web.app/', icon: <LinkIcon /> },       
      ]
    },
    {
      tag: 'Chat',
      images:[
        require(`../images/projects/slack2.png`).default,
        require(`../images/projects/slack1.png`).default,
      ],
      title: 'Slack',
      caption: 'A short description.',
      description: 'This is my project description. Please fill it in.',
      links: [
        { link: 'https://github.com/elvaworkingstation/slack-clone/tree/master', icon: <GitHubIcon /> },
        { link: 'https://slack-clone-b18a6.web.app/', icon: <LinkIcon /> },       
      ]
    },{
      tag: 'UI',
      images:[
        require(`../images/projects/gmail1.png`).default,
        require(`../images/projects/gmail2.png`).default,
      ],
      title: 'Gmail',
      caption: 'A short description.',
      description: 'This is my project description. Please fill it in.',
      links: [
        { link: 'https://github.com/elvaworkingstation/gmail', icon: <GitHubIcon /> },       
        { link: 'https://clone-d421b.web.app', icon: <LinkIcon /> },
      ]
    },
    {
      tag: 'Movie_Music_API',
      images:[
      require(`../images/projects/spotify2.png`).default,
      require(`../images/projects/spotify1.png`).default,
      ],
      title: 'Spotify',
      caption: 'A short description.',
      description: 'This is my project description. Please fill it in.',
      links: [
        { link: 'https://github.com/elvaworkingstation/spotify', icon: <GitHubIcon /> },
        { link: 'https://spotify-d4c74.web.app/', icon: <LinkIcon /> },       
      ]
    },
    {
      tag: 'Camera',
      images:[
      require(`../images/projects/snapChat1.png`).default,
      require(`../images/projects/snapChat2.png`).default,
      require(`../images/projects/snapChat3.png`).default,
      ],
      title: 'snapchat',
      caption: 'A short description.',
      description: 'This is my project description. Please fill it in.',
      links: [
        { link: 'https://github.com/elvaworkingstation/snapchat-alike/tree/master', icon: <GitHubIcon /> },
        { link: 'https://snapchat-alike.web.app/', icon: <LinkIcon /> },       
      ]
    },
  ]
}