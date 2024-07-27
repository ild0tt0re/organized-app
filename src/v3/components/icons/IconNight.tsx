import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconNight = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-night"
      sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
      >
        <g opacity="0.4">
          <path
            d="M3.63323 1.49939C3.827 1.4106 4.01945 1.33892 4.21057 1.28432C4.4017 1.22973 4.59755 1.18945 4.79813 1.16349C4.14888 1.76134 3.73678 2.48499 3.56182 3.33445C3.38685 4.18391 3.4811 5.00527 3.84454 5.79854C4.20799 6.59181 4.7685 7.19955 5.52609 7.62175C6.28367 8.04395 7.10084 8.2044 7.97758 8.1031C7.82694 8.23806 7.66854 8.36009 7.50239 8.46918C7.33624 8.57827 7.15627 8.67721 6.9625 8.76599C6.45989 8.99627 5.94386 9.11729 5.41442 9.12908C4.88497 9.14086 4.38184 9.05816 3.90503 8.88098C3.42821 8.7038 2.99317 8.43788 2.59989 8.08322C2.20661 7.72856 1.89483 7.29993 1.66456 6.79732C1.43428 6.29471 1.31325 5.77869 1.30147 5.24924C1.28969 4.7198 1.37239 4.21667 1.54957 3.73985C1.72675 3.26304 1.99267 2.82799 2.34733 2.43471C2.70199 2.04144 3.13062 1.72966 3.63323 1.49939Z"
            fill={color}
          />
          <ellipse cx="1.5" cy="12.5" rx="0.5" ry="0.5" fill={color} />
          <ellipse cx="11.5" cy="6.5" rx="0.5" ry="0.5" fill={color} />
          <ellipse cx="17.5" cy="18.5" rx="0.5" ry="0.5" fill={color} />
          <ellipse cx="16.5" cy="0.5" rx="0.5" ry="0.5" fill={color} />
          <path
            d="M9.05992 13.9197C9.11356 13.7132 9.38453 13.6644 9.50677 13.8393L9.97731 14.5123C10.0271 14.5835 10.1104 14.6238 10.1972 14.6186L11.0169 14.5694C11.2298 14.5566 11.3599 14.7992 11.2314 14.9695L10.7368 15.625C10.6844 15.6944 10.6718 15.786 10.7036 15.8669L11.0037 16.6313C11.0817 16.8299 10.8911 17.0286 10.6895 16.959L9.91321 16.6911C9.83102 16.6628 9.74 16.6791 9.67285 16.7344L9.03862 17.256C8.87386 17.3915 8.62598 17.2717 8.62986 17.0584L8.64476 16.2373C8.64634 16.1504 8.60264 16.0689 8.52936 16.0221L7.83728 15.5801C7.65748 15.4653 7.69486 15.1925 7.89891 15.1303L8.68438 14.8907C8.76755 14.8654 8.83156 14.7986 8.85342 14.7145L9.05992 13.9197Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconNight;
