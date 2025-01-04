import React from "react";



const SvgIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  const classNameValue = className ? { className } : {};
  // icons
  const icons: Record<string, React.ReactElement> = {
    bar: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="currentColor"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <path
          d="M4.5 18L14.5 18"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 12L20.5 12"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 6L10.5 6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    telegram: (
      <svg
        width="24"
        height="24"
        viewBox="-2 -2 24 24"
        fill="currentColor"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6.89 11.17L6.903 11.163L7.773 14.033C7.885 14.344 8.039 14.4 8.226 14.374C8.414 14.349 8.513 14.248 8.636 14.13L9.824 12.982L12.374 14.87C12.84 15.127 13.175 14.994 13.291 14.438L14.948 6.616C15.131 5.888 14.811 5.596 14.246 5.828L4.513 9.588C3.849 9.854 3.853 10.226 4.393 10.391L6.89 11.171V11.17Z" />
      </svg>
    ),
    dashboard: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <g clip-path="url(#clip0_295_2293)">
          <path
            d="M4 12.8889H11.1111V4H4V12.8889ZM4 20H11.1111V14.6667H4V20ZM12.8889 20H20V11.1111H12.8889V20ZM12.8889 4V9.33333H20V4H12.8889Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_295_2293">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    home: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <g clip-path="url(#clip0_295_2314)">
          <path d="M19.2727 20.0839C19.2727 20.3269 19.177 20.5599 19.0065 20.7317C18.836 20.9035 18.6047 21 18.3636 21H5.63636C5.39526 21 5.16403 20.9035 4.99354 20.7317C4.82305 20.5599 4.72727 20.3269 4.72727 20.0839V11.8389H2L11.3882 3.23852C11.5556 3.08505 11.7737 3 12 3C12.2263 3 12.4444 3.08505 12.6118 3.23852L22 11.8389H19.2727V20.0839ZM9.27273 10.9228V16.4195H14.7273V10.9228H9.27273ZM11.0909 12.755H12.9091V14.5873H11.0909V12.755Z" />
        </g>
        <defs>
          <clipPath id="clip0_295_2314">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    question: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <g clip-path="url(#clip0_295_2300)">
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM13 13.355C13.8037 13.1128 14.4936 12.59 14.9442 11.8817C15.3947 11.1735 15.5759 10.3271 15.4547 9.49647C15.3336 8.66588 14.9181 7.90644 14.284 7.35646C13.6499 6.80647 12.8394 6.50254 12 6.5C11.1909 6.49994 10.4067 6.78015 9.78079 7.29299C9.15492 7.80583 8.72601 8.51963 8.567 9.313L10.529 9.706C10.5847 9.42743 10.7183 9.1704 10.9144 8.96482C11.1104 8.75923 11.3608 8.61354 11.6364 8.54471C11.912 8.47587 12.2015 8.48671 12.4712 8.57597C12.7409 8.66523 12.9797 8.82924 13.1598 9.04891C13.34 9.26858 13.454 9.53489 13.4887 9.81684C13.5234 10.0988 13.4773 10.3848 13.3558 10.6416C13.2343 10.8984 13.0423 11.1154 12.8023 11.2673C12.5623 11.4193 12.2841 11.5 12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V14H13V13.355Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_295_2300">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    support: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...classNameValue}
      >
        <g clip-path="url(#clip0_295_2307)">
          <path
            d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V8H21V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM21 6H3V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V6ZM7 11V15H11V11H7ZM7 17V19H17V17H7ZM13 12V14H17V12H13Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_295_2307">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  const Icon = icons[iconName];
  return <>{Icon}</>;
};

export default SvgIcon;
