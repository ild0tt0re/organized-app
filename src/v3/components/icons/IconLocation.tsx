import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconLocation = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-location" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2597_16710"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2597_16710)">
          <path
            d="M12.0019 11.8658C12.4995 11.8658 12.9249 11.6887 13.2781 11.3343C13.6313 10.98 13.8079 10.554 13.8079 10.0565C13.8079 9.55888 13.6307 9.13349 13.2764 8.78029C12.922 8.42709 12.4961 8.25049 11.9985 8.25049C11.5009 8.25049 11.0755 8.42766 10.7223 8.78199C10.3691 9.13632 10.1925 9.56228 10.1925 10.0599C10.1925 10.5574 10.3697 10.9828 10.724 11.336C11.0784 11.6892 11.5043 11.8658 12.0019 11.8658ZM12.0002 19.5139C13.9566 17.7627 15.4537 16.0829 16.4915 14.4745C17.5294 12.8662 18.0483 11.4575 18.0483 10.2485C18.0483 8.42547 17.4691 6.92676 16.3108 5.75239C15.1524 4.57802 13.7156 3.99084 12.0002 3.99084C10.2848 3.99084 8.84796 4.57802 7.68962 5.75239C6.53129 6.92676 5.95212 8.42547 5.95212 10.2485C5.95212 11.4575 6.47103 12.8662 7.50885 14.4745C8.54668 16.0829 10.0438 17.7627 12.0002 19.5139ZM12.0002 21.51C9.48355 19.3293 7.59637 17.2998 6.33867 15.4216C5.08099 13.5434 4.45215 11.8191 4.45215 10.2485C4.45215 7.94087 5.19862 6.07261 6.69157 4.64376C8.18451 3.21491 9.95405 2.50049 12.0002 2.50049C14.0463 2.50049 15.8159 3.21491 17.3088 4.64376C18.8018 6.07261 19.5482 7.94087 19.5482 10.2485C19.5482 11.8191 18.9194 13.5434 17.6617 15.4216C16.404 17.2998 14.5168 19.3293 12.0002 21.51Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconLocation;
