import React, {useContext, useReducer} from "react";

const AlertContextReducer = React.createContext()

export const useAlertReducer = () => {
    return useContext(AlertContextReducer)
}


export const AlertProvider = ({children}) => {

    const SHOW_ALERT = 'show'
    const HIDE_ALERT = 'hide'

    const reducer = (state, action) => {
        switch (action.type) {
            case SHOW_ALERT: return {...state, visible: true, text: action.text}
            case HIDE_ALERT: return {...state, visible: false}
                default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })
    const  show = (text) => dispatch ({type:SHOW_ALERT, text})
    const  hide = () => dispatch ({type:HIDE_ALERT})


    return(
        <AlertContextReducer.Provider value={{
        visible: state.visible,
            text: state.text,
            show, hide
        }}>
            {/*<AlertToggleContext.Provider value={toggle}>*/}
            {children}
            {/*</AlertToggleContext.Provider>*/}
        </AlertContextReducer.Provider>
    )
}