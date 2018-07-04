import React from 'react';
import {FadeSwitch} from "./FadeSwitch";

export const asyncComponent = (getComponent, Loader, duration, fadeSwitch_props, fader_props) =>{
    return class AsyncComponent extends React.Component {
        static Component = null;
        state = { Component: AsyncComponent.Component};
        componentDidMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    Component =  Component && Component.__esModule ? Component.default : Component;
                    AsyncComponent.Component = Component;
                    this.setState({ Component });
                });
            }
        }
        render() {
            const {Component, loaded} = this.state;
            return (
                <FadeSwitch
                    {...fadeSwitch_props}
                    fader_props={fader_props}
                    duration={duration}
                    {...this.props}
                    style={{height: '100%', width: '100%'}}
                    view={loaded ? 1 : 0}
                    View0={Loader ? <Loader/> : <div>...Loading</div>}
                    View1={Component ? <Component {...this.props}/> : null}
                />
            );
        }
    }
};

