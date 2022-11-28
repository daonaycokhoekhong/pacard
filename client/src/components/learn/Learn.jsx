import "./learn.scss";
import * as React from 'react';
import { useContext, useEffect } from "react";
import { SetContext } from "../../context/setContext/SetContext"
import { getAllSetsUser } from "../../context/setContext/apiCalls";

// Import Icon Material
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

// Import Material Components
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogActions from "@mui/material/DialogActions";
import Dialog from '@mui/material/Dialog';


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from "@mui/material/Button";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Learn = (props) => {

  const currentData = props.dataFromParent;
  // const initSet = {
  //   "set": {
  //     "title": "",
  //     "classify": [],
  //     "desc": "",
  //     "rating": "",
  //     "uploadBy": "",
  //     "cards": [{
  //       "front": "",
  //       "back": "",
  //       "img": "",
  //       "level": 0
  //     }]
  //   }
  // }
  const initNext = 0;
  // const { sets, dispatch } = useContext(SetContext);
  const [value, setValue] = React.useState(0);
  // const [currentSet, setCurrentSet] = React.useState(initSet);
  const [value2, setValue2] = React.useState(0);
  const [next, setNext] = React.useState(initNext);
  // const [open, setOpen] = React.useState(true);
  // const [openBox, setOpenBox] = React.useState(true);

  // useEffect(() => {
  //   getAllSetsUser(dispatch);
  // }, [dispatch]);
  //


  const handleNext = (e) => {
    console.log(next)
    const newNext = next+1;
    setNext(newNext);
    setValue(0);

  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleSetChoose = (value) => {
  //   setCurrentSet(value);
  //   setNext(0);
  //   setOpenBox(!openBox);
  //
  // };

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const [openTab, setOpenTab] = React.useState(false);

  const handleClickOpenTab = () => {
    setOpenTab(true);
  };

  const handleCloseTab = () => {
    setOpenTab(false);
  };

  return (
    <div>
      <Button size="small" startIcon={<PlayCircleFilledIcon />} sx = {{color: 'green'}} onClick={handleClickOpenTab}> HỌC
      </Button>
      <Dialog
        fullScreen
        open={openTab}
        onClose={handleCloseTab}
        TransitionComponent={Transition}
      >
      <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseTab}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              HỌC
            </Typography>
          </Toolbar>
      </AppBar>
      <div className="learn-container">
        <div className="learn-bottom">
          <Box sx={{ width: '90%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Mặt trước" {...a11yProps(0)} />
                <Tab label="Mặt sau" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Card sx={{ minWidth: 300, minHeight: 400 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <br/>
                  </Typography>
                  <br/>
                  <Typography variant="h4" textAlign="center">
                    {(next<currentData.length ? currentData[next].front : "Bạn đã học hết rồi, vui lòng chọn bộ thẻ khác để học nhé ^^")}
                  </Typography>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Card sx={{ minWidth: 300, minHeight: 400 }}>
                {(next<currentData.length ?
                <CardContent>
                  <CardMedia
                    component="img"
                    height="300"
                    image={currentData[next].img}
                    alt=""
                  />
                  <br />
                  <Typography variant="h4" textAlign="center">
                    {currentData[next].back}
                    <br />
                  </Typography>
                </CardContent>:
                <Typography variant="h2">
                  <br />
                </Typography>
                  )}
              </Card>
            </TabPanel>
          </Box>
        </div>
        <div className="learn-footer">
          <Box sx={{ width: 500, ml: 20 }}>
            <BottomNavigation
              showLabels
              value={value2}
              onChange={(event, newValue) => {
                setValue2(newValue);
              }}
            >
              <BottomNavigationAction onClick={handleNext} label="Đã thuộc" icon={<SentimentVerySatisfiedIcon />} />
              <BottomNavigationAction onClick={handleNext} label="Dễ" icon={<SentimentSatisfiedAltIcon />} />
              <BottomNavigationAction onClick={handleNext} label="Thường" icon={<SentimentDissatisfiedIcon />} />
              <BottomNavigationAction onClick={handleNext} label="Khó" icon={<SentimentVeryDissatisfiedIcon />} />
            </BottomNavigation>
          </Box>
        </div>
      </div>
      </Dialog>
    </div>
  );
};

export default Learn;
