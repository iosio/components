(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'react-jss', './Fader'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-jss'), require('./Fader'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactJss, global.Fader);
        global.FadeSwitch = mod.exports;
    }
})(this, function (exports, _react, _reactJss, _Fader) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.FadeSwitch = undefined;

    var _react2 = _interopRequireDefault(_react);

    var _reactJss2 = _interopRequireDefault(_reactJss);

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

    var styles = function styles(theme) {
        return {
            root: {
                height: '100%',
                width: '100%',
                position: 'relative'
            }
        };
    };

    var fadeSwitch = function (_React$Component) {
        _inherits(fadeSwitch, _React$Component);

        function fadeSwitch(props) {
            _classCallCheck(this, fadeSwitch);

            var _this = _possibleConstructorReturn(this, (fadeSwitch.__proto__ || Object.getPrototypeOf(fadeSwitch)).call(this, props));

            _this.showView1 = function () {

                if (_this.is_mounted_) {
                    _this.setState({
                        show: false
                    });
                    if (_this.is_mounted_) {
                        _this.timeout = setTimeout(function () {
                            _this.setState({
                                view: 1,
                                show: true
                            });
                        }, _this.duration);
                    }
                }
            };

            _this.showView0 = function () {
                if (_this.is_mounted_) {
                    _this.setState({
                        show: false
                    });
                    _this.timeout = setTimeout(function () {
                        if (_this.is_mounted_) {
                            _this.setState({
                                view: 0,
                                show: true
                            });
                        }
                    }, _this.duration);
                }
            };

            _this.run = function (view) {
                view === 0 ? _this.showView0() : _this.showView1();
            };

            _this.state = {
                show: true,
                view: 0
            };
            _this.is_mounted_ = false;
            _this.timeout = false;

            _this.duration = props.duration ? props.duration : 175;
            return _this;
        }

        _createClass(fadeSwitch, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.is_mounted_ = true;
                this.run(this.props.view);
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                if (prevProps.view !== this.props.view) {
                    this.run(this.props.view);
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                clearTimeout(this.timeout);
                this.is_mounted_ = false;
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props,
                    View0 = _props.View0,
                    View1 = _props.View1,
                    className = _props.className,
                    fader_props = _props.fader_props,
                    style = _props.style;
                var _state = this.state,
                    show = _state.show,
                    view = _state.view;


                var fp_style = {};
                if (fader_props && fader_props.style) {
                    fp_style = fader_props.style;
                }

                var combined_style = Object.assign({}, style, fp_style);

                return _react2.default.createElement(
                    _Fader.Fader,
                    {
                        duration: this.duration,
                        fast: true,
                        className: className,
                        style: Object.assign({
                            position: 'relative'
                        }, combined_style),
                        show: show },
                    view === 0 ? View0 : View1
                ); //end return
            }
        }]);

        return fadeSwitch;
    }(_react2.default.Component);

    //end class

    var FadeSwitch = exports.FadeSwitch = (0, _reactJss2.default)(styles)(fadeSwitch);
});