import {buildTypo} from "@iosio/typo";
import './fonts/index.css';

let text_color = {
    'default': '#242b36',
    darker: '#171a23',
    lighter: '#5d6f8c'
};

let fontFamily = '"Montserrat", "Helvetica", "Arial", sans-serif';

export const {typography, Typo} = buildTypo({
    text_color,
    fontFamily,
    global_styles: {
        html: fontFamily
    },
    line_height_adjust: 4,
    aux_styles: {
        active: {
            color: '#1fb5fa',
            pointerEvents: 'auto',
        },
        disabled: {
            opacity: 0.4,
            pointerEvents: 'none',
        },
        error: {
            color: 'red'
        },
        contrast: {
            color: 'white'
        }
    },

    measure: 120,
});


export const {typography, Typo} = buildTypo({

    load_link: {
        url: "https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900",
        cb: ()=> console.log('loaded')
    },
    text_color,
    fontFamily,
    global_styles: {
        html: fontFamily
    },
    line_height_adjust: 4,
    aux_styles: {
        active: {
            color: '#1fb5fa',
            pointerEvents: 'auto',
        },
        disabled: {
            opacity: 0.4,
            pointerEvents: 'none',
        },
        error: {
            color: 'red'
        },
        contrast: {
            color: 'white'
        }
    },

    measure: 120,
});


