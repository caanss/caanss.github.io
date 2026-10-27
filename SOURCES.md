# Kaynak ve doğrulama notları

Kontrol tarihi: 28 Ekim 2026.

## InsightFlow AI
- https://github.com/caanss/InsightFlow-AI
- Kontrol edilen ağaç: ea97020ed802f47cbff675568f59aaa2d656fcbf
- README ve `notebooks/InsightFlow_AI_Financial_EDA.ipynb` içindeki kayıtlı çıktılar kullanıldı.
- `assets/insight-1.png`–`insight-4.png` gerçek notebook çıktılarıdır; yeniden çizilmiş veya üretilmiş görseller değildir.
- Gelir artışı %13,23; COGS artışı %14,62; yıllık marj %52,81'den %52,23'e geriliyor. 216 gözlem, 19 kaynak sütunu, 24 ay.
- BigQuery analizi yeniden çalıştırılmadı. Özel kaynağa erişim gerekiyor. Kayıtlı assertion hücresi çalıştırılmamış. Toplamlar için para birimi tutarlılığı doğrulanmalı.
- Repoda Power BI dosyası/görseli yok. dbt ve AI Financial Analyst planlanan uzantılar. Sitede tamamlanmış özellik olarak sunulmadı.

## Steam Games
- https://github.com/caanss/steamgames
- Kontrol edilen ağaç: dfdc15d72be1e4cd681371fbf99b66691f306c65
- README, dbt dosya yapısı, `steam_games_ml_estimate.py`, `Steam_Games.pdf` ve `steamGamespProject.gif` kullanıldı.
- WebP görselleri repo GIF'inin 100, 200 ve 350. karelerinden alındı; renk filtresi uygulanmadı.
- Yaklaşık 99 bin oyun, 33 tür, 42 kategori ve oynanma segment sınırları proje sunumundan doğrulandı.
- Sunumda farklı ekranlarda 16M ve 124M gibi farklı yorum toplamları var. Filtre kapsamları açıklanmadığından tek bir genel yorum toplamı iddia edilmedi. Önceki tasarımdaki 15M+ taşınmadı.
- Ekip çalışmasıdır. Bireysel görev dağılımı ve doğrulanmış model skoru iddia edilmedi.

## LinkedIn
- https://github.com/caanss/linkedin
- Kontrol edilen ağaç: ee83ca0213d18c67865310b4eeb25639e8c67a91
- README, dbt dosya yapısı ve `linkedin-job-posting.gif` kullanıldı.
- WebP görselleri repo GIF'inin 100, 200 ve 350. karelerinden alındı.
- 124K ilan, 389 sektör; sağlık sektöründe yaklaşık 18K ilan / %14,34 ve California/Texas bulguları README'den alındı.
- Model ve istatistik bilgileri README'de anlatılıyor; mevcut ağaçta bağımsız ML notebook'u veya README'nin atıf yaptığı PDF yok. Bu nedenle yeniden üretilmiş sonuç ya da doğrulanmış skor iddia edilmedi.
- Dashboard görselleri tarihsel proje kayıtlarıdır; canlı Power BI bağlantısı değildir. Büyütme işlevi gerçek yerel görüntüyü açar.

## Kişisel bilgiler ve eski tasarım
- Yerel `Cansu Ayaz Portfolio (1).zip` incelendi. GitHub `caanss` ve LinkedIn bağlantıları buradan doğrulandı.
- CV: kullanıcının Downloads klasöründeki `DATA CV 26  TR- CA.pdf`, değiştirilmeden `assets/Cansu-Ayaz-CV.pdf` olarak kopyalandı. E-posta buradan doğrulandı.
- CV'deki program tarihleri ile bazı kamu profillerindeki tarihler örtüşmediğinden siteye deneyim tarihleri veya mezuniyet iddiası eklenmedi. CV özgün haliyle sunuluyor.
- Son iki referans ekran görüntüsü incelendi. Yeni tasarımda fotoğraf ve sepya filtresi kullanılmadı.

Bu paket, proje repolarını veya verilerini çalıştırmaz. Portfolyo arayüzü bağımsız ve çevrimdışı açılabilir; dış bağlantılar internet gerektirir.

Son sürümde Steam ve LinkedIn'in orijinal GIF kayıtları, daha küçük animasyonlu WebP kopyaları olarak da sunulur. Ekran içerikleri değiştirilmez; oynatma, kapak slaydı yerine gerçek dashboard karesinden başlar. Durdurma düğmesi sabit görüntüye döner. Hareket azaltma tercihi korunur.
