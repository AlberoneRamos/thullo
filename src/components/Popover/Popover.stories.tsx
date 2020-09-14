import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Popover, { PopoverProps } from './Popover';

export default {
  title: 'Popover component',
  component: Popover,
} as Meta;

const Template: Story<PopoverProps> = (args: PopoverProps) => <Popover {...args} />;

export const PopoverComponent = Template.bind({});
PopoverComponent.args = { 
  label: 'See more...', 
  items: [
    {
      label: 'First popover item',
      clickHandler: () => console.log('first item clicked.')
    },
    {
      label: 'Second popover item',
      clickHandler: () => console.log('second item clicked.')
    },
  ]
};