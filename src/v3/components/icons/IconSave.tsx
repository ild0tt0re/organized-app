import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconSave = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-save"
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
          id="mask0_2557_53784"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2557_53784)">
          <path
            d="M20.5 7.21201V18.6927C20.5 19.1979 20.325 19.6254 19.975 19.9754C19.625 20.3254 19.1974 20.5004 18.6923 20.5004H5.3077C4.80257 20.5004 4.375 20.3254 4.025 19.9754C3.675 19.6254 3.5 19.1979 3.5 18.6927V5.30819C3.5 4.80306 3.675 4.37549 4.025 4.02549C4.375 3.67549 4.80257 3.50049 5.3077 3.50049H16.7884L20.5 7.21201ZM19 7.85046L16.15 5.00046H5.3077C5.21795 5.00046 5.14423 5.02931 5.08653 5.08701C5.02883 5.14471 4.99997 5.21844 4.99997 5.30819V18.6927C4.99997 18.7825 5.02883 18.8562 5.08653 18.9139C5.14423 18.9716 5.21795 19.0005 5.3077 19.0005H18.6923C18.782 19.0005 18.8557 18.9716 18.9134 18.9139C18.9711 18.8562 19 18.7825 19 18.6927V7.85046ZM12 17.2696C12.6923 17.2696 13.282 17.0261 13.7692 16.5389C14.2564 16.0517 14.5 15.462 14.5 14.7697C14.5 14.0774 14.2564 13.4876 13.7692 13.0005C13.282 12.5133 12.6923 12.2697 12 12.2697C11.3077 12.2697 10.7179 12.5133 10.2308 13.0005C9.74359 13.4876 9.5 14.0774 9.5 14.7697C9.5 15.462 9.74359 16.0517 10.2308 16.5389C10.7179 17.0261 11.3077 17.2696 12 17.2696ZM6.38463 9.88506H14.5961V6.38511H6.38463V9.88506Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconSave;
