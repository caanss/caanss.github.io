const dialog = document.getElementById('lightbox');
const largeImage = document.getElementById('large-image');
const caption = document.getElementById('image-caption');
let trigger;
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    trigger = button;
    largeImage.src = button.querySelector('img').currentSrc || button.dataset.image;
    largeImage.alt = button.querySelector('img').alt;
    caption.textContent = button.dataset.caption;
    dialog.showModal();
  });
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
dialog.addEventListener('close', () => trigger?.focus());

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('img[data-gif]').forEach(img => {
  const still = img.dataset.poster;
  const control = document.createElement('button');
  control.type = 'button';
  control.className = 'motion-control';
  img.closest('figure').append(control);
  let playing = false;
  function setPlaying(value) {
    playing = value;
    img.src = playing ? img.dataset.gif : still;
    control.textContent = playing ? 'Ⅱ Animasyonu durdur' : '▷ Dashboard turunu oynat';
    control.setAttribute('aria-label', img.alt + ': ' + (playing ? 'animasyonu durdur' : 'animasyonu oynat'));
    control.setAttribute('aria-pressed', String(playing));
    window.refreshMotionLabels?.();
  }
  control.addEventListener('click', () => setPlaying(!playing));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) setPlaying(false);
  });
  setPlaying(false);
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      if (!reducedMotion.matches) setPlaying(true);
      observer.disconnect();
    }
  }, { rootMargin: '150px' });
  observer.observe(img);
});

