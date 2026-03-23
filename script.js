/* pupuru asia — Redesign Proposal: script.js */

// ── Translations ─────────────────────────────────────────────
const translations = {
  ja: {
    // Meta
    'hamburger-aria': 'メニューを開く',
    'stat-countries': 'カ国',
    'stat-companies': '社+',
    'trustbar-label': '導入企業（例）',
    'services-multilang-note': '🌐 本サービスは <strong>日本語・英語・タイ語</strong> に対応。多言語サイトは順次公開予定です。',
    // Proposal
    'proposal-title': 'リニューアルの着眼点と改善提案',
    'proposal-sub': '現行サイトを丁寧に拝見し、さらなる成長につながるポイントと、今回のリニューアルでご提案する改善内容をまとめました',
    'proposal-badge': '改善ポイント',
    'p1-title': '①VRの事業価値をより前面に打ち出す',
    'p1-body': '現行サイトでは通信ソリューションが中心となっており、VRサービスの独自価値がさらに伝わるとB2Bの意思決定者にとってより訴求力が高まると考えます。',
    'p1-before': '通信主体のページ構成。VRは下部に掲載。',
    'p1-after': '通信とVRを対等な２カラムで並置。ヒーローコピーでも両方を明示。',
    'p2-title': '②多言語対応でグローバルリーチを拡大する',
    'p2-body': 'アジア各国の現地パートナーや外資系企業へのアプローチにあたり、英語・タイ語コンテンツをご用意することで、さらに幅広い顧客層へのリーチが期待できます。',
    'p2-before': '日本語のみ。言語切替なし。',
    'p2-after': 'ヘッダーにJP/TH切替を設置。英語ページは近日公開予定。',
    'p3-title': '③導入事例に具体的な成果数値を加えてさらに説得力を高める',
    'p3-body': '現行サイトの導入事例に業界別の数値成果を加えることで、訪問者が「自社にも活用できる」とイメージしやすくなり、問い合わせへの後押しになります。',
    'p3-before': 'サービス紹介テキストのみ。業界・数値成果が不明瞭。',
    'p3-after': '業界タグ・KPI数値・画像を組み合わせたカード型事例を掲載。',
    'p4-title': '④スマートフォン体験をさらに快適に',
    'p4-body': 'アジア市場ではスマートフォンが主要なアクセス手段です。モバイルの読みやすさとCTA誘導を強化することで、より多くの訪問者を問い合わせへとスムーズにご案内できます。',
    'p4-before': 'PC基準のレイアウト。モバイルで文字が小さく、CTAが見えにくい。',
    'p4-after': 'モバイルファーストのCSS設計。ハンバーガーメニュー・大型CTAボタンを実装。',
    'proposal-rationale-title': 'なぜこの変更が必要か',
    'proposal-rationale-body': 'pupuru asiaのターゲットは、アジアに拠点を持つ日系企業の事業責任者および現地IT担当者です。彼らは「通信とVRを一社でまかせられる信頼できるパートナー」を求めています。今回のリニューアルでは、<strong>2つのサービスを対等な柱として見せ</strong>、<strong>具体的な成果数値で信頼を獲得</strong>し、<strong>多言語対応で商圏を拡大</strong>することを狙います。Cloudflare Pagesへの静的デプロイにより、高速配信とグローバルCDNの恩恵も得られます。',
    // Case tags
    'case1-tag': '製造業',
    'case2-tag': '小売・不動産',
    'case3-tag': '商社・多拠点管理',
    'case3-img-label': '📷 企業イメージ（要差し替え）',
    'tag-comm': '通信',
    // Multilang roadmap
    'multilang-title': '多言語対応ロードマップ',
    'multilang-desc': 'pupuru asiaはアジア全域のビジネスパートナーに向け、サイトの多言語展開を進めています。',
    'multilang-jp-name': '日本語',
    'multilang-live': '公開中',
    'multilang-soon': '近日公開',
    // Company values
    'co-ceo-val': '関 茂生',
    'co-founded-val': '2023年2月',
    'co-capital-val': '400万THB',
    'co-hours-val': '9:30〜18:30',
    'co-area-val': 'タイ・日本・シンガポール・ベトナム・マレーシアほかアジア15カ国以上',
    'co-business-val': '通信事業（法人スマホレンタル）、VRソリューション事業（安全体感VRトレーニング）',
    'co-langs-val': '日本語・English・ภาษาไทย（タイ語）',
    // Coverage map
    'coverage-note': '※ 正式カバレッジマップは確定次第差し替えます',
    // Form placeholders & select
    'placeholder-company': '株式会社〇〇',
    'placeholder-name': '山田 太郎',
    'placeholder-message': 'ご相談内容をご記入ください…',
    'select-placeholder': '選択してください',
    'select-comm': '通信ソリューション',
    'select-vr': 'VRソリューション',
    'select-both': '両方',
    'select-other': 'その他・未定',
    // SNS
    'sns-line': 'LINE公式アカウント',
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
    // Meta
    'hamburger-aria': 'เปิดเมนู',
    'stat-countries': 'ประเทศ',
    'stat-companies': 'บริษัท+',
    'trustbar-label': 'ลูกค้าที่ไว้วางใจเรา (ตัวอย่าง)',
    'services-multilang-note': '🌐 บริการนี้รองรับ <strong>ภาษาไทย · ญี่ปุ่น · อังกฤษ</strong> — ไซต์หลายภาษาเปิดตัวทยอยตาม',
    // Proposal
    'proposal-title': 'ปัญหาปัจจุบันและข้อเสนอการปรับปรุง',
    'proposal-sub': 'วิเคราะห์ไซต์ปัจจุบันเพื่อระบุปัญหาและแนวทางแก้ไขในการรีดีไซน์ครั้งนี้',
    'proposal-badge': 'ปัญหาปัจจุบัน',
    'p1-title': '① VR ดูเหมือนเป็นแค่ส่วนเสริมของการสื่อสาร',
    'p1-body': 'ไซต์ปัจจุบันเน้นโซลูชันการสื่อสารเป็นหลัก ทำให้ VR ดูเป็นบริการรอง ผู้มีอำนาจตัดสินใจ B2B ยากที่จะเห็นคุณค่าของ VR ในฐานะธุรกิจอิสระ',
    'p1-before': 'โครงสร้างหน้าเน้นการสื่อสาร VR อยู่ด้านล่าง',
    'p1-after': 'วางการสื่อสารและ VR เคียงข้างกันอย่างเท่าเทียม ทั้งคู่ปรากฏใน Hero',
    'p2-title': '② เนื้อหาภาษาญี่ปุ่นอย่างเดียว จำกัดการเข้าถึงลูกค้าต่างชาติ',
    'p2-body': 'การขายให้พาร์ทเนอร์ในประเทศหรือบริษัทต่างชาติในเอเชีย ต้องการเนื้อหาภาษาอังกฤษและไทย ไซต์ปัจจุบันมีแค่ภาษาญี่ปุ่น',
    'p2-before': 'ภาษาญี่ปุ่นอย่างเดียว ไม่มีตัวเลือกภาษา',
    'p2-after': 'เพิ่มปุ่มสลับ JP/TH ที่ header ภาษาอังกฤษจะเปิดเร็วๆ นี้',
    'p3-title': '③ กรณีศึกษายังคลุมเครือ ไม่ช่วย Conversion',
    'p3-body': 'คำอธิบายส่วนใหญ่บอกว่า "นำไปใช้แล้ว" โดยขาดตัวเลขผลลัพธ์และกรณีแยกตามอุตสาหกรรม ผู้เยี่ยมชมรู้สึกว่าไม่เกี่ยวกับธุรกิจตัวเอง',
    'p3-before': 'มีแค่ข้อความแนะนำบริการ อุตสาหกรรมและตัวเลขไม่ชัดเจน',
    'p3-after': 'การ์ดกรณีศึกษาพร้อม tag อุตสาหกรรม ตัวเลข KPI และรูปภาพ',
    'p4-title': '④ ประสบการณ์บนมือถือยังไม่ได้รับการ Optimize',
    'p4-body': 'ในเอเชีย สมาร์ทโฟนคือช่องทางหลัก ไซต์ปัจจุบัน Responsive ไม่สมบูรณ์ ความอ่านง่ายและการนำทาง CTA บนมือถือยังต้องปรับปรุง',
    'p4-before': 'เลย์เอาต์เน้น PC ตัวอักษรเล็กบนมือถือ CTA มองเห็นยาก',
    'p4-after': 'ออกแบบ CSS Mobile-First เพิ่ม Hamburger Menu และปุ่ม CTA ขนาดใหญ่',
    'proposal-rationale-title': 'ทำไมการเปลี่ยนแปลงนี้จึงจำเป็น',
    'proposal-rationale-body': 'กลุ่มเป้าหมายของ pupuru asia คือผู้บริหารและ IT Manager ในพื้นที่ของบริษัทญี่ปุ่นที่มีสาขาในเอเชีย พวกเขาต้องการ "พาร์ทเนอร์ที่เชื่อถือได้ซึ่งรับผิดชอบทั้งการสื่อสารและ VR ในที่เดียว" การรีดีไซน์ครั้งนี้มุ่ง <strong>แสดงสองบริการในฐานะเสาหลักที่เท่าเทียม</strong> <strong>สร้างความไว้ใจด้วยตัวเลขผลลัพธ์ที่ชัดเจน</strong> และ <strong>ขยายตลาดด้วยการรองรับหลายภาษา</strong> การ Deploy บน Cloudflare Pages ยังให้ประโยชน์ด้านความเร็วและ Global CDN',
    // Case tags
    'case1-tag': 'การผลิต',
    'case2-tag': 'ค้าปลีก · อสังหาริมทรัพย์',
    'case3-tag': 'การค้า · บริหารหลายสาขา',
    'case3-img-label': '📷 ภาพตัวอย่างบริษัท (รอเปลี่ยน)',
    'tag-comm': 'การสื่อสาร',
    // Multilang roadmap
    'multilang-title': 'แผนการรองรับหลายภาษา',
    'multilang-desc': 'pupuru asia กำลังขยายไซต์สู่หลายภาษาเพื่อให้บริการพาร์ทเนอร์ทางธุรกิจทั่วเอเชีย',
    'multilang-jp-name': 'ภาษาญี่ปุ่น',
    'multilang-live': 'เปิดให้บริการ',
    'multilang-soon': 'เร็วๆ นี้',
    // Company values
    'co-ceo-val': 'Sek Shigeo',
    'co-founded-val': 'กุมภาพันธ์ 2566',
    'co-capital-val': '4,000,000 THB',
    'co-hours-val': '9:30–18:30 น.',
    'co-area-val': 'ไทย · ญี่ปุ่น · สิงคโปร์ · เวียดนาม · มาเลเซีย และ 15+ ประเทศในเอเชีย',
    'co-business-val': 'ธุรกิจสื่อสาร (เช่า SIM องค์กร), ธุรกิจ VR (ฝึกอบรมความปลอดภัยด้วย VR)',
    'co-langs-val': 'ภาษาไทย · English · 日本語',
    // Coverage map
    'coverage-note': '※ แผนที่ Coverage อย่างเป็นทางการจะอัปเดตเมื่อพร้อม',
    // Form placeholders & select
    'placeholder-company': 'ชื่อบริษัทของคุณ',
    'placeholder-name': 'ชื่อ - นามสกุล',
    'placeholder-message': 'กรุณาระบุรายละเอียดที่ต้องการสอบถาม…',
    'select-placeholder': 'กรุณาเลือก',
    'select-comm': 'โซลูชันการสื่อสาร',
    'select-vr': 'โซลูชัน VR',
    'select-both': 'ทั้งสองอย่าง',
    'select-other': 'อื่นๆ / ยังไม่แน่ใจ',
    // SNS
    'sns-line': 'LINE Official Account',
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

  // Standard innerHTML replacements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // aria-label attributes
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // input/textarea placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // select option text
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // SVG text elements (coverage map)
  const svgMap = {
    'svg-tokyo':          lang === 'th' ? 'โตเกียว' : '東京',
    'svg-bangkok':        lang === 'th' ? 'กรุงเทพฯ ★' : 'バンコク ★',
    'svg-singapore':      lang === 'th' ? 'สิงคโปร์' : 'シンガポール',
    'svg-hcm':            lang === 'th' ? 'โฮจิมินห์' : 'ホーチミン',
    'svg-coverage-label': lang === 'th' ? '15+ ประเทศในเอเชีย' : 'アジア15カ国以上',
  };
  Object.entries(svgMap).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // Page title
  document.title = lang === 'th'
    ? 'pupuru asia | โซลูชันการสื่อสารและ VR ในเอเชีย'
    : 'pupuru asia | アジアの通信・VRソリューション';

  // Meta description
  const metaDesc = document.getElementById('meta-desc');
  if (metaDesc) {
    metaDesc.setAttribute('content', lang === 'th'
      ? 'pupuru asia คือพาร์ทเนอร์ B2B ด้านการสื่อสารและ VR ครบวงจรในเอเชีย แก้ปัญหาสื่อสารสำหรับสำนักงานต่างประเทศ'
      : 'pupuru asiaはアジア全域で通信・VRソリューションを提供するB2Bパートナーです。海外拠点の通信課題をワンストップで解決します。'
    );
  }

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
