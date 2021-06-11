import { useTranslation } from 'react-i18next';
function Activities() {
  const { t } = useTranslation();
  document.title = `Activities | ${t('name')}`;
  return (
    <div className="content">
        <ul>
          <li>{t('activities.youthgroup')}</li>
          <li>{t('activities.rosary')}</li>
          <li>{t('activities.novena')}</li>
        </ul>
    </div>
  );
}

export default Activities;