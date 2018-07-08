import React from 'react';
import {loadLink} from "@iosio/utils/lib/loaders/index";
import withStyles from 'react-jss';
import {typography as ty} from "./typography";
import cx from 'classnames';
import {capitalize, textReplacer} from '@iosio/utils/lib/string_manipulation';

export const buildTypo = (config, cb) => {
    let {
        load_link,
        hierarchy,
        measure,
        hierarchy_base_styles,
        global_styles,
        fontFamily,
        exclude_hierarchy_defaults,
        font_wights,
        text_color,
        line_height_adjust,
        aux_styles,
    } = config;

    if (!line_height_adjust) {
        line_height_adjust = 2
    }

    let aux = {
        _active: {
            color: '#1fb5fa',
            pointerEvents: 'auto',
        },
        _disabled: {
            opacity: 0.4,
            pointerEvents: 'none',
        },
        _error: {
            color: 'red',
        },
        _contrast: {
            '&:not($_error)': {
                color: '#fff',
            }
        }
    };

    if (!aux_styles) {
        aux_styles = aux;
    } else {
        aux_styles = {
            ...aux,
            ...aux_styles,
        }
    }

    let color = {
        'default': '#242b36',
        darker: '#171a23',
        lighter: '#354051'
    };

    if (!text_color) {
        text_color = color
    } else {
        text_color = {
            ...color,
            ...text_color
        }
    }

    let weights = {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
    };


    if (!font_wights) {
        font_wights = weights;
    } else {
        font_wights = {
            ...weights,
            ...font_wights,
        }
    }

    const divides = {
        display4: 1,
        display3: 2,
        display2: 2.4,
        display1: 3.3,
        headline: 4.6,
        title: 5.3,
        subheading: 7,
        body2: 8,
        body1: 8,
        body_muted: 8,
        button: 8,
        caption: 10
    };

    if (!fontFamily) {
        fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
    }

    let typography = ty({weights: font_wights, text_color, fontFamily});


    if (load_link && load_link.url) {
        loadLink(load_link.url, () => load_link.cb && load_link.cb());
    }


    if (global_styles) {
        typography['@global'] = {
            html: {
                WebkitFontSmoothing: 'antialiased', // Antialiasing.
                MozOsxFontSmoothing: 'grayscale', // Antialiasing.
            },
            ...global_styles,
        }
    } else {
        typography['@global'] = {
            html: {
                WebkitFontSmoothing: 'antialiased', // Antialiasing.
                MozOsxFontSmoothing: 'grayscale', // Antialiasing.
            }
        }
    }

    if (!measure) {
        measure = 112
    }

    if (!hierarchy) {

        hierarchy = {
            display4: {},
            display3: {},
            display2: {},
            display1: {},
            headline: {},
            title: {},
            subheading: {},
            body2: {},
            body1: {},
            body_muted: {},
            button: {},
            caption: {}
        }
    }


    if (!hierarchy_base_styles) {
        hierarchy_base_styles = {};
    }

    Object.keys(hierarchy).forEach((key) => {

        let {font_measure_divide, ...rest} = hierarchy[key];

        let fontSize;
        if (font_measure_divide) {
            fontSize = Math.floor(measure / font_measure_divide)
        } else {
            fontSize = Math.floor(measure / divides[key])
        }

        let defaults = {};
        if (!exclude_hierarchy_defaults && typography[key]) {
            defaults = typography[key]
        }

        typography[key] = {
            ...defaults,
            ...hierarchy_base_styles,
            fontSize,
            lineHeight: fontSize + line_height_adjust + 'px',
            ...rest
        }

    });


    typography = {...typography, ...aux_styles};

    class Typo extends React.Component {

        render() {

            const {
                classes,
                hierarchy,
                block,
                children,
                text,
                className,
                style,
                elem,
                replace,
                ellipsis,
                cap,
                maxChar,
                align,
                space,
                select_none,
                ...rest
            } = this.props;


            let combined_classes = [className];

            let others = {};

            Object.keys(rest).forEach((key) => {

                if (classes[key] && rest[key] === true && key.charAt(0) === '_') {
                    combined_classes.push(classes[key]);
                } else if(key.charAt(0) !== '_'){
                    others[key] = rest[key]
                }
            });



            if (classes[hierarchy]) {
                combined_classes.push(classes[hierarchy]);
            }

            let Component = elem ? elem : 'span';
            let _text = text ? text : (children ? children : '');
            let show_ellipsis = false;

            let combined_style = {};

            if (style) {
                combined_style = style;
            }

            if (space) {
                combined_style.marginLeft = 5;
                combined_style.marginRight = 5;
            }

            if (select_none) {
                combined_style.userSelect = 'none'
            }

            if (block) {
                combined_style.display = 'block';
            }
            if (align) {
                combined_style.textAlign = align
            }

            if (_text) {
                if (maxChar) {
                    _text = _text.substring(0, maxChar);
                }

                if (ellipsis === 'singleLine') {
                    combined_style.whiteSpace = 'nowrap';
                    combined_style.overflow = 'hidden';
                    combined_style.textOverflow = 'ellipsis';
                    combined_style.display = 'block';
                } else if (ellipsis === 'atMaxChar' && maxChar) {
                    show_ellipsis = _text.length >= maxChar;
                } else if (ellipsis === true) {
                    show_ellipsis = true;
                }

                if (replace) {
                    _text = textReplacer(_text, replace);
                }
                if (cap) {
                    _text = capitalize(_text, cap);
                }
            }

            // console.log(combined_classes);

            return (
                <Component
                    className={cx(...combined_classes)}
                    style={combined_style}
                    {...others}>
                    {_text}
                    {show_ellipsis && <span style={{fontSize: '18px'}}> ...</span>}
                </Component>
            );
        }
    }

    return {
        fontFamily,
        typography,
        hierarchy,
        Typo: withStyles(typography)(Typo)
    }

};
