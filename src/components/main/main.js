import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import './main.css'
import Context from '../registerdata/context';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import modernaudio from '../../assets/sounds/modern.mp3';
import normaaudio from '../../assets/sounds/norma.mp3';
import pianoaudio from '../../assets/sounds/piano.mp3';
import simpleaudio from '../../assets/sounds/simple.mp3';
import guitarlaudio from '../../assets/sounds/guitarl.mp3';


import PlayButton from "../buttons/PlayButton";
import RestartButton from "../buttons/RestartButton";
import NextButton from "../buttons/NextButton";
import PauseButton from "../buttons/PauseButton";
import { Box, Drawer, List, ListItem } from "@mui/material";



const Main = () => {
    const {state} = useContext(Context);                            // global variables from settings
    const [darkmode, setDarkmode] = useState(state.darkmode)        // darkmode
    const [addTitle, setAddtitle] = useState(false);
    const [titletext, setTitletex] = useState('+ Add Title');
    const [arr2, setArr2] = useState([])                            // pomodoro queue 
    const [pomodorQueue, setPomodorqueue] = useState(0)             // pomodoro queue index
    const [value, setValue] = useState(state.workduration * 60)     // value for clock animation 
    let arr = [];                                                   // temperory array for pomodoro queue
    const [isPlay, setIsplay] = useState(false)                     // initially clock does not work
    const [key, setKey] = useState(0);                              // to reset clock animation
    let navigate = useNavigate();                                   // navigate different pages

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

    //Set the global data to an array
    useEffect(()=>{

        for(let i=1;i<state.round;i++){
            arr.push(state.workduration);
            arr.push(state.sbreakduration);
        }
        arr.push(state.workduration);
        arr.push(state.lbreakduration);

        setArr2(arr)
    },[]);

    // New value for timer from the pomodoro
    useEffect(()=>{
        if(arr2.length>0){
            setValue(arr2[pomodorQueue]*60)
        }
    },[pomodorQueue]);

    //***************** Drawer State
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
        <div className='container' style={{justifyContent: 'space-around',alignItems: 'center',display: 'flex',background: darkmode? 'rgb(40, 40, 40)' : 'rgb(250, 250, 250)' }}>
            <div className="focstestt" style={{color: darkmode? 'white' : 'black', height: wwidth>500?150:80, display: 'flex',justifyContent: 'center',alignItems: 'center', textAlign: 'center',}}>
                   {
                        state.timerintitle 
                        ? 
                            addTitle
                            ?   
                                <div style={{width: 200, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <input type="text" id="inputfname" name="fname"/>
                                    </div>
                                    <div onClick={()=>{setAddtitle(false)
                                         let titlelast = document.getElementsByTagName("input")[0].value;
                                         setTitletex(titlelast)
                                    }} style={{marginLeft: 10,width: 24,height: 24,background: darkmode? 'white':'black',fontSize: 12,display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill={darkmode? 'black':'white'} id="Outline" viewBox="0 0 24 24" width="32" height="32"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>
                                    </div>
                                </div>
                                :
                                <form>
                                    <label for="fname" onClick={()=>{setAddtitle(true)}}>{titletext}</label>
                                </form>
                        : 
                        null
                    } 

            </div>

            <div> 
                <Drawer
                    sx={{}}
                    anchor='left'
                    open={statex['left']}
                    onClose={toggleDrawer('left', false)}
                >
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
                                <div style={{color: 'black', fontSize: 22, marginLeft: 0}}>
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


                <div className="men" style={{ margin: 40 , justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: 100, top: 0, right: 0, position: "fixed"}}
                    onClick={()=>{ state.darkmode = !darkmode;
                                setDarkmode(!darkmode) }}
                >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill={state.darkmode? 'gray' : 'white'} id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M14,24A12.013,12.013,0,0,1,2,12C1.847,3.044,12.031-2.985,19.791,1.509l1.553.862-1.543.88c-6.7,3.688-6.21,13.87.8,16.906l1.621.731-1.467,1.006A11.921,11.921,0,0,1,14,24ZM14,2A10.011,10.011,0,0,0,4,12c-.155,7.117,7.763,12.2,14.155,9.082a11.544,11.544,0,0,1-.876-18.521A9.745,9.745,0,0,0,14,2Z"/></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill={state.darkmode? 'gray' : '#8AAAE5'} id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M23,11H19.938a7.956,7.956,0,0,0-.575-2.129l2.655-1.546A1,1,0,0,0,21.012,5.6L18.354,7.145a8.1,8.1,0,0,0-1.507-1.5l1.541-2.648a1,1,0,0,0-1.729-1.006L15.12,4.633A7.971,7.971,0,0,0,13,4.062V1a1,1,0,0,0-2,0V4.062a7.965,7.965,0,0,0-2.108.566L7.355,1.986A1,1,0,1,0,5.627,2.992L7.163,5.633A8.046,8.046,0,0,0,5.651,7.139L3,5.6A1,1,0,0,0,2,7.325L4.64,8.865A7.955,7.955,0,0,0,4.062,11H1a1,1,0,0,0,0,2H4.062a7.957,7.957,0,0,0,.576,2.129L2,16.662A1,1,0,0,0,3.01,18.391l2.637-1.535a8.083,8.083,0,0,0,1.5,1.5L5.6,21A1,1,0,0,0,7.33,22.007l1.538-2.646A7.943,7.943,0,0,0,11,19.938V23a1,1,0,0,0,2,0V19.938a7.934,7.934,0,0,0,2.143-.582l1.543,2.651A1,1,0,0,0,18.414,21l-1.546-2.657a8.076,8.076,0,0,0,1.49-1.494l2.647,1.541a1,1,0,0,0,1.006-1.729l-2.646-1.54A7.941,7.941,0,0,0,19.938,13H23A1,1,0,0,0,23,11ZM12,18C4.356,17.906,3.792,6.32,12,6,19.929,6.252,19.928,17.749,12,18Zm1.455-2.229C7.889,17.5,5.64,9.3,11.361,8.051a4.393,4.393,0,0,1,1.683.068.544.544,0,0,1,.243.918,3.7,3.7,0,0,0,.319,5.793A.545.545,0,0,1,13.455,15.771Z"/></svg>
                    
                </div>

        
                <div className="men" style={{ margin: 40 , justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: 100, top: 0, left: 0, position: "fixed"}}
                    onClick={toggleDrawer('left', true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill={state.darkmode? 'white' : 'black'} id="Outline" viewBox="0 0 24 24" width="32" height="32"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
                </div>

                <div className="timer">           

                        <CountdownCircleTimer
                        key={key}
                        isPlaying={isPlay}
                        duration={value}
                        // colors={['#004777']}
                        colors={['#8AAAE5']}
                        rotation="counterclockwise"
                        strokeWidth={(wwidth<500 || wheight<500)?24:35}
                        size={(wwidth<500 || wheight<500)?240:350}
                        >
                        
                        {/* Pomodoro clock text  */}
                        {({remainingTime}) => {
                            let minutes =  Math.floor(remainingTime/60)<10? '0'+Math.floor(remainingTime/60):Math.floor(remainingTime/60)
                            let seconds = remainingTime%60<10?'0'+remainingTime%60:remainingTime%60
                            if(remainingTime===0){
                                if(state.notificationsound==='norma' && state.notification){
                                    new Audio(normaaudio).play();
                                }
                                if(state.notificationsound==='modern' && state.notification){
                                    new Audio(modernaudio).play();
                                }
                                if(state.notificationsound==='simple' && state.notification){
                                    new Audio(simpleaudio).play();
                                }
                                if(state.notificationsound==='piano' && state.notification){
                                    new Audio(pianoaudio).play();
                                }
                                if(state.notificationsound==='guitarl' && state.notification){
                                    new Audio(guitarlaudio).play();
                                }
                                if(pomodorQueue!==arr2.length-1){
                                    setPomodorqueue(pomodorQueue + 1)
                                }
                                else{
                                    setPomodorqueue(0)
                                }
                                if(state.autostart){
                                    setIsplay(true)
                                    console.log("auto?",state.autostart)
                                }
                                else{
                                    setIsplay(false)
                                    console.log("auto?",state.autostart)
                                }
                                setKey(prevKey => prevKey + 1)

                            }
                            return <div style={{display: 'flex', flexDirection: 'column', color: state.darkmode? 'white' : 'black'}}>
                                    <div className="focstest" style={{height: 40, display: 'flex',justifyContent: 'center',alignItems: 'center', textAlign: 'center'}}>
                                        
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        width: (wwidth<500 || wheight<500)?150:200,
                                        height: (wwidth<500 || wheight<500)?50:100,
                                        fontSize: (wwidth<500 || wheight<500)?36:52
                                        , fontWeight: 600
                                    }}>
                                        <div className="min" style={{height: 60, width: 80,display: 'flex', justifyContent: 'center', textAlign: 'center',alignItems: 'center'}}>
                                        {minutes}
                                        </div>
                                        <div className="twodot" style={{height: 60,display: 'flex' ,justifyContent: 'center', textAlign: 'center',alignItems: 'center'}}>
                                        :
                                        </div>
                                        <div className="sec" style={{height: 60,display: 'flex' , width: 80, justifyContent: 'center', textAlign: 'center',alignItems: 'center'}}>
                                        {seconds}
                                        </div>
                                        
                                    </div>
                                    <div className="focustest" style={{height: 40,fontSize: (wwidth<500 || wheight<500)?24:32 , display: 'flex',justifyContent: 'center',alignItems: 'center', textAlign: 'center', fontWeight: 600}}>
                                        {pomodorQueue%2===0? 'FOCUS' : 'BREAK'}
                                    </div>
                                    </div>
                        }}

                        </CountdownCircleTimer>
                    </div>
           
            </div>


            <div style={{height: wwidth>500?250:200, marginTop: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                {/* session text */}
                <div className="sessions" style={{display: 'flex',justifyContent: 'center' ,marginTop: 0, color: state.darkmode? 'white' : 'black'}}>
                    {Math.floor(pomodorQueue/2) + 1} of {state.round}
                </div>

                {/* Buttons */}
                <div style={{ marginTop: 20, marginBottom: 20, height: 50,display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 200 }}>
                    
                    
                    <div style={{display: 'flex',}} className="res" onClick={()=>{
                        setIsplay(false)
                        setKey(prevKey => prevKey + 1)
                    }}
                    >                
                        <RestartButton fill={state.darkmode? 'white' : 'black'} width={32} height={32} />
                    </div>

                    <div className="pp" onClick={()=>{setIsplay(!isPlay)}} style={{display: 'flex',}}>                
                        { isPlay? <PauseButton fill={state.darkmode? 'white' : 'black'} width={44} height={44} />: <PlayButton fill={state.darkmode? 'white' : 'black'} width={44} height={44} /> }
                    </div>

                    <div style={{display: 'flex',}} className="next" onClick={()=>{
                                if(pomodorQueue!==arr2.length-1){
                                    setPomodorqueue(pomodorQueue + 1)
                                }
                                else{
                                    setPomodorqueue(0)
                                }
                                setIsplay(false)
                                setKey(prevKey => prevKey + 1)}}
                    >         
                        <NextButton fill={state.darkmode? 'white' : 'black'} width={32} height={32} />
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Main;