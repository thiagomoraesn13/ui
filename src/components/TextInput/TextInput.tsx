import { ElementType, InputHTMLAttributes, forwardRef, useState } from 'react';
import { tv } from 'tailwind-variants';
import { Icon, IconType } from '../Icon/Icon';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon?: IconType;
  onIconClick?: () => void;
  variant?: 'password';
  width?: 'fit-content' | 'full';
  error?: string;
  supportText?: string;
  as?: ElementType;
  inputRef?: React.Ref<HTMLInputElement | null>;

  // Props para IMaskInput
  mask?: string | (string | RegExp)[];
  onAccept?: (value: string) => void;
  unmask?: boolean;
  lazy?: boolean;
  overwrite?: boolean;
}

const containerVariants = tv({
  base: 'relative',
  variants: {
    width: {
      'fit-content': 'w-fit',
      full: 'w-full',
    },
  },
});

const variants = tv({
  base: 'text-base-dk w-full peer border p-3 rounded-md outline-none transition-all disabled:bg-neutral-lt-3 disabled:cursor-not-allowed border-neutral focus:ring-brand focus:border-brand focus:ring',
  variants: {
    error: { true: 'border-error focus:ring-error focus:border-error' },
    withIcon: { true: 'pr-10' },
  },
});

const labelVariants = tv({
  base: 'text-neutral-dk-2 absolute left-3 -top-4 bg-base-lt p-1 text-sm transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-dk-2 peer-focus:-top-4 peer-focus:text-sm peer-disabled:bg-neutral-lt-3 peer-disabled:text-neutral-dk-1 peer-disabled:cursor-not-allowed',
  variants: {
    error: { true: 'text-error peer-focus:text-error peer-placeholder-shown:text-neutral-dk-2' },
  },
});

const supportTextVariants = tv({
  base: 'mt-1 text-sm text-neutral-dk-2',
  variants: { error: { true: 'text-error' } },
});

const iconVariants = tv({
  base: 'absolute right-3 top-1/2 -translate-y-1/2 p-1 bg-transparent rounded focus:outline-none',
  variants: { withIcon: { true: 'cursor-pointer' } },
});

export const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(
  (
    {
      label,
      error,
      width,
      supportText,
      onIconClick,
      icon,
      disabled,
      variant,
      as: Component = 'input',
      inputRef,
      mask,
      unmask,
      lazy,
      onAccept,
      overwrite,
      ...props
    },
    ref
  ) => {
    const showSupportText = !!error || supportText;
    const [fieldType, setFieldType] = useState('password');
    const isPassword = variant === 'password';

    const componentProps = {
      ...props,
      ...(inputRef && { inputRef }),
      ...(mask && { mask }),
      ...(unmask && { unmask }),
      ...(lazy && { lazy }),
      ...(overwrite && { overwrite }),
      ...(onAccept && { onAccept }),
    };

    return (
      <div>
        <div className={containerVariants({ width })}>
          <Component
            {...componentProps}
            id={props.name}
            className={variants({ error: !!error, withIcon: !!icon })}
            disabled={disabled}
            type={isPassword ? fieldType : props.type}
            ref={ref}
            placeholder=" "
          />

          <label htmlFor={props.name} className={labelVariants({ error: !!error })}>
            {label}
          </label>

          {icon && !disabled && !isPassword && (
            <button
              type="button"
              className={iconVariants({ withIcon: !!onIconClick })}
              onClick={onIconClick}
              tabIndex={-1}
            >
              <Icon name={icon} size={16} />
            </button>
          )}

          {isPassword && !disabled && (
            <button
              type="button"
              className={iconVariants({ withIcon: !!onIconClick })}
              onClick={() => setFieldType(fieldType === 'password' ? 'text' : 'password')}
              tabIndex={-1}
            >
              <Icon name={fieldType === 'password' ? 'EyeOff' : 'Eye'} size={16} />
            </button>
          )}
        </div>

        {showSupportText && <p className={supportTextVariants({ error: !!error })}>{error || supportText}</p>}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
