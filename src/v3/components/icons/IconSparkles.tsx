import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconSparkles = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-sparkles" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4307_175589)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2997 3.69287L15.7119 5.1324C15.6308 5.33109 15.5438 5.52663 15.4511 5.7188C15.4301 5.76231 15.4088 5.80565 15.3873 5.84882C14.3824 7.86017 12.7508 9.49175 10.7394 10.4967C10.6963 10.5182 10.6529 10.5395 10.6094 10.5605C10.4173 10.6532 10.2217 10.7402 10.023 10.8213L8.5835 11.409L10.023 11.9968C10.2217 12.0779 10.4173 12.1649 10.6094 12.2576C10.6529 12.2786 10.6963 12.2998 10.7394 12.3214C12.7508 13.3263 14.3824 14.9579 15.3873 16.9692C15.4088 17.0124 15.4301 17.0558 15.4511 17.0993C15.5438 17.2914 15.6308 17.487 15.7119 17.6857L16.2997 19.1252L16.8874 17.6857C16.9685 17.487 17.0555 17.2914 17.1482 17.0993C17.1692 17.0558 17.1905 17.0124 17.212 16.9692C18.2169 14.9579 19.8485 13.3263 21.8599 12.3214C21.903 12.2998 21.9464 12.2786 21.9899 12.2576C22.1821 12.1649 22.3776 12.0779 22.5763 11.9968L24.0158 11.409L22.5763 10.8213C22.3776 10.7402 22.1821 10.6532 21.9899 10.5605C21.9464 10.5395 21.903 10.5182 21.8599 10.4967C19.8485 9.49175 18.2169 7.86017 17.212 5.84882C17.1905 5.80565 17.1692 5.76231 17.1482 5.7188C17.0555 5.52663 16.9685 5.33109 16.8874 5.1324L16.2997 3.69287ZM16.2997 7.60987C15.3356 9.14589 14.0365 10.445 12.5005 11.409C14.0365 12.3731 15.3356 13.6722 16.2997 15.2082C17.2637 13.6722 18.5628 12.373 20.0988 11.409C18.5628 10.445 17.2637 9.14589 16.2997 7.60987Z"
            fill={color}
          />
          <path
            d="M4.42973 3.00049C5.01956 4.96689 6.54544 6.51325 8.50381 7.12925L8.58357 7.15433C6.58282 7.73975 5.01658 9.30785 4.42973 11.3082C3.84237 9.30857 2.27605 7.73979 0.275879 7.15433L0.354282 7.12966C2.3129 6.51337 3.83914 4.96701 4.42973 3.00049Z"
            fill={color}
          />
          <path
            d="M5.81415 15.4619C6.32764 16.7196 7.32571 17.7177 8.58338 18.2311C7.32571 18.7446 6.32764 19.7427 5.81415 21.0004C5.30067 19.7427 4.3026 18.7446 3.04492 18.2311C4.3026 17.7177 5.30067 16.7196 5.81415 15.4619Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_4307_175589">
            <rect width="24" height="24" fill="white" transform="translate(0 0.000488281)" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default IconSparkles;
