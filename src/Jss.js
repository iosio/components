import React from 'react';
import withStyle, {ThemeProvider} from 'react-jss';
import preset from 'jss-preset-default';
import {create} from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';

const jss = create(preset());
export const withStyles = withStyle;

export class Jss extends React.PureComponent {
    render() {
        const {
            children,
            global_styles,
            theme
        } = this.props;
        let GlobalStylesWrapper = props => props.children;
        GlobalStylesWrapper = withStyle(
            global_styles ? global_styles : () => ({})
        )(GlobalStylesWrapper);
        return (
            <JssProvider jss={jss}>
                <ThemeProvider theme={theme ? theme : {}}>
                    <GlobalStylesWrapper>
                        {children}
                    </GlobalStylesWrapper>
                </ThemeProvider>
            </JssProvider>
        );
    };
}