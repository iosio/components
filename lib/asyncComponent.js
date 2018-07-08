(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './FadeSwitch'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./FadeSwitch'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.FadeSwitch);
        global.asyncComponent = mod.exports;
    }
})(this, function (exports, _react, _FadeSwitch) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.asyncComponent = undefined;

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

    var asyncComponent = exports.asyncComponent = function asyncComponent(getComponent, Loader, duration, fadeSwitch_props, fader_props) {
        var _class, _temp;

        return _temp = _class = function (_React$Component) {
            _inherits(AsyncComponent, _React$Component);

            function AsyncComponent() {
                _classCallCheck(this, AsyncComponent);

                var _this = _possibleConstructorReturn(this, (AsyncComponent.__proto__ || Object.getPrototypeOf(AsyncComponent)).call(this));

                _this.state = { Component: AsyncComponent.Component };

                if (!_this.state.Component) {
                    getComponent().then(function (Component) {
                        Component = Component && Component.__esModule ? Component.default : Component;
                        AsyncComponent.Component = Component;
                        _this.setState({ Component: Component });
                    });
                }
                return _this;
            }

            _createClass(AsyncComponent, [{
                key: 'render',
                value: function render() {
                    var Component = this.state.Component;


                    return _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        duration > 0 ? _react2.default.createElement(_FadeSwitch.FadeSwitch, Object.assign({}, fadeSwitch_props, {
                            fader_props: fader_props,
                            duration: duration
                        }, this.props, {
                            style: { height: '100%', width: '100%' },
                            view: !!Component ? 1 : 0,
                            View0: Loader ? _react2.default.createElement(Loader, null) : null,
                            View1: Component ? _react2.default.createElement(Component, this.props) : null
                        })) : Component ? _react2.default.createElement(Component, this.props) : null
                    );
                }
            }]);

            return AsyncComponent;
        }(_react2.default.Component), _class.Component = null, _temp;
    };
});