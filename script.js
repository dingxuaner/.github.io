// 渲染项目卡片（数据来自 projects.js）
(function () {
  const grid = document.getElementById('project-grid');
  const empty = document.getElementById('project-empty');
  if (!grid) return;

  if (typeof projects === 'undefined' || !Array.isArray(projects) || projects.length === 0) {
    if (empty) empty.hidden = false;
    return;
  }

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  projects.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'card';
    const tags = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('');
    const link = p.link
      ? `<a class="card-link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkText || '查看项目')} →</a>`
      : '';
    card.innerHTML = `
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.description)}</p>
      <div class="tags">${tags}</div>
      ${link}
    `;
    grid.appendChild(card);
  });
})();

// 深浅色切换
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const apply = (theme) => {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    if (btn) btn.textContent = theme === 'dark' ? '浅色' : '深色';
  };
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
