import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconCheckmarkCircleAlt = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-checkmark-circle-alt"
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
          id="mask0_11572_297157"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_11572_297157)">
          <path
            d="M10.5808 16.2542L17.3038 9.53124L16.25 8.47749L10.5808 14.1467L7.73075 11.2967L6.677 12.3505L10.5808 16.2542ZM12.0017 21.5005C10.6877 21.5005 9.45267 21.2512 8.2965 20.7525C7.14033 20.2538 6.13467 19.5771 5.2795 18.7222C4.42433 17.8674 3.74725 16.8622 3.24825 15.7065C2.74942 14.5508 2.5 13.3161 2.5 12.0022C2.5 10.6882 2.74933 9.45315 3.248 8.29699C3.74667 7.14082 4.42342 6.13515 5.27825 5.27999C6.13308 4.42482 7.13833 3.74774 8.294 3.24874C9.44967 2.7499 10.6844 2.50049 11.9983 2.50049C13.3123 2.50049 14.5473 2.74982 15.7035 3.24849C16.8597 3.74715 17.8653 4.42391 18.7205 5.27874C19.5757 6.13357 20.2528 7.13882 20.7518 8.29449C21.2506 9.45016 21.5 10.6849 21.5 11.9987C21.5 13.3127 21.2507 14.5478 20.752 15.704C20.2533 16.8602 19.5766 17.8658 18.7218 18.721C17.8669 19.5762 16.8617 20.2532 15.706 20.7522C14.5503 21.2511 13.3156 21.5005 12.0017 21.5005ZM12 20.0005C14.2333 20.0005 16.125 19.2255 17.675 17.6755C19.225 16.1255 20 14.2338 20 12.0005C20 9.76715 19.225 7.87549 17.675 6.32549C16.125 4.77549 14.2333 4.00049 12 4.00049C9.76667 4.00049 7.875 4.77549 6.325 6.32549C4.775 7.87549 4 9.76715 4 12.0005C4 14.2338 4.775 16.1255 6.325 17.6755C7.875 19.2255 9.76667 20.0005 12 20.0005Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconCheckmarkCircleAlt;
