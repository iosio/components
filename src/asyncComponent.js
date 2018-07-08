import React from 'react';
import {FadeSwitch} from "./FadeSwitch";

export const asyncComponent = (getComponent, Loader, duration, fadeSwitch_props, fader_props) => {
    return class AsyncComponent extends React.Component {
        constructor() {
            super();
            if (!this.state.Component) {
                getComponent().then(Component => {
                    Component = Component && Component.__esModule ? Component.default : Component;
                    AsyncComponent.Component = Component;
                    this.setState({Component});
                });
            }
        }

        static Component = null;
        state = {Component: AsyncComponent.Component};

        render() {
            const {Component} = this.state;

            return (
                <React.Fragment>
                    {Loader && duration > 0 ? <FadeSwitch
                            {...fadeSwitch_props}
                            fader_props={fader_props}
                            duration={duration}
                            {...this.props}
                            style={{height: '100%', width: '100%'}}
                            view={!!Component ? 1 : 0}
                            View0={Loader ? <Loader/> : null}
                            View1={Component ? <Component {...this.props}/> : null}
                        />
                        :

                        (Component ? <Component {...this.props}/> : null)
                    }
                </React.Fragment>
            );
        }
    }
};


