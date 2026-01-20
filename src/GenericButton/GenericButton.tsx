import { tv } from "tailwind-variants";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "link";
  width?: "fit-content" | "full";
  size?: "default" | "support" | "desktop" | "none";
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
};

const variants = tv({
  base: "relative font-family font-bold rounded-full active:opacity-80 cursor-pointer",
  variants: {
    variant: {
      primary: "bg-brand text-base-dk",
      secondary: "bg-base-lt text-brand border-2",
      link: "text-brand",
    },
    width: {
      "fit-content": "w-fit-content",
      full: "w-full",
    },
    size: {
      default: "p-3 leading-6",
      support: "p-2 text-xs",
      desktop: "p-4 text-lg",
      none: "p-0 leading-none", // 👈
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "",
    },
    loading: {
      true: "bg-neutral-lt-2 cursor-not-allowed border-none h-[48px]",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      disabled: true,
      class: "bg-neutral-lt-2 text-neutral-dk-2",
    },
    {
      variant: "secondary",
      disabled: true,
      class: "border-1 bg-base-lt text-neutral-dk-2",
    },
    {
      variant: "link",
      disabled: true,
      class: "text-neutral-dk-2",
    },
    {
      variant: "link",
      loading: true,
      class: "bg-transparent border-none text-neutral-dk-2",
    },
  ],
  defaultVariants: {
    variant: "primary",
    width: "fit-content",
    size: "default",
  },
});

export const GenericButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    variant,
    width,
    size,
    disabled,
    loading,
    className,
    ...rest
  } = props;

  return (
    <button
      className={`${variants({ variant, width, size, disabled, loading })} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
