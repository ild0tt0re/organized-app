import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconShoppingCart = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-shopping-cart"
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
          id="mask0_4944_2980558"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4944_2980558)">
          <path
            d="M7.15382 21.5581C6.66794 21.5581 6.25481 21.3879 5.91442 21.0476C5.57404 20.7072 5.40385 20.294 5.40385 19.8081C5.40385 19.3223 5.57404 18.9091 5.91442 18.5687C6.25481 18.2284 6.66794 18.0582 7.15382 18.0582C7.63972 18.0582 8.05287 18.2284 8.39325 18.5687C8.73363 18.9091 8.90382 19.3223 8.90382 19.8081C8.90382 20.294 8.73363 20.7072 8.39325 21.0476C8.05287 21.3879 7.63972 21.5581 7.15382 21.5581ZM16.8461 21.5581C16.3602 21.5581 15.9471 21.3879 15.6067 21.0476C15.2663 20.7072 15.0961 20.294 15.0961 19.8081C15.0961 19.3223 15.2663 18.9091 15.6067 18.5687C15.9471 18.2284 16.3602 18.0582 16.8461 18.0582C17.332 18.0582 17.7451 18.2284 18.0855 18.5687C18.4259 18.9091 18.5961 19.3223 18.5961 19.8081C18.5961 20.294 18.4259 20.7072 18.0855 21.0476C17.7451 21.3879 17.332 21.5581 16.8461 21.5581ZM6.01535 5.75046L8.54997 11.0582H15.3673C15.425 11.0582 15.4763 11.0437 15.5211 11.0149C15.566 10.986 15.6045 10.946 15.6365 10.8947L18.3192 6.01969C18.3577 5.94917 18.3609 5.88667 18.3288 5.83219C18.2968 5.77769 18.2423 5.75044 18.1653 5.75044L6.01535 5.75046ZM5.29613 4.25051H19.1807C19.5897 4.25051 19.899 4.42455 20.1086 4.77261C20.3182 5.1207 20.3281 5.47615 20.1384 5.83896L16.9346 11.6427C16.7705 11.9312 16.5535 12.1559 16.2836 12.3168C16.0137 12.4777 15.7179 12.5581 15.3961 12.5581H8.09998L6.94227 14.6735C6.89099 14.7504 6.88939 14.8338 6.93747 14.9235C6.98556 15.0133 7.05767 15.0582 7.15382 15.0582H18.5961V16.5581H7.15382C6.48717 16.5581 5.98622 16.2706 5.65095 15.6956C5.3157 15.1206 5.30384 14.5466 5.61538 13.9735L7.04233 11.4081L3.40385 3.75044H1.5V2.25049H4.34612L5.29613 4.25051Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconShoppingCart;
