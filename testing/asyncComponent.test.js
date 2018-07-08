import React from 'react';
import renderer from 'react-test-renderer';

import {asyncComponent} from "../src/asyncComponent";


const wait = time => new Promise(resolve => setTimeout(resolve, time));

const MyComponent = (props) => <div>MyComponent props: {JSON.stringify(props)}</div>;
const MyLoadingComponent = () => <div>MyLoadingComponent</div>;


function createLoader(delay, loader, error) {
    return () => {
        return wait(delay).then(() => {
            if (loader) {
                return loader();
            } else {
                throw error;
            }
        });
    };
}


describe('asyncComponent', () => {

    it('should successfully load', async () => {

        const fade_duration = 1;

        const MyAsyncComp = asyncComponent(
            createLoader(1, () => MyComponent), //component to load
            MyLoadingComponent, //loader/loading animation
            fade_duration //
        );

        const tree = renderer.create(
            <MyAsyncComp prop={'foo'}/>
        );

        expect(tree).toMatchSnapshot(); //loading

        await wait(1);

        expect(tree).toMatchSnapshot(); //loaded


    });


});