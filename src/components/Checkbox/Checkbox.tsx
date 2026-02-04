import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string | React.ReactNode;
  error?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, label, error, ...props }) => {
  return (
    <div className="flex flex-col min-h-[50px] gap-1">
      <div className="flex gap-3">
        <input type="checkbox" id={id} className="w-5 h-5 mt-0.5 accent-black cursor-pointer" {...props} />
        <label htmlFor={id} className="text-small cursor-pointer">
          {label}
        </label>
      </div>

      {error && <div className="text-error text-small">{error}</div>}
    </div>
  );
};
