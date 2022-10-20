import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: { children: 'Create account' },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div
          style={{ paddingLeft: '20px' }}
          className="items-center justify-center"
        >
          {Story()}
          <Text> Lembrar de mim por 15 dias</Text>
        </div>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
