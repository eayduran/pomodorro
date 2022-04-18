import React, { useState, useContext, useEffect } from "react"
import Switch from "react-switch";
import './intro.css';

import Context from '../registerdata/context';

import pianoaudio from '../../assets/sounds/piano.mp3';
import modernaudio from '../../assets/sounds/modern.mp3';
import simpleaudio from '../../assets/sounds/simple.mp3';
import normaaudio from '../../assets/sounds/norma.mp3';
import guitarlaudio from '../../assets/sounds/guitarl.mp3';
import { useNavigate } from "react-router-dom";
import { Box, Drawer, List, ListItem } from "@mui/material";





const Intro = () => {
    const [wwidth, setWindowWidth] = useState(0);
    const [wheight, setWindowHeight] = useState(0);
    const updateDimensions = () => {
        const wwidth = window.innerWidth
        const wheight = window.innerHeight
        setWindowWidth(wwidth)
        setWindowHeight(wheight)
    }
    useEffect(()=>{
        updateDimensions();
    })
    const FruitSelectDropdown = ({ fruitDetector }) => {
        const [currentFruit, setCurrentFruit] = useState(fruitDetector)
        
        const changeFruit = (newFruit) => {
          setCurrentFruit(newFruit)
          
          if(newFruit==="norma"){

            new Audio(normaaudio).play();
            state.notificationsound = "norma";
          }
          if(newFruit==="modern"){
            console.log(newFruit)
            new Audio(modernaudio).play();
            state.notificationsound = "modern";
          }
          if(newFruit==="simple"){
            console.log(newFruit)
            new Audio(simpleaudio).play();
            state.notificationsound = "simple";
          }
          if(newFruit==="piano"){
            console.log(newFruit)
            new Audio(pianoaudio).play();
            state.notificationsound = "piano";
          }
          if(newFruit==="guitarl"){
            new Audio(guitarlaudio).play();
            state.notificationsound = "guitarl";
          }
        }
        
        return (
            <div>
                <form className="opsiyon">
                    <select 
                    className="selection"
                    onChange={(event) => changeFruit(event.target.value)}
                    value={currentFruit}
                    >
                    <option className="normaa" value="norma">Norma</option>
                    <option className="moderna" value="modern">Modern</option>
                    <option className="simplea" value="simple">Simple</option>
                    <option className="pianoa" value="piano">Piano</option>
                    <option className="guitarl" value="guitarl">Guitar Long</option>
                    </select>
                </form>
            </div>
        )
    }

    


    const {state} = useContext(Context);

    const [workduration, setWorkduration] = useState(state.workduration)
    const [sduration, setSduration] = useState(state.sbreakduration)
    const [lduration, setLduration] = useState(state.lbreakduration)
    const [round, setRound] = useState(state.round)
    const [titleset, setTitleset] = useState(state.timerintitle)
    const [notification, setNotification] = useState(state.notification)
    const [autostartset, setAutostartset] = useState(state.autostart)
    const [darkmode, setDarkmode] = useState(state.darkmode)
    let navigate = useNavigate();   


    if(notification===false){
        state.notification = false;
    }
    else{
        state.notification = true;
    }


    if(darkmode===true){
        state.darkmode = true;
    }
    else{
        state.darkmode = false;
    }

    if(autostartset===false){
        state.autostart = false;
    }
    else{
        state.autostart = true;
    }

    if(titleset===false){
        state.timerintitle = false;
    }
    else{
        state.timerintitle = true;
    }
    
            

    
     //*****************
   

     const [statex, setStatex] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

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
        <div style={{color: state.darkmode? 'white' : 'black', background: state.darkmode? 'rgb(40, 40, 40)' : 'rgb(255, 255, 255)',  width: wwidth, marginTop: (wwidth<700)?80:0 }} className='container'>
        <div>
            <React.Fragment key='left'>
                <Drawer
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
                    onClick={toggleDrawer('left', false)}
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
                    onClick={()=>{toggleDrawer('left', false); navigate("/contact")}}
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
            </React.Fragment>
        </div>

        <div className="men" style={{ margin: 40 , justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: 100, top: 0, left: 0, position: "fixed"}}
            onClick={toggleDrawer('left', true)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill={state.darkmode? 'white' : 'black'} id="Outline" viewBox="0 0 24 24" width="32" height="32"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
        </div>
          
          <div className='workduration' style={{color: state.darkmode? 'white' : 'black'}}>
                    <p className="workdurationp">
                      Work duration: {workduration.toFixed(0)} min
                    </p>

                    <main className="slidebara">
                        <section className="slidebarb">
                            <input
                            type="range"
                            className="slidebar"
                            min={5}
                            max={60}
                            step={1}
                            value={workduration}
                            onChange={event => {
                                setWorkduration(event.target.valueAsNumber)
                                state.workduration = event.target.valueAsNumber
                            }}
                            />
                            {/* <button onClick={() => setMuted(m => !m)}>
                            {muted ? "muted" : "unmuted"}
                            </button> */}
                        </section>
                    </main>

            </div>
            
            <div className='shortbreakduration' style={{color: state.darkmode? 'white' : 'black'}}>
                    <p>
                        Short Break Duration: {sduration.toFixed(0)} min
                    </p>

                    <main>
                        <section>
                            <input
                            type="range"
                            className="slidebar"
                            min={1}
                            max={30}
                            step={1}
                            value={sduration}
                            onChange={event => {
                                setSduration(event.target.valueAsNumber)
                                state.sbreakduration = event.target.valueAsNumber
                            }}
                            />
                            {/* <button onClick={() => setMuted(m => !m)}>
                            {muted ? "muted" : "unmuted"}
                            </button> */}
                        </section>
                    </main>
            </div>

            <div className='longbreakduration' style={{color: state.darkmode? 'white' : 'black'}}>
                    <p>
                        Long Break Duration: {lduration.toFixed(0)} min
                    </p>

                    <main>
                        <section>
                            <input
                            type="range"
                            className="slidebar"
                            min={1}
                            max={45}
                            step={1}
                            value={lduration}
                            onChange={event => {
                                setLduration(event.target.valueAsNumber)
                                state.lbreakduration = event.target.valueAsNumber
                            }}
                            />
                            {/* <button onClick={() => setMuted(m => !m)}>
                            {muted ? "muted" : "unmuted"}
                            </button> */}
                        </section>
                    </main>
                </div>

            <div className='rounds' style={{color: state.darkmode? 'white' : 'black'}}>
                <p>
                    Rounds: {round.toFixed(0)}
                </p>

                <main>
                    <section>
                        <input
                        type="range"
                        className="slidebar"
                        min={2}
                        max={15}
                        step={1}
                        value={round}
                        onChange={event => {
                            setRound(event.target.valueAsNumber)
                            state.round = event.target.valueAsNumber
                        }}
                        />
                        {/* <button onClick={() => setMuted(m => !m)}>
                        {muted ? "muted" : "unmuted"}
                        </button> */}
                    </section>
                </main>
            </div>


            <div className='notifications'>
            <p>
            Notification Sound
            </p>
            <div className='notificationsound'>
            <FruitSelectDropdown fruitDetector= {state.notificationsound} />                
            </div>
            </div>

            <div className='onoff'>

                <div className='timertitle'>
                <p>
                Timer in title
                </p>
                <Switch 
                onChange={setTitleset} 
                checked={titleset} 
                onColor="#0175ff"
                // offColor="#0f0f0f"
                // onColor="#86d3ff"
                offColor="#969696"
                />
                </div>
                <div className='notification'>
                <p>
                Notification
                </p>
                {/* <Switch 
                onChange={setNotselect} 
                checked={notset} 
                onColor="#86d3ff"
                offColor="#969696"
                /> */}

                <Switch 
                onChange={setNotification} 
                checked={notification} 
                onColor="#0175ff"
                offColor="#969696"
                />

                </div>
                <div className='autostart'>
                <p>
                Autostart
                </p>
                <Switch 
                onChange={setAutostartset} 
                checked={autostartset} 
                onColor="#0175ff"
                offColor="#969696"
                />
                </div>
                <div className='darkmode'>
                <p>
                Dark mode
                </p>
                <Switch 
                onChange={setDarkmode} 
                checked={darkmode} 
                onColor="#0175ff"
                offColor="#969696"
                />
                </div>

            </div>
        </div>
    )
    }

export default Intro;