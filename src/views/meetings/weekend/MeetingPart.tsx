import { Text, View } from '@react-pdf/renderer';
import { MeetingPartType } from './index.types';
import { useAppTranslation } from '@hooks/index';
import styles from './index.styles';

const MeetingPart = ({ meetingData, lang }: MeetingPartType) => {
  const { t } = useAppTranslation();

  return (
    <>
      <View style={styles.meetingPartSectionRow}>
        {/* Chairman */}
        {!meetingData.wt_study_only && (
          <View style={styles.meetingPartContainer}>
            <Text style={styles.meetingPartLabel}>
              {t('tr_chairman', { lng: lang })}:
            </Text>
            <Text style={styles.meetingPartName}>
              {meetingData.chairman_name}
            </Text>
          </View>
        )}

        {/* Opening Prayer */}
        {meetingData.full && meetingData.opening_prayer_name && (
          <View style={styles.meetingPartContainer}>
            <Text style={styles.meetingPartLabel}>
              {t('tr_openingPrayer', { lng: lang })}:
            </Text>
            <Text style={styles.meetingPartName}>
              {meetingData.opening_prayer_name}
            </Text>
          </View>
        )}
      </View>

      {(meetingData.wtstudy_reader_name ||
        meetingData.wtstudy_conductor_name) && (
        <>
          {/* Horizontal separator */}
          {!meetingData.wt_study_only && <View style={styles.lineHorizontal} />}

          {/* WT Study conductor */}
          {meetingData.wtstudy_conductor_name && (
            <View style={styles.meetingPartContainer}>
              <Text style={styles.meetingPartLabel}>
                {t('tr_wtStudyConductor', { lng: lang })}:
              </Text>
              <Text style={styles.meetingPartName}>
                {meetingData.wtstudy_conductor_name}
              </Text>
            </View>
          )}

          {/* WT Study reader */}
          {meetingData.wtstudy_reader_name && (
            <View style={styles.meetingPartContainer}>
              <Text style={styles.meetingPartLabel}>
                {meetingData.wtstudy_conductor_name
                  ? t('tr_reader', { lng: lang })
                  : t('tr_wtStudyReader', { lng: lang })}
                :
              </Text>
              <Text style={styles.meetingPartName}>
                {meetingData.wtstudy_reader_name}
              </Text>
            </View>
          )}
        </>
      )}

      {meetingData.concluding_prayer_name && (
        <>
          {/* Horizontal separator */}
          <View style={styles.lineHorizontal} />

          {/* Closing prayer */}
          <View style={styles.meetingPartContainer}>
            <Text style={styles.meetingPartLabel}>
              {t('tr_closingPrayer', { lng: lang })}:
            </Text>
            <Text style={styles.meetingPartName}>
              {meetingData.concluding_prayer_name}
            </Text>
          </View>
        </>
      )}
    </>
  );
};

export default MeetingPart;
