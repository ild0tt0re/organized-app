import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconPublishers = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-publishers" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2673_23419"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2673_23419)">
          <path
            d="M0 16.9847V16.0428C0 15.3728 0.358036 14.8169 1.07411 14.3749C1.7902 13.933 2.71188 13.712 3.83915 13.712C4.00559 13.712 4.18392 13.72 4.37414 13.7361C4.56434 13.7522 4.76643 13.7784 4.98041 13.8148C4.80979 14.1127 4.68532 14.4183 4.60699 14.7316C4.52866 15.0449 4.4895 15.3588 4.4895 15.6735V16.9847H0ZM6.54545 16.9847V15.7575C6.54545 15.3178 6.67307 14.9159 6.92831 14.5518C7.18356 14.1877 7.56014 13.8728 8.05803 13.6071C8.55594 13.3414 9.13601 13.1421 9.79825 13.0092C10.4605 12.8763 11.1916 12.8099 11.9916 12.8099C12.807 12.8099 13.5458 12.8763 14.2081 13.0092C14.8703 13.1421 15.4504 13.3414 15.9482 13.6071C16.4462 13.8728 16.8217 14.1877 17.0748 14.5518C17.328 14.9159 17.4545 15.3178 17.4545 15.7575V16.9847H6.54545ZM19.5105 16.9847V15.6798C19.5105 15.3318 19.4724 15.0039 19.3961 14.6961C19.3199 14.3883 19.2056 14.0945 19.0531 13.8148C19.2811 13.7784 19.4857 13.7522 19.6668 13.7361C19.8479 13.72 20.0196 13.712 20.1818 13.712C21.3091 13.712 22.2273 13.9319 22.9364 14.3718C23.6455 14.8116 24 15.3686 24 16.0428V16.9847H19.5105ZM7.66784 15.8938H16.3385V15.663C16.2965 15.1456 15.8724 14.7225 15.0661 14.3938C14.2598 14.0651 13.2378 13.9008 12 13.9008C10.7622 13.9008 9.74021 14.0651 8.93392 14.3938C8.12763 14.7225 7.7056 15.1456 7.66784 15.663V15.8938ZM3.83359 12.684C3.40514 12.684 3.04021 12.532 2.73881 12.228C2.43741 11.924 2.28671 11.5585 2.28671 11.1316C2.28671 10.7092 2.43872 10.3484 2.74274 10.0491C3.04675 9.74975 3.41223 9.6001 3.83915 9.6001C4.26154 9.6001 4.62587 9.74975 4.93216 10.0491C5.23845 10.3484 5.3916 10.7113 5.3916 11.1378C5.3916 11.5518 5.24229 11.913 4.94367 12.2214C4.64505 12.5298 4.27503 12.684 3.83359 12.684ZM20.1818 12.684C19.7636 12.684 19.4003 12.5298 19.0919 12.2214C18.7836 11.913 18.6294 11.5518 18.6294 11.1378C18.6294 10.7113 18.7836 10.3484 19.0919 10.0491C19.4003 9.74975 19.765 9.6001 20.1859 9.6001C20.6195 9.6001 20.986 9.74975 21.2853 10.0491C21.5846 10.3484 21.7343 10.7092 21.7343 11.1316C21.7343 11.5585 21.5855 11.924 21.2879 12.228C20.9904 12.532 20.6217 12.684 20.1818 12.684ZM12.0074 11.9917C11.3451 11.9917 10.7797 11.7592 10.3112 11.2942C9.84265 10.8291 9.60837 10.2644 9.60837 9.6001C9.60837 8.92248 9.84089 8.35447 10.3059 7.89607C10.771 7.43769 11.3357 7.2085 12 7.2085C12.6776 7.2085 13.2456 7.43698 13.704 7.89394C14.1624 8.35092 14.3916 8.91718 14.3916 9.59271C14.3916 10.255 14.1631 10.8204 13.7062 11.2889C13.2492 11.7574 12.6829 11.9917 12.0074 11.9917ZM12.0105 10.9008C12.3685 10.9008 12.6731 10.7718 12.9241 10.5137C13.1752 10.2557 13.3007 9.94766 13.3007 9.58962C13.3007 9.23157 13.176 8.92702 12.9268 8.67599C12.6774 8.42493 12.3685 8.2994 12 8.2994C11.6489 8.2994 11.3444 8.42406 11.0864 8.67337C10.8283 8.92266 10.6993 9.23157 10.6993 9.6001C10.6993 9.95115 10.8283 10.2557 11.0864 10.5137C11.3444 10.7718 11.6524 10.9008 12.0105 10.9008Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconPublishers;
