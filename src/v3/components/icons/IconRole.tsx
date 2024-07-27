import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconRole = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-role"
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
          id="mask0_2693_34499"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2693_34499)">
          <path
            d="M12 17.6352C10.9641 17.6352 9.96663 17.8131 9.00765 18.1689C8.04867 18.5246 7.16468 19.0647 6.3557 19.7891V19.9429C6.38133 19.9621 6.40698 19.9766 6.43263 19.9862C6.45828 19.9958 6.48713 20.0006 6.51918 20.0006H17.4616C17.4936 20.0006 17.5208 19.9958 17.5433 19.9862C17.5657 19.9766 17.5898 19.9621 17.6154 19.9429V19.7891C16.8193 19.0647 15.9449 18.5246 14.9923 18.1689C14.0397 17.8131 13.0423 17.6352 12 17.6352ZM4.99997 18.9852C5.89998 18.1019 6.94581 17.4061 8.13748 16.8977C9.32914 16.3894 10.6166 16.1352 12 16.1352C13.3833 16.1352 14.6708 16.3894 15.8625 16.8977C17.0541 17.4061 18.1 18.1019 19 18.9852V6.30833C19 6.2314 18.9679 6.16087 18.9038 6.09675C18.8397 6.03265 18.7692 6.0006 18.6923 6.0006H5.3077C5.23077 6.0006 5.16024 6.03265 5.09612 6.09675C5.03202 6.16087 4.99997 6.2314 4.99997 6.30833V18.9852ZM12 13.7506C11.0974 13.7506 10.3301 13.4346 9.69808 12.8025C9.06603 12.1705 8.75 11.4032 8.75 10.5006C8.75 9.59804 9.06603 8.83074 9.69808 8.1987C10.3301 7.56665 11.0974 7.25063 12 7.25063C12.9025 7.25063 13.6698 7.56665 14.3019 8.1987C14.9339 8.83074 15.25 9.59804 15.25 10.5006C15.25 11.4032 14.9339 12.1705 14.3019 12.8025C13.6698 13.4346 12.9025 13.7506 12 13.7506ZM12 12.2506C12.4807 12.2506 12.8926 12.0792 13.2356 11.7362C13.5785 11.3932 13.75 10.9814 13.75 10.5006C13.75 10.0198 13.5785 9.60797 13.2356 9.265C12.8926 8.92205 12.4807 8.75058 12 8.75058C11.5192 8.75058 11.1073 8.92205 10.7644 9.265C10.4214 9.60797 10.25 10.0198 10.25 10.5006C10.25 10.9814 10.4214 11.3932 10.7644 11.7362C11.1073 12.0792 11.5192 12.2506 12 12.2506ZM5.3077 21.5006C4.80257 21.5006 4.375 21.3256 4.025 20.9756C3.675 20.6256 3.5 20.198 3.5 19.6929V6.30833C3.5 5.8032 3.675 5.37563 4.025 5.02563C4.375 4.67563 4.80257 4.50063 5.3077 4.50063H6.69233V2.38525H8.23075V4.50063H15.8077V2.38525H17.3076V4.50063H18.6923C19.1974 4.50063 19.625 4.67563 19.975 5.02563C20.325 5.37563 20.5 5.8032 20.5 6.30833V19.6929C20.5 20.198 20.325 20.6256 19.975 20.9756C19.625 21.3256 19.1974 21.5006 18.6923 21.5006H5.3077Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconRole;
