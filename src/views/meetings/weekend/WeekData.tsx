import { Text, View } from '@react-pdf/renderer';
import { Week } from '@definition/week_type';
import { WeekDataType } from './index.types';
import COTalks from './COTalks';
import EventData from './EventData';
import MeetingPart from './MeetingPart';
import SpeakersContainer from './SpeakersContainer';
import styles from './index.styles';
import {
  WEEK_TYPE_NO_MEETING,
  WEEKEND_WITH_TALKS,
  WEEKEND_WITH_WTSTUDY,
} from '@constants/index';

const WeekData = ({ isLast, meetingData, lang }: WeekDataType) => {
  return (
    <View
      style={[
        styles.weekContainer,
        isLast && {
          borderBottomLeftRadius: '6px',
          borderBottomRightRadius: '6px',
        },
      ]}
      wrap={false}
    >
      {/* 1st column: date */}
      <View
        style={[
          styles.dateContainer,
          isLast && { borderBottomLeftRadius: '6px' },
        ]}
      >
        <Text style={styles.dateText}>{meetingData.date_formatted}</Text>
      </View>

      {/* 2nd column: opening & WT study & closing prayer */}
      <View style={styles.meetingPartSection}>
        {(WEEKEND_WITH_WTSTUDY.includes(meetingData.week_type) ||
          WEEKEND_WITH_TALKS.includes(meetingData.week_type)) && (
          <MeetingPart meetingData={meetingData} lang={lang} />
        )}
      </View>

      {/* Verical separator */}
      <View style={styles.lineVertical} />

      {/* 3rd column: talks */}
      <View style={styles.talkContainer}>
        {WEEKEND_WITH_TALKS.includes(meetingData.week_type) &&
          meetingData.week_type !== Week.CO_VISIT && (
            <SpeakersContainer meetingData={meetingData} lang={lang} />
          )}

        {meetingData.week_type === Week.CO_VISIT && (
          <COTalks meetingData={meetingData} lang={lang} />
        )}

        {WEEK_TYPE_NO_MEETING.includes(meetingData.week_type) && (
          <EventData meetingData={meetingData} />
        )}
      </View>
    </View>
  );
};

export default WeekData;
