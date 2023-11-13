import PropTypes from 'prop-types';

const IconS21Page = ({ color = '#222222', width = 24, height = 24 }) => {
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
        id="mask0_3437_99781"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3437_99781)">
        <path
          d="M18 18.0577C18.4166 18.0577 18.7708 17.9118 19.0625 17.6202C19.3541 17.3285 19.5 16.9743 19.5 16.5577C19.5 16.141 19.3541 15.7868 19.0625 15.4952C18.7708 15.2035 18.4166 15.0577 18 15.0577C17.5833 15.0577 17.2291 15.2035 16.9375 15.4952C16.6458 15.7868 16.5 16.141 16.5 16.5577C16.5 16.9743 16.6458 17.3285 16.9375 17.6202C17.2291 17.9118 17.5833 18.0577 18 18.0577ZM18 21.0577C18.5 21.0577 18.9666 20.941 19.4 20.7077C19.8333 20.4743 20.1916 20.1493 20.475 19.7327C20.0916 19.4993 19.6916 19.3285 19.275 19.2202C18.8583 19.1118 18.4333 19.0577 18 19.0577C17.5666 19.0577 17.1416 19.1118 16.725 19.2202C16.3083 19.3285 15.9083 19.4993 15.525 19.7327C15.8083 20.1493 16.1666 20.4743 16.6 20.7077C17.0333 20.941 17.5 21.0577 18 21.0577ZM5.3077 20.5C4.80898 20.5 4.38302 20.3233 4.02982 19.9701C3.67661 19.6169 3.5 19.191 3.5 18.6923V5.3077C3.5 4.80898 3.67661 4.38302 4.02982 4.02982C4.38302 3.67661 4.80898 3.5 5.3077 3.5H18.6923C19.191 3.5 19.6169 3.67661 19.9701 4.02982C20.3233 4.38302 20.5 4.80898 20.5 5.3077V11.6327C20.2538 11.5275 20.0073 11.4384 19.7605 11.3654C19.5137 11.2923 19.2602 11.234 19 11.1904V5.3077C19 5.23077 18.9679 5.16024 18.9038 5.09613C18.8397 5.03203 18.7692 4.99998 18.6923 4.99998H5.3077C5.23077 4.99998 5.16024 5.03203 5.09612 5.09613C5.03202 5.16024 4.99997 5.23077 4.99997 5.3077V18.6923C4.99997 18.7692 5.03202 18.8397 5.09612 18.9038C5.16024 18.9679 5.23077 19 5.3077 19H11.1654C11.2025 19.2769 11.2577 19.5387 11.3307 19.7855C11.4038 20.0323 11.4929 20.2705 11.5981 20.5H5.3077ZM4.99997 19V4.99998V11.1904V11.1154V19ZM7.25 16.6346H11.2673C11.3109 16.3743 11.3756 16.1208 11.4615 15.874C11.5474 15.6272 11.641 15.3808 11.7423 15.1346H7.25V16.6346ZM7.25 12.75H13.5904C14.0212 12.3846 14.4808 12.0785 14.9692 11.8317C15.4577 11.5849 15.9807 11.4096 16.5384 11.3058V11.25H7.25V12.75ZM7.25 8.86535H16.75V7.36538H7.25V8.86535ZM18 22.5576C16.7513 22.5576 15.6891 22.1198 14.8135 21.2442C13.9378 20.3685 13.5 19.3064 13.5 18.0577C13.5 16.809 13.9378 15.7468 14.8135 14.8712C15.6891 13.9955 16.7513 13.5577 18 13.5577C19.2487 13.5577 20.3109 13.9955 21.1865 14.8712C22.0621 15.7468 22.5 16.809 22.5 18.0577C22.5 19.3064 22.0621 20.3685 21.1865 21.2442C20.3109 22.1198 19.2487 22.5576 18 22.5576Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconS21Page.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconS21Page;
