import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from './TextInput'
import { Envelope } from 'phosphor-react'
import React from 'react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Envelope className="w-6 h-6 gab-3 text-gray_400 mr-2" />
        </TextInput.Icon>
        <TextInput.Input placeholder="Enter placeholder text" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Enter placeholder text" />,
  },
}
