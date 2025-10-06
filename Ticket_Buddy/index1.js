const switcher = document.getElementById('languageSwitcher');

switcher.addEventListener('change', () => {
  const selectedPage = switcher.value;
  if (selectedPage) {
    // Force reload even if already on the selected page
    window.location.href = selectedPage + '?refresh=' + new Date().getTime();
  }
});