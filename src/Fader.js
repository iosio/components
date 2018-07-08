import React from 'react';
export class Fader extends React.PureComponent {
    render() {
        const { className, style, show, children, duration, ref, ...rest } = this.props;
        const value = duration ? duration : 175;
        return (
            <div
                id="Fader"
                ref={ref}
                className={className}
                style={{
                    ...style,
                    opacity: show ? 1: 0,
                    transition: `opacity ${value}ms ease-in-out`
                }}
                {...rest}>

                {children}
            </div>
        );
    }
}









