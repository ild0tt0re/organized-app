import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BadgeColor } from '@definition/app';
import { PersonType } from '@definition/person';
import { useAppTranslation } from '@hooks/index';
import { displaySnackNotification } from '@services/recoil/app';
import { IconCheckCircle, IconError } from '@components/icons';
import { dbPersonsDelete } from '@services/dexie/persons';
import {
  personIsAP,
  personIsElder,
  personIsFMF,
  personIsFR,
  personIsFS,
  personIsInactive,
  personIsMS,
} from '@services/app/persons';

const usePersonCard = (person: PersonType) => {
  const navigate = useNavigate();

  const { t } = useAppTranslation();

  const [isDeleting, setIsDeleting] = useState(false);

  const getPersonBadge = useCallback(() => {
    const isElder = personIsElder(person);
    const isMS = personIsMS(person);
    const isAP = personIsAP(person);
    const isFMF = personIsFMF(person);
    const isFR = personIsFR(person);
    const isFS = personIsFS(person);

    const isBaptized = person.baptizedPublisher.active.value;
    const isUnbaptized = person.unbaptizedPublisher.active.value;
    const isMidweek = person.midweekMeetingStudent.active.value;
    const isDisqualified = person.isDisqualified.value;
    const isInactivePublisher = personIsInactive(person);

    const badges: { name: string; color: BadgeColor }[] = [];

    if (isDisqualified) {
      badges.push({ name: t('tr_disqualified'), color: 'red' });
    }

    if (isInactivePublisher) {
      badges.push({ name: t('tr_inactivePublisher'), color: 'red' });
    }

    if (!isDisqualified && !isInactivePublisher) {
      if (isElder) {
        badges.push({ name: t('tr_elder'), color: 'green' });
      }

      if (isMS) {
        badges.push({ name: t('tr_ministerialServant'), color: 'green' });
      }

      if (isAP) {
        badges.push({ name: t('tr_AP'), color: 'orange' });
      }

      if (isFMF) {
        badges.push({ name: t('tr_FMF'), color: 'orange' });
      }

      if (isFR) {
        badges.push({ name: t('tr_FR'), color: 'orange' });
      }

      if (isFS) {
        badges.push({ name: t('tr_FS'), color: 'orange' });
      }
    }

    const hasSpecialBadge = isDisqualified || isInactivePublisher || isElder || isMS || isAP || isFMF || isFR || isFS;

    if (!hasSpecialBadge || isDisqualified) {
      if (isBaptized) {
        badges.push({ name: t('tr_baptizedPublisher'), color: 'grey' });
      }

      if (isUnbaptized) {
        badges.push({ name: t('tr_unbaptizedPublisher'), color: 'grey' });
      }

      if (isMidweek) {
        badges.push({ name: t('tr_midweekStudent'), color: 'grey' });
      }
    }

    return badges.sort((a, b) => a.name.localeCompare(b.name));
  }, [t, person]);

  const handleDelete = () => setIsDeleting(true);

  const handleDeleteCancel = () => setIsDeleting(false);

  const handleDeleteConfirm = async () => {
    try {
      await dbPersonsDelete(person.person_uid);

      await displaySnackNotification({
        header: t('tr_personDeleted'),
        message: t('tr_personDeletedDesc'),
        severity: 'success',
        icon: <IconCheckCircle color="var(--white)" />,
      });
    } catch (error) {
      await displaySnackNotification({
        header: t('tr_errorTitle'),
        message: error.message,
        severity: 'error',
        icon: <IconError color="var(--white)" />,
      });
    }
  };

  const handleOpenPerson = async () => {
    navigate(`/persons/${person.person_uid}`);
  };

  return {
    badges: getPersonBadge(),
    isDeleting,
    handleDelete,
    handleDeleteCancel,
    handleDeleteConfirm,
    handleOpenPerson,
  };
};

export default usePersonCard;
