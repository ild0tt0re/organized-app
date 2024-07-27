import { useEffect, useState } from 'react';
/* eslint-disable import/no-duplicates */
import { getWeeksInMonth, format } from 'date-fns';
import { enUS } from 'date-fns/locale';
/* eslint-enable import/no-duplicates */
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, ClickAwayListener, Stack } from '@mui/material';
import Button from '@components/button';
import Typography from '@components/typography';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { CustomDatePickerProps } from './date_picker.types';
import ButtonField, { FieldProps } from './view/button';
import DatePickerInputField from './view/input';
import {
  StyleDatePickerActionBar,
  StyleDatePickerDay,
  StyleDatePickerDesktopPaper,
  StyleDatePickerLayout,
  StyleDatePickerPopper,
  StyleDatePickerToolbar,
} from './date_picker.styles';
import { useAppTranslation } from '@hooks/index';

/**
 * Component for a custom date picker.
 * @param {CustomDatePickerProps} props - Props for the CustomDatePicker component.
 * @param {Date} props.value - The selected date value.
 * @param {('button' | 'input')} props.view - The view mode of the date picker, either 'button' or 'input'.
 * @param {string} props.label - The label for the date picker.
 * @param {boolean} props.disablePast - Indicates whether to disable selection of past dates.
 * @param {string} props.shortDateFormat - The short date format string.
 * @param {string} props.longDateFormat - The long date format string.
 * @param {Date} props.maxDate - The maximum selectable date.
 * @param {Date} props.minDate - The minimum selectable date.
 * @param {(value: Date) => void | Promise<void>} props.onChange - Function called when the selected date changes.
 * @returns {JSX.Element} CustomDatePicker component.
 */
const CustomDatePicker = ({
  value = null,
  onChange,
  view = 'input',
  label,
  disablePast,
  shortDateFormat,
  longDateFormat,
  maxDate = null,
  minDate = null,
}: CustomDatePickerProps) => {
  const { t } = useAppTranslation();

  const shortDateFormatLocale = shortDateFormat || t('tr_shortDateFormat');
  const longDateFormatLocale = longDateFormat || t('tr_longDateFormat');

  const [open, setOpen] = useState<boolean>(false);
  const [valueTmp, setValueTmp] = useState<Date | null>(value);
  const [innerValue, setInnerValue] = useState<Date | null>(value);

  const [height, setHeight] = useState(240); // Initial height

  const changeHeight = (event) => {
    if (
      getWeeksInMonth(new Date(event), { locale: enUS, weekStartsOn: 0 }) === 6
    )
      setHeight(290);
    else setHeight(240);
  };

  const handleClickAway = () => {
    if (open) setOpen(false);
  };

  const viewProps =
    view === 'button'
      ? { field: ButtonField }
      : { textField: DatePickerInputField };

  const handleFormatSelected = (value) => {
    if (isNaN(Date.parse(value))) return '***';

    return format(value, longDateFormatLocale);
  };

  const handleValueChange = (value: Date) => {
    setInnerValue(value);

    if (view === 'button') {
      setValueTmp(value);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (getWeeksInMonth(new Date(), { locale: enUS, weekStartsOn: 0 }) === 6)
      setHeight(290);
  }, []);

  useEffect(() => {
    if (value === null && open) setInnerValue(new Date());
  }, [value, open]);

  useEffect(() => {
    setValueTmp(value);
    setInnerValue(value);
  }, [value]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ width: '100%' }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            slots={{
              ...viewProps,
              actionBar:
                view === 'button'
                  ? null
                  : () => (
                      <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        p={'12px'}
                        gap={'12px'}
                      >
                        <Button
                          variant="secondary"
                          onClick={() => {
                            setOpen(false);
                            setValueTmp(null);
                            onChange && onChange(null);
                          }}
                        >
                          {t('tr_clear')}
                        </Button>
                        <Button
                          variant="main"
                          onClick={() => {
                            setValueTmp(innerValue);
                            onChange && onChange(innerValue);
                            setOpen(false);
                          }}
                        >
                          OK
                        </Button>
                      </Stack>
                    ),
              toolbar:
                view === 'button'
                  ? null
                  : () => (
                      <Stack
                        direction={'column'}
                        sx={{
                          padding: '16px 12px 12px 24px',
                          borderBottom: '1px solid var(--accent-200)',
                        }}
                      >
                        <Typography
                          className="body-small-semibold"
                          color={'var(--grey-400)'}
                        >
                          {t('tr_selectDate')}
                        </Typography>
                        <Typography className="h2">{`${handleFormatSelected(innerValue)}`}</Typography>
                      </Stack>
                    ),
            }}
            open={open}
            minDate={minDate}
            maxDate={maxDate}
            disablePast={disablePast}
            yearsPerRow={3}
            showDaysOutsideCurrentMonth={true}
            onMonthChange={changeHeight}
            onChange={handleValueChange}
            onOpen={() => setOpen(true)}
            value={valueTmp}
            slotProps={{
              textField: {
                onClick: () => setOpen(true),
                label: label,
                value: valueTmp,
              },
              field: {
                format: shortDateFormatLocale,
                setOpen: setOpen,
                value: valueTmp,
              } as FieldProps,
              popper: {
                sx: {
                  ...StyleDatePickerPopper,
                  '.MuiDateCalendar-viewTransitionContainer': {
                    overflow: 'hidden',
                  },
                  '.MuiDayCalendar-slideTransition': {
                    minHeight: `${height}px`,
                    '@media (max-width:322px)': {
                      minHeight: `${height - 38}px`,
                    },
                  },
                },
              },
              layout: StyleDatePickerLayout,
              day: StyleDatePickerDay,
              desktopPaper: StyleDatePickerDesktopPaper,
              toolbar: StyleDatePickerToolbar,
              actionBar: StyleDatePickerActionBar,
            }}
          />
        </LocalizationProvider>
      </Box>
    </ClickAwayListener>
  );
};

export default CustomDatePicker;
