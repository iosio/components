(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './Fader'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./Fader'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.Fader);
        global.FadeSwitch = mod.exports;
    }
})(this, function (exports, _react, _Fader) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.FadeSwitch = undefined;

    var _react2 = _interopRequireDefault(_react);

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

    var FadeSwitch = exports.FadeSwitch = function (_React$Component) {
        _inherits(FadeSwitch, _React$Component);

        function FadeSwitch(props) {
            _classCallCheck(this, FadeSwitch);

            var _this = _possibleConstructorReturn(this, (FadeSwitch.__proto__ || Object.getPrototypeOf(FadeSwitch)).call(this, props));

            _this.showView = function (view_num) {

                if (_this.is_mounted_) {

                    if (!_this.state.initial_load) {

                        _this.setState({ show: false });

                        _this.timeout = setTimeout(function () {
                            if (_this.is_mounted_) {
                                _this.setState({ view: view_num, show: true });
                            }
                        }, _this.duration);
                    } else {
                        _this.setState({ view: view_num, show: true, initial_load: false });
                    }
                }
            };

            _this.state = {
                show: false,
                view: 0,
                initial_load: true
            };
            _this.is_mounted_ = false;
            _this.timeout = false;
            _this.duration = props.duration ? props.duration : 175;
            return _this;
        }

        _createClass(FadeSwitch, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.is_mounted_ = true;
                this.showView(this.props.view);
            }
        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                if (prevProps.view !== this.props.view) {
                    this.showView(this.props.view);
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.is_mounted_ = false;
                clearTimeout(this.timeout);
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
                        className: className,
                        style: Object.assign({
                            height: '100%',
                            width: '100%',
                            position: 'relative'
                        }, combined_style),
                        show: show },
                    view === 0 ? View0 : View1
                );
            }
        }]);

        return FadeSwitch;
    }(_react2.default.Component);
});