import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconApplications = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-applications"
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
          id="mask0_2697_32419"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2697_32419)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 23.0005C18.9853 23.0005 21 20.9858 21 18.5005C21 16.0152 18.9853 14.0005 16.5 14.0005C14.0147 14.0005 12 16.0152 12 18.5005C12 20.9858 14.0147 23.0005 16.5 23.0005ZM17.9206 16.975C17.9206 17.7754 17.2718 18.4242 16.4715 18.4242C15.6711 18.4242 15.0223 17.7754 15.0223 16.975C15.0223 16.1747 15.6711 15.5259 16.4715 15.5259C17.2718 15.5259 17.9206 16.1747 17.9206 16.975ZM18.9599 20.2421C18.3886 20.9915 17.4865 21.4751 16.4715 21.4751C15.4564 21.4751 14.5543 20.9915 13.983 20.2421C14.6958 19.7681 15.5514 19.492 16.4715 19.492C17.3916 19.492 18.2472 19.7681 18.9599 20.2421Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6087 15.7504H7.25V14.2505H11.5818C11.1924 14.7007 10.8638 15.2049 10.6087 15.7504ZM10.0189 19.0005H5.3077C5.23077 19.0005 5.16024 18.9684 5.09612 18.9043C5.03202 18.8402 4.99997 18.7697 4.99997 18.6927V3.30819C4.99997 3.23126 5.03202 3.16073 5.09612 3.09661C5.16024 3.03251 5.23077 3.00046 5.3077 3.00046H12.5V7.50044H17V12.0194C17.5194 12.0589 18.0218 12.1595 18.5 12.314V6.75044L13.25 1.50049H5.3077C4.80257 1.50049 4.375 1.67549 4.025 2.02549C3.675 2.37549 3.5 2.80306 3.5 3.30819V18.6927C3.5 19.1979 3.675 19.6254 4.025 19.9754C4.375 20.3254 4.80257 20.5004 5.3077 20.5004H10.3135C10.159 20.0223 10.0585 19.5199 10.0189 19.0005ZM14.75 12.2388V11.2505H7.25V12.7504H13.4662C13.8707 12.5366 14.3005 12.3641 14.75 12.2388Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconApplications;
