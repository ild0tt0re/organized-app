import { useAppTranslation } from '@hooks/index';
import useLinkPrayerSelector from './useLinkPrayerSelector';
import MenuItem from '@components/menuitem';
import Select from '@components/select';
import Typography from '@components/typography';
import { AssignmentFieldType } from '@definition/assignment';

const LinkPrayerSelector = () => {
  const { t } = useAppTranslation();
  const { assignment, options, handleAssignmentChange } =
    useLinkPrayerSelector();

  return (
    <>
      <Typography className="body-small-regular" color="var(--grey-400)">
        {t('tr_linkedPartsDesc')}
      </Typography>
      <Select
        label={t('tr_linkOpeningPrayer')}
        fullWidth={false}
        sx={{ width: '100%', flex: 1 }}
        value={assignment}
        onChange={(e) =>
          handleAssignmentChange(e.target.value as AssignmentFieldType)
        }
      >
        {options.map((opt) => (
          <MenuItem key={opt.id} value={opt.id}>
            <Typography>{opt.name}</Typography>
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default LinkPrayerSelector;
