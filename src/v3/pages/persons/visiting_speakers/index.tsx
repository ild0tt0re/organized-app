import { Box } from '@mui/material';
import { IconAdd } from '@components/icons';
import { Button, PageTitle } from '@components/index';
import { useAppTranslation, useBreakpoints } from '@hooks/index';
import { IncomingSpeakers, OutgoingSpeakers } from '@features/index';
import useVisitingSpeakers from './useVisitingSpeakers';

const VisitingSpeakers = () => {
  const { t } = useAppTranslation();

  const { desktopUp } = useBreakpoints();

  const { handleIsAddingOpen } = useVisitingSpeakers();

  return (
    <Box sx={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <PageTitle
        title={t('tr_visitingSpeakers')}
        buttons={
          <Button
            variant="main"
            startIcon={<IconAdd />}
            onClick={handleIsAddingOpen}
          >
            {t('tr_addCongregation')}
          </Button>
        }
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: desktopUp ? 'row' : 'column',
          gap: '16px',
          borderRadius: 'var(--radius-xl)',
        }}
      >
        <OutgoingSpeakers />
        <IncomingSpeakers />
      </Box>
    </Box>
  );
};

export default VisitingSpeakers;
