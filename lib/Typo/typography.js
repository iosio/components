(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.typography = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var typography = exports.typography = function typography(_ref) {
        var weights = _ref.weights,
            text_color = _ref.text_color,
            fontFamily = _ref.fontFamily;
        return {
            display4: {
                fontSize: 112,
                fontWeight: weights.light,
                fontFamily: fontFamily,
                // letterSpacing: '-.04em',
                // lineHeight: 1,
                color: text_color.lighter
            },
            display3: {
                fontSize: 56,
                fontWeight: weights.regular,
                fontFamily: fontFamily,
                // letterSpacing: '-.02em',
                // lineHeight: 1.35,
                color: text_color.lighter
            },
            display2: {
                fontSize: 45,
                fontWeight: weights.regular,
                fontFamily: fontFamily,
                // lineHeight: '48px',
                color: text_color.lighter
            },
            display1: {
                fontSize: 34,
                fontWeight: weights.regular,
                fontFamily: fontFamily,
                // lineHeight: '40px',
                color: text_color.lighter
            },
            headline: {
                fontSize: 24,
                fontWeight: weights.regular,
                fontFamily: fontFamily,
                // lineHeight: '32px',
                color: text_color.default
            },
            title: {
                fontSize: 21,
                fontWeight: weights.medium,
                fontFamily: fontFamily,
                // lineHeight: 1,
                color: text_color.default
            },
            subheading: {
                fontSize: 16,
                fontWeight: weights.regular,
                fontFamily: fontFamily,
                // lineHeight: '24px',
                color: text_color.default
            },
            body2: {
                fontSize: 14,
                fontWeight: weights.medium,
                fontFamily: fontFamily,
                // lineHeight: '20px',
                color: text_color.default
            },
            body1: {
                fontSize: 14,
                fontWeight: weights.regular,
                fontFamily: fontFamily,
                // lineHeight: '20px',
                color: text_color.default
            },
            body_muted: {
                fontSize: 14,
                fontWeight: weights.regular,
                fontFamily: fontFamily,
                // lineHeight: '20px',
                color: text_color.darker
            },
            caption: {
                fontSize: 12,
                fontWeight: weights.regular,
                fontFamily: fontFamily,
                // lineHeight: 1,
                color: text_color.darker
            },
            button: {
                fontSize: 14,
                textTransform: 'uppercase',
                fontWeight: weights.medium,
                fontFamily: fontFamily,
                color: text_color.default
            }

        };
    };
});