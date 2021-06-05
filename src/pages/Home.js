import { useTranslation } from 'react-i18next';

function Home() {
  document.title = "Home | Indonesian Catholic Community - NY";
  const { t } = useTranslation();
  return (
    <div className="content">
        {t('welcome')}<br />
        Website for Indonesian Catholic Community - NY: WIP.<br />
        Situs web untuk Keluarga Katolik Indonesia New York (KKI-NY) sedang dalam proses.<br />
        KKI NY adalah singkatan dari Keluarga Katolik Indonesia di New York. Di dalam wadah ini berkumpul masyarakat Katolik Indonesia yang bermukim di kota New York dan sekitarnya untuk bersama-sama mengembangkan tali persaudaraan dan keimanan.<br />
        Dipelopori oleh beberapa keluarga di tahun 1985, organisasi ini mengadakan misa kudus dari rumah ke rumah para anggotanya. Kini jumlah anggota dari KKI NY lebih dari 400 orang. Kegiatan yang dilakukan secara rutin adalah Misa Kudus bersama setiap minggu kedua dan keempat, persekutuan doa, doa rosario, KTM/Komunitas Tritunggal Mahakudus dan beberapa macam kegiatan yang lain.<br />
        KKI NY merupakan organisasi resmi dibawah naungan CMO (Catholic Migration Office) di Keuskupan Brooklyn yang membawahi 27 kerasulan dari berbagai negara di dunia.<br />
        Sebagai bagian dari komunitas umat Katolik Indonesia di New York dan sekitarnya, KKI NY adalah merupakan organisasi dari, untuk dan oleh komunitas ini sendiri sehingga apabila Anda berkeinginan untuk memberikan donasi silakan mengirimkannya ke alamat Sekretariat KKI NY. Donasi berupa check, make payable to THE COMPOSTELA FUND OF THE RC DIOCESE OF BROOKLYN (tulis di Memo: Indonesian Ministry – KKI NY). Sebagai tambahan, donasi/sumbangan ini adalah bersifat tax-deductible. Saat ini kami juga menerima donation melalui Paypal. Terimakasih atas kemurahan hati Bapak/Ibu/Sdr/Sdri.<br />
        Kami berharap apabila Anda atau relasi anda berkunjung ke New York dan ingin terlibat dalam kegiatan KKI NY, silakan menghubungi Sekretariat kami.<br />
        Salam damai dalam Kristus,<br />
        Pengurus KKI NY<br />
    </div>
  );
}

export default Home;