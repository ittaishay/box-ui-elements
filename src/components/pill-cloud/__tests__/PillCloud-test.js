import React from 'react';

import PillCloud from '..';

describe('components/pill-cloud/PillCloud', () => {
    test('should create a button for each child', () => {
        const pills = [{ value: 1, text: 'Hello' }, { value: 2, text: 'There' }, { value: 3, text: 'Sir' }];
        const wrapper = shallow(<PillCloud options={pills} />);

        expect(wrapper.find('.pill-cloud-button').length).toEqual(3);
    });

    test('should be able to handle 0 children', () => {
        const wrapper = shallow(<PillCloud options={[]} />);

        expect(wrapper.find('.pill-cloud-button').length).toEqual(0);
    });

    test('should be able to handle 1 child', () => {
        const pills = [{ value: 1, text: 'Hello' }];
        const wrapper = shallow(<PillCloud options={pills} />);

        expect(wrapper.find('.pill-cloud-button').length).toEqual(1);
    });

    test('should add selected class to a selected pill when passed by reference', () => {
        const pills = [{ value: 1, text: 'Hello' }, { value: 2, text: 'There' }, { value: 3, text: 'Sir' }];
        const wrapper = shallow(<PillCloud options={pills} selectedOptions={[pills[1]]} />);
        const buttons = wrapper.find('.pill-cloud-button');
        expect(
            buttons
                .at(1)
                .props()
                .className.includes('is-selected'),
        ).toBeTruthy();
    });

    test('should add selected class to a selected pill when passed by value', () => {
        const pills = [{ value: 1, text: 'Hello' }, { value: 2, text: 'There' }, { value: 3, text: 'Sir' }];
        const wrapper = shallow(<PillCloud options={pills} selectedOptions={[{ value: 3, text: 'Sir' }]} />);
        const buttons = wrapper.find('.pill-cloud-button');
        expect(
            buttons
                .at(2)
                .props()
                .className.includes('is-selected'),
        ).toBeTruthy();
    });

    test('should pass selected child through to onSelect', () => {
        const pills = [{ value: 1, text: 'Hello' }];
        const wrapper = shallow(
            <PillCloud
                onSelect={option => {
                    expect(option.text).toEqual('Hello');
                    expect(option.value).toEqual(1);
                }}
                options={pills}
            />,
        );

        wrapper.find('.pill-cloud-button').simulate('click');
    });
});
