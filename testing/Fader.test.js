import React from 'react';
import render from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Fader} from "../src/Fader";

Enzyme.configure({adapter: new Adapter()});

import {mount, shallow} from 'enzyme';



describe('Fader Component', ()=>{

    it('should match snapshot when show = true', () => {

        const tree = render.create(
            <Fader show={true}>
                <div>derp</div>
            </Fader>
        );

        expect(tree).toMatchSnapshot();

    });


    it('should match snapshot when show = false', () => {

        const tree = render.create(
            <Fader show={false}>
                <div>derp</div>
            </Fader>
        );

        expect(tree).toMatchSnapshot();

    });


    it('should match snapshot when duration is configured', () => {

        const tree = render.create(
            <Fader duration={500}>
                <div>derp</div>
            </Fader>
        );

        expect(tree).toMatchSnapshot();

    });


});