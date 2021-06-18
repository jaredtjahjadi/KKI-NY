import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    document.title = `About | ${t('name')}`;
    return (
        <>
            <div className="content">
                {t('about.p1')}<br /><br />
                {t('about.p2')}<br /><br />
                {t('about.p3')}<br /><br />
                {t('about.p4')}<br /><br />
                {t('about.p5')}<br /><br />
                {t('about.p6')}<br /><br />
                {t('about.p7')}<br /><br />
                {t('about.p8')}<br /><br />
                {t('about.p9')}<br /><br />
                {t('about.p10')}<br /><br />
                {t('about.p11')}<br /><br />
                {t('about.p12')}<br /><br />
                {t('about.p13')}<br /><br />
                {t('about.p14')}<br /><br />
                {t('about.p15')}<br /><br />
                {t('about.p16')}
            </div>
        </>
    );
}