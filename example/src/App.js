import React from 'react';

import {Jss} from './components/Jss';
import {FadersAndAsync} from "./Pages/FadersAndAsync";
import {TypoPage} from "./Pages/Typo";
import {typography, fontFamily} from "./Pages/Typo";

export default class App extends React.Component {


    state = {
        current_page: 'FadersAndAsync'
    }
    setPage = (page) => {
        this.setState({current_page: page});
    }

    render() {

        const {current_page} = this.state;

        const Btn = (props) => (
            <div
                style={{
                    color: 'white',
                    background: '#3e3e3e',
                    margin: 10,
                    padding: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={() => this.setPage(props.page)}>
                {props.page}
            </div>
        );

        return (
            //combine styles with other theme objects prior to this
            <Jss theme={typography} global_styles={{
                '@global':{
                    '*':{
                        boxSizing: 'border-box'
                    },
                    html: {
                        margin: 0,
                        padding: 0,
                        fontFamily
                    },
                    body: {
                        margin: 0,
                        padding: 0,
                    }

                }
            }}>
                <div style={{height: '100%', width: '100%'}}>
                    <div style={{
                        color: 'white',
                        background: '#1b1b1b',
                        position: 'fixed',
                        top: 0,
                        height: 60,
                        width: '100%',
                        right: 0,
                        left: 0,
                        display: 'flex',
                    }}>


                        <Btn page={'FadersAndAsync'}/>
                        <Btn page={'TypoPage'}/>

                    </div>


                    <div style={{marginTop: 70}}>


                        {current_page === 'FadersAndAsync' &&
                        <FadersAndAsync/>
                        }

                        {current_page === 'TypoPage' &&
                        <TypoPage/>
                        }


                    </div>
                </div>
            </Jss>
        )
    }
}