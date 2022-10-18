import { ReactNode } from 'react'
import clsx from 'clsx'

export interface TextInputProps {
  children: ReactNode
  asChild?: boolean
}

export function TextInput({}: TextInputProps) {
  return (
    <input
      className={clsx(
        'py-4 px-3 rounded w-full bg-gray_800 text-gray_100 text-xs placeholder:text-gray_400'
      )}
    />
  )
}
