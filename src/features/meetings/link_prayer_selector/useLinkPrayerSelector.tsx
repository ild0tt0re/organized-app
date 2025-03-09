import { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ASSIGNMENT_PATH } from '@constants/index';
import { AssignmentFieldType } from '@definition/assignment';
// import { AssignmentCongregation } from '@definition/schedules';
import {
  schedulesGetData,
  // schedulesSaveAssignment,
  schedulesWeekGetAssigned,
} from '@services/app/schedules';
import { schedulesState, selectedWeekState } from '@states/schedules';
import useAppTranslation from '@hooks/useAppTranslation';

type LinkPrayerSelectorOption = {
  id: AssignmentFieldType;
  name: string;
};

const useLinkPrayerSelector = () => {
  const { t } = useAppTranslation();
  const schedules = useRecoilValue(schedulesState);
  const selectedWeek = useRecoilValue(selectedWeekState);
  const [assignment, setAssignment] =
    useState<AssignmentFieldType>('MM_Chairman_A');

  const options: LinkPrayerSelectorOption[] = [
    { id: 'DO_NOT_LINK', name: t('tr_doNotLink'), path: '' },
    {
      id: 'MM_Chairman_A',
      name: t('tr_chairman'),
    },
    {
      id: 'MM_OpeningPrayer',
      name: t('tr_prayer'),
    },
    {
      id: 'MM_Chairman_B',
      name: t('tr_auxClassCounselor'),
    },
    {
      id: 'MM_TGWTalk',
      name: t('tr_tgwTalk'),
    },
    {
      id: 'MM_TGWGems',
      name: t('tr_tgwGems'),
    },
    {
      id: 'MM_LCPart1',
      name: t('tr_lcPartNum', { partNumber: '1' }),
    },
    {
      id: 'MM_LCPart2',
      name: t('tr_lcPartNum', { partNumber: '2' }),
    },
    {
      id: 'MM_LCPart3',
      name: t('tr_lcPartNum', { partNumber: '3' }),
    },
    {
      id: 'MM_LCCBSConductor',
      name: t('tr_congregationBibleStudyConductor'),
    },
    {
      id: 'MM_LCCBSReader',
      name: t('tr_congregationBibleStudyReader'),
    },
    // TODO: do the same work in <WeekendEditor/> component?
    // WeekEnd Meeting
    // { id: 'WM_Chairman', name: t('tr_chairman'), path: ASSIGNMENT_PATH.WM_Chairman },
    // { id: 'WM_Prayer', name: t('tr_prayer'), path: ASSIGNMENT_PATH.WM_OpeningPrayer },
    // { id: 'WM_Speaker', name: t('tr_speaker'), path: ASSIGNMENT_PATH.WM_Speaker_Part1 },
    // { id: 'WM_SpeakerSymposium', name: t('tr_speakerSymposium'), path: ASSIGNMENT_PATH.WM_Speaker_Part2 },
    // { id: 'WM_WTStudyConductor', name: t('tr_watchtowerStudyConductor'), path: ASSIGNMENT_PATH.WM_WTStudy_Conductor },
    // { id: 'WM_WTStudyReader', name: t('tr_watchtowerStudyReader'), path: ASSIGNMENT_PATH.WM_WTStudy_Reader },
  ];

  const schedule = useMemo(() => {
    return schedules.find((record) => record.weekOf === selectedWeek);
  }, [schedules, selectedWeek]);

  const handleAssignmentChange = async (value) => {
    console.log(value);
    setAssignment(value);
    // OUTPUT:
    // TODO: return the value === UUID of the person. Use it to update the prayer assignment
    const dataSchedule = schedulesGetData(schedule, ASSIGNMENT_PATH[value]);
    // TODO: schedulesWeekGetAssigned get the assigned person name (use it in the MidweekEditor locked field)
    const assigned = schedulesWeekGetAssigned({
      schedule,
      assignment: value,
      dataView: 'main',
    });

    console.log(selectedWeek, schedule, dataSchedule, await assigned);

    // TODO: TODO: HOW TO SAVE THE DATA?
    // await schedulesSaveAssignment(schedule, 'WM_ClosingPrayer', dataValue);

    //################### ALTERNATIVE WAY TO SAVE DATA
    // const schedule = schedules.find((record) => record.weekOf === week);
    // const meetingType: AssignmentCongregation[] = structuredClone(
    //   schedule[`${meeting}_meeting`].week_type
    // );
    // const midweekUserRecord = meetingType.find(
    //   (record) => record.type === userDataView
    // );
    // midweekUserRecord.value = value;
    // midweekUserRecord.updatedAt = new Date().toISOString();
    // // TODO: UPDATE DB DATA (probably `schedulesSaveAssignment` is enough?)
    // const field = `${meeting}_meeting.week_type`;
    // const data = {
    //   [field]: meetingType,
    // } as unknown as UpdateSpec<SchedWeekType>;
    // await dbSchedUpdate(week, data);
  };

  return { options, assignment, handleAssignmentChange };
};

export default useLinkPrayerSelector;
