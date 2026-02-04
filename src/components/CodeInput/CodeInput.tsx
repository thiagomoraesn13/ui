import React, {
  useRef,
  useState,
  useCallback,
  ClipboardEvent,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  useEffect,
} from 'react';
import { useController, FieldError, Control, FieldValues, Path } from 'react-hook-form';
import { Icon } from '../Icon/Icon';
import { tv } from 'tailwind-variants';

type CodeInputProps<T extends FieldValues = FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  slots: number;
  password?: boolean;
  className?: string;
  allowedChars?: 'numeric' | 'letters' | 'alphanumeric';
  disabled?: boolean;
  readOnly?: boolean;
};

const variants = tv({
  base: [
    'w-9 h-9 text-center text-base rounded-md border border-neutral transition-all duration-200',
    'sm:w-10 sm:h-10 sm:text-lg sm:rounded-lg',
    'md:w-12 md:h-12 md:text-xl',
    'focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand',
  ],
  variants: {
    disabled: {
      true: 'bg-neutral-lt-3 cursor-not-allowed text-neutral',
    },
    error: {
      true: 'border-error',
    },
  },
  defaultVariants: {},
});

export function CodeInput<T extends FieldValues = FieldValues>({
  name,
  control,
  slots,
  password = false,
  className = '',
  allowedChars = 'alphanumeric',
  disabled = false,
  readOnly = false,
}: CodeInputProps<T>) {
  const {
    field: { value = '', onChange, onBlur },
    fieldState: { error },
  } = useController<T>({ name, control });

  const [showPassword, setShowPassword] = useState(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const [localValues, setLocalValues] = useState<string[]>(() =>
    Array.from({ length: slots }, (_, i) => String(value || '')[i] ?? '')
  );

  useEffect(() => {
    const next = Array.from({ length: slots }, (_, i) => String(value || '')[i] ?? '');
    if (next.join('') !== localValues.join('')) {
      setLocalValues(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, slots]);

  const filterChars = useCallback(
    (input: string) => {
      switch (allowedChars) {
        case 'numeric':
          return input.replace(/[^0-9]/g, '');
        case 'letters':
          return input.replace(/[^a-zA-Z]/g, '');
        default:
          return input.replace(/[^0-9a-zA-Z]/g, '');
      }
    },
    [allowedChars]
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, idx: number) => {
      const raw = e.target.value;
      const filtered = filterChars(raw);
      if (!filtered) {
        const next = [...localValues];
        next[idx] = '';
        setLocalValues(next);
        onChange(next.join(''));
        return;
      }

      const char = filtered.slice(-1);
      const next = [...localValues];
      next[idx] = char;

      for (let i = 1; i < filtered.length && idx + i < slots; i++) {
        next[idx + i] = filtered.charAt(i);
      }

      setLocalValues(next);
      onChange(next.join(''));

      if (idx < slots - 1) {
        requestAnimationFrame(() => {
          inputsRef.current[idx + 1]?.focus();
          inputsRef.current[idx + 1]?.select?.();
        });
      }
    },
    [filterChars, localValues, onChange, slots]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
      if (e.key === 'Backspace') {
        e.preventDefault();
        const next = [...localValues];

        if (localValues[idx]) {
          next[idx] = '';
          setLocalValues(next);
          onChange(next.join(''));
        } else if (idx < slots - 1 && localValues[idx + 1]) {
          next[idx + 1] = '';
          setLocalValues(next);
          onChange(next.join(''));
          inputsRef.current[idx + 1]?.focus();
        } else if (idx > 0) {
          inputsRef.current[idx - 1]?.focus();
        }
        return;
      }

      if (e.key === 'ArrowLeft' && idx > 0) {
        e.preventDefault();
        inputsRef.current[idx - 1]?.focus();
        return;
      }

      if (e.key === 'ArrowRight' && idx < slots - 1) {
        e.preventDefault();
        inputsRef.current[idx + 1]?.focus();
        return;
      }

      if (e.key.length === 1) {
        const filtered = filterChars(e.key);
        if (filtered) {
          e.preventDefault();
          const next = [...localValues];
          next[idx] = filtered.slice(-1);
          setLocalValues(next);
          onChange(next.join(''));

          if (idx < slots - 1) {
            requestAnimationFrame(() => {
              inputsRef.current[idx + 1]?.focus();
              inputsRef.current[idx + 1]?.select?.();
            });
          }
        }
      }
    },
    [filterChars, localValues, onChange, slots]
  );

  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>, idx: number) => {
      e.preventDefault();
      const paste = filterChars(e.clipboardData.getData('text'));
      if (!paste) return;

      const chars = paste.slice(0, slots - idx).split('');
      const next = [...localValues];
      for (let i = 0; i < chars.length; i++) {
        next[idx + i] = chars[i];
      }
      setLocalValues(next);
      onChange(next.join(''));
      const lastIdx = Math.min(idx + chars.length - 1, slots - 1);
      inputsRef.current[lastIdx]?.focus();
    },
    [filterChars, localValues, onChange, slots]
  );

  const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  }, []);

  return (
    <div>
      <div className={`flex items-center gap-2 ${className}`} role="group" aria-label="Code input">
        <div className="flex gap-2 sm:gap-3">
          {Array.from({ length: slots }).map((_, idx) => (
            <input
              data-testid={`input-pin-step-${idx}`}
              key={idx}
              ref={(el) => {
                inputsRef.current[idx] = el;
              }}
              type={password && !showPassword ? 'password' : 'text'}
              inputMode={allowedChars === 'numeric' ? 'numeric' : 'text'}
              autoComplete="one-time-code"
              maxLength={1}
              value={localValues[idx]}
              onChange={(e) => handleInputChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              onPaste={(e) => handlePaste(e, idx)}
              onBlur={onBlur}
              onFocus={handleFocus}
              aria-label={`Code input ${idx + 1}`}
              aria-invalid={!!error}
              aria-describedby={error ? `${String(name)}-error` : undefined}
              disabled={disabled}
              readOnly={readOnly}
              className={variants({ disabled, error: !!error })}
            />
          ))}
        </div>

        {password && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword((prev) => !prev)}
            className="p-2 cursor-pointer"
          >
            <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={28} />
          </button>
        )}
      </div>

      {error && (
        <div className="mt-2">
          <span id={`${String(name)}-error`} className="text-sm text-error">
            {(error as FieldError).message}
          </span>
        </div>
      )}
    </div>
  );
}
