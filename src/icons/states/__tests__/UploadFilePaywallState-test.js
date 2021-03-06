import React from 'react';

import { BOX_BLUE } from '../../../common/variables';
import UploadFilePaywallState from '../UploadFilePaywallState';

describe('icons/states/UploadFilePaywallState', () => {
    test('should correctly render default svg', () => {
        const wrapper = shallow(<UploadFilePaywallState />);
        expect(wrapper.is('AccessibleSVG')).toBe(true);
        expect(wrapper.hasClass('upload-file-paywall-state')).toBe(true);
        expect(wrapper.prop('height')).toEqual(129);
        expect(wrapper.prop('width')).toEqual(133);
        expect(
            wrapper
                .find('path')
                .at(0)
                .prop('fill'),
        ).toEqual(BOX_BLUE);
    });

    test('should correctly render svg with specified class', () => {
        const className = 'my-state';
        const wrapper = shallow(<UploadFilePaywallState className={className} />);

        expect(wrapper.hasClass(className)).toBe(true);
    });

    test('should correctly render svg with specified color', () => {
        const color = '#123456';
        const wrapper = shallow(<UploadFilePaywallState color={color} />);

        expect(
            wrapper
                .find('path')
                .at(0)
                .prop('fill'),
        ).toEqual(color);
    });

    test('should correctly render svg with specified width and height', () => {
        const width = 17;
        const height = 21;
        const wrapper = shallow(<UploadFilePaywallState height={height} width={width} />);

        expect(wrapper.prop('height')).toEqual(height);
        expect(wrapper.prop('width')).toEqual(width);
    });

    test('should correctly render svg with specified title', () => {
        const title = 'oh hi there';
        const wrapper = shallow(<UploadFilePaywallState title={title} />);

        expect(wrapper.prop('title')).toEqual(title);
    });
});
