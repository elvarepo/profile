import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
// import { GitHub} from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';
import PhonelinkIcon from '@material-ui/icons/Phonelink';

const resumeData = {
  name: 'Elva Wang',
  title: 'Full-stack React developer',
  birthday: '',
  email: 'Elva316@gmail.com',
  phone: '+1 408 6379917',
  address: 'San Jose, CA',
  socials: {
    Twitter: {
      link: 'https://twitter.com/Elva_316',
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

  about: "I am a hands-on full-stack ReactJS developer with experience in designing and developing fully interactive, user friendly websites and applications from scratch using a varied range of technologies and programming languages. I am personally known to be a very hard-working, passionate, adaptable and skilled individual, always striving to get better and achieve more.",

  techExpirences:"Web Technologies: \n ReactJS, React Redux and Context, HTML, HTML5, CSS3, SASS, JavaScript, AJAX, jQuery, JSON, Bootstrap, Material UI, WordPress, Angular JS 2+, ExpressJS, NodeJS, GitHub, Python, Django, RESTful API \n\n Hosting/Deployment: \n Firebase, AWS, Heroku, Bluehost, Github",
  experiences: [
    {
      title:'ReactJS Projects',
      date: '07/2020 - Present',
      description:[
        'Built and deployed multiple personal projects with ReactJS, Redux/Context, Firebase, Material UI, third-party API, and RESTful API',
        'Check out the projects at www.elvaswork.info'
    ]
    }, 
    {
      title:'Technical Recuiter',
      date: '01/19 - 05/2020',
      description:[
        'Recruiting Full-stack developers, UI/UX designers, Programming Managers, Big Data, Dev-Ops, Front-end, Back-end, Machine Learning, industrial designers etc',
    ]
    }, 
    {
      title:'Web Developer - Wowzie App Studio',
      date: '01/18 - 12/2018',
      description:[
        'Collaborated with team members to build different web and mobile applications ',
        'Designed and developed web app wireframes based on clients’ goals',
        'Optimized code to enhance speed performance',
        'Created authentication login/registration system and RESTful APIs',
        'Deployed apps on AWS, Heroku, and Digital Ocean',
        'eployed apps on AWS, Heroku, and Digital Ocean',
        'Worked with Angular 2+, MongoDB, Node, NPM, mLab, Postman, JavaScript, HTML, CSS, Bootstrap, Git, jQuery, and Linux'
    ]
    }, 
    {
      title:'Web Developer - Freelancer',
      date: '12/16 - 07/2017',
      description:[
        "Consulted and designed wireframes, and prototyped for customers",
        "Developed web apps for client that services thousands of customers",
        "Supported, maintained and optimized codebase for security and speed",
        "Worked with JavaScript, HTML, CSS, Bootstrap, Wordpress, and Wix",
        "Deployed applicaions on Heroku and DigitalOcean"
    ]
    }, 
  ],
  educations: [
    {
      title:'Coding Dojo Bootcamp',
      date: '2017',
      description:[
        "Successfully completed a 14 week intensive onsite development program, devoting more than 1,800 hours of coding.", 
        "Achieved Triple Black Belt standing, highest level of achievement, only awarded upon building fully functional CRUD app projects and deploying them onto AWS from scratch.",
        'Learned and praticed ReactJS, Redux and Context, IOS/Swift, MEAN stack, Python Django'
      ]
    }, 
    {
      title:'BS, Business Marketing, SJSU',
      date: '2014 - 2016',
      description:[
        'Business Management and marketing '
      ]
    }, 
  ],
  services: [
    {
      title: 'Software Development',
      description:'I have built projects with Javascript, Python and iOS',
      icon: <PhonelinkIcon/>
    }, 
    {
      title: 'Web Developer',
      description:'Several years of personal and professional experience with web technologies',
      icon: <WebOutlinedIcon/>
    }, 
    {
      title: 'Challenge Me',
      description:"Curious about my knowledge or experience? Reach out!",
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
      caption: 'Amazon Clone',
      description:<>
                    <p><span>Front-end:</span> React, React Context, Material UI </p> 
                    <p><span>Back-end DB:</span> Firebase</p> 
                    <p><span>Third-party API:</span> Stripe Payment</p>
                    <p><span>Host/Deployment:</span> Firebase</p>
                  </>,
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
      caption: "A platform consumers can post any products or services they don't like",
      description:<ul>
                    <li><span>Front-end:</span> React, Redux, Material UI </li> 
                    <li><span>Back-end DB:</span> Firebase</li> 
                    <li><span>Third-party API:</span> Stripe Payment</li>
                    <li><span>Host/Deployment:</span> Firebase</li>
                  </ul>,
      links: [
        { link: 'https://github.com/elvaworkingstation', icon: <GitHubIcon /> },
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
      caption: 'Alan AI News Application',
      description:<>
                    <p><span>Front-end:</span> React, Material UI </p> 
                    <p><span>Third-party API:</span> Alan AI API</p>
                    <p><span>Host/Deployment:</span> Firebase</p>
                  </>,
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
      caption: 'Netflex Clone',
      description:<>
                    <p><span>Front-end:</span> React, Material UI </p> 
                    <p><span>Third-party API:</span> IMDB API</p>
                    <p><span>Host/Deployment:</span> Firebase</p>
                  </>,
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
      caption: 'Slack Clone',
      description:<>
                    <p><span>Front-end:</span> React, React Context, Material UI </p> 
                    <p><span>Back-end DB:</span> Firebase</p> 
                    <p><span>Host/Deployment:</span> Firebase</p>
                  </>,
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
      caption: 'Gmail UI',
      description:<>
                    <p><span>Front-end:</span> React, React Redux, Material UI </p> 
                    <p><span>Back-end DB:</span> Firebase</p> 
                    <p><span>Host/Deployment:</span> Firebase</p>
                  </>,
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
      caption: 'Spotify Clone',
      description:<>
                    <p><span>Front-end:</span> React, React Context, Material UI </p> 
                    <p><span>Third party API:</span> Spotify API</p>
                    <p><span>Host/Deployment:</span> Firebase</p>
                  </>,
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
      title: 'Snapchat',
      caption: 'SnapChat',
      description:<>
                    <p><span>Front-end:</span> React, React Redux, Material UI </p> 
                    <p><span>Back-end DB:</span> Firebase</p> 
                    <p><span>Host/Deployment:</span> Firebase</p>
                  </>,
      links: [
        { link: 'https://github.com/elvaworkingstation/snapchat-alike/tree/master', icon: <GitHubIcon /> },
        { link: 'https://snapchat-alike.web.app/', icon: <LinkIcon /> },       
      ]
    },
  ]
}

export default resumeData;