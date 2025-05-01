import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Marquee from "react-fast-marquee"

import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/degree-certi.jpg'
import image3 from '../assets/images/resume_fayiz.jpg'
import resume_pdf from '../assets/docs/render_resume_Fayiz.pdf'

import FormControlLabel from '@mui/material/FormControlLabel';
import { motion } from 'framer-motion';
import LinkIcon from '@mui/icons-material/Link';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { GitHub } from '@mui/icons-material';
const clogo=<img width="24" height="24" src="https://img.icons8.com/color/24/c-programming.png" alt="c-programming"/>
const jslogo=<img width="24" height="24" src="https://img.icons8.com/fluency/24/javascript.png" alt="javascript"/>
const htmllogo=<img width="25" height="25" src="https://img.icons8.com/color/24/html-5--v1.png" alt="html-5--v1"/>
const csslogo=<img width="24" height="24" src="https://img.icons8.com/color/24/css3.png" alt="css3"/>
const reactlogo=<img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>
const reduxlogo=<img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png" alt="external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo"/>
const bslogo=<img width="24" height="24" src="https://img.icons8.com/color/24/bootstrap--v2.png" alt="bootstrap--v2"/>
const muilogo=<img width="24" height="24" src="https://img.icons8.com/color/24/material-ui.png" alt="material-ui"/>
const mflogo=<img width="25" height="25" src="https://user-images.githubusercontent.com/7850794/164965509-2a8dc49e-2ed7-4243-a2c9-481b03bbc31a.png" alt="css3"/>
const nodelogo=<img width="24" height="24" src="https://img.icons8.com/color/24/nodejs.png" alt="nodejs"/>
const expresslogo=<img width="24" height="24" src="https://img.icons8.com/officel/80/express-js.png" alt="express-js"/>
const mongologo=<img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"/>
const gitlogo=<img width="24" height="24" src="https://img.icons8.com/ios-filled/24/git.png" alt="git"/>
const githublogo=<img width="24" height="24" src="https://img.icons8.com/ios-filled/24/github.png" alt="github"/>
const vercellogo=<img width="24" height="24" src="https://pipedream.com/s.v0/app_XaLh2x/logo/orig" alt="nodejs"/>
const renderlogo=<img width="24" height="24" src="https://camo.githubusercontent.com/25d25cd0312f9e81b653fbdd33d2b04c49f03dede7fe5c89d4aeabb9a83ec739/68747470733a2f2f63646e2e73616e6974792e696f2f696d616765732f3334656e74386c792f70726f64756374696f6e2f656333376133363630373034653166613262343234366339613031616233346531343531393461642d383234783832342e706e67" alt="git"/>
const nodemonlogo=<img width="24" height="24" src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="git"/> 
const toastlogo=""
const multerlogo=""
const corslogo=""
const axioslogo="" 



const skillArray=[{logoImg:clogo,logoName:'c'},{logoImg:jslogo,logoName:'JavaScript'},{logoImg:csslogo,logoName:'CSS3'},{logoImg:htmllogo,logoName:'HTML5'},{logoImg:reactlogo,logoName:'React.JS'},{logoImg:reduxlogo,logoName:'Redux'},{logoImg:bslogo,logoName:'BootStrap'},{logoImg:muilogo,logoName:'Material UI'},{logoImg:mflogo,logoName:'Motion Framer'},{logoImg:nodelogo,logoName:'Node.JS'},{logoImg:expresslogo,logoName:'Express.JS'},{logoImg:mongologo,logoName:'MongoDB'},{logoImg:gitlogo,logoName:'Git'},{logoImg:githublogo,logoName:'GitHub'},{logoImg:vercellogo,logoName:'Vercel'},{logoImg:renderlogo,logoName:'Render'},{logoImg:multerlogo,logoName:'multer'},{logoImg:toastlogo,logoName:'Toastify'},{logoImg:nodemonlogo,logoName:'nodemon'},{logoImg:corslogo,logoName:'CORS'},{logoImg:axioslogo,logoName:'Axios'}]
const project1='A centralized platform for both wholesale andretail coffee sales, connecting coffee farmers directly with buyers. The platform will offer services to help farmers improve their coffee products through farming tips, quality control, and access to market data. Additionally, the system will manage the collection of coffee beans directly from farmers locations, ensuring a streamlined process. Build using React.js for front end designed using Material UI, database managed by mongoDB (NoSQL) and backend using Node.js and expressJS '
const project2='Static website based on design image of vintage vehicle models of Mercedez HTML and CSS'
const project3='static website Clone for Camerin Folks private limited- A job oriented training institution build using HTML5 and CSS3 only'
const project4='Static react website clone for www.freechildrenstories.com using React.js only'



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#003892',
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#aab4be',
      borderRadius: 20 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));


  

