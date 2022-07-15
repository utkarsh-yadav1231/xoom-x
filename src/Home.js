import { useEffect } from "react";
import { AppBar } from '@material-ui/core';
import memoriesText from './assets/img-title.png';
import useStyles from './styles.js';
import Video from "./components/Video/Video";
import VideoState from "./context/VideoState";

import Options from "./components/options/Options";
import Footer from "./components/Footer/Footer";

const Home = () => {

const classes = useStyles();
 
useEffect(()=>{
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}, [])
return (
  <VideoState>
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <img className={classes.imageText} src={memoriesText} alt="icon" height="40px" />
        </div>
      </AppBar>
      <div className="App" style={{ height: "100%", width: "100%" }}>
        <Video />
        <Options />
        <Footer />
      </div>
    </div>
  </VideoState>
);
};

export default Home;
