import { Icon } from '../Icon/Icon';

interface ErrorMessageProps {
  errors: {
    code: string;
    message: string;
    title?: string;
  }[];
}

export const ErrorMessage = ({ errors }: ErrorMessageProps) => {
  if (!errors?.length) return null;

  return (
    <div className="flex flex-col gap-3 bg-error-lt border border-error rounded-sm px-4 py-3">
      {errors.map((error) => (
        <div className="flex flex-row gap-3" key={error.code}>
          <div className="flex-shrink-0 self-center">
            <Icon name="AlertTriangle" size={25} className="text-error" />
          </div>
          <p className="flex-1 text-body">{error.message}</p>
        </div>
      ))}
    </div>
  );
};
