import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FadeSwitch} from "../src/FadeSwitch";
import {StoreModule} from "@iosio/capsule/lib/redux-assist";

Enzyme.configure({adapter: new Adapter()});

import {mount, shallow, render} from 'enzyme';

const {reduxAssist, store, connect, Provider} = new StoreModule();

const state = reduxAssist('view', {show: 0});

const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
};


class FadeSwitchWithConnect extends React.Component {

    render() {
        const {show} = this.props;

        return (
            <FadeSwitch
                duration={1}
                view={show}
                View0={
                    <div className="view-0">
                        I'm view 0!
                    </div>
                }

                View1={
                    <div className="view-1">
                        I'm view 1!
                    </div>
                }
            />
        )
    }
}

FadeSwitchWithConnect = connect((state) => ({
    show: state.view.show,
}), null)(FadeSwitchWithConnect);


describe('FadeSwitch Component', () => {

    it('should match snapshot when view = 0', () => {

        const tree = renderer.create(
            <FadeSwitch
                view={0}
                View0={
                    <div>
                        I'm view 0!
                    </div>
                }

                View1={
                    <div>
                        I'm view 1!
                    </div>
                }
            />
        );

        expect(tree).toMatchSnapshot();

    });

    it('should match snapshot when view = 1', () => {

        const tree = renderer.create(
            <FadeSwitch
                view={1}
                View0={
                    <div>
                        I'm view 0!
                    </div>
                }

                View1={
                    <div>
                        I'm view 1!
                    </div>
                }
            />
        );

        expect(tree).toMatchSnapshot();
    });

    it('should match snapshot when duration is configured', () => {

        const tree = renderer.create(
            <FadeSwitch
                duration={500}
                view={1}
                View0={
                    <div>
                        I'm view 0!
                    </div>
                }

                View1={
                    <div>
                        I'm view 1!
                    </div>
                }
            />
        );

        expect(tree).toMatchSnapshot();
    });


    describe('it should update when new props are passed', () => {

        const tree = renderer.create(
            <Provider>
                <FadeSwitchWithConnect/>
            </Provider>
        );

        it('view (0)', () => {

            expect(tree).toMatchSnapshot();

        });

        it('view (1)', () => {
            expect.assertions(1);
            state.view.set.show(1);
            return wait(10).then(() => {
                expect(tree).toMatchSnapshot();
            })

        });


    });

    // describe('(enzyme) - it should update when new props are passed', () => {
    //
    //     const wrapper = mount(
    //         <Provider>
    //             <FadeSwitchWithConnect/>
    //         </Provider>
    //     );
    //
    //
    //     it('view (0)', () => {
    //
    //        console.log(wrapper.instance())
    //
    //         expect.assertions(1);
    //         return wait(10).then(()=>{
    //             expect(wrapper.find('.view-1').length).toBe(1);
    //         })
    //     });
    //
    //     // it('view (1)', () => {
    //     //     expect.assertions(1);
    //     //     state.view.set.show(1);
    //     //     return wait(10).then(()=>{
    //     //         console.log(tree.find('.view-1').exists());
    //     //         expect(tree.find('.view-1').length).toBe(1);
    //     //     })
    //     //
    //     // });
    //
    //
    // })


});