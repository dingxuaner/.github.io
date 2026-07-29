// ====== i18n 双语切换 ======
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('lang-toggle');
  const dict = (typeof i18n !== 'undefined') ? i18n : { zh: {}, en: {} };

  function applyLang(lang) {
    root.setAttribute('data-lang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
    const t = dict[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        // 支持包含 <br> 的富文本
        if (t[key].includes('<')) el.innerHTML = t[key];
        else el.textContent = t[key];
      }
    });
    // 重新渲染项目卡片的链接文字
    renderProjects();
    renderBlogs();
  }

  const saved = localStorage.getItem('lang') || 'zh';
  applyLang(saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-lang') === 'zh' ? 'en' : 'zh';
      applyLang(next);
      localStorage.setItem('lang', next);
    });
  }

  // 暴露给其他模块调用
  window.getCurrentLang = () => root.getAttribute('data-lang') || 'zh';
})();

// ====== 渲染项目卡片 ======
function renderProjects() {
  const grid = document.getElementById('project-grid');
  const empty = document.getElementById('project-empty');
  if (!grid) return;

  const lang = window.getCurrentLang ? window.getCurrentLang() : 'zh';
  const viewText = (typeof i18n !== 'undefined' && i18n[lang]) ? (i18n[lang].view_project || '查看项目 →') : '查看项目 →';

  grid.innerHTML = '';
  if (typeof projects === 'undefined' || !Array.isArray(projects) || projects.length === 0) {
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  projects.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'card';
    const tags = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('');
    const link = p.link
      ? `<a class="card-link" href="${esc(p.link)}" target="_blank" rel="noopener">${viewText}</a>`
      : '';
    card.innerHTML = `
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.description)}</p>
      <div class="tags">${tags}</div>
      ${link}
    `;
    grid.appendChild(card);
  });
}

// ====== 渲染博客卡片 ======
function renderBlogs() {
  const grid = document.getElementById('blog-grid');
  const empty = document.getElementById('blog-empty');
  if (!grid) return;

  const lang = window.getCurrentLang ? window.getCurrentLang() : 'zh';
  const readText = (typeof i18n !== 'undefined' && i18n[lang]) ? (i18n[lang].read_more || '阅读全文 →') : '阅读全文 →';

  grid.innerHTML = '';
  if (typeof blogs === 'undefined' || !Array.isArray(blogs) || blogs.length === 0) {
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  blogs.forEach((b) => {
    const card = document.createElement('article');
    card.className = 'card';
    const title = lang === 'en' && b.titleEn ? b.titleEn : b.title;
    const excerpt = lang === 'en' && b.excerptEn ? b.excerptEn : b.excerpt;
    const emoji = b.emoji || '📝';
    const linkWrap = b.link
      ? `<a class="card-link" href="${esc(b.link)}">${readText}</a>`
      : '';

    card.innerHTML = `
      <div class="blog-cover">${emoji}</div>
      <div class="blog-body">
        <div class="blog-date">${esc(b.date)}</div>
        <h3>${esc(title)}</h3>
        <p class="blog-excerpt">${esc(excerpt)}</p>
        ${linkWrap}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ====== 初始渲染 ======
renderProjects();
renderBlogs();

// ====== 深浅色切换（图标版） ======
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const sunIcon = btn ? btn.querySelector('.icon-sun') : null;
  const moonIcon = btn ? btn.querySelector('.icon-moon') : null;

  function apply(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = '';
    } else {
      root.removeAttribute('data-theme');
      if (sunIcon) sunIcon.style.display = '';
      if (moonIcon) moonIcon.style.display = 'none';
    }
  }

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(saved || (prefersDark ? 'dark' : 'light'));

  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      localStorage.setItem('theme', next);
    });
  }
})();
