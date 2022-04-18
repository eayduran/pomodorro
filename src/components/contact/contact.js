import React, { useState, useContext } from "react"
import Context from '../registerdata/context';
import { useNavigate } from "react-router-dom";
import { Box, Drawer, List, ListItem } from "@mui/material";

const Contact = () => {
    
    const {state} = useContext(Context);
  //*****************
    let navigate = useNavigate();
   

    const [statex, setStatex] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    // Drawer panel
    const toggleDrawer = (anchor, open) =>
    (event) => {
        if (
            event.type === 'keydown' &&
            ((event).key === 'Tab' ||
                (event).key === 'Shift')
            ) {
            return;
        }
        setStatex({ ...statex, [anchor]: open });
    };

    //****************
    

    return (
        <div style={{color: state.darkmode? 'white' : 'black', background: state.darkmode? 'rgb(40, 40, 40)' : 'rgb(250, 250, 250)'}} className='container'>
            <Drawer
                    style={{color: 'green'}}
                    anchor='left'
                    open={statex['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    <Box
                    sx={{ width: 250, justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                    role="presentation"
                    onClick={()=>{toggleDrawer('left', false); navigate("/")}}
                    onKeyDown={toggleDrawer('left', false)}
                    >
                        <List>
                            <ListItem button key="Inbox">
                                {/* <ListItemIcon>
                                    <NextButton fill="black" width={28} height={28} />
                                </ListItemIcon> */}
                                <div style={{color: 'black', fontSize: 22}}>
                                    Home
                                </div>
                                {/* <ListItemText primary="Home" /> */}
                            </ListItem>
                        </List>
                    </Box>
                    <Box
                    sx={{ width: 250, justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                    role="presentation"
                    onClick={()=>{toggleDrawer('left', false); navigate("/settings")}}
                    onKeyDown={toggleDrawer('left', false)}
                    >
                        <List>
                            <ListItem button key="Inbox">
                                {/* <ListItemIcon>
                                    <NextButton fill="black" width={28} height={28} />
                                </ListItemIcon> */}
                                <div style={{color: 'black', fontSize: 22}}>
                                    Settings
                                </div>
                                {/* <ListItemText primary="Settings" /> */}
                            </ListItem>
                        </List>
                    
                    </Box>
                    <Box
                    sx={{ width: 250, justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                    role="presentation"
                    onClick={toggleDrawer('left', false)}
                    onKeyDown={toggleDrawer('left', false)}
                    >
                        <List>
                            <ListItem button key="Inbox">
                                {/* <ListItemIcon>
                                    <NextButton fill="black" width={28} height={28} />
                                </ListItemIcon> */}
                                <div style={{color: 'black', fontSize: 22}}>
                                    Contact
                                </div>
                                {/* <ListItemText primary="Settings" /> */}
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>

        
                <div className="men" style={{ margin: 40 , justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: 100, top: 0, left: 0, position: "fixed"}}
                    onClick={toggleDrawer('left', true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill={state.darkmode? 'white' : 'black'} id="Outline" viewBox="0 0 24 24" width="32" height="32"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
                </div>


                <div>
                    ayduranenes@gmail.com
                </div>
        </div>
    )
    }

export default Contact;