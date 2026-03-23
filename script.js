/* pupuru asia — Redesign Proposal: script.js */

// ── Translations ─────────────────────────────────────────────
const translations = {
  ja: {
    // Nav
    'nav-services':    'サービス',
    'nav-proposal':    '改善提案',
    'nav-strengths':   '強み',
    'nav-cases':       '導入事例',
    'nav-leadership':  '代表メッセージ',
    'nav-company':     '会社概要',
    'nav-contact':     'お問い合わせ',

    // Hero
    'hero-eyebrow':      'Asia Communication & VR Solutions',
    'hero-title':        'アジアビジネスの<br><span class="hero__title--accent">通信・VR課題</span>を<br>ワンストップで解決',
    'hero-sub':          '海外拠点の通信環境整備からVRを活用した遠隔トレーニングまで、<br class="pc-only">pupuru asiaがアジア全域でビジネスを支えます。',
    'hero-cta-primary':  '無料相談を予約する',
    'hero-cta-secondary':'サービス詳細を見る',
    'stat-area-label':   '対応エリア',
    'stat-clients-label':'導入実績',
    'stat-support-label':'サポート対応',

    // Services
    'services-eyebrow': 'Services',
    'services-title':   '提供サービス',
    'services-sub':     '通信とVR——２つの柱でアジアビジネスを完全支援',
    'comm-title': 'アジア通信ソリューション',
    'comm-desc':  'タイ・シンガポール・ベトナムなどアジア主要15カ国で、法人向けSIM・Wi-Fi・専用線を提供。海外拠点の開設から日常運用まで現地ネットワークに精通したチームがサポートします。',
    'comm-list':  '<li>法人データSIM（現地&amp;ローミング対応）</li><li>モバイルWi-Fiルーターレンタル・販売</li><li>拠点間専用線・VPN構築</li><li>クラウド回線管理ダッシュボード</li>',
    'comm-link':  '詳細を相談する →',
    'vr-title':   'VRビジネスソリューション',
    'vr-desc':    'VRを活用した遠隔トレーニング・施設案内・展示会体験を実現。アジア各国のスタッフへの教育コストを削減しながら、品質均一化と体験価値の向上を同時に達成します。',
    'vr-list':    '<li>VR研修コンテンツ制作・配信</li><li>バーチャルショールーム構築</li><li>VRヘッドセットの法人調達・管理</li><li>多言語対応（日本語・英語・タイ語他）</li>',
    'vr-link':    '詳細を相談する →',

    // Strengths
    'strengths-eyebrow': 'Why pupuru asia',
    'strengths-title':   '選ばれる３つの理由',
    's1-title': 'アジア現地に根ざしたネットワーク',
    's1-desc':  'バンコク・シンガポールに拠点を置き、各国の通信キャリア・規制に精通。現地対応スピードで他社に差をつけます。',
    's2-title': '通信×VRのワンストップ提供',
    's2-desc':  '通信基盤とVRコンテンツを一社で完結。ベンダー間の調整コストをゼロにし、導入をスムーズに進めます。',
    's3-title': '日本語・英語・タイ語 完全対応',
    's3-desc':  '日系企業のアジア展開に特化したトリリンガルチームが対応。日本本社と現地担当の橋渡し役として機能します。<br><small class="coming-soon">※多言語サイト順次公開予定</small>',

    // Cases
    'cases-eyebrow': 'Use Cases',
    'cases-title':   '導入事例',
    'cases-sub':     'さまざまな業界でpupuru asiaのソリューションが活躍しています',
    'case1-title':  'タイ工場でのVR安全教育導入',
    'case1-desc':   '従来の座学研修をVRに置き換え、教育時間を40%削減。事故率の大幅低下と多言語対応も実現。',
    'case1-result': '教育コスト <strong>40%削減</strong>',
    'case2-title':  'バーチャルショールームで商談効率化',
    'case2-desc':   '海外バイヤーが来訪不要でVR内覧。商談リードタイム短縮と海外顧客獲得率の向上を同時達成。',
    'case2-result': '海外商談数 <strong>2.5倍</strong>',
    'case3-title':  'アジア5拠点の通信を一元管理',
    'case3-desc':   'バラバラだったSIM・回線契約をpupuru asiaで統合。コスト可視化と一括管理により通信費を30%圧縮。',
    'case3-result': '通信費 <strong>30%削減</strong>',

    // Leadership
    'leadership-eyebrow': 'Leadership',
    'leadership-title':   '代表メッセージ',
    'leadership-sub':     'pupuru asiaが目指すアジアビジネスの未来',
    'leadership-role':    '代表取締役',
    'leadership-name-strong': '関 茂生',
    'leadership-quote':   '<p>アジアで事業を展開する日系企業にとって、通信インフラの安定と現地スタッフへの教育は、成長の根幹です。pupuru asiaは「つながる」と「伝える」という２つの力でその課題を解決し、御社のアジア戦略を加速させます。</p><p>バンコクを拠点に、タイ・シンガポール・ベトナムをはじめアジア15カ国以上の現場で培った知見を、法人SIMからVR研修まで一気通貫でご提供しています。日本語・英語・タイ語による三言語サポートで、本社と現地の橋渡しを担います。</p><p>ビジネスの現場でお困りのことがあれば、ぜひ一度ご相談ください。</p>',
    'leadership-footer':  'pupuru asia　代表取締役　関 茂生',

    // Company
    'company-eyebrow': 'Company',
    'company-title':   'pupuru asiaについて',
    'company-desc':    'pupuru asiaは、日系企業のアジア進出・現地運営を<strong>通信とVR</strong>でワンストップ支援する専門企業です。バンコクを拠点に、アジア15カ国以上の通信インフラと現地規制に精通したチームが、法人SIM・専用線からVR研修コンテンツ制作まで一貫して対応します。日本語・英語・タイ語の3言語サポートにより、本社と現地拠点の橋渡し役として多くの日系企業に選ばれています。',
    'co-label-name':     '会社名',
    'co-label-ceo':      '代表取締役',
    'co-label-founded':  '設立',
    'co-label-capital':  '資本金',
    'co-label-address':  '本社所在地',
    'co-label-area':     '対応エリア',
    'co-label-business': '事業内容',
    'co-label-hours':    '営業時間',
    'co-label-langs':    '対応言語',

    // Contact
    'contact-eyebrow': 'Contact',
    'contact-title':   'お問い合わせ・無料相談',
    'contact-sub':     'アジアの通信・VRに関するご相談は、まずお気軽にご連絡ください。',
    'form-company-label': '会社名',
    'form-name-label':    '担当者名',
    'form-email-label':   'メールアドレス',
    'form-phone-label':   '電話番号',
    'form-service-label': 'ご関心のサービス',
    'form-message-label': 'お問い合わせ内容',
    'form-submit':        '送信する',
    'form-note':          '※ 通常2営業日以内にご返信いたします。',
    'contact-direct-title': '直接のお問い合わせ',
    'contact-hours':        '受付時間：平日 9:00〜18:00（タイ時間 UTC+7）',
    'contact-sns-title':    'SNS・LINE',

    // Footer
    'footer-tagline':         'Connecting Asia. Innovating Tomorrow.',
    'footer-nav-services':    'サービス',
    'footer-nav-proposal':    '改善提案',
    'footer-nav-strengths':   '強み',
    'footer-nav-cases':       '導入事例',
    'footer-nav-company':     '会社概要',
    'footer-nav-contact':     'お問い合わせ',
  },

  th: {
    // Nav
    'nav-services':    'บริการ',
    'nav-proposal':    'ข้อเสนอ',
    'nav-strengths':   'จุดแข็ง',
    'nav-cases':       'กรณีศึกษา',
    'nav-leadership':  'สารจากผู้บริหาร',
    'nav-company':     'เกี่ยวกับเรา',
    'nav-contact':     'ติดต่อเรา',

    // Hero
    'hero-eyebrow':      'โซลูชันการสื่อสารและ VR ในเอเชีย',
    'hero-title':        'แก้ปัญหา<br><span class="hero__title--accent">การสื่อสารและ VR</span><br>ในธุรกิจเอเชีย ครบจบที่เดียว',
    'hero-sub':          'ตั้งแต่การจัดการโครงสร้างพื้นฐานสื่อสารสำหรับสำนักงานต่างประเทศ จนถึงการฝึกอบรมทางไกลด้วย VR — pupuru asia พร้อมสนับสนุนธุรกิจของคุณทั่วเอเชีย',
    'hero-cta-primary':  'ขอคำปรึกษาฟรี',
    'hero-cta-secondary':'ดูรายละเอียดบริการ',
    'stat-area-label':   'ประเทศที่ให้บริการ',
    'stat-clients-label':'ลูกค้าองค์กร',
    'stat-support-label':'บริการสนับสนุน',

    // Services
    'services-eyebrow': 'บริการของเรา',
    'services-title':   'บริการที่เราให้',
    'services-sub':     'การสื่อสารและ VR — สองเสาหลักเพื่อสนับสนุนธุรกิจในเอเชียอย่างครบวงจร',
    'comm-title': 'โซลูชันการสื่อสารในเอเชีย',
    'comm-desc':  'ให้บริการซิมองค์กร Wi-Fi และสายเช่าใน 15+ ประเทศหลักในเอเชีย รวมถึงไทย สิงคโปร์ และเวียดนาม ทีมงานผู้เชี่ยวชาญด้านเครือข่ายในพื้นที่พร้อมสนับสนุนทุกขั้นตอน',
    'comm-list':  '<li>ซิมข้อมูลองค์กร (รองรับ Local &amp; Roaming)</li><li>เช่า/ขาย Mobile Wi-Fi Router</li><li>สายเช่าระหว่างสาขา · VPN</li><li>แดชบอร์ดจัดการวงจรสื่อสารผ่านคลาวด์</li>',
    'comm-link':  'สอบถามรายละเอียด →',
    'vr-title':   'โซลูชัน VR เพื่อธุรกิจ',
    'vr-desc':    'นำ VR มาใช้สำหรับการฝึกอบรมทางไกล ทัวร์สถานที่เสมือนจริง และประสบการณ์นิทรรศการ ลดต้นทุนการฝึกอบรมพนักงานในเอเชีย พร้อมยกระดับคุณภาพและประสบการณ์ไปพร้อมกัน',
    'vr-list':    '<li>ผลิตและเผยแพร่คอนเทนต์ฝึกอบรม VR</li><li>สร้าง Virtual Showroom</li><li>จัดหาและบริหาร VR Headset องค์กร</li><li>รองรับหลายภาษา (ไทย · ญี่ปุ่น · อังกฤษ)</li>',
    'vr-link':    'สอบถามรายละเอียด →',

    // Strengths
    'strengths-eyebrow': 'ทำไมต้อง pupuru asia',
    'strengths-title':   '3 เหตุผลที่ลูกค้าเลือกเรา',
    's1-title': 'เครือข่ายที่หยั่งรากในเอเชีย',
    's1-desc':  'มีสำนักงานในกรุงเทพฯ และสิงคโปร์ เชี่ยวชาญผู้ให้บริการและกฎระเบียบด้านโทรคมนาคมในแต่ละประเทศ ตอบสนองได้รวดเร็วกว่าคู่แข่ง',
    's2-title': 'ครบจบที่เดียว: การสื่อสาร × VR',
    's2-desc':  'โครงสร้างพื้นฐานสื่อสารและคอนเทนต์ VR จากผู้ให้บริการรายเดียว ขจัดต้นทุนการประสานงานระหว่างผู้ขาย ดำเนินการได้ราบรื่น',
    's3-title': 'รองรับภาษาไทย · ญี่ปุ่น · อังกฤษ',
    's3-desc':  'ทีมไตรภาษาที่เชี่ยวชาญการขยายธุรกิจของบริษัทญี่ปุ่นในเอเชีย ทำหน้าที่เป็นสะพานเชื่อมระหว่างสำนักงานใหญ่และสาขาในพื้นที่<br><small class="coming-soon">※ ไซต์หลายภาษาเปิดตัวทยอยตาม</small>',

    // Cases
    'cases-eyebrow': 'กรณีศึกษา',
    'cases-title':   'ตัวอย่างลูกค้า',
    'cases-sub':     'โซลูชันของ pupuru asia ขับเคลื่อนธุรกิจหลากหลายอุตสาหกรรม',
    'case1-title':  'นำ VR มาใช้ฝึกอบรมความปลอดภัยในโรงงานไทย',
    'case1-desc':   'แทนที่การอบรมแบบบรรยายด้วย VR ลดเวลาฝึกอบรมลง 40% และลดอัตราอุบัติเหตุอย่างมีนัยสำคัญ รองรับหลายภาษา',
    'case1-result': 'ลดต้นทุนการฝึกอบรม <strong>40%</strong>',
    'case2-title':  'Virtual Showroom เพิ่มประสิทธิภาพการเจรจาธุรกิจ',
    'case2-desc':   'ผู้ซื้อต่างประเทศเข้าชมแบบ VR โดยไม่ต้องเดินทาง ลดระยะเวลา Lead และเพิ่มอัตราการได้ลูกค้าต่างชาติ',
    'case2-result': 'จำนวนการเจรจาต่างประเทศ <strong>เพิ่ม 2.5 เท่า</strong>',
    'case3-title':  'บริหารจัดการสื่อสาร 5 สาขาในเอเชียจากศูนย์กลาง',
    'case3-desc':   'รวมสัญญาซิมและวงจรที่กระจัดกระจายเข้าด้วยกันผ่าน pupuru asia มองเห็นต้นทุนและบริหารแบบรวมศูนย์ ลดค่าสื่อสาร 30%',
    'case3-result': 'ลดค่าสื่อสาร <strong>30%</strong>',

    // Leadership
    'leadership-eyebrow': 'ผู้บริหาร',
    'leadership-title':   'สารจากผู้บริหาร',
    'leadership-sub':     'วิสัยทัศน์ของ pupuru asia ต่ออนาคตธุรกิจเอเชีย',
    'leadership-role':    'กรรมการผู้จัดการ',
    'leadership-name-strong': 'Sek Shigeo',
    'leadership-quote':   '<p>สำหรับบริษัทญี่ปุ่นที่ดำเนินธุรกิจในเอเชีย โครงสร้างพื้นฐานสื่อสารที่มั่นคงและการพัฒนาบุคลากรในพื้นที่คือรากฐานแห่งการเติบโต pupuru asia แก้ปัญหาเหล่านี้ด้วยสองพลัง: "เชื่อมต่อ" และ "ส่งต่อ" เพื่อเร่งกลยุทธ์เอเชียของคุณ</p><p>จากฐานในกรุงเทพฯ เรานำความเชี่ยวชาญจากสนามจริงใน 15+ ประเทศ ทั้งไทย สิงคโปร์ และเวียดนาม มาให้บริการครบตั้งแต่ซิมองค์กรจนถึงการฝึกอบรม VR ทีมสนับสนุนสามภาษา (ไทย · ญี่ปุ่น · อังกฤษ) พร้อมเป็นสะพานระหว่างสำนักงานใหญ่และสาขาในพื้นที่</p><p>หากมีความท้าทายด้านธุรกิจ ยินดีให้คำปรึกษาเสมอ</p>',
    'leadership-footer':  'pupuru asia　กรรมการผู้จัดการ　Sek Shigeo',

    // Company
    'company-eyebrow': 'เกี่ยวกับบริษัท',
    'company-title':   'เกี่ยวกับ pupuru asia',
    'company-desc':    'pupuru asia คือผู้เชี่ยวชาญด้านการสนับสนุนการขยายธุรกิจของบริษัทญี่ปุ่นในเอเชีย ด้วย<strong>การสื่อสารและ VR</strong>ครบวงจร จากฐานในกรุงเทพฯ ทีมงานที่เชี่ยวชาญโครงสร้างพื้นฐานสื่อสารและกฎระเบียบใน 15+ ประเทศ พร้อมให้บริการตั้งแต่ซิมองค์กรและสายเช่า จนถึงการผลิตคอนเทนต์ฝึกอบรม VR การสนับสนุนสามภาษา (ไทย · ญี่ปุ่น · อังกฤษ) ทำให้บริษัทญี่ปุ่นหลายแห่งเลือกเราเป็นสะพานเชื่อมระหว่างสำนักงานใหญ่และสาขา',
    'co-label-name':     'ชื่อบริษัท',
    'co-label-ceo':      'กรรมการผู้จัดการ',
    'co-label-founded':  'ก่อตั้ง',
    'co-label-capital':  'ทุนจดทะเบียน',
    'co-label-address':  'สำนักงานใหญ่',
    'co-label-area':     'พื้นที่ให้บริการ',
    'co-label-business': 'ธุรกิจหลัก',
    'co-label-hours':    'เวลาทำการ',
    'co-label-langs':    'ภาษาที่รองรับ',

    // Contact
    'contact-eyebrow': 'ติดต่อเรา',
    'contact-title':   'สอบถามและขอคำปรึกษาฟรี',
    'contact-sub':     'หากมีคำถามเกี่ยวกับการสื่อสารหรือ VR ในเอเชีย ติดต่อเราได้เลย',
    'form-company-label': 'ชื่อบริษัท',
    'form-name-label':    'ชื่อผู้ติดต่อ',
    'form-email-label':   'อีเมล',
    'form-phone-label':   'โทรศัพท์',
    'form-service-label': 'บริการที่สนใจ',
    'form-message-label': 'รายละเอียดการสอบถาม',
    'form-submit':        'ส่งข้อความ',
    'form-note':          '※ เราจะตอบกลับภายใน 2 วันทำการ',
    'contact-direct-title': 'ติดต่อโดยตรง',
    'contact-hours':        'เวลาทำการ: จ–ศ 9:00–18:00 (เวลาไทย UTC+7)',
    'contact-sns-title':    'โซเชียลมีเดีย · LINE',

    // Footer
    'footer-tagline':         'เชื่อมต่อเอเชีย. นวัตกรรมแห่งวันพรุ่งนี้.',
    'footer-nav-services':    'บริการ',
    'footer-nav-proposal':    'ข้อเสนอ',
    'footer-nav-strengths':   'จุดแข็ง',
    'footer-nav-cases':       'กรณีศึกษา',
    'footer-nav-company':     'เกี่ยวกับเรา',
    'footer-nav-contact':     'ติดต่อเรา',
  },

  en: null, // coming soon
};

