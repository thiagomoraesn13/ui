export const XClose = ({ ...props }) => {
  return (
    <svg {...props}>
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const XFilledCircle = ({ ...props }) => {
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.36614 7.36614C7.8543 6.87798 8.64575 6.87798 9.13391 7.36614L12 10.2323L14.8661 7.36615C15.3543 6.878 16.1457 6.878 16.6339 7.36615C17.122 7.85431 17.122 8.64576 16.6339 9.13392L13.7678 12L16.6339 14.8661C17.122 15.3543 17.122 16.1457 16.6339 16.6339C16.1457 17.122 15.3543 17.122 14.8661 16.6339L12 13.7678L9.13391 16.6339C8.64575 17.122 7.85429 17.122 7.36614 16.6339C6.87798 16.1457 6.87798 15.3543 7.36614 14.8661L10.2323 12L7.36614 9.13391C6.87798 8.64575 6.87798 7.85429 7.36614 7.36614Z"
        fill="white"
      />
    </svg>
  );
};
