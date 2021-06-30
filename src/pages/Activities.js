import { useTranslation } from 'react-i18next';

export default function Activities() {
  const { t } = useTranslation();
  document.title = `${t('pages.activities')} | ${t('name')}`;
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