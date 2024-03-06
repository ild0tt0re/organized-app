import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconVisibilityOff = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-visibility_off" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2568_23401"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2568_23401)">
          <path
            d="M15.7731 12.9735L14.6501 11.8504C14.8001 11.0222 14.5639 10.2776 13.9414 9.61676C13.319 8.95586 12.5552 8.70041 11.6501 8.85041L10.527 7.72736C10.7527 7.62608 10.9841 7.55012 11.2212 7.49948C11.4584 7.44883 11.718 7.42351 12.0001 7.42351C13.1347 7.42351 14.0978 7.81934 14.8895 8.61101C15.6811 9.40268 16.077 10.3658 16.077 11.5004C16.077 11.7825 16.0517 12.0453 16.001 12.2889C15.9504 12.5324 15.8744 12.7606 15.7731 12.9735ZM18.9539 16.085L17.8501 15.0504C18.4834 14.5671 19.0459 14.0379 19.5376 13.4629C20.0292 12.8879 20.4501 12.2337 20.8001 11.5004C19.9667 9.81708 18.7709 8.47958 17.2126 7.48791C15.6542 6.49624 13.9167 6.00041 12.0001 6.00041C11.5167 6.00041 11.0417 6.03374 10.5751 6.10041C10.1084 6.16708 9.65007 6.26708 9.20007 6.40041L8.03472 5.23506C8.66677 4.98378 9.31228 4.79852 9.97125 4.67928C10.6302 4.56005 11.3065 4.50043 12.0001 4.50043C14.3437 4.50043 16.4571 5.14658 18.3404 6.43888C20.2238 7.7312 21.5975 9.41838 22.4616 11.5004C22.0911 12.394 21.6125 13.228 21.026 14.0023C20.4395 14.7767 19.7488 15.4709 18.9539 16.085ZM19.7616 21.8696L15.7155 17.8542C15.2027 18.044 14.6344 18.1991 14.0107 18.3196C13.3869 18.4401 12.7167 18.5004 12.0001 18.5004C9.65009 18.5004 7.53664 17.8542 5.65972 16.5619C3.78281 15.2696 2.40909 13.5824 1.53857 11.5004C1.90781 10.6171 2.38473 9.79303 2.96935 9.02828C3.55397 8.26355 4.19756 7.60042 4.90012 7.03888L2.13087 4.23888L3.18472 3.18506L20.8154 20.8158L19.7616 21.8696ZM5.95395 8.09268C5.42575 8.5132 4.91197 9.01866 4.4126 9.60906C3.91323 10.1994 3.50906 10.8299 3.20007 11.5004C4.03341 13.1837 5.22924 14.5212 6.78757 15.5129C8.34591 16.5046 10.0834 17.0004 12.0001 17.0004C12.4552 17.0004 12.9084 16.9619 13.3597 16.885C13.811 16.8081 14.1937 16.7286 14.5078 16.6466L13.2424 15.3504C13.0719 15.4196 12.8744 15.4747 12.6501 15.5158C12.4257 15.5568 12.2091 15.5773 12.0001 15.5773C10.8655 15.5773 9.90234 15.1815 9.11067 14.3898C8.31901 13.5981 7.92317 12.635 7.92317 11.5004C7.92317 11.2978 7.94369 11.086 7.98472 10.8648C8.02576 10.6437 8.08088 10.4414 8.1501 10.2581L5.95395 8.09268Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconVisibilityOff;
