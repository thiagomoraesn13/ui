export const Check = ({ ...props }) => {
  return (
    <svg {...props}>
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckFilledCircle = ({ ...props }) => {
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8447 7.32856C18.3536 7.79506 18.3879 8.58576 17.9214 9.09466L11.0464 16.5947C10.8161 16.846 10.493 16.9923 10.1522 16.9997C9.81129 17.0071 9.4822 16.875 9.24112 16.6339L6.11612 13.5089C5.62796 13.0207 5.62796 12.2293 6.11612 11.7411C6.60427 11.253 7.39573 11.253 7.88388 11.7411L10.0857 13.943L16.0786 7.40535C16.545 6.89645 17.3358 6.86207 17.8447 7.32856Z"
        fill="white"
      />
    </svg>
  );
};
