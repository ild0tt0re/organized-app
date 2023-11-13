import PropTypes from 'prop-types';

const IconHistory = ({ color = '#222222', width = 24, height = 24 }) => {
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
        id="mask0_2473_21943"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2473_21943)">
        <path
          d="M8.05835 16.7692C8.30918 16.7692 8.51921 16.6844 8.68843 16.5147C8.85766 16.345 8.94228 16.1347 8.94228 15.8839C8.94228 15.6331 8.85743 15.423 8.68775 15.2538C8.51808 15.0846 8.30783 15 8.057 15C7.80617 15 7.59613 15.0848 7.4269 15.2545C7.25768 15.4242 7.17308 15.6344 7.17308 15.8853C7.17308 16.1361 7.25791 16.3461 7.42758 16.5154C7.59726 16.6846 7.80752 16.7692 8.05835 16.7692ZM8.05835 12.8846C8.30918 12.8846 8.51921 12.7997 8.68843 12.6301C8.85766 12.4604 8.94228 12.2501 8.94228 11.9993C8.94228 11.7485 8.85743 11.5384 8.68775 11.3692C8.51808 11.2 8.30783 11.1154 8.057 11.1154C7.80617 11.1154 7.59613 11.2002 7.4269 11.3699C7.25768 11.5396 7.17308 11.7498 7.17308 12.0007C7.17308 12.2515 7.25791 12.4615 7.42758 12.6308C7.59726 12.8 7.80752 12.8846 8.05835 12.8846ZM8.05835 8.99998C8.30918 8.99998 8.51921 8.91513 8.68843 8.74545C8.85766 8.57578 8.94228 8.36553 8.94228 8.1147C8.94228 7.86387 8.85743 7.65383 8.68775 7.4846C8.51808 7.31537 8.30783 7.23075 8.057 7.23075C7.80617 7.23075 7.59613 7.31559 7.4269 7.48528C7.25768 7.65496 7.17308 7.86522 7.17308 8.11605C7.17308 8.36688 7.25791 8.57691 7.42758 8.74613C7.59726 8.91536 7.80752 8.99998 8.05835 8.99998ZM11.0961 16.6346H16.7884V15.1346H11.0961V16.6346ZM11.0961 12.75H16.7884V11.25H11.0961V12.75ZM11.0961 8.86535H16.7884V7.36538H11.0961V8.86535ZM5.3077 20.5C4.80257 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.3077C3.5 4.80257 3.675 4.375 4.025 4.025C4.375 3.675 4.80257 3.5 5.3077 3.5H18.6923C19.1974 3.5 19.625 3.675 19.975 4.025C20.325 4.375 20.5 4.80257 20.5 5.3077V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6923 20.5H5.3077ZM5.3077 19H18.6923C18.7692 19 18.8397 18.9679 18.9038 18.9038C18.9679 18.8397 19 18.7692 19 18.6923V5.3077C19 5.23077 18.9679 5.16024 18.9038 5.09613C18.8397 5.03203 18.7692 4.99998 18.6923 4.99998H5.3077C5.23077 4.99998 5.16024 5.03203 5.09612 5.09613C5.03202 5.16024 4.99997 5.23077 4.99997 5.3077V18.6923C4.99997 18.7692 5.03202 18.8397 5.09612 18.9038C5.16024 18.9679 5.23077 19 5.3077 19Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconHistory.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconHistory;
