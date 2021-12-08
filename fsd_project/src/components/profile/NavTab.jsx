import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import classes from './navbar.module.css';



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





export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#5CDB95' }}>
        <Tabs value={value} onChange={handleChange}    >
        <Tab label={<span className={classes.tabLabel} >About </span>}/>
          <Tab label={<span className={classes.tabLabel} >Questions </span>}/>
          <Tab label={<span className={classes.tabLabel} >Posts </span>}/>
          <Tab label={<span className={classes.tabLabel} >Followers </span>}/>
          <Tab label={<span className={classes.tabLabel} >Following </span>}/>
        </Tabs>
        
      </Box>
      <TabPanel   value={value} index={0}>
        <span class={classes.tabpanel}>ABOUT</span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span class={classes.tabpanel}>QUESTIONS</span>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <span class={classes.tabpanel}>POSTS</span>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <span class={classes.tabpanel}>FOLLOWERS</span>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <span class={classes.tabpanel}>FOLLOWING</span>
      </TabPanel>
    </Box>
  );
}