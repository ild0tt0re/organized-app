import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { GenderType, PersonOptionsType, PersonSelectorType } from './index.types';
import { PersonType } from '@definition/person';
import { useRecoilValue } from 'recoil';
import { personsActiveState, personsState } from '@states/persons';
import { displayNameEnableState, fullnameOptionState, userDataViewState } from '@states/settings';
import { personGetDisplayName } from '@utils/common';
import { AssignmentCode } from '@definition/assignment';
import { useAppTranslation } from '@hooks/index';
import { assignmentsHistoryState, schedulesState } from '@states/schedules';
import { dbSchedUpdate } from '@services/dexie/schedules';
import { sourcesState } from '@states/sources';
import { JWLangState } from '@states/app';
import { sourcesCheckAYFExplainBeliefsAssignment, sourcesCheckLCElderAssignment } from '@services/app/sources';
import { personIsElder } from '@services/app/persons';
import { AssignmentCongregation, SchedWeekType } from '@definition/schedules';
import { UpdateSpec } from 'dexie';
import { LivingAsChristiansType } from '@definition/sources';
import { formatDate } from '@services/dateformat';

const usePersonSelector = ({ type, week, assignment }: PersonSelectorType) => {
  const { t } = useAppTranslation();

  const personsAll = useRecoilValue(personsActiveState);
  const displayNameEnabled = useRecoilValue(displayNameEnableState);
  const fullnameOption = useRecoilValue(fullnameOptionState);
  const schedules = useRecoilValue(schedulesState);
  const sources = useRecoilValue(sourcesState);
  const dataView = useRecoilValue(userDataViewState);
  const persons = useRecoilValue(personsState);
  const lang = useRecoilValue(JWLangState);
  const history = useRecoilValue(assignmentsHistoryState);

  const [optionHeader, setOptionHeader] = useState('');
  const [options, setOptions] = useState<PersonOptionsType[]>([]);
  const [value, setValue] = useState<PersonOptionsType | null>(null);
  const [gender, setGender] = useState<GenderType>('male');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const labelBrothers = t('tr_brothers');
  const labelParticipants = t('tr_participants');

  const isAssistant = assignment.includes('Assistant');

  const schedule = schedules.find((record) => record.weekOf === week);
  const source = sources.find((record) => record.weekOf === week);

  const assignmentsHistory = history.filter((record) => record.assignment.person === value?.person_uid);

  const checkGenderSelector = () => {
    const validType = [
      AssignmentCode.MM_StartingConversation,
      AssignmentCode.MM_FollowingUp,
      AssignmentCode.MM_MakingDisciples,
    ];

    if (validType.includes(type)) {
      return true;
    }

    if (type === AssignmentCode.MM_ExplainingBeliefs) {
      if (source) {
        const partKeys = ['AYFPart1', 'AYFPart2', 'AYFPart3', 'AYFPart4'];
        for (const partKey of partKeys) {
          if (assignment.includes(partKey)) {
            const src = source.midweek_meeting[`ayf_part${partKey.slice(-1)}`].src[lang];
            const isTalk = sourcesCheckAYFExplainBeliefsAssignment(src);
            return !isTalk;
          }
        }
      }
    }
  };

  const getPersonDisplayName = useCallback(
    (option: PersonOptionsType) => {
      const result = personGetDisplayName(option, displayNameEnabled, fullnameOption);
      return result;
    },
    [displayNameEnabled, fullnameOption]
  );

  const assignmentPaths = useMemo(() => {
    return {
      MM_Chairman_A: 'midweek_meeting.chairman.main_hall',
      MM_Chairman_B: 'midweek_meeting.chairman.aux_class_1',
      MM_OpeningPrayer: 'midweek_meeting.opening_prayer',
      MM_TGWTalk: 'midweek_meeting.tgw_talk',
      MM_TGWGems: 'midweek_meeting.tgw_gems',
      MM_TGWBibleReading_A: 'midweek_meeting.tgw_bible_reading.main_hall',
      MM_TGWBibleReading_B: 'midweek_meeting.tgw_bible_reading.aux_class_1',
      MM_AYFPart1_Student_A: 'midweek_meeting.ayf_part1.main_hall.student',
      MM_AYFPart1_Assistant_A: 'midweek_meeting.ayf_part1.main_hall.assistant',
      MM_AYFPart1_Student_B: 'midweek_meeting.ayf_part1.aux_class_1.student',
      MM_AYFPart1_Assistant_B: 'midweek_meeting.ayf_part1.aux_class_1.assistant',
      MM_AYFPart2_Student_A: 'midweek_meeting.ayf_part2.main_hall.student',
      MM_AYFPart2_Assistant_A: 'midweek_meeting.ayf_part2.main_hall.assistant',
      MM_AYFPart2_Student_B: 'midweek_meeting.ayf_part2.aux_class_1.student',
      MM_AYFPart2_Assistant_B: 'midweek_meeting.ayf_part2.aux_class_1.assistant',
      MM_AYFPart3_Student_A: 'midweek_meeting.ayf_part3.main_hall.student',
      MM_AYFPart3_Assistant_A: 'midweek_meeting.ayf_part3.main_hall.assistant',
      MM_AYFPart3_Student_B: 'midweek_meeting.ayf_part3.aux_class_1.student',
      MM_AYFPart3_Assistant_B: 'midweek_meeting.ayf_part3.aux_class_1.assistant',
      MM_AYFPart4_Student_A: 'midweek_meeting.ayf_part4.main_hall.student',
      MM_AYFPart4_Assistant_A: 'midweek_meeting.ayf_part4.main_hall.assistant',
      MM_AYFPart4_Student_B: 'midweek_meeting.ayf_part4.aux_class_1.student',
      MM_AYFPart4_Assistant_B: 'midweek_meeting.ayf_part4.aux_class_1.assistant',
      MM_LCPart1: 'midweek_meeting.lc_part1',
      MM_LCPart2: 'midweek_meeting.lc_part2',
      MM_LCPart3: 'midweek_meeting.lc_part3',
      MM_LCCBSConductor: 'midweek_meeting.lc_cbs.conductor',
      MM_LCCBSReader: 'midweek_meeting.lc_cbs.reader',
      MM_ClosingPrayer: 'midweek_meeting.closing_prayer',
    };
  }, []);

  const handleGenderUpdate = (e: MouseEvent<HTMLLabelElement>, value: GenderType) => {
    e.preventDefault();
    setGender(value);
  };

  const getScheduleData = (schedule: SchedWeekType, path: string) => {
    const pathParts = path.split('.');
    let current: unknown = schedule;

    for (const part of pathParts) {
      if (current === undefined || current === null) {
        return undefined;
      }
      current = current[part];
    }

    return current as AssignmentCongregation | AssignmentCongregation[];
  };

  const handleSaveAssignment = async (value: PersonOptionsType) => {
    const toSave = value ? value.person_uid : '';
    const path = assignmentPaths[assignment];
    const fieldUpdate = structuredClone(getScheduleData(schedule, path));

    if (Array.isArray(fieldUpdate)) {
      const toUpdate = fieldUpdate.find((record) => record.type === dataView);
      toUpdate.value = toSave;
      toUpdate.updatedAt = new Date().toISOString();
    } else {
      fieldUpdate.value = toSave;
      fieldUpdate.updatedAt = new Date().toISOString();
    }

    const dataDb = { [path]: fieldUpdate } as unknown as UpdateSpec<SchedWeekType>;

    await dbSchedUpdate(week, dataDb);
  };

  const handleFormatDate = useCallback(
    (value: string) => {
      return formatDate(new Date(value), t('tr_shortDateFormat'));
    },
    [t]
  );

  const handleSortOptions = useCallback(
    (options: PersonOptionsType[]) => {
      const newPersons = options.map((record) => {
        const lastAssignment = history.find(
          (item) =>
            item.assignment.person === record.person_uid && item.assignment.code !== AssignmentCode.MM_AssistantOnly
        );
        const lastAssignmentFormat = lastAssignment ? handleFormatDate(lastAssignment.weekOf) : '';

        const lastAssistant = history.find((item) => item.assignment.ayf?.assistant === record.person_uid);
        const lastAssistantFormat = lastAssistant ? handleFormatDate(lastAssistant.weekOf) : '';

        const classroom = lastAssignment?.assignment.classroom;
        const hall = classroom === '1' ? t('tr_hallA') : classroom === '2' ? t('tr_hallB') : '';

        return {
          ...record,
          last_assignment: lastAssignmentFormat,
          last_assistant: lastAssistantFormat,
          hall,
        };
      });

      newPersons.sort((a, b) => {
        // If both 'last_assignment' fields are empty, sort by name
        if (a.last_assignment.length === 0 && b.last_assignment.length === 0) {
          return getPersonDisplayName(a).localeCompare(getPersonDisplayName(b));
        }

        // If 'last_assignment' of 'a' is empty, 'a' should come first
        if (a.last_assignment.length === 0) {
          return -1;
        }

        // If 'last_assignment' of 'b' is empty, 'b' should come first
        if (b.last_assignment.length === 0) {
          return 1;
        }

        // If both 'last_assignment' fields are not empty, sort by date

        return new Date(a.last_assignment).toISOString().localeCompare(new Date(b.last_assignment).toISOString());
      });

      return newPersons;
    },
    [handleFormatDate, history, t, getPersonDisplayName]
  );

  const handleOpenHistory = () => setIsHistoryOpen(true);

  const handleCloseHistory = () => setIsHistoryOpen(false);

  useEffect(() => {
    const brothers = [
      AssignmentCode.MM_Chairman,
      AssignmentCode.MM_Prayer,
      AssignmentCode.MM_TGWTalk,
      AssignmentCode.MM_TGWGems,
      AssignmentCode.MM_LCPart,
    ];

    if (brothers.includes(type)) {
      setOptionHeader(labelBrothers);
    } else {
      setOptionHeader(labelParticipants);
    }
  }, [type, labelBrothers, labelParticipants]);

  useEffect(() => {
    const isMale = gender === 'male';
    const isFemale = gender === 'female';

    const getLCSources = (part: LivingAsChristiansType) => {
      const srcOverride = part.title.override.find((record) => record.type === dataView);
      const srcDefault = part.title.default[lang];
      const src = srcOverride?.value.length > 0 ? srcOverride.value : srcDefault;

      const descOverride = part.desc.override.find((record) => record.type === dataView);
      const descDefault = part.desc.default[lang];
      const desc = descOverride?.value.length > 0 ? descOverride.value : descDefault;

      return { src, desc };
    };

    const getPersons = (isElder: boolean) => {
      let persons = personsAll.filter((record) =>
        record.person_data.assignments
          .filter((assignment) => assignment._deleted === false)
          .find((item) => item.code === type)
      );

      if (isElder) {
        persons = persons.filter((record) => personIsElder(record));
      }

      return persons;
    };

    if (!isAssistant) {
      if (type !== AssignmentCode.MM_LCPart) {
        const persons = personsAll.filter(
          (record) =>
            record.person_data.male.value === isMale &&
            record.person_data.female.value === isFemale &&
            record.person_data.assignments
              .filter((assignment) => assignment._deleted === false)
              .find((item) => item.code === type)
        );

        const options = handleSortOptions(persons);

        setOptions(options);
      }

      if (type === AssignmentCode.MM_LCPart) {
        const source = sources.find((record) => record.weekOf === week);
        if (source) {
          const lcParts = ['MM_LCPart1', 'MM_LCPart2', 'MM_LCPart3'];

          if (lcParts.includes(assignment)) {
            const path = assignment.replace('MM_', '').replace('LC', 'LC_').toLowerCase();
            const part = source.midweek_meeting[path];

            const { src, desc } = getLCSources(part);
            const isElder = sourcesCheckLCElderAssignment(src, desc);
            const persons = getPersons(isElder);

            const options = handleSortOptions(persons);
            setOptions(options);
          }
        }
      }
    }
  }, [
    type,
    personsAll,
    gender,
    isAssistant,
    week,
    assignment,
    dataView,
    lang,
    sources,
    history,
    handleFormatDate,
    handleSortOptions,
  ]);

  useEffect(() => {
    const assistantType = [
      AssignmentCode.MM_StartingConversation,
      AssignmentCode.MM_FollowingUp,
      AssignmentCode.MM_MakingDisciples,
      AssignmentCode.MM_ExplainingBeliefs,
    ];

    if (week.length > 0) {
      const path = assignmentPaths[assignment];

      if (path) {
        setGender('male');

        let mainStudent: PersonType;

        if (isAssistant) {
          setValue(null);
          setOptions([]);

          const pathMainStudent = assignmentPaths[assignment.replace('Assistant', 'Student')];
          const data = getScheduleData(schedule, pathMainStudent) as AssignmentCongregation[];

          const mainPerson = data.find((record) => record.type === dataView)?.value;
          mainStudent = persons.find((record) => record.person_uid === mainPerson);

          if (mainStudent) {
            const gender = mainStudent.person_data.male.value ? 'male' : 'female';
            setGender(gender);

            const isMale = mainStudent.person_data.male.value;
            const isFemale = mainStudent.person_data.female.value;

            const newPersons = personsAll.filter(
              (record) =>
                record.person_data.male.value === isMale &&
                record.person_data.female.value === isFemale &&
                record.person_data.assignments
                  .filter((assignment) => assignment._deleted === false)
                  .some((assignment) => assistantType.includes(assignment.code))
            );

            const options = handleSortOptions(newPersons);
            setOptions(options);
          }
        }

        if (!isAssistant || (isAssistant && mainStudent)) {
          const dataSchedule = getScheduleData(schedule, path);
          let person_uid: string;

          if (Array.isArray(dataSchedule)) {
            person_uid = dataSchedule.find((record) => record.type === dataView)?.value;
          } else {
            person_uid = dataSchedule.value;
          }

          const person = persons.find((record) => record.person_uid === person_uid);

          if (person && person.person_data.female.value) {
            setGender('female');
          }

          if (person && person.person_data.male.value) {
            setGender('male');
          }

          setValue(person || null);
        }
      }
    }
  }, [
    week,
    schedule,
    dataView,
    persons,
    assignment,
    personsAll,
    isAssistant,
    assignmentPaths,
    handleFormatDate,
    history,
    handleSortOptions,
  ]);

  return {
    options,
    getPersonDisplayName,
    optionHeader,
    value,
    handleSaveAssignment,
    showGenderSelector: checkGenderSelector(),
    gender,
    handleGenderUpdate,
    isAssistant,
    type,
    handleOpenHistory,
    isHistoryOpen,
    handleCloseHistory,
    assignmentsHistory,
  };
};

export default usePersonSelector;
