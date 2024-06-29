import { FC, InputHTMLAttributes, ReactNode } from 'react'

import clsxm from '@/utils/clsxm'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: {
    text: string
    className?: string
  }
  error?: {
    text?: string
    className?: string
  }
  wrapperClassName?: string
  prepend?: ReactNode
  append?: ReactNode
}

const Input: FC<InputProps> = ({
  id,
  wrapperClassName,
  label,
  error,
  required,
  prepend,
  append,
  className,
  ...props
}) => {
  return (
    <div className={clsxm('space-y-2', wrapperClassName)}>
      {label && (
        <label
          className={clsxm('text-sm leading-[20px]', label?.className || '')}
          htmlFor={id}
        >
          {label.text}
          {required && <span className='ml-1 text-red-500'>*</span>}
        </label>
      )}
      <div className='relative'>
        {prepend && <div className='absolute left-3 top-1/2 -translate-y-1/2 transform text-[20px]'>{prepend}</div>}
        <input
          {...props}
          id={id}
          className={clsxm(
            'w-full rounded-lg border py-[12.25px] text-sm leading-tight placeholder:text-disable focus:outline-none disabled:text-black',
            { 'pl-10': prepend, 'pl-[0.875rem]': !prepend },
            { 'pr-10': append, 'pr-[0.875rem]': !append },
            { 'border-red-500': required || error },
            className
          )}
        />
        {append && <div className='absolute right-3 top-0 translate-y-1.5 transform text-[20px]'>{append}</div>}
      </div>
      {error?.text && <div className={clsxm(error.className)}>{error.text}</div>}
    </div>
  )
}

export default Input
