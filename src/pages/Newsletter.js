import { useTranslation } from 'react-i18next';

export default function Newsletter() {
  const { t } = useTranslation();
  document.title = `${t('pages.newsletter')} | ${t('name')}`;
  return (
    <div className="content">
      WIP<br />
      Monthly bulletins will be displayed here.
    </div>
  );
}