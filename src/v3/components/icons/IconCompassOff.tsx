import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconCompassOff = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-compass-off" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4944_2979467"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4944_2979467)">
          <path
            d="M14.6691 11.8389L12.1614 9.33124L17.1729 6.82741L14.6691 11.8389ZM19.8037 21.9427L17.5479 19.687C16.7505 20.2652 15.8845 20.712 14.9499 21.0273C14.0153 21.3427 13.0319 21.5004 11.9999 21.5004C10.6857 21.5004 9.45071 21.2511 8.29489 20.7523C7.13906 20.2536 6.13364 19.5767 5.27864 18.7217C4.42364 17.8667 3.74677 16.8613 3.24802 15.7054C2.74927 14.5496 2.49989 13.3146 2.49989 12.0005C2.49989 10.9684 2.65759 9.98508 2.97299 9.05046C3.28838 8.11585 3.73517 7.24982 4.31337 6.45239L2.05762 4.19661L3.12682 3.12741L20.8729 20.8735L19.8037 21.9427ZM19.9845 17.1543L18.8902 16.0601C19.2569 15.4396 19.5335 14.7902 19.7201 14.112C19.9066 13.4338 19.9999 12.7299 19.9999 12.0005C19.9999 9.7838 19.2207 7.8963 17.6624 6.33796C16.104 4.77963 14.2165 4.00046 11.9999 4.00046C11.2704 4.00046 10.5665 4.09373 9.88832 4.28026C9.21012 4.46681 8.56076 4.74342 7.94024 5.11009L6.84604 4.01586C7.60971 3.52605 8.42402 3.15103 9.28897 2.89081C10.1539 2.6306 11.0576 2.50049 11.9999 2.50049C13.314 2.50049 14.549 2.74986 15.7048 3.24861C16.8607 3.74736 17.8661 4.42424 18.7211 5.27924C19.5761 6.13424 20.253 7.13966 20.7517 8.29549C21.2505 9.45131 21.4998 10.6863 21.4998 12.0005C21.4998 12.9428 21.3697 13.8464 21.1095 14.7114C20.8493 15.5763 20.4743 16.3906 19.9845 17.1543ZM11.9999 20.0005C12.8191 20.0005 13.6031 19.8799 14.3518 19.6389C15.1005 19.3979 15.8044 19.0524 16.4634 18.6024L12.2806 14.4197L6.82682 17.1735L9.54989 11.6889L5.39797 7.53696C4.94797 8.19595 4.60245 8.8998 4.36142 9.64851C4.12038 10.3972 3.99987 11.1812 3.99987 12.0005C3.99987 14.2171 4.77903 16.1046 6.33737 17.663C7.8957 19.2213 9.7832 20.0005 11.9999 20.0005Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconCompassOff;
