import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconLanguageCourse = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-language-course" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2799_54677"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2799_54677)">
          <path
            d="M4.19227 14.1583H5.14418L5.70958 12.566H8.4442L9.02495 14.1583H9.9711L7.6038 7.86219H6.54995L4.19227 14.1583ZM6.01533 11.7372L7.05188 8.86987H7.10187L8.13842 11.7372H6.01533ZM13.9423 9.7468V8.43142C14.4858 8.17887 15.0547 7.98945 15.649 7.86317C16.2432 7.73689 16.8602 7.67375 17.4999 7.67375C17.9012 7.67375 18.291 7.70227 18.6692 7.75932C19.0474 7.81637 19.4269 7.89169 19.8076 7.98527V9.2391C19.4333 9.10833 19.0612 9.01345 18.6913 8.95447C18.3214 8.8955 17.9243 8.86602 17.4999 8.86602C16.8602 8.86602 16.2406 8.94198 15.6413 9.09389C15.0419 9.24583 14.4756 9.46346 13.9423 9.7468ZM13.9423 15.2275V13.893C14.473 13.6404 15.0403 13.451 15.6442 13.3247C16.248 13.1984 16.8666 13.1353 17.4999 13.1353C17.9012 13.1353 18.291 13.1638 18.6692 13.2208C19.0474 13.2779 19.4269 13.3532 19.8076 13.4468V14.7006C19.4333 14.5699 19.0612 14.475 18.6913 14.416C18.3214 14.357 17.9243 14.3275 17.4999 14.3275C16.8602 14.3275 16.2406 14.4042 15.6413 14.5574C15.0419 14.7106 14.4756 14.934 13.9423 15.2275ZM13.9423 12.4968V11.1622C14.4858 10.9096 15.0547 10.7202 15.649 10.5939C16.2432 10.4676 16.8602 10.4045 17.4999 10.4045C17.9012 10.4045 18.291 10.433 18.6692 10.4901C19.0474 10.5471 19.4269 10.6224 19.8076 10.716V11.9699C19.4333 11.8391 19.0612 11.7442 18.6913 11.6852C18.3214 11.6263 17.9243 11.5968 17.4999 11.5968C16.8602 11.5968 16.2406 11.676 15.6413 11.8343C15.0419 11.9926 14.4756 12.2135 13.9423 12.4968ZM6.49995 16.0199C7.32817 16.0199 8.13394 16.1138 8.91727 16.3016C9.70061 16.4894 10.4782 16.784 11.25 17.1853V7.3545C10.5474 6.89681 9.78715 6.55354 8.9692 6.32469C8.15125 6.09584 7.32817 5.98142 6.49995 5.98142C5.89995 5.98142 5.33938 6.02853 4.81823 6.12274C4.29708 6.21698 3.7615 6.37114 3.2115 6.58524C3.13457 6.61089 3.08008 6.64776 3.04803 6.69585C3.01597 6.74393 2.99995 6.79681 2.99995 6.8545V16.3122C2.99995 16.4019 3.032 16.4676 3.0961 16.5093C3.16022 16.551 3.23074 16.5558 3.30768 16.5237C3.78203 16.3622 4.28266 16.2378 4.80957 16.1506C5.33649 16.0635 5.89995 16.0199 6.49995 16.0199ZM12.7499 17.1853C13.5217 16.784 14.2993 16.4894 15.0826 16.3016C15.866 16.1138 16.6717 16.0199 17.4999 16.0199C18.0999 16.0199 18.6634 16.0635 19.1903 16.1506C19.7172 16.2378 20.2179 16.3622 20.6922 16.5237C20.7692 16.5558 20.8397 16.551 20.9038 16.5093C20.9679 16.4676 21 16.4019 21 16.3122V6.8545C21 6.79681 20.9839 6.74553 20.9519 6.70065C20.9198 6.65576 20.8653 6.61729 20.7884 6.58524C20.2384 6.37114 19.7028 6.21698 19.1817 6.12274C18.6605 6.02853 18.0999 5.98142 17.4999 5.98142C16.6717 5.98142 15.8486 6.09584 15.0307 6.32469C14.2127 6.55354 13.4525 6.89681 12.7499 7.3545V17.1853ZM11.9999 19.3852C11.1935 18.7904 10.3237 18.3307 9.39032 18.0064C8.45699 17.682 7.49353 17.5198 6.49995 17.5198C5.8897 17.5198 5.29035 17.5875 4.7019 17.7227C4.11343 17.858 3.54613 18.057 2.99998 18.3198C2.64358 18.4839 2.30447 18.458 1.98267 18.2419C1.66089 18.0259 1.5 17.7198 1.5 17.3237V6.46605C1.5 6.25066 1.55544 6.04842 1.66633 5.85932C1.77723 5.67022 1.93717 5.534 2.14615 5.45067C2.82307 5.12119 3.52851 4.87728 4.26248 4.71895C4.99644 4.56061 5.74227 4.48145 6.49995 4.48145C7.47303 4.48145 8.42368 4.61446 9.35188 4.88049C10.2801 5.14651 11.1628 5.53914 11.9999 6.05837C12.8371 5.53914 13.7198 5.14651 14.648 4.88049C15.5762 4.61446 16.5269 4.48145 17.4999 4.48145C18.2576 4.48145 19.0035 4.56061 19.7374 4.71895C20.4714 4.87728 21.1768 5.12119 21.8538 5.45067C22.0627 5.534 22.2227 5.67022 22.3336 5.85932C22.4445 6.04842 22.4999 6.25066 22.4999 6.46605V17.3237C22.4999 17.7198 22.3326 18.0227 21.998 18.2323C21.6634 18.4419 21.3115 18.4647 20.9422 18.3006C20.4025 18.0442 19.8432 17.85 19.2643 17.7179C18.6855 17.5859 18.0974 17.5198 17.4999 17.5198C16.5064 17.5198 15.5429 17.682 14.6096 18.0064C13.6762 18.3307 12.8064 18.7904 11.9999 19.3852Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconLanguageCourse;
