import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconMoveForward = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-move-forward"
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
          id="mask0_3094_85706"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3094_85706)">
          <path
            d="M11.5 16.1447L15.1442 12.5005L11.5 8.85626L10.4558 9.90046L12.3058 11.7505H7.75V13.2504H12.3058L10.4558 15.1005L11.5 16.1447ZM11.5016 22.0004C10.1877 22.0004 8.95268 21.7511 7.79655 21.2524C6.6404 20.7538 5.63472 20.077 4.7795 19.2222C3.92427 18.3673 3.24721 17.3621 2.74833 16.2065C2.24944 15.0508 2 13.8161 2 12.5021C2 11.1882 2.24933 9.95317 2.748 8.79704C3.24667 7.64089 3.92342 6.63521 4.77825 5.77999C5.6331 4.92476 6.63834 4.2477 7.79398 3.74881C8.94959 3.24993 10.1844 3.00049 11.4983 3.00049C12.8122 3.00049 14.0473 3.24982 15.2034 3.74849C16.3596 4.24716 17.3652 4.92391 18.2205 5.77874C19.0757 6.63359 19.7527 7.63883 20.2516 8.79446C20.7505 9.95008 21 11.1849 21 12.4988C21 13.8127 20.7506 15.0478 20.252 16.2039C19.7533 17.36 19.0765 18.3657 18.2217 19.2209C17.3669 20.0762 16.3616 20.7532 15.206 21.2521C14.0504 21.751 12.8156 22.0004 11.5016 22.0004ZM11.5 20.5005C13.7333 20.5005 15.625 19.7255 17.175 18.1755C18.725 16.6255 19.5 14.7338 19.5 12.5005C19.5 10.2671 18.725 8.37546 17.175 6.82546C15.625 5.27546 13.7333 4.50046 11.5 4.50046C9.26664 4.50046 7.37498 5.27546 5.82498 6.82546C4.27498 8.37546 3.49998 10.2671 3.49998 12.5005C3.49998 14.7338 4.27498 16.6255 5.82498 18.1755C7.37498 19.7255 9.26664 20.5005 11.5 20.5005Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconMoveForward;
