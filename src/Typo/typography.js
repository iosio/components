


export let typography = ({weights, text_color, fontFamily})=>({
    display4: {
        fontSize: 112,
        fontWeight: weights.light,
        fontFamily,
        // letterSpacing: '-.04em',
        // lineHeight: 1,
        color: text_color.lighter,
    },
    display3: {
        fontSize: 56,
        fontWeight: weights.regular,
        fontFamily,
        // letterSpacing: '-.02em',
        // lineHeight: 1.35,
        color: text_color.lighter,
    },
    display2: {
        fontSize: 45,
        fontWeight: weights.regular,
        fontFamily,
        // lineHeight: '48px',
        color: text_color.lighter,
    },
    display1: {
        fontSize: 34,
        fontWeight: weights.regular,
        fontFamily,
        // lineHeight: '40px',
        color: text_color.lighter,
    },
    headline: {
        fontSize: 24,
        fontWeight: weights.regular,
        fontFamily,
        // lineHeight: '32px',
        color: text_color.default,
    },
    title: {
        fontSize: 21,
        fontWeight: weights.medium,
        fontFamily,
        // lineHeight: 1,
        color: text_color.default,
    },
    subheading: {
        fontSize: 16,
        fontWeight: weights.regular,
        fontFamily,
        // lineHeight: '24px',
        color: text_color.default,
    },
    body2: {
        fontSize: 14,
        fontWeight: weights.medium,
        fontFamily,
        // lineHeight: '20px',
        color: text_color.default,
    },
    body1: {
        fontSize: 14,
        fontWeight: weights.regular,
        fontFamily,
        // lineHeight: '20px',
        color: text_color.default,
    },
    body_muted: {
        fontSize: 14,
        fontWeight: weights.regular,
        fontFamily,
        // lineHeight: '20px',
        color: text_color.darker,
    },
    caption: {
        fontSize: 12,
        fontWeight: weights.regular,
        fontFamily,
        // lineHeight: 1,
        color: text_color.darker,
    },
    button: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: weights.medium,
        fontFamily,
        color: text_color.default
    },

});
