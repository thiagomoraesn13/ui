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
export declare const GenericButton: React.FC<ButtonProps>;
