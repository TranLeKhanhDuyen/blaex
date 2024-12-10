import React from 'react'

import { Svg } from 'theme/base'
import { SvgProps } from 'theme/types'

const GithubIcon = ({
  size = 24,
  variant = 'Outline',
  ...props
}: { size?: number; variant?: 'Outline' | 'Bold' } & SvgProps) => {
  return (
    <Svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {variant === 'Bold' ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.25 9.75001V10.5C20.2484 11.769 19.7877 12.9946 18.953 13.9504C18.1183 14.9063 16.966 15.5278 15.7087 15.7003C16.2219 16.357 16.5005 17.1666 16.5 18V21.75C16.5 21.9489 16.421 22.1397 16.2803 22.2803C16.1397 22.421 15.9489 22.5 15.75 22.5H9.75C9.55109 22.5 9.36032 22.421 9.21967 22.2803C9.07902 22.1397 9 21.9489 9 21.75V20.25H6.75C5.75544 20.25 4.80161 19.8549 4.09835 19.1517C3.39509 18.4484 3 17.4946 3 16.5C3 15.9033 2.76295 15.331 2.34099 14.909C1.91903 14.4871 1.34674 14.25 0.75 14.25C0.551088 14.25 0.360322 14.171 0.21967 14.0303C0.0790176 13.8897 0 13.6989 0 13.5C0 13.3011 0.0790176 13.1103 0.21967 12.9697C0.360322 12.829 0.551088 12.75 0.75 12.75C1.24246 12.75 1.73009 12.847 2.18506 13.0355C2.64003 13.2239 3.05343 13.5001 3.40165 13.8484C3.74987 14.1966 4.02609 14.61 4.21455 15.0649C4.403 15.5199 4.5 16.0076 4.5 16.5C4.5 17.0967 4.73705 17.669 5.15901 18.091C5.58097 18.513 6.15326 18.75 6.75 18.75H9V18C8.99952 17.1666 9.27807 16.357 9.79125 15.7003C8.53402 15.5278 7.38166 14.9063 6.54696 13.9504C5.71225 12.9946 5.25158 11.769 5.25 10.5V9.75001C5.25934 8.81793 5.50756 7.90381 5.97094 7.09501C5.74169 6.35551 5.66816 5.57653 5.75497 4.80719C5.84177 4.03785 6.08704 3.29484 6.47531 2.62501C6.54115 2.51097 6.63586 2.41628 6.7499 2.35045C6.86395 2.28462 6.99332 2.24998 7.125 2.25001C7.99857 2.24818 8.86047 2.4507 9.64182 2.84137C10.4232 3.23205 11.1023 3.80006 11.625 4.50001H13.875C14.3977 3.80006 15.0768 3.23205 15.8582 2.84137C16.6395 2.4507 17.5014 2.24818 18.375 2.25001C18.5067 2.24998 18.636 2.28462 18.7501 2.35045C18.8641 2.41628 18.9588 2.51097 19.0247 2.62501C19.413 3.29482 19.6582 4.03787 19.7449 4.80725C19.8315 5.57662 19.7577 6.3556 19.5281 7.09501C19.9924 7.90349 20.241 8.81776 20.25 9.75001Z"
          fill="currentColor"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.25 9.75001V10.5C20.2484 11.769 19.7877 12.9946 18.953 13.9504C18.1183 14.9063 16.966 15.5278 15.7087 15.7003C16.2219 16.357 16.5005 17.1666 16.5 18V21.75C16.5 21.9489 16.421 22.1397 16.2803 22.2803C16.1397 22.421 15.9489 22.5 15.75 22.5H9.75C9.55109 22.5 9.36032 22.421 9.21967 22.2803C9.07902 22.1397 9 21.9489 9 21.75V20.25H6.75C5.75544 20.25 4.80161 19.8549 4.09835 19.1517C3.39509 18.4484 3 17.4946 3 16.5C3 15.9033 2.76295 15.331 2.34099 14.909C1.91903 14.4871 1.34674 14.25 0.75 14.25C0.551088 14.25 0.360322 14.171 0.21967 14.0303C0.0790176 13.8897 0 13.6989 0 13.5C0 13.3011 0.0790176 13.1103 0.21967 12.9697C0.360322 12.829 0.551088 12.75 0.75 12.75C1.24246 12.75 1.73009 12.847 2.18506 13.0355C2.64003 13.2239 3.05343 13.5001 3.40165 13.8484C3.74987 14.1966 4.02609 14.61 4.21455 15.0649C4.403 15.5199 4.5 16.0076 4.5 16.5C4.5 17.0967 4.73705 17.669 5.15901 18.091C5.58097 18.513 6.15326 18.75 6.75 18.75H9V18C8.99952 17.1666 9.27807 16.357 9.79125 15.7003C8.53402 15.5278 7.38166 14.9063 6.54696 13.9504C5.71225 12.9946 5.25158 11.769 5.25 10.5V9.75001C5.25934 8.81793 5.50756 7.90381 5.97094 7.09501C5.74169 6.35551 5.66816 5.57653 5.75497 4.80719C5.84177 4.03785 6.08704 3.29484 6.47531 2.62501C6.54115 2.51097 6.63586 2.41628 6.7499 2.35045C6.86395 2.28462 6.99332 2.24998 7.125 2.25001C7.99857 2.24818 8.86047 2.4507 9.64182 2.84137C10.4232 3.23205 11.1023 3.80006 11.625 4.50001H13.875C14.3977 3.80006 15.0768 3.23205 15.8582 2.84137C16.6395 2.4507 17.5014 2.24818 18.375 2.25001C18.5067 2.24998 18.636 2.28462 18.7501 2.35045C18.8641 2.41628 18.9588 2.51097 19.0247 2.62501C19.413 3.29482 19.6582 4.03787 19.7449 4.80725C19.8315 5.57662 19.7577 6.3556 19.5281 7.09501C19.9924 7.90349 20.241 8.81776 20.25 9.75001Z"
          fill="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      )}
    </Svg>
  )
}

export default GithubIcon
