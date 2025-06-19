import { useState } from 'react';
import { Box } from '@mui/material';
import {
  IconAdd,
  IconDate,
  IconEventAvailable,
  IconInfo,
  IconNavigateLeft,
  IconNavigateRight,
  IconPrint,
} from '@components/icons';
import Button from '@components/button';
import PageTitle from '@components/page_title';
import ButtonGroup from '@components/button_group';
import InfoTip from '@components/info_tip';
import Typography from '@components/typography';
import FilterChip from '@components/filter_chip';
import { useAppTranslation, useCurrentUser } from '@hooks/index';
import MeetingItem from '@features/congregation/field_service_meetings/meeting_item';
import FieldServiceMeetingForm from '@features/congregation/field_service_meetings/field_service_meeting_form';
import { StyledNavigationArrowButton } from '@features/meetings/midweek_editor/index.styles';

const filters = [
  { id: 1, name: 'All' },
  { id: 2, name: 'My group' },
  { id: 3, name: 'Joint' },
  { id: 4, name: 'Zoom' },
];

const MeetingAttendance = () => {
  const { t } = useAppTranslation();
  const [isAddingNewMeeting, setIsAddingNewMeeting] = useState(false);
  const [filterId, setFilterId] = useState('All');

  const { isSecretary, isGroup } = useCurrentUser();
  const midweekMeetings = [
    {
      id: 1,
      title: 'Meeting 1',
      type: 'My group',
      badges: ['Service overseer visit'],
    },
    { id: 2, title: 'Meeting 2', type: 'Joint', badges: ['Joint meeting'] },
    { id: 3, title: 'Meeting 3', type: 'Zoom', badges: ['Group 8'] },
  ];

  const weekendMeetings = [
    { id: 1, title: 'Meeting 2', type: 'Zoom', badges: ['Group 1'] },
    {
      id: 2,
      title: 'Meeting 1',
      type: 'My group',
      badges: ['Service overseer visit'],
    },
    {
      id: 3,
      title: 'Meeting 3',
      type: 'Joint',
      badges: ['Group 3 - Outlined'],
    },
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
                onClick={() => setIsAddingNewMeeting(true)}
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
          {filters.map((filter) => (
            <FilterChip
              key={filter.id}
              label={filter.name}
              selected={filter.name === filterId}
              // selected={filtersKey.includes(filter.id)}
              onClick={() => setFilterId(filter.name)}
            />
          ))}
        </Box>
      </Box>

      {isAddingNewMeeting && (
        <FieldServiceMeetingForm
          handleCloseForm={() => {
            setIsAddingNewMeeting(false);
          }}
        />
      )}

      <Typography
        className="h4"
        color="var(--accent-400)"
        sx={{ marginTop: '8px' }}
      >
        {t('tr_midweek')}
      </Typography>
      {midweekMeetings
        .filter((item) => item.type === filterId || filterId === 'All')
        .map((item) => (
          <MeetingItem key={item.id} {...item} />
        ))}

      <Typography
        className="h4"
        color="var(--accent-400)"
        sx={{ marginTop: '8px' }}
      >
        {t('tr_weekend')}
      </Typography>
      {weekendMeetings.map((item) => (
        <MeetingItem key={item.id} {...item} />
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
