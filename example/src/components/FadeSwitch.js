import React from 'react';

import {Fader} from "./Fader";

export class FadeSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            view: 0,
        };
        this.is_mounted_ = false;
        this.timeout = false;

        this.duration = props.duration ? props.duration : 175;
    }

    componentDidMount() {
        this.is_mounted_ = true;
        this.run(this.props.view);

    }

    showView1 = () => {

        if (this.is_mounted_) {
            this.setState({
                show: false,
            });
            if (this.is_mounted_) {
                this.timeout = setTimeout(() => {
                    this.setState({
                        view: 1,
                        show: true,
                    });
                }, this.duration);
            }
        }
    };

    showView0 = () => {
        if (this.is_mounted_) {
            this.setState({
                show: false,
            });
            this.timeout = setTimeout(() => {
                if (this.is_mounted_) {
                    this.setState({
                        view: 0,
                        show: true,
                    });
                }
            }, this.duration);
        }
    };

    run = (view) => {
        view === 0 ? this.showView0() : this.showView1();
    };
    componentDidUpdate(prevProps) {
        if (prevProps.view !== this.props.view) {
            this.run(this.props.view);
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

        );//end return
    };//end render
}//end class
