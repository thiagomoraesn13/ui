import { tv } from 'tailwind-variants';

type LoadingDotsProps = {
  type?: 'primary' | 'secondary';
};

const dot = tv({
  base: 'w-2 h-2 rounded-full mr-1',
  variants: {
    type: {
      primary: 'bg-base-dk',
      secondary: 'bg-neutral-dk-2',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

export const LoadingDots = ({ type = 'primary' }: LoadingDotsProps) => {
  return (
    <div className="absolute left-[calc(50%-25px)] top-[calc(50%-4px)] flex">
      <span className={`${dot({ type })} animate-[loadingState1_1s_infinite]`} />
      <span className={`${dot({ type })} animate-[loadingState2_1s_infinite]`} />
      <span className={`${dot({ type })} animate-[loadingState3_1s_infinite] mr-0`} />
    </div>
  );
};
