import { Box } from '@mui/material';
import {
  IconAdd,
  IconAddMonth,
  IconAtHome,
  IconCheck,
  IconClose,
  IconDate,
  IconEdit,
  IconEventAvailable,
  IconInfo,
  IconNavigateLeft,
  IconNavigateRight,
  IconPrint,
  IconSearch,
} from '@components/icons';
import Button from '@components/button';
import PageTitle from '@components/page_title';
import ButtonGroup from '@components/button_group';
import InfoTip from '@components/info_tip';
import Typography from '@components/typography';
import FilterChip from '@components/filter_chip';
import GroupBadge from '@components/group_badge';
import Badge from '@components/badge';
import Autocomplete from '@components/autocomplete';
import DatePicker from '@components/date_picker';
import TimePicker from '@components/time_picker';
import Divider from '@components/divider';
import TextField from '@components/textfield';
import { useAppTranslation, useCurrentUser } from '@hooks/index';
import { StyledNavigationArrowButton } from '../../../features/meetings/midweek_editor/index.styles';

const MeetingAttendance = () => {
  const { t } = useAppTranslation();

  const { isSecretary, isGroup } = useCurrentUser();
  const midweekMeetings = [
    { id: 1, title: 'Meeting 1' },
    { id: 2, title: 'Meeting 2' },
    { id: 3, title: 'Meeting 3' },
  ];

  const weekendMeetings = [
    { id: 1, title: 'Meeting 1' },
    { id: 2, title: 'Meeting 2' },
  ];

  const MeetingItem = (item) => (
    <Box
      key={item.id}
      sx={{
        display: 'flex',
        gap: '16px',
        flexDirection: 'column',
        border: '1px solid var(--accent-300)',
        borderRadius: 'var(--radius-xl)',
        padding: '24px',
        backgroundColor: 'var(--white)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography className="h3">{item.title}</Typography>
          <Button
            variant="small"
            sx={{ marginLeft: '8px', minHeight: '24px', minWidth: '24px' }}
          >
            <IconEdit />
          </Button>
        </Box>
        <Box display="flex" alignItems="center" gap="8px">
          <Badge text="Service overseer visit" size="big" color="accent" />
          <GroupBadge
            label="Group 3 - Outlined"
            color="group-3"
            variant="outlined"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
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
              <IconAtHome color="var(--grey-400)" /> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Box>
          </Typography>
          <Typography className="body-small-regular" color="var(--grey-400)">
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
              {t('tr_addToCalendar')}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );

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

            <Box display="flex" alignItems="center">
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
              <IconDate sx={{ marginLeft: '16px' }} />
            </Box>
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

      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
          border: '1px solid var(--accent-300)',
          borderRadius: 'var(--radius-xl)',
          padding: '24px',
          backgroundColor: 'var(--white)',
        }}
      >
        <Typography className="h3" color="var(--black)">
          {t('tr_addFieldServiceMeeting')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Autocomplete label={t('tr_type')} options={[]} />
          <Autocomplete label={t('tr_group')} options={[]} />
          <Autocomplete
            label={t('tr_conductor')}
            options={[]}
            endIcon={<IconSearch />}
          />
        </Box>
        <Divider color="var(--accent-200)" />
        {/* TODO: add DATE SELECTOR */}
        <Typography className="h4" color="var(--grey-400)">
          {t('tr_details')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap="16px"
            justifyContent="space-between"
            flex={1}
          >
            <TimePicker
              sx={{ flex: 1, height: '48px' }}
              label="Time"
              ampm={false}
              value={new Date('2023-11-19T12:00:00')}
            />
            <DatePicker
              sx={{ flex: 1, height: '48px' }}
              label="Date"
              value={new Date()}
            />
          </Box>
          <Autocomplete
            label={t('tr_location')}
            options={[]}
            sx={{ flex: 1 }}
          />
          <Autocomplete label={t('tr_address')} options={[]} sx={{ flex: 1 }} />
        </Box>
        <TextField label={t('tr_additionalInfo')} height={48} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Button variant="secondary" startIcon={<IconClose />} color="red">
            {t('tr_cancel')}
          </Button>
          <Button variant="secondary" startIcon={<IconCheck />}>
            {t('tr_done')}
          </Button>
        </Box>
      </Box>

      <Typography
        className="h4"
        color="var(--accent-400)"
        sx={{ marginTop: '8px' }}
      >
        {t('tr_midweek')}
      </Typography>
      {midweekMeetings.map((item) => (
        <MeetingItem key={item.id} title={item.title} />
      ))}

      <Typography
        className="h4"
        color="var(--accent-400)"
        sx={{ marginTop: '8px' }}
      >
        {t('tr_weekend')}
      </Typography>
      {weekendMeetings.map((item) => (
        <MeetingItem key={item.id} title={item.title} />
      ))}

      {midweekMeetings.length === 0 && weekendMeetings.length === 0 && (
        <InfoTip
          isBig={false}
          icon={<IconInfo />}
          color="blue"
          text={t('tr_noFieldServiceMeetings')}
        />
      )}
    </Box>
  );
};

export default MeetingAttendance;
