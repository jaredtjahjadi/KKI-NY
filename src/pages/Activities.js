import { useTranslation } from 'react-i18next';
function Activities() {
  const { t } = useTranslation();
  document.title = `Activities | ${t('name')}`;
  return (
    <div className="content">
        <ul>
          <li>{t('youthgroup')}</li>
          <li>{t('rosary')}</li>
        </ul>
    </div>
  );
}

export default Activities;