// Same-page Turkish / English content, including accessible labels.
const englishCopy = {"Cansu Ayaz — Verinin Ötesinde.": "Cansu Ayaz — Beyond the Data.", "İçeriğe geç": "Skip to content", "Projeler": "Projects", "Hakkımda": "About", "CV indir ↓": "Download CV ↓", "Tanışalım": "Let’s connect", "VERİ × İNSAN DAVRANIŞI × GERÇEK ETKİ": "DATA × HUMAN BEHAVIOR × REAL IMPACT", "Verinin": "Beyond", "Ötesinde": "the Data", "Karmaşık verileri, insan odaklı bir bakış açısıyla analiz ederek anlamlı içgörülere dönüştürüyorum.": "I turn complex data into meaningful insights through analysis grounded in an understanding of people.", "Projelerimi keşfet": "Explore my projects", "Hakkımda daha fazla ↓": "More about me ↓", "Doğru sorular. Güçlü analiz. Anlamlı kararlar.": "Thoughtful questions. Rigorous analysis. Meaningful decisions.", "01 / SEÇİLMİŞ ÇALIŞMALAR": "01 / SELECTED WORK", "Veriden içgörüye.": "From data to insight.", "Gerçek sorular, şeffaf yöntemler,": "Real questions, transparent methods,", "kanıta dayalı bulgular.": "evidence-based findings.", "FİNANSAL PERFORMANS · 2024–2025": "FINANCIAL PERFORMANCE · 2024–2025", "Gelir büyürken kârlılık": "As revenue grows,", "aynı hızda ilerliyor mu?": "does profitability keep pace?", "Üç ürün ve üç bölgede gelir, maliyet ve brüt kârı inceleyen finansal analiz. Büyümenin arkasındaki maliyet baskısını görünür kılan bir çalışma.": "A financial analysis of revenue, costs and gross profit across three products and three regions, revealing the cost pressure behind growth.", "%13,23": "13.23%", "Yıllık gelir büyümesi": "Annual revenue growth", "−0,58 puan": "−0.58 pp", "Brüt marj değişimi": "Gross margin change", "GitHub’da incele ↗": "Explore on GitHub ↗", "Gerçek notebook çıktısı": "Original notebook output", "Görseli büyüt ↗": "Enlarge image ↗", "BULGU": "FINDING", "Maliyetler %14,62 büyüyerek gelir artışını aştı. Büyüme, marjı korumaya tek başına yetmedi.": "Costs grew by 14.62%, outpacing revenue. Growth alone was not enough to protect margins.", "Vaka çalışmasını oku": "Read the case study", "İş sorusu": "Business question", "Core, Plus ve Premium ürünlerinde; Central, North ve South bölgelerinde büyüme ve kârlılık nasıl değişiyor?": "How do growth and profitability vary across Core, Plus and Premium products in the Central, North and South regions?", "Veri & yöntem": "Data & method", "216 gözlem, 19 kaynak sütunu ve 24 ay. BigQuery’den alınan veride Python ile eksik değer, tekrar ve finansal mutabakat kontrolleri; ürün, bölge ve aylık analizler.": "216 observations, 19 source columns and 24 months. Data from BigQuery was checked in Python for missing values, duplicates and financial reconciliation, followed by product, regional and monthly analyses.", "Karara katkısı": "Decision support", "Premium, %53,95 ile en yüksek toplam ürün marjına sahip. Core’un marjı %49,87. Fiyat, indirim ve birim maliyetlerin ürün bazında incelenmesi öneriliyor.": "Premium has the highest aggregate product margin at 53.95%, compared with 49.87% for Core. The analysis recommends reviewing pricing, discounts and unit costs by product.", "Kapsam & sınırlar": "Scope & limitations", "Rakamlar kayıtlı notebook çıktılarından alınmıştır; veri kaynağına erişim gerektiren analiz yeniden çalıştırılmadı. Para birimi tutarlılığı doğrulanmalı. Power BI dosyaları repoda yok; dbt ve AI Financial Analyst planlanan uzantılar. Analiz nedensellik göstermez.": "Figures come from saved notebook outputs; the analysis requiring source access has not been rerun. Currency consistency needs verification. Power BI files are not in the repository; dbt and an AI Financial Analyst are planned extensions. The analysis does not establish causality.", "POWER BI · GERÇEK PROJE GÖRÜNTÜSÜ": "POWER BI · ORIGINAL PROJECT CAPTURE", "OYUN VERİSİ & DAVRANIŞ": "GAME DATA & BEHAVIOR", "Oyuncu deneyimini": "Understanding player experience", "veriden okumak.": "through data.", "Oyun türleri, fiyatlandırma, oynanma süreleri ve memnuniyeti bir araya getiren uçtan uca ekip projesi.": "An end-to-end team project connecting game genres, pricing, playtime and player satisfaction.", "≈99 bin": "≈99K", "Analiz edilen oyun": "Games analyzed", "3 katman": "3 layers", "dbt veri modelleme": "dbt data modeling", "Problem & yöntem": "Problem & method", "Oyunların fiyatı, türü, oynanma süresi ve olumlu değerlendirme oranı arasındaki örüntüler incelendi. BigQuery ve dbt ile staging, intermediate ve mart katmanları kuruldu; Power BI ile analiz ekranları hazırlandı.": "The project explored patterns in game prices, genres, playtime and positive review rates. Staging, intermediate and mart layers were built with BigQuery and dbt, with analysis dashboards in Power BI.", "Somut çıktı": "Deliverables", "Repo sunumunda 33 tür, 42 kategori ve yaklaşık 99 bin oyun yer alıyor. Oynanma segmentleri kısa (<2,33 saat), orta (2,33–5,63 saat) ve uzun (>5,63 saat) olarak tanımlanıyor.": "The repository presentation covers 33 genres, 42 categories and approximately 99K games. Playtime segments are defined as short (<2.33 hours), medium (2.33–5.63 hours) and long (>5.63 hours).", "Makine öğrenmesi": "Machine learning", "Python kodunda fiyat, DLC, başarımlar, öneriler ve tür gibi özelliklerle olumlu değerlendirme oranı tahmini ele alınıyor. Bu portfolyo doğrulanmamış model başarı skoru sunmuyor.": "The Python code explores predicting positive review rates using features such as price, DLC, achievements, recommendations and genre. This portfolio does not report an unverified model performance score.", "Ekip & sınırlar": "Team & limitations", "Seren Erbaş, Cansu Ayaz, Esra Cantürk ve Mustafa Can. Bireysel görev dağılımı repoda açıklanmıyor. Dashboard ekranları farklı filtre kapsamlarına sahip; yorum sayıları tek bir genel toplam gibi sunulmuyor.": "Seren Erbaş, Cansu Ayaz, Esra Cantürk and Mustafa Can. Individual responsibilities are not specified in the repository. Dashboard screens use different filter scopes, so review counts are not presented as a single overall total.", "Proje sunumunu aç ↗": "Open project presentation ↗", "İŞ PİYASASI ANALİZİ · ABD": "JOB MARKET ANALYSIS · USA", "LinkedIn İş İlanları": "LinkedIn Job Postings", "İş fırsatları": "Where are job", "nerede yoğunlaşıyor?": "opportunities concentrated?", "2023–2024 ABD iş ilanlarında sektör, şirket, lokasyon, maaş ve aday etkileşimini inceleyen ekip projesi.": "A team project exploring industries, companies, locations, salaries and candidate engagement in US job postings from 2023–2024.", "İstatistik": "Statistics", "≈124 bin": "≈124K", "İş ilanı": "Job postings", "Sektör": "Industries", "İşe alım talebinin sektör, şirket ve coğrafyaya dağılımı araştırıldı. BigQuery ve SQL/dbt veri modelleri, Power BI görselleştirmeleri ve istatistiksel hipotez testleri bir araya getirildi.": "Hiring demand was explored across industries, companies and locations, combining BigQuery and SQL/dbt data models, Power BI visualizations and statistical hypothesis testing.", "Öne çıkan bulgu": "Key finding", "Hastaneler ve sağlık hizmetleri yaklaşık 18 bin ilanla toplamın %14,34’ünü oluşturuyor. California yaklaşık 11 bin, Texas yaklaşık 10 bin ilanla öne çıkıyor.": "Hospitals and healthcare account for approximately 18K postings, or 14.34% of the total. California stands out with approximately 11K postings, followed by Texas with approximately 10K.", "İçgörü & modelleme": "Insights & modeling", "İlanın yayında kalma süresi ile görüntülenmesi arasında pozitif ama zayıf ilişki bildiriliyor. Maaş tahmini için Linear Regression; eksik değer işleme, IQR, One-Hot Encoding ve eğitim/test ayrımı kullanılıyor.": "A positive but weak relationship is reported between listing duration and views. Salary prediction uses Linear Regression with missing-value handling, IQR, One-Hot Encoding and a train/test split.", "Seren Kayran Erbaş, Cansu Ayaz, Esra Cantürk ve Gökberk Ozan. Bulgular repo README’sine dayanıyor; model başarısı için sayısal skor yayımlanmıyor. İlişki, nedensellik anlamına gelmez.": "Seren Kayran Erbaş, Cansu Ayaz, Esra Cantürk and Gökberk Ozan. Findings are based on the repository README; no numerical model performance score is published. Association does not imply causation.", "Proje bilgileri GitHub README, kod, sunum ve kayıtlı çıktılarından derlendi · 28 Ekim 2026.": "Project information compiled from GitHub READMEs, code, presentations and saved outputs · 28 October 2026.", "Kaynak notları ↗": "Source notes (TR) ↗", "02 / HAKKIMDA": "02 / ABOUT", "Veriye": "I approach data", "insan": "through a human", "perspektifinden": "perspective.", "bakıyorum.": "", "Klinik psikoloji geçmişim, insan davranışlarını anlamaya, doğru soruları sormaya ve örüntüleri dikkatle değerlendirmeye dayanıyor.": "My background in clinical psychology is grounded in understanding human behavior, asking thoughtful questions and carefully evaluating patterns.", "Bu bakış açısını veri analitiğiyle birleştiriyorum. SQL ve Python ile veriyi hazırlıyor; BigQuery, dbt ve Power BI ile analizden anlaşılır görselleştirmelere uzanan çalışmalar yapıyorum.": "I bring this perspective to data analytics: preparing data with SQL and Python, and using BigQuery, dbt and Power BI to turn analysis into clear visualizations.", "İstatistik & EDA": "Statistics & EDA", "Veri görselleştirme": "Data visualization", "Özgeçmişimi incele ↗": "View my CV ↗", "03 / İLETİŞİM": "03 / CONTACT", "Birlikte anlam": "Let’s find meaning", "çıkaralım.": "together.", "Veri analitiği fırsatları, projeler": "For data analytics opportunities, projects", "ve yeni fikirler için tanışalım.": "and new ideas, let’s connect.", "01 / TANIŞALIM": "01 / LET’S CONNECT", "02 / KODLARI KEŞFET": "02 / EXPLORE THE CODE", "03 / DENEYİMİ İNCELE": "03 / EXPLORE MY EXPERIENCE", "04 / DOĞRUDAN YAZ": "04 / GET IN TOUCH", "E-posta ↗": "Email ↗", "© 2026 · Merakla, veriden anlam çıkararak.": "© 2026 · Finding meaning in data, driven by curiosity.", "Yukarı dön ↑": "Back to top ↑", "Kapat ×": "Close ×", "Ⅱ Animasyonu durdur": "Ⅱ Stop animation", "▷ Dashboard turunu oynat": "▷ Play dashboard tour", "animasyonu durdur": "stop animation", "animasyonu oynat": "play animation", "Cansu Ayaz ana sayfa": "Cansu Ayaz home", "Ana menü": "Main navigation", "Proje görseli": "Project image", "Görseli kapat": "Close image", "InsightFlow finansal analiz grafiğini büyüt": "Enlarge InsightFlow financial analysis chart", "Steam dashboard görselini büyüt": "Enlarge Steam dashboard image", "LinkedIn dashboard görselini büyüt": "Enlarge LinkedIn dashboard image", "InsightFlow AI — notebook'ta kayıtlı aylık gelir, maliyet ve brüt kâr grafiği.": "InsightFlow AI — original monthly revenue, cost and gross profit chart saved in the notebook.", "2024–2025 aylık gelir, maliyet ve brüt kâr çizgileri. Mart 2025'te gelir zirve yapıyor.": "Monthly revenue, cost and gross profit for 2024–2025. Revenue peaks in March 2025.", "Steam Games — GitHub dashboard kaydından alınan gerçek ekran.": "Steam Games — original screen from the GitHub dashboard recording.", "LinkedIn Job Postings — GitHub dashboard kaydından alınan gerçek ekran.": "LinkedIn Job Postings — original screen from the GitHub dashboard recording.", "Steam Games Analytics Power BI dashboard ekranı": "Steam Games Analytics Power BI dashboard", "LinkedIn iş ilanları projesinin Power BI analiz ekranı": "LinkedIn Job Postings Power BI analysis dashboard"};

