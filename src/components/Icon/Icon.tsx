import * as Icons from '../../icons';

export type IconType = keyof typeof Icons;

type IconProps = {
  name: IconType;
  size: number;
  color?: string;
  className?: string;
  onClick?: () => void;
};

export const Icon: React.FC<IconProps> = ({ name, size, color, className, ...props }: IconProps) => {
  const IconComponent = Icons[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      className={className}
      {...props}
    />
  );
};
