(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '@iosio/utils/lib/loaders/index', 'react-jss', './typography', 'classnames', '@iosio/utils/lib/string_manipulation'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('@iosio/utils/lib/loaders/index'), require('react-jss'), require('./typography'), require('classnames'), require('@iosio/utils/lib/string_manipulation'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.index, global.reactJss, global.typography, global.classnames, global.string_manipulation);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _index, _reactJss, _typography, _classnames, _string_manipulation) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.buildTypo = undefined;

    var _react2 = _interopRequireDefault(_react);

    var _reactJss2 = _interopRequireDefault(_reactJss);

    var _classnames2 = _interopRequireDefault(_classnames);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    var buildTypo = function buildTypo(config, cb) {
        var load_link = config.load_link,
            hierarchy = config.hierarchy,
            measure = config.measure,
            hierarchy_base_styles = config.hierarchy_base_styles,
            global_styles = config.global_styles,
            fontFamily = config.fontFamily,
            exclude_hierarchy_defaults = config.exclude_hierarchy_defaults,
            font_wights = config.font_wights,
            text_color = config.text_color,
            line_height_adjust = config.line_height_adjust,
            aux_styles = config.aux_styles;


        if (!line_height_adjust) {
            line_height_adjust = 2;
        }

        var aux = {
            _active: {
                color: '#1fb5fa',
                pointerEvents: 'auto'
            },
            _disabled: {
                opacity: 0.4,
                pointerEvents: 'none'
            },
            _error: {
                color: 'red'
            },
            _contrast: {
                '&:not($_error)': {
                    color: '#fff'
                }
            }
        };

        if (!aux_styles) {
            aux_styles = aux;
        } else {
            aux_styles = Object.assign({}, aux, aux_styles);
        }

        var color = {
            'default': '#242b36',
            darker: '#171a23',
            lighter: '#354051'
        };

        if (!text_color) {
            text_color = color;
        } else {
            text_color = Object.assign({}, color, text_color);
        }

        var weights = {
            thin: 100,
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
            black: 900
        };

        if (!font_wights) {
            font_wights = weights;
        } else {
            font_wights = Object.assign({}, weights, font_wights);
        }

        var divides = {
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

        var typography = (0, _typography.typography)({ weights: font_wights, text_color: text_color, fontFamily: fontFamily });

        if (load_link && load_link.url) {
            (0, _index.loadLink)(load_link.url, function () {
                return load_link.cb && load_link.cb();
            });
        }

        if (global_styles) {
            typography['@global'] = Object.assign({
                html: {
                    WebkitFontSmoothing: 'antialiased', // Antialiasing.
                    MozOsxFontSmoothing: 'grayscale' // Antialiasing.
                }
            }, global_styles);
        } else {
            typography['@global'] = {
                html: {
                    WebkitFontSmoothing: 'antialiased', // Antialiasing.
                    MozOsxFontSmoothing: 'grayscale' // Antialiasing.
                }
            };
        }

        if (!measure) {
            measure = 112;
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
            };
        }

        if (!hierarchy_base_styles) {
            hierarchy_base_styles = {};
        }

        Object.keys(hierarchy).forEach(function (key) {
            var _hierarchy$key = hierarchy[key],
                font_measure_divide = _hierarchy$key.font_measure_divide,
                rest = _objectWithoutProperties(_hierarchy$key, ['font_measure_divide']);

            var fontSize = void 0;
            if (font_measure_divide) {
                fontSize = Math.floor(measure / font_measure_divide);
            } else {
                fontSize = Math.floor(measure / divides[key]);
            }

            var defaults = {};
            if (!exclude_hierarchy_defaults && typography[key]) {
                defaults = typography[key];
            }

            typography[key] = Object.assign({}, defaults, hierarchy_base_styles, {
                fontSize: fontSize,
                lineHeight: fontSize + line_height_adjust + 'px'
            }, rest);
        });

        typography = Object.assign({}, typography, aux_styles);

        var Typo = function (_React$Component) {
            _inherits(Typo, _React$Component);

            function Typo() {
                _classCallCheck(this, Typo);

                return _possibleConstructorReturn(this, (Typo.__proto__ || Object.getPrototypeOf(Typo)).apply(this, arguments));
            }

            _createClass(Typo, [{
                key: 'render',
                value: function render() {
                    var _props = this.props,
                        classes = _props.classes,
                        hierarchy = _props.hierarchy,
                        block = _props.block,
                        children = _props.children,
                        text = _props.text,
                        className = _props.className,
                        style = _props.style,
                        elem = _props.elem,
                        replace = _props.replace,
                        ellipsis = _props.ellipsis,
                        cap = _props.cap,
                        maxChar = _props.maxChar,
                        align = _props.align,
                        space = _props.space,
                        select_none = _props.select_none,
                        rest = _objectWithoutProperties(_props, ['classes', 'hierarchy', 'block', 'children', 'text', 'className', 'style', 'elem', 'replace', 'ellipsis', 'cap', 'maxChar', 'align', 'space', 'select_none']);

                    var combined_classes = [className];

                    var others = {};

                    Object.keys(rest).forEach(function (key) {

                        if (classes[key] && rest[key] === true && key.charAt(0) === '_') {
                            combined_classes.push(classes[key]);
                        } else if (key.charAt(0) !== '_') {
                            others[key] = rest[key];
                        }
                    });

                    if (classes[hierarchy]) {
                        combined_classes.push(classes[hierarchy]);
                    }

                    var Component = elem ? elem : 'span';
                    var _text = text ? text : children ? children : '';
                    var show_ellipsis = false;

                    var combined_style = {};

                    if (style) {
                        combined_style = style;
                    }

                    if (space) {
                        combined_style.marginLeft = 5;
                        combined_style.marginRight = 5;
                    }

                    if (select_none) {
                        combined_style.userSelect = 'none';
                    }

                    if (block) {
                        combined_style.display = 'block';
                    }
                    if (align) {
                        combined_style.textAlign = align;
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
                            _text = (0, _string_manipulation.textReplacer)(_text, replace);
                        }
                        if (cap) {
                            _text = (0, _string_manipulation.capitalize)(_text, cap);
                        }
                    }

                    // console.log(combined_classes);

                    return _react2.default.createElement(
                        Component,
                        Object.assign({
                            className: _classnames2.default.apply(undefined, combined_classes),
                            style: combined_style
                        }, others),
                        _text,
                        show_ellipsis && _react2.default.createElement(
                            'span',
                            { style: { fontSize: '18px' } },
                            ' ...'
                        )
                    );
                }
            }]);

            return Typo;
        }(_react2.default.Component);

        return {
            fontFamily: fontFamily,
            typography: typography,
            hierarchy: hierarchy,
            Typo: (0, _reactJss2.default)(typography)(Typo)
        };
    };
    exports.buildTypo = buildTypo;
});