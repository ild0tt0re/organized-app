import { Box, Stack } from '@mui/material';
import {
  IconCheck,
  IconClose,
  IconDateError,
  IconEdit,
} from '@components/icons';
import { MonthItemProps } from './index.types';
import { useAppTranslation, useBreakpoints } from '@hooks/index';
import useMonthItem from './useMonthItem';
import Badge from '@components/badge';
import IconButton from '@components/icon_button';
import MonthDetails from '../month_details';
import ReportDetails from '../report_details';
import Tooltip from '@components/tooltip';
import Typography from '@components/typography';

const MonthItem = (props: MonthItemProps) => {
  const { t } = useAppTranslation();

  const { laptopDown } = useBreakpoints();

  const {
    monthname,
    monthStatus,
    bible_studies,
    isAP,
    comments,
    isCurrent,
    isAhead,
    handleHover,
    handleUnhover,
    editorOpen,
    handleCloseEditor,
    handleOpenEditor,
    not_publisher,
    credit_hours,
    field_hours,
    showEditIcon,
    showReadOnlyIcon,
  } = useMonthItem(props);

  return (
    <Tooltip title={t('tr_reportExcluded')} followCursor show={not_publisher}>
      <Box
        sx={{
          padding: '2px 8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          minHeight: '28px',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
      >
        {editorOpen && (
          <ReportDetails
            open={editorOpen}
            onClose={handleCloseEditor}
            month={props.month}
            person={props.person}
          />
        )}

        <Stack spacing="4px">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {not_publisher && (
              <IconDateError width={20} height={20} color="var(--grey-350)" />
            )}

            {!isCurrent && !isAhead && monthStatus === 'shared' && (
              <IconCheck width={20} height={20} color="var(--accent-main)" />
            )}

            {!isCurrent && !isAhead && monthStatus === 'not_shared' && (
              <IconClose width={20} height={20} color="var(--red-main)" />
            )}

            <Typography
              className="h4"
              sx={{
                color:
                  isAhead || not_publisher ? 'var(--grey-300)' : 'var(--black)',
              }}
            >
              {monthname}
            </Typography>

            {isAP && (
              <Badge
                className="label-small-medium"
                size="big"
                color="orange"
                sx={{ borderRadius: '2px', padding: '2px 6px' }}
                text={t('tr_AP')}
              />
            )}
          </Box>

          {laptopDown && (
            <MonthDetails
              bible_studies={bible_studies}
              isAhead={isAhead}
              isCurrent={isCurrent}
              field_hours={field_hours}
              credit_hours={credit_hours}
            />
          )}

          {!isCurrent && !isAhead && comments?.length > 0 && (
            <Typography className="body-small-regular" color="var(--grey-350)">
              {comments}
            </Typography>
          )}
        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {showEditIcon && (
            <IconButton sx={{ padding: 0 }} onClick={handleOpenEditor}>
              <IconEdit color="var(--accent-dark)" />
            </IconButton>
          )}

          {showReadOnlyIcon && (
            <Tooltip title={t('tr_reportReadOnly')}>
              <Box sx={{ display: 'flex' }}>
                <IconEdit color="var(--accent-200)" />
              </Box>
            </Tooltip>
          )}

          {!laptopDown && (
            <MonthDetails
              bible_studies={bible_studies}
              isAhead={isAhead}
              isCurrent={isCurrent}
              field_hours={field_hours}
              credit_hours={credit_hours}
            />
          )}
        </Box>
      </Box>
    </Tooltip>
  );
};

export default MonthItem;
