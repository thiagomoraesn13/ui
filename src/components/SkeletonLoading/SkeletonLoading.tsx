import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export const SkeletonLoading = ({ className, ...props }: SkeletonProps) => {
  return <div className={twMerge('animate-pulse h-16 bg-gray-300 rounded w-full', className)} {...props} />;
};
