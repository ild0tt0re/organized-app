import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconRotateRight = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-rotate-right" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2473_21941"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2473_21941)">
          <path
            d="M13.0498 21.5003V19.9503C13.6164 19.867 14.1706 19.717 14.7123 19.5003C15.2539 19.2836 15.7664 19.0003 16.2498 18.6503L17.3036 19.7349C16.6677 20.2169 15.9937 20.6076 15.2815 20.907C14.5693 21.2063 13.8254 21.4041 13.0498 21.5003ZM11.0498 21.5003C8.89723 21.2195 7.1091 20.2797 5.68538 18.681C4.26166 17.0823 3.5498 15.2054 3.5498 13.0503C3.5498 11.8708 3.77289 10.7657 4.21905 9.73491C4.6652 8.70414 5.2716 7.80543 6.03825 7.03876C6.80492 6.27211 7.70364 5.66571 8.73441 5.21956C9.76517 4.77339 10.8703 4.55031 12.0498 4.55031H12.5075L10.6883 2.73106L11.7421 1.64648L15.3959 5.30031L11.7421 8.95413L10.6883 7.90031L12.5383 6.05028H12.0498C10.0998 6.05028 8.44561 6.72945 7.08728 8.08778C5.72895 9.44612 5.04978 11.1003 5.04978 13.0503C5.04978 14.7836 5.61645 16.3045 6.74978 17.6128C7.88311 18.9211 9.31645 19.7067 11.0498 19.9695V21.5003ZM18.7344 18.3041L17.6498 17.2503C17.9998 16.767 18.2847 16.2561 18.5046 15.7176C18.7245 15.1791 18.8793 14.6234 18.969 14.0503H20.4998C20.4164 14.8195 20.2235 15.5602 19.9209 16.2724C19.6183 16.9846 19.2228 17.6618 18.7344 18.3041ZM20.4998 12.0503H18.969C18.8793 11.4772 18.7245 10.9214 18.5046 10.383C18.2847 9.84452 17.9998 9.33362 17.6498 8.85028L18.7344 7.79646C19.2164 8.38876 19.6061 9.04613 19.9036 9.76856C20.201 10.491 20.3998 11.2516 20.4998 12.0503Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconRotateRight;
