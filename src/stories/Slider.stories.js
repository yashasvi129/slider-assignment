// src/stories/Slider.stories.js

import React from 'react';
import Slider from '../components/Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['Continuous', 'Discreet'],
      },
    },
    subtype: {
      control: {
        type: 'select',
        options: ['Single', 'Range'],
      },
    },
    steps: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
      },
    },
    handleSize: {
      control: {
        type: 'select',
        options: ['Size_24', 'Size_32'],
      },
    },
  },
};

const Template = (args) => <Slider {...args} />;

export const ContinuousSingle = Template.bind({});
ContinuousSingle.args = {
  type: 'Continuous',
  subtype: 'Single',
  handleSize: 'Size_24',
};

export const DiscreetSingle = Template.bind({});
DiscreetSingle.args = {
  type: 'Discreet',
  subtype: 'Single',
  steps: 5,
  handleSize: 'Size_32',
};

export const ContinuousRange = Template.bind({});
ContinuousRange.args = {
  type: 'Continuous',
  subtype: 'Range',
  handleSize: 'Size_24',
};

export const DiscreetRange = Template.bind({});
DiscreetRange.args = {
  type: 'Discreet',
  subtype: 'Range',
  steps: 10,
  handleSize: 'Size_32',
};
