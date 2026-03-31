/* ================================================================
   PORTFOLIO — NAM SENA  |  main.js  (v3)
   ================================================================

   목차
   ────
   01. WORKS DATA       ← 작업물 추가/수정은 이 배열에서
   02. Gallery Render   ← Featured + Archive 렌더링
   03. Page Loader
   04. Custom Cursor
   05. Navigation
   06. Side Navigation Dots
   07. Scroll Progress
   08. Scroll Reveal
   09. Skills hover
   10. Hero parallax
   11. Smooth scroll

   ================================================================ */


/* ================================================================
   01. WORKS DATA
   ================================================================

   ★ 작업물 추가 방법:
     아래 배열에 객체를 추가하면 카드가 자동 생성됩니다.

   필드 설명:
     id            : 고유 식별자 (영문 소문자, 하이픈 사용)
     category      : 필터 ID — 'frontend' | 'design' | 'email' | 'publishing' | 'brand'
     categoryLabel : 화면에 표시될 카테고리 이름
     title         : 프로젝트 제목
     subtitle      : 부제목 (카드에는 미표시, 참고용)
     year          : 연도 (문자열)
     thumbnail     : 이미지 경로 또는 URL
     desc          : 짧은 설명 (1~2줄 권장)
     link          : 클릭 시 이동할 URL ('#' → 빈 링크)
     featured      : true면 상단 Featured 하이라이트에 표시 (최대 3개 권장)

   ================================================================ */

const WORKS = [
  /* ── Featured 3개 ── */
  {
    id:            'baro-stamping',
    category:      'frontend',
    categoryLabel: 'Frontend Dev',
    title:         '바로 스탬핑',
    subtitle:      'QR 기반 적립 및 쿠폰 시스템',
    year:          '2024',
    thumbnail:     'https://placehold.co/900x640/d0cec9/888888?text=바로+스탬핑',
    desc:          '양방향 QR 스캔, 사일런스 오더, 회원 적립 기능을 포함한 웹 기반 풀스택 서비스',
    link:          '#',
    featured:      true
  },
  {
    id:            'banana-design-system',
    category:      'design',
    categoryLabel: 'Design System',
    title:         '바나나시스템 3.0 디자인 시스템',
    subtitle:      'UI/UX 디자인 시스템 개발',
    year:          '2023',
    thumbnail:     'https://placehold.co/900x640/c8c4bf/888888?text=Design+System',
    desc:          'Figma 기반 컴포넌트 라이브러리 설계 및 UI/UX 가이드라인 수립',
    link:          '#',
    featured:      true
  },
  {
    id:            'landing-page',
    category:      'frontend',
    categoryLabel: 'Frontend Dev',
    title:         '신규 서비스 랜딩 페이지',
    subtitle:      '디자인 & 퍼블리싱',
    year:          '2024',
    thumbnail:     'https://placehold.co/900x640/b4b0ab/888888?text=Landing+Page',
    desc:          '반응형 랜딩 페이지 디자인 및 퍼블리싱으로 서비스 전환율 향상',
    link:          '#',
    featured:      true
  },

  /* ── Archive ── */
  {
    id:            'kookmin-card',
    category:      'design',
    categoryLabel: 'UI Design',
    title:         '국민카드 라이프샵 프로모션',
    subtitle:      '콘텐츠 기획 및 프로모션 UI',
    year:          '2021',
    thumbnail:     'https://placehold.co/600x450/d8d4cf/888888?text=Kookmin+Card',
    desc:          '프로모션 페이지 디자인 및 콘텐츠 기획으로 고객 유입률 향상',
    link:          '#',
    featured:      false
  },
  {
    id:            'ipark-banner',
    category:      'design',
    categoryLabel: 'Web Design',
    title:         '아이파크몰 배너 시스템',
    subtitle:      '배너 설계 및 관리',
    year:          '2020',
    thumbnail:     'https://placehold.co/600x450/ccc8c2/888888?text=iPark+Mall',
    desc:          '메인·카테고리·상품 상세 배너 디자인 및 운영',
    link:          '#',
    featured:      false
  },
  {
    id:            'hana-email',
    category:      'email',
    categoryLabel: 'Email Design',
    title:         '하나카드 이메일 뉴스레터',
    subtitle:      '이메일 레터 시각 디자인',
    year:          '2021',
    thumbnail:     'https://placehold.co/600x450/c0bcb6/888888?text=Email+Newsletter',
    desc:          '포인트몰 고객 참여율 향상을 위한 이메일 레터 시각 디자인 및 발송',
    link:          '#',
    featured:      false
  },
  {
    id:            'oilbank-inventory',
    category:      'design',
    categoryLabel: 'Project Visual',
    title:         'HDC 오일뱅크 인벤토리',
    subtitle:      '메인 인벤토리 및 배너',
    year:          '2020',
    thumbnail:     'https://placehold.co/600x450/b8b4ae/888888?text=Oilbank',
    desc:          '브랜드 가시성 강화를 위한 메인 인벤토리 배너 설계 및 제작',
    link:          '#',
    featured:      false
  },
  {
    id:            'rakuten-minishop',
    category:      'publishing',
    categoryLabel: 'Publishing',
    title:         '라쿠텐 인샵 미니샵 페이지',
    subtitle:      '일본 오픈마켓 페이지 제작',
    year:          '2022',
    thumbnail:     'https://placehold.co/600x450/b0aca6/888888?text=Rakuten',
    desc:          '라쿠텐 인샵 미니샵 페이지 제작 및 일본어 현지화 작업',
    link:          '#',
    featured:      false
  },
  {
    id:            'figma-education',
    category:      'design',
    categoryLabel: 'UI Design',
    title:         '피그마 디자인 교육 프로그램',
    subtitle:      '사내 교육 기획 및 운영',
    year:          '2023',
    thumbnail:     'https://placehold.co/600x450/a8a49e/888888?text=Figma+Education',
    desc:          '사내 피그마 교육 기획 및 강의, UI 컴포넌트 설계 실습 운영',
    link:          '#',
    featured:      false
  },
  {
    id:            'repurs-brand',
    category:      'brand',
    categoryLabel: 'Brand Identity',
    title:         '자사몰 브랜드 아이덴티티',
    subtitle:      '로고·명함·간판 디자인',
    year:          '2015',
    thumbnail:     'https://placehold.co/600x450/a09c96/888888?text=Brand+Identity',
    desc:          '심볼/로고 리뉴얼 및 명함·간판·배너 등 오프라인 브랜드 자산 전반 디자인',
    link:          '#',
    featured:      false
  },
  {
    id:            'gs-catalog',
    category:      'design',
    categoryLabel: 'Print Design',
    title:         'GS홈쇼핑 카탈로그 디자인',
    subtitle:      '지면 카탈로그 제작',
    year:          '2016',
    thumbnail:     'https://placehold.co/600x450/98948e/888888?text=GS+Catalog',
    desc:          'GS홈쇼핑·홈앤쇼핑 카탈로그 지면 디자인 및 오픈마켓 상품 페이지 제작',
    link:          '#',
    featured:      false
  },
  {
    id:            'cafe24-mall',
    category:      'publishing',
    categoryLabel: 'Web Design',
    title:         '카페24 자사몰 디자인',
    subtitle:      '쇼핑몰 전체 디자인·운영',
    year:          '2014',
    thumbnail:     'https://placehold.co/600x450/908c86/888888?text=Cafe24+Mall',
    desc:          '카페24 기반 자사몰 전체 디자인 및 운영, 상품 페이지 제작·등록',
    link:          '#',
    featured:      false
  }
];

