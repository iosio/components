import React from 'react';

import {buildTypo} from "../components/Typo";

// import '../components/Typo/examp/fonts/index.css';

let text_color = {
    'default': '#242b36',
    darker: '#171a23',
    lighter: '#5d6f8c'
};


const config = {
    load_link: {
        url: "https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900",
        cb: ()=> console.log('loaded')
    },
    text_color,
    measure: 150,
};

const aux_styles = ['_active', '_disabled', '_error', '_contrast '];

export const {typography, hierarchy, Typo, fontFamily} = buildTypo(config);


export class TypoPage extends React.Component {

    constructor() {
        super();


        const build_aux = () => {
            const aux = {};


            aux_styles.forEach((a) => {
                aux[a] = false;
            });
            return aux;
        };


        this.state = {
            aux: build_aux()
        };
    }

    componentDidMount() {

        // console.log(this.state);
    }


    setAux = (type) => {

        this.setState({aux: {...this.state.aux, [type]: !this.state.aux[type]}});
    };

    render() {

        const {_active, _disabled, _contrast, _error} = this.state.aux;

        // console.log(_active, _disabled, _contrast);


        const {classes} = this.props;

        const styles = classes;


        return (
            <div>

                <div style={{position: 'fixed'}}>

                    {aux_styles.map((aux, i) => (
                        <button key={i} onClick={() => this.setAux(aux)}>
                            {aux}
                        </button>

                    ))}

                </div>


                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    padding: 15,
                    flexDirection: 'column'

                }}>


                    {Object.keys(hierarchy).map((t, i) => (

                        <React.Fragment key={i}>
                            <Typo cap={'first'} hierarchy={t}
                                  _contrast={_contrast}
                                  _disabled={_disabled}
                                  _active={_active}
                                  _error={_error}
                            >
                                {t}
                            </Typo>

                            <br/>
                        </React.Fragment>

                    ))}


                    <Typo hierarchy="body1"
                          _contrast={_contrast}
                          _disabled={_disabled}
                          _active={_active}
                          _error={_error}
                    >
                        <Typo hierarchy="body2"
                              _contrast={_contrast}
                              _disabled={_disabled}
                              _active={_active}
                              _error={_error}
                        >Paragraph example</Typo>


                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typo>

                    <br/>
                    <Typo hierarchy="body2"
                          _contrast={_contrast}
                          _disabled={_disabled}
                          _active={_active}
                          _error={_error}
                    >Ellipsis singleLine</Typo>

                    <br/>
                    <Typo
                        style={{maxWidth: 300}}
                        hierarchy="body1"
                        ellipsis="singleLine"
                        _contrast={_contrast}
                        _disabled={_disabled}
                        _active={_active}
                        _error={_error}
                    >
                        "add max width" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typo>


                </div>
            </div>
        );
    }
}


