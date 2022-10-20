import clsx from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps {
  children?: ReactNode
}
function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(
        'h-12 flex items-center gab-3 py-4 px-3 rounded w-full bg-gray_800 focus-within:ring-2 ring-cyan_300'
      )}
    >
      {props.children}
    </div>
  )
}

export interface TextInputIconProps {
  children?: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <> {children} </>
}

TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray_100 text-xs placeholder:text-gray_400 outline-none"
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}
