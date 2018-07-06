import React from 'react';
import jss from 'jss'
import preset from 'jss-preset-default'
import cx from 'classnames';
jss.setup(preset());
const getStyles = (styles) => {
    const {classes} = jss.createStyleSheet(styles).attach();
    return classes;
};

export class Fader extends React.PureComponent {
    constructor(props){
        super(props);
        const {duration} = props;
        const value = duration ? duration : 175;
        const styles = {
            root: {
                opacity: 0,
            },
            trans: {
                transition: `opacity ${value}ms ease-in-out`,
            },
            show: {
                opacity: 1,
            },
        };
        this.classes = getStyles(styles);
    }

    render() {
        const {classes} = this;

        const { className, style, show, children, ref, ...rest } = this.props;
        return (
            <div
                ref={ref}
                className={cx(
                    classes.root,
                    classes.trans,
                    show ? classes.show : null,
                    className
                )}
                style={{...style}}
                {...rest}>

                {children}
            </div>
        );
    }
}









