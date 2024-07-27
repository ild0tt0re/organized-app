import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconAssignmetHistory = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-assignmet-history"
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
          id="mask0_2557_86002"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2557_86002)"></g>
        <mask
          id="mask1_2557_86002"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="-2"
          y="0"
          width="24"
          height="25"
        >
          <rect x="-2" y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask1_2557_86002)">
          <path
            d="M18.5 10.0004H17V5.30808C17 5.23115 16.9679 5.16062 16.9038 5.09651C16.8397 5.03241 16.7692 5.00036 16.6922 5.00036H14.5V7.61571H5.5V5.00036H3.3077C3.23077 5.00036 3.16024 5.03241 3.09612 5.09651C3.03202 5.16062 2.99997 5.23115 2.99997 5.30808V18.6926C2.99997 18.7696 3.03202 18.8401 3.09612 18.9042C3.16024 18.9683 3.23077 19.0004 3.3077 19.0004H8.99997V20.5003H3.3077C2.80898 20.5003 2.38302 20.3237 2.02982 19.9705C1.67661 19.6173 1.5 19.1913 1.5 18.6926V5.30808C1.5 4.80936 1.67661 4.3834 2.02982 4.0302C2.38302 3.67699 2.80898 3.50038 3.3077 3.50038H7.71348C7.85194 3.01321 8.13495 2.60938 8.5625 2.28888C8.99005 1.96836 9.46921 1.80811 9.99998 1.80811C10.5512 1.80811 11.0381 1.96836 11.4605 2.28888C11.883 2.60938 12.1634 3.01321 12.3019 3.50038H16.6922C17.191 3.50038 17.6169 3.67699 17.9701 4.0302C18.3233 4.3834 18.5 4.80936 18.5 5.30808V10.0004ZM9.99998 5.11576C10.2577 5.11576 10.4727 5.02954 10.6452 4.85711C10.8176 4.68467 10.9038 4.4696 10.9038 4.21191C10.9038 3.95422 10.8176 3.73916 10.6452 3.56673C10.4727 3.3943 10.2577 3.30808 9.99998 3.30808C9.74229 3.30808 9.52723 3.3943 9.3548 3.56673C9.18235 3.73916 9.09613 3.95422 9.09613 4.21191C9.09613 4.4696 9.18235 4.68467 9.3548 4.85711C9.52723 5.02954 9.74229 5.11576 9.99998 5.11576Z"
            fill={color}
          />
          <mask
            id="mask2_2557_86002"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="8"
            y="9"
            width="14"
            height="14"
          >
            <rect
              x="8"
              y="9.00049"
              width="13.8765"
              height="13.8765"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask2_2557_86002)">
            <path
              d="M19.3158 21.4531L15.616 17.7533C15.3324 17.9628 15.004 18.1296 14.6309 18.2536C14.2578 18.3776 13.8565 18.4396 13.4271 18.4396C12.3277 18.4396 11.3952 18.0568 10.6295 17.2911C9.8638 16.5254 9.48096 15.5929 9.48096 14.4935C9.48096 13.3941 9.8638 12.4616 10.6295 11.6959C11.3952 10.9302 12.3277 10.5474 13.4271 10.5474C14.5265 10.5474 15.459 10.9302 16.2247 11.6959C16.9904 12.4616 17.3732 13.3941 17.3732 14.4935C17.3732 14.9284 17.3112 15.3297 17.1872 15.6973C17.0632 16.065 16.8964 16.3879 16.6869 16.6661L20.3949 20.3822L19.3158 21.4531ZM13.4271 16.9074C14.1008 16.9074 14.6716 16.6735 15.1393 16.2057C15.6071 15.738 15.841 15.1672 15.841 14.4935C15.841 13.8198 15.6071 13.249 15.1393 12.7813C14.6716 12.3135 14.1008 12.0796 13.4271 12.0796C12.7534 12.0796 12.1826 12.3135 11.7149 12.7813C11.2471 13.249 11.0132 13.8198 11.0132 14.4935C11.0132 15.1672 11.2471 15.738 11.7149 16.2057C12.1826 16.6735 12.7534 16.9074 13.4271 16.9074Z"
              fill={color}
            />
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconAssignmetHistory;
