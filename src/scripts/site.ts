const search = document.querySelector<HTMLInputElement>('#search');
const cards = [...document.querySelectorAll<HTMLAnchorElement>('.category-card')];
const emptyState = document.querySelector<HTMLElement>('#empty-state');

search?.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach((card) => {
    const matches = card.dataset.category?.includes(query) ?? false;
    card.hidden = !matches;
    if (matches) visible += 1;
  });
  if (emptyState) emptyState.hidden = visible !== 0;
});

const toggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
toggle?.addEventListener('click', () => {
  const isLight = document.documentElement.dataset.theme === 'light';
  document.documentElement.dataset.theme = isLight ? 'dark' : 'light';
  toggle.setAttribute('aria-label', isLight ? 'Toggle light theme' : 'Toggle dark theme');
});
