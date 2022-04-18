import {useState} from "react";

const useGlobalData = () => {
    const [state, setState] = useState({

        workduration: 25,
        sbreakduration: 5,
        lbreakduration: 20,
        round: 4,

        notificationsound: 'norma',

        autostart: false,
        darkmode: false,
        notification: true,
        timerintitle: false,      
    });

    const actions = (action) => {
        const {type, payload} = action;
        switch (type) {
            case 'setState':
                return setState(payload);
            default:
                return state;
        }
    }
    return {state, actions}

}

export default useGlobalData;