export default function Portfolio(){
    const [checked, setChecked] = React.useState(false);
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate=useNavigate()
    const [open, setOpen] = React.useState(false);
    const [msgData,setMsg]=React.useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const r = () => {
      setAnchorEl(null);
    };

    const handleChange = (event) => {
    event.preventDefault()
      setChecked(event.target.checked);
      var element=document.body
      element.classList.toggle("dark-mode");
    };
    console.log(checked)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

      const handleData=(e)=>{
        setMsg({...msgData,[e.target.name]:e.target.value})
      }
  
      const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }
      
   
    return(
        <>
            
        <Box sx={{ flexGrow: 10 }} >
            <AppBar className='port-navbar' style={checked==false?{backgroundColor:'white',color:'black',boxShadow:'none'}:{backgroundColor:'black',color:'white'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#selfMain"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none', 
                        }}
                    >
                        <h1 id='namer' style={{fontWeight:'400'}}>Port <strong style={{color:'violet',fontWeight:'800'}}>folio</strong></h1>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}} >
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block' } }}
                        
                        >
                            <MenuItem onClick={handleCloseNavMenu} style={checked==false?{color:'black',textDecoration:'none'}:{backgroundColor:'black',textDecoration:'none',color:'white'}}>
                            <Typography sx={{ textAlign: 'center' }}><a href="#aboutSection" style={checked==false?{color:'black',textDecoration:'none'}:{backgroundColor:'black',textDecoration:'none',color:'white'}}>About</a></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} style={checked==false?{color:'black',textDecoration:'none'}:{backgroundColor:'black',textDecoration:'none',color:'white'}}>
                            <Typography sx={{ textAlign: 'center' }}><a href="#education" style={checked==false?{color:'black',textDecoration:'none'}:{backgroundColor:'black',textDecoration:'none',color:'white'}}>Education</a></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} style={checked==false?{color:'black',textDecoration:'none'}:{backgroundColor:'black',textDecoration:'none',color:'white'}}>
                            <Typography sx={{ textAlign: 'center' }}><a href="#skills"style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>Skills</a></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} style={checked==false?{color:'black',textDecoration:'none'}:{backgroundColor:'black',textDecoration:'none',color:'white'}}>
                            <Typography sx={{ textAlign: 'center' }}><a href="#projects"style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>Projects</a></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} style={checked==false?{color:'black',textDecoration:'none'}:{backgroundColor:'black',textDecoration:'none',color:'white'}}>
                            <Typography sx={{ textAlign: 'center' }}><a href="#contactus"style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>Contact Us</a></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} style={checked==false?{color:'black',textDecoration:'none'}:{backgroundColor:'black',textDecoration:'none',color:'white'}}>
                            <Typography sx={{ textAlign: 'center' }}><a href="#" onClick={handleClickOpen} style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>Resume</a></Typography>
                            </MenuItem>
                            
                            
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#selfMain"
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        <h1 id='namer' style={{fontWeight:'400'}}>Port <strong style={{color:'violet',fontWeight:'800'}}>folio</strong></h1>
                    
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}>
                    
                        <Button
                            onClick={()=>navigate('#aboutSection')}
                            style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}
                            sx={{ my: 2, display: 'block' }}
                        >
                          <a href="#aboutSection" style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>About</a>
                            
                        </Button>

                        <Button
                            onClick={()=>navigate('#aboutSection')}
                            style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}
                            sx={{ my: 2, display: 'block' }}
                        >
                          <a href="#education" style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>Education</a>
                            
                        </Button>
                        <Button
                            style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}
                            sx={{ my: 2, display: 'block' }}
                        >
                          <a href="#skills" style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>Skills</a>
                            
                        </Button>
                        <Button
                            style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}
                            sx={{ my: 2, display: 'block' }}
                        >
                          <a href="#projects" style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>Projects</a>
                            
                        </Button>
                        <Button
                            style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}
                            sx={{ my: 2, display: 'block' }}
                        >
                          <a href="#contactus" style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>Contact Us</a>
                            
                        </Button>
                        <Button
                            onClick={handleClickOpen}
                            style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}
                            sx={{ my: 2, display: 'block' }}
                        >
                          <a href="#" style={checked==false?{color:'black',textDecoration:'none'}:{textDecoration:'none',color:'white'}}>Resume</a>
                            
                        </Button>
                    </Box>
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        Resume
                      </DialogTitle>
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={(theme) => ({
                          position: 'absolute',
                          right: 8,
                          top: 8,
                          color: theme.palette.grey[500],
                        })}
                      >
                        <CloseIcon />
                      </IconButton>
                      <DialogContent dividers>
                        <img style={{width:'100%'}} src={image3} alt="resume" />
                      </DialogContent>
                      <DialogActions>
                        <a href={resume_pdf} download={"Fayiz_resume"}>
                        <Button autoFocus>
                          Download
                        </Button></a>
                      </DialogActions>
                    </BootstrapDialog>
                    <FormControlLabel
                                    control={<MaterialUISwitch sx={{ m: 1,color:'purple'}}  checked={checked}
                                    onChange={handleChange} />}
                                />
                    </Toolbar>
                </Container>
                </AppBar>
            </Box>
            <div className='port-main'>
               <div className="self-main" id='selfMain'>
               <div className="self-cont">
                            <div style={{display:'flex',gap:"10px"}}>
                            <motion.h1 
                            initial={{x:-30,opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:2,ease:'easeInOut'}}
                            >Hello</motion.h1>
                            <motion.h1 
                            initial={{x:30,opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:2,ease:'easeIn'}}
                            >This is</motion.h1>
                            </div>
                            <motion.h1 
                            style={{overflow:'hidden',whiteSpace:'noWrap'}}
                            initial={{width:0}}
                            animate={{width:"100%"}}
                            transition={{duration:3,ease:'easeInOut',fontWeight:'900'}}
                            ><div className='self-namer' style={{display:'flex'}}><p>MOHAMMED FAYIZ</p></div></motion.h1>
                            <motion.div
                            style={{overflow:'hidden',whiteSpace:'noWrap',borderBottom:'3px solid violet'}}
                            initial={{width:0}}
                            animate={{width:"100%"}}
                            transition={{duration:3,ease:'easeInOut',fontWeight:'900'}}
                            >
                            </motion.div>
                            <motion.h4 
                            style={{overflow:'hidden',whiteSpace:'noWrap'}}
                            initial={{x:100,opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:2,ease:'easeIn'}}
                            ><div className='self-namer2'><div>Software </div><div><strong style={{color:'purple'}}>Engineer</strong></div></div></motion.h4>
                </div>
                <div className="self-img">
                    <img src={image1} alt="" />
                </div>
               </div>
               <div className="about-section" id='aboutSection'>
                <p>Passionate MERN stack fresher with a solid foundation in full-stack web development, specializing in MongoDB,
                Express.js, React, and Node.js. Skilled in building responsive, efficient web applications with a focus on both front-
                end and back-end technologies. Eager to apply knowledge, learn from experienced developers, and contribute to
                innovative projects. Graduated as a Btech in Infomration technology from College of Engineering Thalassery (APJ Abdul kalam Technological univercity) with a CGPA of 7.79/10 (77%) by 2024.
                </p>
               </div>
               <div className="education-section"  id='education'>
                <h1 style={{borderBottom:'1px solid',padding:'10px'}} >Education.</h1>
                <hr style={checked==false?{backgroundColor:'white'}:{backgroundColor:'black'}} />
               <Accordion style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white',border:'1px solid',borderColor:'black'}} >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={checked==false?{color:'black'}:{color:'white'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">MERN Stack Developer Intern</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li><Typography>Duration : Sep-2024 - Present</Typography></li>
                      <li><Typography>Institute : CamerinFolks Pvt Ltd <a href="https://camerinfolks.com/"><LinkIcon/></a></Typography></li>
                      <li><Typography>Location : Kakkanad, Kochi, Kerala</Typography></li>
                      <li><Typography>Highlights :
                        <ul>
                       <li> React, HTML, CSS, Bootstrap For building responsive and interactive front-end user interfaces.</li>
                        <li>Express.js Handles server-side logic and APIs efficiently.</li>
                        <li>Node.js Executes JavaScript on the server for back-end development.</li>
                        <li>MongoDB A NoSQL database for flexible, document-based data storage</li>
                        </ul>
                          </Typography></li>
                    </ul>

                  </AccordionDetails>
                </Accordion>
                {checked==true?<hr style={checked==false?{visibility:'hidden'}:{backgroundColor:'black'}} />:<span></span>}
                <Accordion style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white',border:'1px solid',borderColor:'black'}} >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={checked==false?{color:'black'}:{color:'white'}} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography component="span" >B.Tech - Information Technology</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                    <li><Typography>Duration : Sep-2020 - Jun-2024</Typography></li>
                    <li><Typography>Institute : College Of Engineering, Thalassery</Typography></li>
                    <li><Typography>University : APJ Abdul Kalam Technological University</Typography></li>
                    <li><Typography>Location : Kannur, Kerala, India</Typography></li>
                    <li><Typography>CGPA : 7.79/10 (77%)</Typography></li>
                    <li><Typography></Typography></li>
                    </ul>
                    <Accordion style={checked==false?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white',border:'1px solid',borderColor:'black'}} >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={checked==false?{color:'black'}:{color:'white'}} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography component="span" >Degree Certificate</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <img src={image2} alt="degree certificate" />
                  </AccordionDetails>
                </Accordion>
                  </AccordionDetails>
                </Accordion>
                {checked==true?<hr style={checked==false?{visibility:'hidden'}:{backgroundColor:'black'}} />:<span></span>}
                
                {checked==true?<hr style={checked==false?{visibility:'hidden'}:{backgroundColor:'black'}} />:<span></span>}
                
               </div>
               <div className="animator-container" id='skills'>
                <h1 style={{fontWeight:'800',borderBottom:'1px solid white',padding:'10px',marginBottom:'20px'}}>Skills.</h1>
                {/* <div className="animator-container-div">
                {skillArray.map(it=>(
                  <motion.div className="animater" key={it}
                  >
                      {it}
                  </motion.div>
                ))}</div> */}
               <Marquee>
               {skillArray.map((it,index)=>(
                  <motion.div className="animater" style={checked==true?{backgroundColor:'black',color:'white'}:{color:'black'}} key={index}
                  >
                      {it.logoImg}
                      {it.logoName}
                  </motion.div>
                ))}
               </Marquee>
               </div>
               <div className="project-div" id='projects'>
                <h1>Projects.</h1>
                  <div className="project-contianer">
                  
                    <Card sx={{height:250, width: 275}} style={checked==false?{backgroundColor:'white',color:'black',border:'1px solid black' }:{backgroundColor:'black',color:'white',border:'1px solid white'}}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                      <i style={{fontWeight:'700'}}>shopSpicy</i>
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>MERN</Typography>
                      <Typography variant="body2">
                        A website for coffee and its products 
                      </Typography>
                    </CardContent>
                    <div style={{display:'flex'}}>
                    
                    <CardActions>
                      <Button size="small" color='black'><div style={{display:'flex',gap:'5px'}}><GitHubIcon style={checked==false?{color:'black'}:{color:'white'}} /><p style={{textTransform:'capitalize',fontSize:'15px'}}><a  href="https://github.com/mohammed-fayiz/shopSpicy-front">front</a> / <a href="https://github.com/mohammed-fayiz/shopSpicy-back">back</a></p></div></Button>
                    </CardActions>
                    <CardActions>
                      <Button size="small" color='black'><div style={{display:'flex',gap:'5px'}}><LinkIcon style={checked==false?{color:'black'}:{color:'white'}} /><p style={{textTransform:'capitalize',fontSize:'15px'}}> <a href="https://shop-spicy-front.vercel.app">Website</a></p></div></Button>
                    </CardActions>
                    </div>
                    <Tooltip title={project1}>
                      <p style={{marginLeft:'10px',marginBottom:'20px'}}><InfoIcon />info</p>
                    </Tooltip>
                  </Card>
                  
                
                    <Card sx={{height:250, width: 275 }} style={checked==false?{backgroundColor:'white',color:'black',border:'1px solid black' }:{backgroundColor:'black',color:'white',border:'1px solid white'}}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                      <i style={{fontWeight:'700'}}>Merc-copy</i>
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>html, css</Typography>
                      <Typography variant="body2">
                        Website using html and css only (static)
                      </Typography>
                    </CardContent>
                    <div style={{display:'flex'}}>
                    <CardActions>
                      <Button size="small" color='black'><div style={{display:'flex',gap:'5px'}}><GitHubIcon style={checked==false?{color:'black'}:{color:'white'}} /><p style={{textTransform:'capitalize',fontSize:'15px'}}> <a href="https://github.com/mohammed-fayiz/merc-copy"> Git</a></p></div></Button>
                    </CardActions>
                    <CardActions>
                      <Button size="small" color='black'><div style={{display:'flex',gap:'5px'}}><LinkIcon style={checked==false?{color:'black'}:{color:'white'}} /><p style={{textTransform:'capitalize',fontSize:'15px'}}> <a href="https://merc-copy-2.vercel.app/">Website</a> </p></div></Button>
                    </CardActions>
                    </div>
                    <Tooltip title={project2}>
                      <p style={{marginLeft:'10px',marginBottom:'20px'}}><InfoIcon />info</p>
                    </Tooltip>
                  </Card>
                  
                <Card sx={{height:250,  width: 275,paddingBottom:'20px' }} style={checked==false?{backgroundColor:'white',color:'black',border:'1px solid black' }:{backgroundColor:'black',color:'white',border:'1px solid white'}}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                      <i style={{fontWeight:'700'}}>  CamFolks-copy</i>
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>html, css</Typography>
                      <Typography variant="body2">
                        FrontEnd clone of CamerinFolks pvt ltd website
                      </Typography>
                    </CardContent>
                    <div style={{display:'flex'}}>
                    <CardActions>
                      <Button size="small" color='black'><div style={{display:'flex',gap:'5px'}}><GitHubIcon style={checked==false?{color:'black'}:{color:'white'}} /><p style={{textTransform:'capitalize',fontSize:'15px'}}> <a href="https://github.com/mohammed-fayiz/cam-folks-copy">Git</a> </p></div></Button>
                    </CardActions>
                    <CardActions>
                      <Button size="small" color='black'><div style={{display:'flex',gap:'5px'}}><LinkIcon style={checked==false?{color:'black'}:{color:'white'}} /><p style={{textTransform:'capitalize',fontSize:'15px'}}> <a href="https://cam-folks-copy.vercel.app/">Website</a> </p></div></Button>
                    </CardActions>
                    </div>
                    <Tooltip title={project3}>
                      <p style={{marginLeft:'10px',marginBottom:'20px'}}><InfoIcon />info</p>
                    </Tooltip>
                  </Card>
                    <Card sx={{height:250,  width: 275}} style={checked==false?{backgroundColor:'white',color:'black',border:'1px solid black' }:{backgroundColor:'black',color:'white',border:'1px solid white'}}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                      <i style={{fontWeight:'700'}}>  Child-web-react</i>
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>React.js</Typography>
                      <Typography variant="body2">
                        FrontEnd clone of child Website
                      </Typography>
                    </CardContent>
                    <div style={{display:'flex'}}>
                    <CardActions>
                      <Button size="small" color='black'><div style={{display:'flex',gap:'5px'}}><GitHubIcon style={checked==false?{color:'black'}:{color:'white'}} /><p style={{textTransform:'capitalize',fontSize:'15px'}}> <a href="https://github.com/mohammed-fayiz/Child-web-react">Git</a> </p></div></Button>
                    </CardActions>
                    <CardActions>
                      <Button size="small" color='black'><div style={{display:'flex',gap:'5px'}}><LinkIcon style={checked==false?{color:'black'}:{color:'white'}} /><p style={{textTransform:'capitalize',fontSize:'15px'}}> <a href="https://child-web-react.vercel.app/">Website</a> </p></div></Button>
                    </CardActions>
                    </div>
                    <Tooltip title={project4}>
                      <p style={{marginLeft:'10px',marginBottom:'20px'}}><InfoIcon />info</p>
                    </Tooltip>
                  </Card>
                  
                  </div>
               </div>
               <div className="port-footer" id='contactus'>
                  <div className="port-container">
                    <div className="msg-box">
                      <form action="mailto:mhd02fayiz@gmail.com" method="post" enctype="text/plain" className='msg-form'>
                        <h1 style={{color:'white'}}>Send Message</h1>
                        <input type="text" name='sendname' placeholder='Enter your Name' onChange={handleData} />
                        <input type="text" name="subject" placeholder='enter Subject' onChange={handleData}/>
                        <textarea name="content" placeholder='Message Content' onChange={handleData}></textarea>
                        <button><a href={`https://mail.google.com/mail/u/0/?fs=1&to=mhd02fayiz@gmail.com&su=${msgData.subject}&body=${msgData.content}&tf=cm`}>send</a></button>
                      </form>
                    </div>
                    <div style={{position:'absolute',bottom:'150px',border:'1px solid white',borderRadius:'20px',padding:'10px'}}>
                      <Button>
                        <a href="https://www.linkedin.com/in/mohammed--fayiz"><LinkedInIcon color='white'/></a>
                      </Button>
                      <Button>
                        <a href="https://github.com/mohammed-fayiz" style={{color:'white'}}><GitHub/></a>
                      </Button>
                      <Tooltip title={"mhd02fayiz@gmail.com"}>
                      <a href="https://mail.google.com/mail/u/0/?fs=1&to=mhd02fayiz@gmail.com&su=SUBJECT&body=BODY&tf=cm"><EmailIcon sx={{width:'70px',color:'white'}}/></a>
                    </Tooltip>
                        
                        
                    </div>
                    <div className='portfolio-clone'><a href="https://github.com/mohammed-fayiz/portfolio-fayiz"><GitHub/> portfolio source code</a></div>
                  </div>
                  <div style={{marginTop:"20px",color:'white',display:'flex',justifyContent:'center'}}><CopyrightIcon color='white'/><h5>All Rights Reserved</h5></div>
                  
               </div>

            </div>
        </>
        
    )
}