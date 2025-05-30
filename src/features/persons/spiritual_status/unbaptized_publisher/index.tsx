import { Box, Collapse } from '@mui/material';
import { UnbaptizedPublisherType } from './index.types';
import { useAppTranslation, useCurrentUser } from '@hooks/index';
import useUnbaptizedPublisher from './useUnbaptizedPublisher';
import DateHistory from '../../date_history';
import FirstReport from '../first_report';
import GroupSelector from '@features/congregation/field_service_groups/group_selector';
import SpiritualStatusTitle from '../title';
import StatusHistory from '../history';

const UnbaptizedPublisher = ({
  checked,
  onChange,
  expanded,
  onExpand,
}: UnbaptizedPublisherType) => {
  const { t } = useAppTranslation();

  const { isPersonEditor } = useCurrentUser();

  const {
    handleAddHistory,
    handleDeleteHistory,
    handleEndDateChange,
    handleStartDateChange,
    activeHistory,
    handleToggleActive,
    handleToggleExpand,
    isActive,
    isExpanded,
    group,
    group_overseer,
    handleGroupChange,
  } = useUnbaptizedPublisher();

  return (
    <Box>
      <SpiritualStatusTitle
        checked={checked}
        onChange={(_, checked) => onChange(checked)}
        title={t('tr_unbaptizedPublisher')}
        isExpanded={expanded}
        onExpand={onExpand}
      />

      <Collapse in={expanded} timeout="auto" collapsedSize={0}>
        <Box
          sx={{
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <FirstReport />

          <GroupSelector
            showEdit={true}
            includeLanguageGroup={true}
            value={group}
            onChange={handleGroupChange}
            helperText={group_overseer}
            readOnly={!isPersonEditor}
          />

          <StatusHistory
            active={isActive}
            onChange={handleToggleActive}
            expanded={isExpanded}
            onExpand={handleToggleExpand}
            showAdd={activeHistory.length === 0}
            onAdd={handleAddHistory}
            history={
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginTop: '8px',
                }}
              >
                {activeHistory.map((history, index) => (
                  <DateHistory
                    key={history.id}
                    id={history.id}
                    start_date={history.start_date}
                    end_date={history.end_date}
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

export default UnbaptizedPublisher;
