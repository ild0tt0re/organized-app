import PropTypes from 'prop-types';

const IconAssignmetHistory = ({ color = '#222222', width = 24, height = 24 }) => {
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
        id="mask0_2557_86002"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2557_86002)"></g>
      <mask
        id="mask1_2557_86002"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="-2"
        y="0"
        width={width}
        height={height}
      >
        <rect x="-2" width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask1_2557_86002)">
        <path
          d="M18.5 9.99987H17V5.30759C17 5.23066 16.9679 5.16013 16.9038 5.09602C16.8397 5.03192 16.7692 4.99987 16.6922 4.99987H14.5V7.61522H5.5V4.99987H3.3077C3.23077 4.99987 3.16024 5.03192 3.09612 5.09602C3.03202 5.16013 2.99997 5.23066 2.99997 5.30759V18.6921C2.99997 18.7691 3.03202 18.8396 3.09612 18.9037C3.16024 18.9678 3.23077 18.9999 3.3077 18.9999H8.99997V20.4998H3.3077C2.80898 20.4998 2.38302 20.3232 2.02982 19.97C1.67661 19.6168 1.5 19.1909 1.5 18.6921V5.30759C1.5 4.80888 1.67661 4.38292 2.02982 4.02972C2.38302 3.6765 2.80898 3.49989 3.3077 3.49989H7.71348C7.85194 3.01272 8.13495 2.60889 8.5625 2.28839C8.99005 1.96788 9.46921 1.80762 9.99998 1.80762C10.5512 1.80762 11.0381 1.96788 11.4605 2.28839C11.883 2.60889 12.1634 3.01272 12.3019 3.49989H16.6922C17.191 3.49989 17.6169 3.6765 17.9701 4.02972C18.3233 4.38292 18.5 4.80888 18.5 5.30759V9.99987ZM9.99998 5.11527C10.2577 5.11527 10.4727 5.02905 10.6452 4.85662C10.8176 4.68418 10.9038 4.46912 10.9038 4.21142C10.9038 3.95373 10.8176 3.73868 10.6452 3.56624C10.4727 3.39381 10.2577 3.30759 9.99998 3.30759C9.74229 3.30759 9.52723 3.39381 9.3548 3.56624C9.18235 3.73868 9.09613 3.95373 9.09613 4.21142C9.09613 4.46912 9.18235 4.68418 9.3548 4.85662C9.52723 5.02905 9.74229 5.11527 9.99998 5.11527Z"
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
          <rect x="8" y="9" width="13.8765" height="13.8765" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask2_2557_86002)">
          <path
            d="M19.3158 21.4524L15.616 17.7526C15.3324 17.9621 15.004 18.1288 14.6309 18.2529C14.2578 18.3769 13.8565 18.4389 13.4271 18.4389C12.3277 18.4389 11.3952 18.056 10.6295 17.2904C9.8638 16.5247 9.48096 15.5922 9.48096 14.4928C9.48096 13.3934 9.8638 12.4608 10.6295 11.6952C11.3952 10.9295 12.3277 10.5466 13.4271 10.5466C14.5265 10.5466 15.459 10.9295 16.2247 11.6952C16.9904 12.4608 17.3732 13.3934 17.3732 14.4928C17.3732 14.9277 17.3112 15.3289 17.1872 15.6966C17.0632 16.0642 16.8964 16.3872 16.6869 16.6654L20.3949 20.3815L19.3158 21.4524ZM13.4271 16.9067C14.1008 16.9067 14.6716 16.6728 15.1393 16.205C15.6071 15.7372 15.841 15.1665 15.841 14.4928C15.841 13.8191 15.6071 13.2483 15.1393 12.7805C14.6716 12.3127 14.1008 12.0789 13.4271 12.0789C12.7534 12.0789 12.1826 12.3127 11.7149 12.7805C11.2471 13.2483 11.0132 13.8191 11.0132 14.4928C11.0132 15.1665 11.2471 15.7372 11.7149 16.205C12.1826 16.6728 12.7534 16.9067 13.4271 16.9067Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};

IconAssignmetHistory.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconAssignmetHistory;
