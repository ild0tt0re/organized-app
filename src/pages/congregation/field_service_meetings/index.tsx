import { Box, Chip } from '@mui/material';
import {
  IconAdd,
  IconAddMonth,
  IconAtHome,
  IconEventAvailable,
  IconInfo,
  IconNavigateLeft,
  IconNavigateRight,
  IconPrint,
} from '@components/icons';
import { useAppTranslation, useCurrentUser } from '@hooks/index';
import Button from '@components/button';
import PageTitle from '@components/page_title';
import Badge from '@components/badge';
import ButtonGroup from '@components/button_group';
import MiniChip from '@components/mini_chip';
import InfoTip from '@components/info_tip';
import { StyledNavigationArrowButton } from '../../../features/meetings/midweek_editor/index.styles';
import Typography from '@components/typography';
import FilterChip from '@components/filter_chip';

const MeetingAttendance = () => {
  const { t } = useAppTranslation();

  const { isSecretary, isGroup } = useCurrentUser();
  const meetingItems = [
    { id: 1, title: 'Meeting 1' },
    { id: 2, title: 'Meeting 2' },
    { id: 3, title: 'Meeting 3' },
    { id: 4, title: 'Meeting 4' },
    { id: 5, title: 'Meeting 5' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        flexDirection: 'column',
      }}
    >
      <PageTitle
        title={t('tr_fieldServiceMeetings')}
        buttons={
          !isGroup &&
          isSecretary && (
            <>
              {/* <ExportS88 /> */}
              <Button
                variant="secondary"
                // onClick={handleExportS88}
                // startIcon={isProcessing ? <IconLoading /> : <IconExport />}
                startIcon={<IconPrint />}
              >
                {t('tr_export')}
              </Button>
              <Button
                variant="secondary"
                // onClick={handleExportS88}
                // startIcon={isProcessing ? <IconLoading /> : <IconExport />}
                startIcon={<IconAdd />}
              >
                {t('tr_add')}
              </Button>
              <Button
                variant="main"
                startIcon={<IconEventAvailable color="white" />}
                // href="#/reports/branch-office"
              >
                {t('tr_publish')}
              </Button>
            </>
          )
        }
      />

      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
          border: '1px solid var(--accent-300)',
          borderRadius: 'var(--radius-xl)',
          padding: '16px',
          backgroundColor: 'var(--white)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // justifyContent: tablet500Down && 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              // justifyContent: tablet500Down && 'space-between',
            }}
          >
            <StyledNavigationArrowButton
              // onClick={showWeekArrows.back ? handleChangeWeekBack : undefined}
              sx={
                {
                  // cursor: showWeekArrows.back && 'pointer',
                }
              }
            >
              <IconNavigateLeft
              // color={showWeekArrows.back ? 'var(--black)' : 'var(--grey-300)'}
              />
            </StyledNavigationArrowButton>

            <Typography
              className="h2"
              sx={{
                // minWidth: !tablet500Down && '140px',
                textAlign: 'center',
              }}
            >
              {/* {weekDateLocale} */}
              {new Date().toLocaleDateString(navigator.language, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>
            <StyledNavigationArrowButton
              // onClick={showWeekArrows.next ? handleChangeWeekNext : undefined}
              sx={
                {
                  // cursor: showWeekArrows.next && 'pointer',
                }
              }
            >
              <IconNavigateRight
              // color={showWeekArrows.next ? 'var(--black)' : 'var(--grey-300)'}
              />
            </StyledNavigationArrowButton>
          </Box>
          <Box>
            <ButtonGroup
              buttons={[
                {
                  // className: isEdit ? '' : 'active',
                  className: 'active',
                  variant: 'outlined',
                  children: t('tr_week'),
                  onClick: () => console.log('Monthly Record Clicked'),
                },
                {
                  // className: isEdit ? 'active' : '',
                  variant: 'outlined',
                  children: t('tr_month'),
                  onClick: () => console.log('Monthly Record Clicked'),
                },
              ]}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {[
            { id: 1, name: 'All' },
            { id: 2, name: 'My group' },
            { id: 3, name: 'Joint' },
            { id: 3, name: 'Zoom' },
          ].map((filter) => (
            <FilterChip
              key={filter.id}
              label={filter.name}
              selected={filter.id === 1}
              // selected={filtersKey.includes(filter.id)}
              // onClick={() => handleClick(filter.id)}
            />
          ))}
        </Box>
      </Box>

      {meetingItems.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: 'flex',
            gap: '16px',
            flexDirection: 'column',
            border: '1px solid var(--accent-300)',
            borderRadius: 'var(--radius-xl)',
            padding: '16px',
            backgroundColor: 'var(--white)',
          }}
        >
          <Typography className="h3">{item.title}</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'var(--accent-150)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-l)',
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'stretch',
                justifyContent: 'center',
                flex: 0,
                // height: age === '0' ? (tabletDown ? 'auto' : '48px') : '100%',
                // width: age === '0' ? (age.length > 3 ? '140px' : '120px') : '100%',
              }}
            >
              <Typography className="h4" color="var(--accent-dark)">
                {/* Format time based on location */}
                {new Date().toLocaleTimeString(navigator.language, {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                gap: '4px',
              }}
            >
              <Typography className="h4">Nolan Ekstrom Bothman</Typography>
              <Typography className="body-regular" color="var(--grey-400)">
                <Box display="flex" alignItems="center" gap="4px">
                  <IconAtHome color="var(--grey-400)" /> Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </Box>
              </Typography>
              <Typography
                className="body-small-regular"
                color="var(--grey-400)"
              >
                Optional: e.g. a maps link: https://goo.gl/maps/xyz123
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flex: 0,
                alignItems: 'center',
              }}
            >
              <Button variant="small" startIcon={<IconAddMonth />} sx={{}}>
                <Typography
                  className="body-small-regular"
                  color="var(--blue-500)"
                  noWrap
                >
                  Add to calendar
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      ))}

      {meetingItems.length === 0 && (
        <InfoTip
          isBig={false}
          icon={<IconInfo />}
          color="blue"
          text={t('tr_noFieldServiceMeetings')}
        />
      )}

      {/* TODO: TEST COMPONENT */}
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
          border: '1px solid var(--accent-300)',
          borderRadius: 'var(--radius-xl)',
          padding: '16px',
          backgroundColor: 'var(--white)',
        }}
      >
        <Badge
          size="small"
          text={'Badge di prova'}
          color={'orange'}
          borderStyle="dashed"
          faded
        />

        <MiniChip label="Mini Chip" />
        <Chip
          label="Chip"
          variant="outlined"
          color="warning"
          sx={{
            //   color: 'var(--orange-dark)',
            //   borderRadius: 'var(--radius-max)',
            //   border: '1px solid var(--orange-dark)',
            background: 'var(--orange-150)',
            //   minHeight: '26px',
            //   height: 'auto',
            //   '.MuiChip-label': {},
            //   '& svg': {},
            //   '& svg, & svg g, & svg g path': {
            //     // fill: 'var(--orange-dark)',
            //   },
          }}
        />
        {/* TEST COMPONENT */}
      </Box>
    </Box>
  );
};

export default MeetingAttendance;
