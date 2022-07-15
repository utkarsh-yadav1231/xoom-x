import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  appBar: {
    borderRadius: '20px',
    margin: '30px 30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 10px',
    width: '90%',
    background: 'linear-gradient(90deg,#DB0B5F 0%, #6F00ED 100%)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    margin: '0 20px',
  },
  overlay2: {
    position: 'absolute',
    color: 'white',
    marginLeft: '70px',
    marginTop: '20px',
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  video: {
    width: '450px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
    border: 'solid',
    borderColor: '#FF4331 #D31A50',
    borderRadius: '120px',
    borderWidth: '12px',
  },
  sidebarroot: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
  },
  sidebargridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  sidebarcontainer: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  sidebarmargin: {
    marginTop: 20,
    '&:hover': {
      transition: '0.1s ease-in-out',
      '-webkit-box-shadow': '0 0 30px white',
      boxShadow: '0 0 20px yellow',
      '-webkit-transition-delay': '.1s',
      transitionDelay: '.1s',
      background: 'linear-gradient(90deg,#FF9F4A 0%, #FF3C83 100%)',
      color: '#FFFFFF',
    },
  },
  sidebarpadding: {
    padding: 20,
  },
  sidebarpaper: {
    padding: '10px 20px',
  },
  sidebarbutton: {
    border: 'solid',
    borderColor: '#FF4331 #D31A50',
    borderRadius: '10px',
    borderWidth: '5px',
    background: 'yellow',
    '&:hover': {
      transition: '0.3s ease-in-out',
      '-webkit-box-shadow': '0 0 50px linear-gradient(90deg,#FF9F4A 0%, #FF3C83 100%)',
      boxShadow: '0 0 50px #b91eda',
      '-webkit-transition-delay': '.1s',
      transitionDelay: '.1s',
      background: 'linear-gradient(90deg,#FF9F4A 0%, #FF3C83 100%)',
      color: '#FFFFFF',
    },
  },
  callText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Montserrat, sans-serif',
    display: 'flex',
    fontSize: '12px',
    margin: '30px 15px',
  },
}));
