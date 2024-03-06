import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconInTerritory = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-in-territory" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4443_172662"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4443_172662)">
          <path
            d="M4.54055 11.6929C4.16342 11.6929 3.85082 11.5696 3.60275 11.323C3.35467 11.0764 3.23063 10.7646 3.23063 10.3874C3.23063 10.0103 3.35392 9.69771 3.6005 9.44965C3.84708 9.20156 4.15894 9.07752 4.53608 9.07752C4.91321 9.07752 5.22581 9.20081 5.47388 9.4474C5.72196 9.69398 5.846 10.0058 5.846 10.383C5.846 10.7601 5.72271 11.0727 5.47613 11.3208C5.22954 11.5688 4.91768 11.6929 4.54055 11.6929ZM3.34603 21.7505V17.2505H2.46143V13.4429C2.46143 13.2304 2.5333 13.0522 2.67705 12.9085C2.82078 12.7647 2.9989 12.6929 3.2114 12.6929H5.86523C6.07773 12.6929 6.25584 12.7647 6.39958 12.9085C6.54333 13.0522 6.6152 13.2304 6.6152 13.4429V17.2505H5.7306V20.2505H14.2883V14.6928H12.2883C11.2396 14.6928 10.3524 14.3316 9.6268 13.6092C8.90117 12.8867 8.53835 12.0172 8.53835 11.0005C8.53835 10.1941 8.77104 9.47074 9.23643 8.83037C9.70181 8.18999 10.2999 7.70954 11.0307 7.38902C11.1435 6.3185 11.5883 5.43486 12.3653 4.73807C13.1422 4.04127 14.0332 3.69287 15.0383 3.69287C16.0434 3.69287 16.9345 4.04127 17.7114 4.73807C18.4883 5.43486 18.9332 6.3185 19.046 7.38902C19.7767 7.70954 20.3748 8.18999 20.8402 8.83037C21.3056 9.47074 21.5383 10.1941 21.5383 11.0005C21.5383 12.0172 21.1755 12.8867 20.4498 13.6092C19.7242 14.3316 18.837 14.6928 17.7883 14.6928H15.7883V20.2505H20.7883V21.7505H3.34603ZM12.2883 13.1928H17.7883C18.4152 13.1928 18.947 12.9817 19.3835 12.5595C19.8201 12.1373 20.0383 11.6176 20.0383 11.0005C20.0383 10.5057 19.8934 10.0637 19.6037 9.67457C19.314 9.28547 18.9383 8.99284 18.4768 8.79667L17.6383 8.44285L17.546 7.57362C17.4845 6.90567 17.2165 6.34189 16.7422 5.88227C16.2678 5.42266 15.6999 5.19285 15.0383 5.19285C14.3768 5.19285 13.8088 5.42266 13.3344 5.88227C12.8601 6.34189 12.5922 6.90567 12.5306 7.57362L12.4383 8.44285L11.5999 8.79667C11.1383 8.99284 10.7627 9.28547 10.4729 9.67457C10.1832 10.0637 10.0383 10.5057 10.0383 11.0005C10.0383 11.6176 10.2566 12.1373 10.6931 12.5595C11.1297 12.9817 11.6614 13.1928 12.2883 13.1928Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconInTerritory;
