import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconAssigned = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-assigned"
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
          id="mask0_2457_21223"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2457_21223)">
          <path
            d="M10.5807 15.7235L17.3038 9.00046L16.25 7.94664L10.5807 13.6159L7.73075 10.7659L6.67693 11.8197L10.5807 15.7235ZM5.3077 20.5004C4.80898 20.5004 4.38302 20.3238 4.02982 19.9706C3.67661 19.6174 3.5 19.1915 3.5 18.6927V5.30819C3.5 4.80947 3.67661 4.38351 4.02982 4.03031C4.38302 3.6771 4.80898 3.50049 5.3077 3.50049H9.7577C9.82052 2.94537 10.0628 2.47326 10.4846 2.08416C10.9064 1.69505 11.4115 1.50049 12 1.50049C12.5948 1.50049 13.1032 1.69505 13.525 2.08416C13.9468 2.47326 14.1859 2.94537 14.2423 3.50049H18.6923C19.191 3.50049 19.6169 3.6771 19.9701 4.03031C20.3233 4.38351 20.5 4.80947 20.5 5.30819V18.6927C20.5 19.1915 20.3233 19.6174 19.9701 19.9706C19.6169 20.3238 19.191 20.5004 18.6923 20.5004H5.3077ZM5.3077 19.0005H18.6923C18.7692 19.0005 18.8397 18.9684 18.9038 18.9043C18.9679 18.8402 19 18.7697 19 18.6927V5.30819C19 5.23126 18.9679 5.16073 18.9038 5.09661C18.8397 5.03251 18.7692 5.00046 18.6923 5.00046H5.3077C5.23077 5.00046 5.16024 5.03251 5.09612 5.09661C5.03202 5.16073 4.99997 5.23126 4.99997 5.30819V18.6927C4.99997 18.7697 5.03202 18.8402 5.09612 18.9043C5.16024 18.9684 5.23077 19.0005 5.3077 19.0005ZM12 4.34661C12.2166 4.34661 12.3958 4.27578 12.5375 4.13411C12.6791 3.99245 12.75 3.81328 12.75 3.59661C12.75 3.37995 12.6791 3.20078 12.5375 3.05911C12.3958 2.91745 12.2166 2.84661 12 2.84661C11.7833 2.84661 11.6041 2.91745 11.4625 3.05911C11.3208 3.20078 11.25 3.37995 11.25 3.59661C11.25 3.81328 11.3208 3.99245 11.4625 4.13411C11.6041 4.27578 11.7833 4.34661 12 4.34661Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconAssigned;
