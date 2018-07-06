import React from 'react';

import {FadeSwitch} from "./components/FadeSwitch";
import {Fader} from "./components/Fader";


import {asyncComponent} from "./components/asyncComponent";
//
const OtherStuff = asyncComponent(()=>import('./OtherStuff'), null, 1000);

export default class App extends React.Component {

    state = {
        view: 0,
        show: false,
    };

    render() {

        const {view, show} = this.state;

        return (
            <div style={{textAlign: 'center'}}>
                <h1>asyncComponent</h1>
                I am dynamically rendered.
                <br/>
                I have FadeSwitch built into me and will fade in once I am loaded.
                <br/>
                I have options to pass a loading indicator and duration of the transition

                <br/>
                <br/>

                <FadeSwitch
                    duration={300}
                    view={view}
                    View0={
                        <div style={{
                            height: 500,
                            width: '100%',
                            background: '#d0ffd2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <h1>FadeSwitch</h1>
                            I fade in on initial load as well.
                            <br/>
                            you can control my duration as well
                            <br/>
                            <br/>
                            <button onClick={() => this.setState({view: 1})}>
                                fade to other view
                            </button>

                            <OtherStuff/>

                        </div>
                    }

                    View1={

                        <div style={{
                            height: 500,
                            width: '100%',
                            background: '#d3ebff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>

                            <button onClick={() => this.setState({view: 0})}>
                                fade to other view
                            </button>
                            <br/>

                            <button onClick={() => this.setState({show: !this.state.show})}>
                                fade in other view
                            </button>
                            <br/>

                            <Fader duration={2000} show={show}>

                                <div style={{
                                    padding: 50,
                                    background: '#000000',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    flexDirection: 'column'
                                }}>
                                    <h1>Fader</h1>
                                   you can control my duration too!

                                </div>
                            </Fader>


                        </div>
                    }
                />


            </div>
        )
    }
}