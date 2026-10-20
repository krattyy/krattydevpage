import selfie from "../pictures/selfie.jpg";
import "./About.css";

export default function About() {
  return (
    <article className="about-page fade-up">
      <header className="page-header">
        <p className="page-kicker">Hakkımda</p>
        <h1 className="page-title">Merhaba, ben Tuna.</h1>
      </header>

      <section className="about-intro">
        <p>2000 yılında Ankara&apos;da doğdum.</p>
        <p>
          Hacettepe Üniversitesi İletişim Fakültesi İletişim Bilimleri
          bölümünden mezun oldum. Stajlarda sektörün bana uymadığını görünce
          kodlamaya yöneldim.
        </p>
        <p>
          Python ve C# temelleriyle başladım; ardından web geliştirmeye
          geçtim. Şu an önceliğim başarılı bir fullstack developer olmak.
        </p>
      </section>

      <section className="about-split">
        <div className="about-aside-copy">
          <p>
            Boş zamanlarımda oyun oynamayı, film izlemeyi ve arkadaşlarımla
            vakit geçirmeyi seviyorum.
          </p>
          <p>
            Evime kaçak giren komşu kedisiyle de biraz güreşiyoruz. Arkadaşlarla
            League of Legends veya Valorant; yalnızken Skyrim, Witcher 3 gibi
            RPG&apos;ler — içine dalabileceğim evrenler hoşuma gidiyor.
          </p>
        </div>
        <div className="about-photo-wrap">
          <img
            className="about-photo"
            src={selfie}
            alt="Tuna Enes Kızılırmak"
          />
        </div>
      </section>

      <section className="cv-section">
        <h2>Özgeçmiş</h2>

        <div className="cv-grid">
          <div className="cv-block">
            <h3>Eğitim</h3>
            <ul className="timeline">
              <li>
                <strong>Hacettepe Üniversitesi</strong>
                <span>İletişim Fakültesi · İletişim Bilimleri</span>
                <em>2019–2024</em>
              </li>
              <li>
                <strong>Anadolu Üniversitesi Açıköğretim Fakültesi</strong>
                <span>Yönetim Bilişim Sistemleri</span>
                <em>2026–Günümüz</em>
              </li>
            </ul>
          </div>

          <div className="cv-block">
            <h3>Deneyimler</h3>
            <ul className="timeline">
              <li>
                <strong>OdakGIS</strong>
                <span>Stajyer Yazılım Geliştirici</span>
                <em>Temmuz 2026–Günümüz</em>
              </li>
              <li>
                <strong>İhlas Haber Ajansı, Ankara</strong>
                <span>Stajyer Kameraman</span>
                <em>Ağustos 2022–Eylül 2022</em>
              </li>
              <li>
                <strong>Tivi 6, Ankara</strong>
                <span>Stüdyo Kameramanı</span>
                <em>Nisan 2023–Mayıs 2023</em>
              </li>
            </ul>
          </div>

          <div className="cv-block">
            <h3>Yetenekler</h3>
            <ul className="plain-list">
              <li>JavaScript / TypeScript</li>
              <li>React.js</li>
              <li>.NET</li>
              <li>C#</li>
            </ul>
          </div>

          <div className="cv-block">
            <h3>Diller</h3>
            <ul className="plain-list">
              <li>Türkçe — ana dil</li>
              <li>İngilizce — ileri seviye</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
