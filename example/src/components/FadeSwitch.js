import React from 'react';

import {Fader} from "./Fader";

export class FadeSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            view: 0,
            initial: true,
        };
        this.is_mounted_ = false;
        this.timeout = false;
        this.duration = props.duration ? props.duration : 175;
    }

    componentDidMount() {
        this.is_mounted_ = true;
        this.showView(this.props.view);

    }

    showView = (view_num) => {
        const duration = this.state.initial ? 0 : this.duration;
        if (this.is_mounted_) {
            this.setState({
                show: false,
            });
            this.timeout = setTimeout(() => {
                if (this.is_mounted_) {
                    this.setState({
                        view: view_num,
                        show: true,
                        initial: false
                    });

                }
            }, duration);
        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps.view !== this.props.view) {
            this.showView(this.props.view);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
        this.is_mounted_ = false;
    }

    render() {
        const {
            View0,
            View1,
            className,
            fader_props,
            style
        } = this.props;

        const {
            show,
            view,
        } = this.state;

        let fp_style = {};
        if(fader_props && fader_props.style){
            fp_style = fader_props.style;
        }

        const combined_style = {...style, ...fp_style}

        return (
            <Fader
                duration={this.duration}
                className={className}
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    ...combined_style,
                }}
                show={show}>

                {view === 0 ? View0 : View1}

            </Fader>

        );
    };
}
