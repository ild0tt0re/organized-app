import PropTypes from 'prop-types';

const IconSong = ({ color = '#222222', width = 24, height = 24 }) => {
  width = width.toString();
  height = height.toString();

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_3904_133480"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3904_133480)"></g>
      <mask
        id="mask1_3904_133480"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask1_3904_133480)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3232 7.45541V11.8393C16.2232 11.8317 16.1227 11.828 16.0217 11.828C14.974 11.828 14.0471 12.2152 13.3062 12.956C12.5653 13.6969 12.1782 14.6238 12.1782 15.6716C12.1782 16.7193 12.5653 17.6462 13.3062 18.3871C14.0471 19.1279 14.974 19.515 16.0217 19.515C17.0694 19.515 17.9964 19.1279 18.7373 18.3871C19.4781 17.6462 19.8652 16.7193 19.8652 15.6716V9.31201V6.63375L19.8329 3.33496L18.9876 3.37694V7.45541H18.6538L18.6594 8.10619V15.6716C18.6594 15.7859 18.653 15.8976 18.6402 16.0068C18.5716 16.5901 18.3197 17.0993 17.8846 17.5344C17.3681 18.051 16.7471 18.3092 16.0217 18.3092C15.2964 18.3092 14.6754 18.051 14.1589 17.5344C13.6423 17.0179 13.384 16.3969 13.384 15.6716C13.384 14.9462 13.6423 14.3252 14.1589 13.8087C14.6754 13.2921 15.2964 13.0338 16.0217 13.0338C16.1246 13.0338 16.225 13.0393 16.3232 13.0502C16.5009 13.0699 16.6709 13.1074 16.8333 13.1628C17.0559 13.2387 17.2627 13.3481 17.4536 13.491C17.479 13.51 17.5042 13.5296 17.529 13.5498V7.45541H16.3232Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.85693 17.2992C2.85693 18.3469 3.24406 19.2738 3.98494 20.0147C4.72582 20.7556 5.65275 21.1427 6.70045 21.1427C7.74815 21.1427 8.67509 20.7555 9.41598 20.0147C10.1568 19.2738 10.544 18.3469 10.544 17.2992V11.2237V9.05277L17.5241 8.15023L17.535 6.78709L9.33814 7.84695V11.2237V17.2992C9.33814 17.4135 9.33172 17.5253 9.31888 17.6344C9.25029 18.2177 8.99844 18.7269 8.56332 19.162C8.04677 19.6786 7.42581 19.9369 6.70045 19.9369C5.97509 19.9369 5.35413 19.6786 4.83758 19.162C4.32103 18.6455 4.06275 18.0245 4.06275 17.2992C4.06275 16.5738 4.32103 15.9528 4.83758 15.4363C5.35413 14.9197 5.97509 14.6615 6.70045 14.6615C6.80326 14.6615 6.90375 14.6669 7.00191 14.6778C7.17957 14.6975 7.34963 14.7351 7.51206 14.7905C7.73462 14.8664 7.94137 14.9757 8.13232 15.1186C8.15773 15.1376 8.18287 15.1572 8.20772 15.1774V11.2237V5.73694L18.6638 4.17737V6.64114L18.6556 6.64219V8.00392L19.8696 7.84695V2.97156L7.00191 4.53113V11.2237V13.4669C6.90193 13.4594 6.80141 13.4557 6.70045 13.4557C5.65275 13.4557 4.72583 13.8428 3.98495 14.5836C3.24406 15.3245 2.85693 16.2515 2.85693 17.2992Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconSong.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconSong;
