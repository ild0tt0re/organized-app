import { Box, Collapse, IconButton } from '@mui/material';
import { IconAdd, IconExpand } from '@components/icons';
import Button from '@components/button';
import Checkbox from '@components/checkbox';
import { useAppTranslation } from '@hooks/index';
import { StatusHistoryType } from './index.types';

const StatusHistory = ({
  active,
  expanded,
  onExpand,
  history,
  onAdd,
  showAdd,
  onChange,
}: StatusHistoryType) => {
  const { t } = useAppTranslation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Checkbox label="Active" checked={active} onChange={onChange} />
        <IconButton sx={{ padding: 0 }} onClick={onExpand}>
          <IconExpand
            color="var(--black)"
            sx={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
            }}
          />
        </IconButton>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {showAdd && (
          <Button
            variant="small"
            startIcon={<IconAdd />}
            sx={{
              height: '32px',
              minHeight: '32px !important',
              alignSelf: 'flex-start',
            }}
            onClick={onAdd}
          >
            {t('tr_add')}
          </Button>
        )}

        {history}
      </Collapse>
    </Box>
  );
};

export default StatusHistory;
