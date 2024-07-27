import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconDuties = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-duties"
      sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_3258_161974"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3258_161974)">
          <path
            d="M4.3077 21.5004C3.80257 21.5004 3.375 21.3254 3.025 20.9754C2.675 20.6254 2.5 20.1979 2.5 19.6927V9.30819C2.5 8.80306 2.675 8.37549 3.025 8.02549C3.375 7.67549 3.80257 7.50049 4.3077 7.50049H9.5V4.00046C9.5 3.5851 9.64615 3.23126 9.93845 2.93894C10.2308 2.64664 10.5846 2.50049 11 2.50049H13C13.4153 2.50049 13.7692 2.64664 14.0615 2.93894C14.3538 3.23126 14.5 3.5851 14.5 4.00046V7.50049H19.6923C20.1974 7.50049 20.625 7.67549 20.975 8.02549C21.325 8.37549 21.5 8.80306 21.5 9.30819V19.6927C21.5 20.1979 21.325 20.6254 20.975 20.9754C20.625 21.3254 20.1974 21.5004 19.6923 21.5004H4.3077ZM4.3077 20.0005H19.6923C19.782 20.0005 19.8557 19.9716 19.9134 19.9139C19.9711 19.8562 20 19.7825 20 19.6927V9.30819C20 9.21844 19.9711 9.14471 19.9134 9.08701C19.8557 9.02931 19.782 9.00046 19.6923 9.00046H14.5V9.38511C14.5 9.79408 14.3522 10.1463 14.0567 10.4418C13.7612 10.7373 13.4089 10.8851 13 10.8851H11C10.591 10.8851 10.2388 10.7373 9.94328 10.4418C9.64776 10.1463 9.5 9.79408 9.5 9.38511V9.00046H4.3077C4.21795 9.00046 4.14423 9.02931 4.08653 9.08701C4.02883 9.14471 3.99998 9.21844 3.99998 9.30819V19.6927C3.99998 19.7825 4.02883 19.8562 4.08653 19.9139C4.14423 19.9716 4.21795 20.0005 4.3077 20.0005ZM6.15383 17.712H11.8461V17.4158C11.8461 17.1582 11.775 16.9213 11.6327 16.7053C11.4904 16.4892 11.2936 16.321 11.0423 16.2005C10.7154 16.0569 10.3843 15.9492 10.049 15.8774C9.71375 15.8056 9.36408 15.7697 8.99998 15.7697C8.63588 15.7697 8.2862 15.8056 7.95095 15.8774C7.61568 15.9492 7.28459 16.0569 6.95768 16.2005C6.70639 16.321 6.5096 16.4892 6.3673 16.7053C6.22498 16.9213 6.15383 17.1582 6.15383 17.4158V17.712ZM14 16.1927H18V15.0005H14V16.1927ZM8.99998 15.0005C9.37176 15.0005 9.68907 14.8691 9.9519 14.6062C10.2147 14.3434 10.3461 14.0261 10.3461 13.6543C10.3461 13.2825 10.2147 12.9652 9.9519 12.7024C9.68907 12.4396 9.37176 12.3082 8.99998 12.3082C8.62819 12.3082 8.31088 12.4396 8.04805 12.7024C7.78523 12.9652 7.65383 13.2825 7.65383 13.6543C7.65383 14.0261 7.78523 14.3434 8.04805 14.6062C8.31088 14.8691 8.62819 15.0005 8.99998 15.0005ZM14 13.5005H18V12.3082H14V13.5005ZM11 9.38511H13V4.00046H11V9.38511Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconDuties;