// ── Language switch ──────────────────────────────────────────
let currentLang = 'ja';

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return; // not ready yet

  document.documentElement.lang = lang === 'th' ? 'th' : 'ja';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update active state on all lang toggles (header + footer)
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  currentLang = lang;
}

// Bind all lang buttons (header + footer)
document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const lang = btn.getAttribute('data-lang');
    if (lang === 'en') {
      // Show a polite "coming soon" notice instead of doing nothing
      const notice = document.createElement('div');
      notice.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#0057FF;color:#fff;padding:12px 28px;border-radius:8px;font-size:14px;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.2);';
      notice.textContent = '🇬🇧 English version coming soon!';
      document.body.appendChild(notice);
      setTimeout(() => notice.remove(), 2500);
      return;
    }
    applyLanguage(lang);
  });
});

// ── Sticky header on scroll ──────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile hamburger menu ────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
});
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// ── Scroll-in animation (IntersectionObserver) ──────────────
const animatables = document.querySelectorAll(
  '.service-card, .strength-item, .case-card, .company__info, .company__map, .section-header'
);
animatables.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

animatables.forEach(el => observer.observe(el));

// ── Stagger children in grids ────────────────────────────────
['services__grid','strengths__grid','cases__grid'].forEach(cls => {
  const grid = document.querySelector('.' + cls);
  if (!grid) return;
  [...grid.children].forEach((child, i) => {
    child.style.transitionDelay = `${i * 100}ms`;
  });
});

// ── Smooth active nav highlight on scroll ───────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// ── Contact form: basic client-side validation ────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      field.style.borderColor = field.value.trim() ? '' : '#FF6060';
      if (!field.value.trim()) valid = false;
    });
    if (valid) {
      const msg = currentLang === 'th'
        ? 'ขอบคุณที่ติดต่อเรา\nเราจะตอบกลับภายใน 2 วันทำการ'
        : 'お問い合わせありがとうございます。\n担当者より2営業日以内にご連絡いたします。';
      alert(msg);
      form.reset();
    } else {
      const errMsg = currentLang === 'th'
        ? 'กรุณากรอกข้อมูลที่จำเป็น'
        : '必須項目を入力してください。';
      alert(errMsg);
    }
  });
}
