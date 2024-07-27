import { Text, View } from '@react-pdf/renderer';
import { useAppTranslation } from '@hooks/index';
import styles from './index.styles';

const S89StudentNote = () => {
  const { t } = useAppTranslation();

  return (
    <View style={styles.studentNote}>
      <Text>{t('tr_s89DescFooter')}</Text>
    </View>
  );
};

export default S89StudentNote;
