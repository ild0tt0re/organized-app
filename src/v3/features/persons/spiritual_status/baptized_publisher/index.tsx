import { Box, Collapse, FormControlLabel, RadioGroup } from '@mui/material';
import DateHistory from '../../date_history';
import DatePicker from '@components/date_picker';
import FirstReport from '../first_report';
import Radio from '@components/radio';
import SpiritualStatusTitle from '../title';
import Typography from '@components/typography';
import { BaptizedPublisherType } from './index.types';
import { useAppTranslation, useBreakpoints } from '@hooks/index';
import useBaptizedPublisher from './useBaptizedPublisher';
import StatusHistory from '../history';

const BaptizedPublisher = ({ checked, onChange, expanded, onExpand }: BaptizedPublisherType) => {
  const { t } = useAppTranslation();

  const { tabletDown } = useBreakpoints();

  const {
    person,
    handleAddHistory,
    handleDeleteHistory,
    handleEndDateChange,
    handleStartDateChange,
    handleFirstReportChange,
    handleToggleHope,
    handleChangeBaptismDate,
    age,
    activeHistory,
    handleToggleExpand,
    isExpanded,
    isActive,
    handleToggleActive,
  } = useBaptizedPublisher();

  return (
    <Box>
      <SpiritualStatusTitle
        checked={checked}
        onChange={(_, checked) => onChange(checked)}
        title={t('tr_baptizedPublisher')}
        isExpanded={expanded}
        onExpand={onExpand}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
            <Typography className="body-small-semibold" color="var(--grey-350)">
              {t('tr_hope')}
            </Typography>
            <RadioGroup
              sx={{ marginLeft: '4px', flexDirection: 'row', gap: tabletDown ? '16px' : '24px', flexWrap: 'wrap' }}
              value={person.person_data.publisher_baptized.anointed.value ? 'anointed' : 'otherSheep'}
              onChange={(e) => handleToggleHope(e.target.value)}
            >
              <FormControlLabel
                value="otherSheep"
                control={<Radio />}
                label={<Typography className="body-regular">{t('tr_otherSheep')}</Typography>}
              />
              <FormControlLabel
                value="anointed"
                control={<Radio />}
                label={<Typography className="body-regular">{t('tr_anointed')}</Typography>}
              />
            </RadioGroup>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: tabletDown ? 'flex-start' : 'center',
              flexWrap: 'wrap',
              width: '100%',
              flexDirection: tabletDown ? 'column' : 'row',
            }}
          >
            <Box sx={{ flexGrow: 1, width: tabletDown ? '100%' : 'unset' }}>
              <DatePicker
                label={t('tr_baptismDate')}
                value={
                  person.person_data.publisher_baptized.baptism_date.value === null
                    ? null
                    : new Date(person.person_data.publisher_baptized.baptism_date.value)
                }
                onChange={handleChangeBaptismDate}
                maxDate={new Date()}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: 'var(--accent-150)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-l)',
                height: tabletDown ? 'auto' : '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '120px',
              }}
            >
              <Typography className="h4" color="var(--accent-dark)">
                {t('tr_yearsNumber', { yearsCount: age })}
              </Typography>
            </Box>
          </Box>

          <FirstReport value={person.person_data.first_month_report.value} onChange={handleFirstReportChange} />

          <StatusHistory
            active={isActive}
            onChange={handleToggleActive}
            expanded={isExpanded}
            onExpand={handleToggleExpand}
            showAdd={activeHistory.length === 0}
            onAdd={handleAddHistory}
            history={
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
                {activeHistory.map((history, index) => (
                  <DateHistory
                    key={history.id}
                    id={history.id}
                    start_date={history.start_date.value}
                    end_date={history.end_date.value}
                    isLast={index === activeHistory.length - 1}
                    onAdd={handleAddHistory}
                    onDelete={handleDeleteHistory}
                    onStartDateChange={handleStartDateChange}
                    onEndDateChange={handleEndDateChange}
                  />
                ))}
              </Box>
            }
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default BaptizedPublisher;