/* 필터 카테고리 설정 */
const CATEGORIES = [
  { id: 'all',         label: 'All' },
  { id: 'frontend',   label: 'Frontend' },
  { id: 'design',     label: 'Design' },
  { id: 'email',      label: 'Email' },
  { id: 'publishing', label: 'Publishing' },
  { id: 'brand',      label: 'Brand' }
];


/* ================================================================
   02. GALLERY RENDER
   ================================================================ */

let revealObserver;  /* 아래에서 정의, 여기서 선언 */

/**
 * Featured 하이라이트 카드 렌더링 (works__gallery 구조 재사용)
 */
function renderFeatured() {
  const container = document.getElementById('worksFeatured');
  if (!container) return;

  const items = WORKS.filter(w => w.featured);
  if (items.length === 0) return;

  const inner = document.createElement('div');
  inner.className = 'works__gallery';

  inner.innerHTML = items.map((w, i) => `
    <a href="${escHtml(w.link)}"
       target="_blank" rel="noopener noreferrer"
       class="gcard${i === 0 ? ' gcard--lg' : ''}"
       aria-label="${escHtml(w.title)} 보기">
      <div class="gcard__img">
        <img src="${escHtml(w.thumbnail)}" alt="${escHtml(w.title)}" loading="lazy">
      </div>
      <div class="gcard__base">
        <span>${escHtml(w.categoryLabel)}</span>
        <span>${escHtml(w.year)}</span>
      </div>
      <div class="gcard__over">
        <span class="gcard__tag">${escHtml(w.categoryLabel)}</span>
        <h4 class="gcard__title">${escHtml(w.title)}</h4>
        <p class="gcard__desc">${escHtml(w.desc)}</p>
        <span class="gcard__cta">View Project →</span>
      </div>
    </a>
  `).join('');

  container.appendChild(inner);
}

