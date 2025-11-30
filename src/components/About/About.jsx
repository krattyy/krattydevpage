import selfie from "../pictures/selfie.jpg";
import "./About.css";

export default function Hakkimda() {
  return (
    <div className="aboutPart">
      <div className="aboutGlass">
        <h2 id="header">Hakkımda Daha Fazla</h2>

        <p id="pr1">
          Adım Tuna Enes Kızılırmak, 2000 yılında Ankara'da doğdum. Hacettepe
          Üniversitesi İletişim Fakültesi İletişim Bilimleri bölümünden mezun
          oldum. Mezun olmadan önce yaptığım stajlarda bölümümle alakalı
          sektörlerin pek hoşuma gitmediğini fark etmemle beraber kodlama
          serüvenim başladı. Öncelikle siber güvenliğe yoğunlaşıp bir süre siber
          güvenlik eğitimi aldım. Kodlamaya ise Python temellerini öğrenerek
          başladım ve daha sonrasında C# temelleri ile devam ettim. C# seçmemin
          nedeni hem .Net altyapısını öğrenmek (henüz .Net altyapısına tam giriş
          yapamadım) hem de Unity ile oyun geliştirme alanına da adım
          atabilmekti. Fakat sonrasında web geliştirme alanına yöneldim. Bunun
          en büyük sebebi üniversitede aldığım tasarım bilgisini web geliştirme
          alanında da Front-End Developer olarak kullabileceğimi fark etmemle
          oldu. Şu an aktif olarak birinci önceliğim başarılı bir Front-End
          Developer olmak. Bu yüzden HTML, CSS, Javascript ve React gibi
          teknolojiler üzerinde yoğunlaşıyorum. Fullstack kurs almamdan kaynaklı
          Back-End tarafında da Express.js ile az da olsa bir bilgim var ancak
          asıl hedefim Front-End tarafında uzmanlaşmak.
        </p>

        <div id="fotoparagraf">
          <p id="pr2">
            Boş zamanlarımda oyun oynamayı, film izlemeyi ve arkadaşlarımla
            vakit geçirmeyi seviyorum. Bir de evime kaçak giren, komşumun kedisi
            ile biraz güreşiyoruz. Yarı cins yarı tekir olmasından kaynaklı
            biraz manyak. Eğer arkadaşlarım varsa League of Legends, Valorant
            gibi oyunlar oynuyorum. Tek başımaysam Skyrim, Witcher 3 gibi RPG
            oyunları tercih ediyorum. İçine dalabileceğim evrenler hoşuma
            gidiyor.
          </p>
          <img id="Selfie" src={selfie} alt="Selfie" width={400} />
        </div>

        <div id="muzik" className="container">
          <div id="left-iframe">
            <iframe
              id="black"
              src="https://open.spotify.com/embed/track/5Xak5fmy089t0FYmh3VJiY?utm_source=generator"
              style={{ borderRadius: "12px" }}
              width="300"
              height="300"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <div id="text">
            <p id="pr3">
              Müzik zevkim ise tam bir çorba. Pop, rock, metal, rap, game
              soundtrack hepsini dinlerim. Yeter ki şarkı güzel olsun. Ancak en
              en en önceliğim Rock müzik. "Alice in Chains - Nutshell" ve "Pearl
              Jam - Black" gibi şarkılar favorilerim arasında.
            </p>
          </div>

          <div id="right-iframe">
            <iframe
              id="nutshell"
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/2JuasWPUodaUxf5nwNpciQ?utm_source=generator"
              width="300"
              height="300"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="cv">
        <h2>Özgeçmiş</h2>
        <div className="egitim">
          <ul>
            <h3>Eğitim</h3>
            <li>
              Hacettepe Üniversitesi İletişim Fakültesi İletişim Bilimleri ---
              2019-2024
            </li>
            <li>
              Anadolu Üniversitesi Açık Öğretim Fakültesi Bilgisayar
              Programcılığı --- 2024-Günümüz
            </li>
          </ul>
        </div>
        <div className="yetenekler">
          <ul>
            <h3>Yetenekler</h3>
            <li>HTML, CSS, JavaScript, React, Node.js</li>
            <li>Python (Temel Seviye)</li>
            <li>C# (Temel Seviye)</li>
            <li>Temel Siber Güvenlik Bilgisi</li>
          </ul>
        </div>
        <div className="diller">
          <ul>
            <h3>Diller</h3>
            <li>Türkçe (Ana Dil)</li>
            <li>İngilizce (İleri Seviye)</li>
          </ul>
        </div>
        <div className="deneyimler">
          <ul>
            <h3>Deneyimler</h3>
            <li>
              Stajyer, İhlas Haber Ajansı, Ankara --- Yaz 2022 (1 Ay) - Stajyer
              Kameraman
            </li>
            <li>
              Stajyer, Tivi 6, Ankara --- İlkbahar 2023 (1 Ay) - Stüdyo
              Kameramanı
            </li>
          </ul>
        </div>
        <div className="kurslar">
          <ul>
            <h3>Aldığım Kurslar</h3>
            <li>
              Udemy, The Complete Full-Stack Web Development Bootcamp, Dr.
              Angela Yu
            </li>
            <li>
              Udemy, C# Kursu: Yeni Başlayanlar için C# Programlama Dersleri,
              Sadık Turan
            </li>
            <li>Udemy, Etik Hacker Olma Kursu, Atıl Samancıoğlu</li>
            <li>
              AI for Everyone, Hacettepe Üniversitesi Yapay Zeka Topluluğu
            </li>
            <li>
              Makine Öğrenmesi Eğitimi, Hacettepe Üniversitesi Yapay Zeka
              Topluluğu
            </li>
            <li>
              Python İle Programlamaya Giriş Eğitimi, Hacettepe Üniversitesi
              Yapay Zeka Topluluğu
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
