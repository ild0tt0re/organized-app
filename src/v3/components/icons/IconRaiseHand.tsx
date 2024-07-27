import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconRaiseHand = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-raise-hand"
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
          id="mask0_5189_226351"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_5189_226351)">
          <path
            d="M5.50023 20.5004V15.1543C4.93741 14.1325 4.5076 13.1046 4.2108 12.0706C3.91402 11.0367 3.76562 10.0203 3.76562 9.02161C3.76562 8.12035 3.88037 7.2117 4.10985 6.29566C4.33933 5.37965 4.6451 4.40497 5.02715 3.37164C5.12202 3.11139 5.27778 2.90114 5.49445 2.74089C5.71112 2.58062 5.95791 2.50049 6.23483 2.50049C6.60404 2.50049 6.91749 2.63222 7.17517 2.89569C7.43286 3.15914 7.53798 3.46842 7.49055 3.82354L7.22518 5.99276C7.12518 6.83123 7.21363 7.64085 7.49055 8.42161C7.76748 9.2024 8.17486 9.89407 8.71268 10.4966C9.25051 11.0992 9.88993 11.5838 10.631 11.9505C11.372 12.3172 12.1617 12.5005 13.0002 12.5005C14.0194 12.5005 14.9932 12.5886 15.9214 12.7649C16.8496 12.9412 17.6502 13.1954 18.3233 13.5274C19.0156 13.8723 19.5514 14.3133 19.9309 14.8505C20.3104 15.3877 20.5002 16.0543 20.5002 16.8505V20.5004H5.50023ZM7.0002 19.0005H19.0002V16.8505C19.0002 16.4184 18.8906 16.0386 18.6714 15.711C18.4521 15.3835 18.1335 15.1184 17.7156 14.9158C17.1028 14.621 16.3752 14.3947 15.5329 14.237C14.6906 14.0793 13.8464 14.0005 13.0002 14.0005C11.9387 14.0005 10.9403 13.7691 10.005 13.3062C9.06976 12.8434 8.26655 12.2296 7.5954 11.4649C6.92425 10.7001 6.4172 9.82514 6.07425 8.83989C5.7313 7.85462 5.62328 6.84148 5.7502 5.80046C5.58353 6.30046 5.4627 6.82739 5.3877 7.38124C5.3127 7.93507 5.2752 8.48186 5.2752 9.02161C5.2752 9.93058 5.43482 10.8533 5.75405 11.7899C6.07327 12.7264 6.48865 13.7094 7.0002 14.7389V19.0005ZM13.0002 11.2697C12.0348 11.2697 11.2102 10.9277 10.5262 10.2438C9.84221 9.5598 9.50023 8.73512 9.50023 7.76974C9.50023 6.80437 9.84221 5.97971 10.5262 5.29574C11.2102 4.61177 12.0348 4.26979 13.0002 4.26979C13.9656 4.26979 14.7902 4.61177 15.4742 5.29574C16.1582 5.97971 16.5002 6.80437 16.5002 7.76974C16.5002 8.73512 16.1582 9.5598 15.4742 10.2438C14.7902 10.9277 13.9656 11.2697 13.0002 11.2697ZM13.0002 9.76974C13.5502 9.76974 14.021 9.57391 14.4127 9.18224C14.8044 8.79057 15.0002 8.31974 15.0002 7.76974C15.0002 7.21974 14.8044 6.74891 14.4127 6.35724C14.021 5.96557 13.5502 5.76974 13.0002 5.76974C12.4502 5.76974 11.9794 5.96557 11.5877 6.35724C11.196 6.74891 11.0002 7.21974 11.0002 7.76974C11.0002 8.31974 11.196 8.79057 11.5877 9.18224C11.9794 9.57391 12.4502 9.76974 13.0002 9.76974ZM9.26945 20.5004V19.8351C9.26945 18.8081 9.6281 17.9315 10.3454 17.2053C11.0627 16.479 11.9348 16.1159 12.9617 16.1159H16.654V17.6158H12.9617C12.3438 17.6158 11.8239 17.8328 11.4021 18.2668C10.9803 18.7008 10.7694 19.2235 10.7694 19.8351V20.5004H9.26945Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconRaiseHand;