/**
 * 필터 버튼 렌더링 + 클릭 이벤트 연결
 */
function renderFilters() {
  const container = document.getElementById('archiveFilters');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button class="arc-filter${cat.id === 'all' ? ' active' : ''}"
            data-filter="${cat.id}">
      ${escHtml(cat.label)}
    </button>
  `).join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.arc-filter');
    if (!btn) return;
    container.querySelectorAll('.arc-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderArchive(btn.dataset.filter);
  });
}

/**
 * 개별 아카이브 카드 HTML 생성
 */
function createArcCardHTML(w, i) {
  return `
    <a href="${escHtml(w.link)}"
       target="_blank" rel="noopener noreferrer"
       class="arc-card${w.featured ? ' arc-card--featured' : ''}"
       data-category="${escHtml(w.category)}"
       style="animation-delay:${i * 55}ms"
       aria-label="${escHtml(w.title)} 보기">
      <div class="arc-card__thumb">
        <img src="${escHtml(w.thumbnail)}" alt="${escHtml(w.title)}" loading="lazy">
        <div class="arc-card__over">
          <span class="arc-card__cta">View Project →</span>
        </div>
      </div>
      <div class="arc-card__body">
        <div class="arc-card__head">
          <span class="arc-card__cat">${escHtml(w.categoryLabel)}</span>
          <span class="arc-card__year">${escHtml(w.year)}</span>
        </div>
        <h4 class="arc-card__title">${escHtml(w.title)}</h4>
        <p class="arc-card__desc">${escHtml(w.desc)}</p>
      </div>
    </a>
  `;
}

/**
 * 아카이브 그리드 렌더링
 * @param {string} filter  - 카테고리 ID ('all' 또는 CATEGORIES의 id)
 * @param {boolean} animate - 필터 전환 애니메이션 여부
 */
function renderArchive(filter = 'all', animate = true) {
  const grid = document.getElementById('archiveGrid');
  if (!grid) return;

  const items = filter === 'all'
    ? WORKS
    : WORKS.filter(w => w.category === filter);

  const doRender = () => {
    grid.innerHTML = items.length
      ? items.map((w, i) => createArcCardHTML(w, i)).join('')
      : `<p class="archive__empty">해당 카테고리의 작업물이 없습니다.</p>`;

    /* 커서 이벤트 재연결 (event delegation 방식) */
    reattachCursorEvents();
  };

  if (!animate) {
    doRender();
    return;
  }

  /* 필터 전환 시 페이드 효과 */
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(10px)';

  setTimeout(() => {
    doRender();
    /* 두 프레임 후 페이드 인 */
    requestAnimationFrame(() => requestAnimationFrame(() => {
      grid.style.opacity = '1';
      grid.style.transform = '';
    }));
  }, 220);
}

/** HTML escape 유틸 (XSS 방지) */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}


/* ================================================================
   03. PAGE LOADER
   ================================================================ */

window.addEventListener('load', () => {
  /* 갤러리 렌더링을 먼저 수행하여 IntersectionObserver가 잡을 수 있게 */
  renderFeatured();
  renderFilters();
  renderArchive('all', false);  /* 첫 로드는 애니메이션 없이 */

  /* Reveal Observer 초기화 후 관찰 시작 */
  initRevealObserver();

  /* 로더 숨기기 */
  setTimeout(() => {
    document.getElementById('pageLoader')?.classList.add('hidden');
  }, 700);
});


/* ================================================================
   04. CUSTOM CURSOR
   ================================================================ */

const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

let _mouseX = 0, _mouseY = 0;
let _ringX  = 0, _ringY  = 0;

if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    _mouseX = e.clientX;
    _mouseY = e.clientY;
    cursorDot.style.left = _mouseX + 'px';
    cursorDot.style.top  = _mouseY + 'px';
  });

  (function animateRing() {
    const speed = 0.13;
    _ringX += (_mouseX - _ringX) * speed;
    _ringY += (_mouseY - _ringY) * speed;
    cursorRing.style.left = _ringX + 'px';
    cursorRing.style.top  = _ringY + 'px';
    requestAnimationFrame(animateRing);
  })();

  /* 정적 hover 대상 */
  const staticTargets = document.querySelectorAll(
    'a, button, .works__item, .skills__item, .gcard, .project'
  );
  staticTargets.forEach(el => attachCursorHover(el));

  /* 동적 대상 (arc-card) - event delegation */
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.arc-card')) cursorRing?.classList.add('hovering');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.arc-card')) cursorRing?.classList.remove('hovering');
  });

  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity  = '0';
    cursorRing.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity  = '1';
    cursorRing.style.opacity = '1';
  });
}

function attachCursorHover(el) {
  el.addEventListener('mouseenter', () => cursorRing?.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursorRing?.classList.remove('hovering'));
}

function reattachCursorEvents() {
  /* arc-card는 delegation으로 처리되므로 별도 작업 불필요 */
}


/* ================================================================
   05. NAVIGATION
   ================================================================ */

const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

function handleNavState() {
  nav?.classList.toggle('nav--solid', window.scrollY > 60);
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

const _sectionIds = ['hero', 'about', 'projects', 'works', 'skills', 'experience', 'contact'];

function updateActiveNav() {
  const mid = window.scrollY + window.innerHeight * 0.4;
  let current = _sectionIds[0];

  _sectionIds.forEach(id => {
    const sec = document.getElementById(id);
    if (sec && mid >= sec.offsetTop) current = id;
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}


/* ================================================================
   06. SIDE NAVIGATION DOTS
   ================================================================ */

function updateSideNav() {
  const mid = window.scrollY + window.innerHeight * 0.4;
  let idx = 0;

  _sectionIds.forEach((id, i) => {
    const sec = document.getElementById(id);
    if (sec && mid >= sec.offsetTop) idx = i;
  });

  document.querySelectorAll('.side-nav__dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}


/* ================================================================
   07. SCROLL PROGRESS BAR
   ================================================================ */

const progressBar = document.getElementById('scrollProgress');

function updateScrollProgress() {
  if (!progressBar) return;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
}

/* 스크롤 이벤트 — 배치 처리 */
window.addEventListener('scroll', () => {
  handleNavState();
  updateScrollProgress();
  updateActiveNav();
  updateSideNav();
}, { passive: true });

handleNavState();
updateSideNav();


/* ================================================================
   08. SCROLL REVEAL (IntersectionObserver)
   ================================================================ */

function revealCallback(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el  = entry.target;
    const siblings = Array.from(el.parentElement.querySelectorAll('.reveal-item:not(.revealed)'));
    const delay    = Math.max(0, siblings.indexOf(el) * 80);
    setTimeout(() => el.classList.add('revealed'), delay);
    revealObserver.unobserve(el);
  });
}

function initRevealObserver() {
  revealObserver = new IntersectionObserver(revealCallback, {
    threshold:   0.08,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal-item').forEach(el => revealObserver.observe(el));
}


/* ================================================================
   09. SKILLS — GROUP HOVER DIMMING
   ================================================================ */

document.querySelectorAll('.skills__item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const list = item.closest('.skills__list');
    if (!list) return;
    list.querySelectorAll('.skills__item').forEach(other => {
      if (other !== item) other.style.opacity = '0.18';
    });
  });
  item.addEventListener('mouseleave', () => {
    const list = item.closest('.skills__list');
    if (!list) return;
    list.querySelectorAll('.skills__item').forEach(other => {
      other.style.opacity = ''; /* CSS data-level 기본값으로 복귀 */
    });
  });
});


/* ================================================================
   10. HERO — SUBTLE PARALLAX
   ================================================================ */

const heroSection = document.querySelector('.hero');
const heroTitle   = document.querySelector('.hero__title');

if (heroSection && heroTitle) {
  let cX = 0, cY = 0, tX = 0, tY = 0, _rafId = null;

  heroSection.addEventListener('mousemove', (e) => {
    const r = heroSection.getBoundingClientRect();
    tX = ((e.clientX - r.left)  / r.width  - 0.5) * 16;
    tY = ((e.clientY - r.top)   / r.height - 0.5) * 8;
    if (!_rafId) {
      _rafId = requestAnimationFrame(tickParallax);
    }
  });

  heroSection.addEventListener('mouseleave', () => { tX = tY = 0; });

  function tickParallax() {
    cX += (tX - cX) * 0.06;
    cY += (tY - cY) * 0.06;
    heroTitle.style.transform = `translate(${cX}px, ${cY}px)`;
    if (Math.abs(tX - cX) > 0.05 || Math.abs(tY - cY) > 0.05) {
      _rafId = requestAnimationFrame(tickParallax);
    } else {
      _rafId = null;
    }
  }
}


/* ================================================================
   11. SMOOTH SCROLL
   ================================================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
