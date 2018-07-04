(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'jss', 'jss-preset-default', 'classnames'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('jss'), require('jss-preset-default'), require('classnames'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.jss, global.jssPresetDefault, global.classnames);
        global.Fader = mod.exports;
    }
})(this, function (exports, _react, _jss, _jssPresetDefault, _classnames) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Fader = undefined;

    var _react2 = _interopRequireDefault(_react);

    var _jss2 = _interopRequireDefault(_jss);

    var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

    var _classnames2 = _interopRequireDefault(_classnames);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
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

    _jss2.default.setup((0, _jssPresetDefault2.default)());
    var getStyles = function getStyles(styles) {
        var _jss$createStyleSheet = _jss2.default.createStyleSheet(styles).attach(),
            classes = _jss$createStyleSheet.classes;

        return classes;
    };

    var Fader = exports.Fader = function (_React$PureComponent) {
        _inherits(Fader, _React$PureComponent);

        function Fader(props) {
            _classCallCheck(this, Fader);

            var _this = _possibleConstructorReturn(this, (Fader.__proto__ || Object.getPrototypeOf(Fader)).call(this, props));

            var duration = props.duration;

            var value = duration ? duration : 175;
            var styles = {
                root: {
                    opacity: 0
                },
                trans: {
                    transition: 'opacity ' + value + 'ms ease-in-out'
                },
                show: {
                    opacity: 1
                }
            };
            _this.classes = getStyles(styles);
            return _this;
        }

        _createClass(Fader, [{
            key: 'render',
            value: function render() {
                var classes = this.classes;

                var _props = this.props,
                    className = _props.className,
                    style = _props.style,
                    show = _props.show,
                    children = _props.children,
                    ref = _props.ref,
                    rest = _objectWithoutProperties(_props, ['className', 'style', 'show', 'children', 'ref']);

                return _react2.default.createElement(
                    'div',
                    Object.assign({
                        ref: ref,
                        className: (0, _classnames2.default)(classes.root, classes.trans, show ? classes.show : null, className),
                        style: Object.assign({}, style)
                    }, rest),
                    children
                );
            }
        }]);

        return Fader;
    }(_react2.default.PureComponent);

    ;
});