const originalTitle = document.title;
const copyNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script, style, .language-switch, .motion-control')) continue;
  const key = node.textContent.trim();
  if (Object.prototype.hasOwnProperty.call(englishCopy, key)) copyNodes.push({node, original:node.textContent, key});
}
const translatedAttributes = [];
document.querySelectorAll('[aria-label], [alt], [data-caption]').forEach(element => {
  if (element.closest('.language-switch, .motion-control')) return;
  ['aria-label', 'alt', 'data-caption'].forEach(attribute => {
    const original = element.getAttribute(attribute);
    if (Object.prototype.hasOwnProperty.call(englishCopy, original)) translatedAttributes.push({element, attribute, original});
  });
});
window.portfolioLanguage = 'tr';
window.translatePortfolioText = text => window.portfolioLanguage === 'en' && Object.prototype.hasOwnProperty.call(englishCopy,text) ? englishCopy[text] : text;
window.refreshMotionLabels = () => {
  document.querySelectorAll('.motion-control').forEach(control => {
    const playing = control.getAttribute('aria-pressed') === 'true';
    const img = control.closest('figure').querySelector('img');
    control.textContent = window.translatePortfolioText(playing ? 'Ⅱ Animasyonu durdur' : '▷ Dashboard turunu oynat');
    control.setAttribute('aria-label', img.alt + ': ' + window.translatePortfolioText(playing ? 'animasyonu durdur' : 'animasyonu oynat'));
  });
};
function setPortfolioLanguage(language) {
  const lang = language === 'en' ? 'en' : 'tr';
  window.portfolioLanguage = lang;
  document.documentElement.lang = lang;
  document.title = lang === 'en' ? englishCopy[originalTitle] : originalTitle;
  copyNodes.forEach(({node,original,key}) => {node.textContent = lang === 'en' ? original.replace(key, englishCopy[key]) : original;});
  translatedAttributes.forEach(({element,attribute,original}) => {element.setAttribute(attribute, lang === 'en' ? englishCopy[original] : original);});
  document.querySelectorAll('[data-tr-src]').forEach(img => {img.src = lang === 'en' ? img.dataset.enSrc : img.dataset.trSrc;});
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === lang)));
  const description = document.querySelector('meta[name="description"]');
  description.content = lang === 'en' ? 'Cansu Ayaz — human-centered data analytics. Selected case studies using SQL, Python, BigQuery and Power BI.' : 'Cansu Ayaz — insan davranışına duyarlı veri analitiği. SQL, Python, BigQuery ve Power BI ile seçilmiş vaka çalışmaları.';
  document.querySelectorAll('[data-cv-tr]').forEach(link => {
    link.href = lang === 'en' ? link.dataset.cvEn : link.dataset.cvTr;
    if (link.hasAttribute('download')) link.download = lang === 'en' ? 'Cansu-Ayaz-CV-EN.pdf' : 'Cansu-Ayaz-CV-TR.pdf';
  });
  window.refreshMotionLabels();
  try {localStorage.setItem('cansu-portfolio-language',lang);} catch (_) { /* File and privacy modes may disable storage. */ }
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setPortfolioLanguage(button.dataset.lang)));
let preferredLanguage = 'tr';
try {preferredLanguage = localStorage.getItem('cansu-portfolio-language') || 'tr';} catch (_) {}
setPortfolioLanguage(preferredLanguage);
