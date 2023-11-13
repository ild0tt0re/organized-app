import PropTypes from 'prop-types';

const IconWork = ({ color = '#222222', width = 24, height = 24 }) => {
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
        id="mask0_3258_161976"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3258_161976)">
        <path
          d="M18.6574 21.4749C18.5369 21.4749 18.4248 21.4557 18.3209 21.4172C18.2171 21.3788 18.1184 21.3128 18.0248 21.2192L12.9824 16.1865C12.8889 16.0929 12.8228 15.9942 12.7844 15.8903C12.7459 15.7865 12.7267 15.6743 12.7267 15.5538C12.7267 15.4333 12.7459 15.3211 12.7844 15.2172C12.8228 15.1134 12.8889 15.0147 12.9824 14.9211L14.8767 13.0269C14.9703 12.9333 15.069 12.8673 15.1728 12.8288C15.2767 12.7904 15.3889 12.7711 15.5094 12.7711C15.6299 12.7711 15.742 12.7904 15.8459 12.8288C15.9497 12.8673 16.0485 12.9333 16.142 13.0269L21.1843 18.0692C21.2779 18.1628 21.344 18.2615 21.3824 18.3653C21.4209 18.4692 21.4401 18.5814 21.4401 18.7019C21.4401 18.8224 21.4209 18.9346 21.3824 19.0384C21.344 19.1423 21.2779 19.241 21.1843 19.3346L19.2901 21.2192C19.1965 21.3128 19.0978 21.3788 18.994 21.4172C18.8901 21.4557 18.778 21.4749 18.6574 21.4749ZM18.6574 19.7634L19.719 18.7019L15.5247 14.5076L14.4632 15.5692L18.6574 19.7634ZM5.31709 21.4903C5.19658 21.4903 5.08183 21.4685 4.97287 21.4249C4.86388 21.3813 4.7626 21.3128 4.66902 21.2192L2.79019 19.3499C2.69659 19.2564 2.628 19.1551 2.58442 19.0461C2.54083 18.9371 2.51904 18.8224 2.51904 18.7019C2.51904 18.5814 2.54083 18.4676 2.58442 18.3605C2.628 18.2535 2.69659 18.1532 2.79019 18.0596L8.01327 12.8365H10.119L10.9306 12.025L6.74787 7.84227H5.32287L2.54789 5.0673L5.02672 2.58847L7.80169 5.36345V6.78845L11.9844 10.9711L14.9421 8.01345L13.4824 6.55382L14.7478 5.28845H12.2017L11.6459 4.7423L14.8401 1.5481L15.3863 2.09422V4.64997L16.6516 3.3846L20.4132 7.12692C20.6773 7.38462 20.8763 7.67821 21.0103 8.0077C21.1443 8.33718 21.2113 8.6859 21.2113 9.05385C21.2113 9.37691 21.1555 9.68812 21.044 9.98747C20.9324 10.2868 20.7703 10.5589 20.5574 10.8038L18.4709 8.71727L17.0613 10.1269L16.0017 9.06727L11.1632 13.9057V16.0153L5.94977 21.2192C5.85618 21.3128 5.75747 21.3813 5.65362 21.4249C5.54978 21.4685 5.43761 21.4903 5.31709 21.4903ZM5.31709 19.7538L9.90364 15.1673V14.1057H8.84209L4.25552 18.6923L5.31709 19.7538ZM5.31709 19.7538L4.25552 18.6923L4.79399 19.2153L5.31709 19.7538Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

IconWork.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconWork;
