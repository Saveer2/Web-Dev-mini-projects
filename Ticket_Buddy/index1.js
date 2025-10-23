const switcher = document.getElementById('languageSwitcher');

switcher.addEventListener('change', () => {
  const selectedPage = switcher.value;
  if (selectedPage) {
    // Force reload even if already on the selected page
    window.location.href = selectedPage + '?refresh=' + new Date().getTime();
  }
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader-wrapper');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});

window.addEventListener('load', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');

    // Add the 'loaded' class to trigger the CSS animation immediately
    loaderWrapper.classList.add('loaded');

    // Set a timeout to completely hide the loader after the animation is finished
    // This timeout is 1.5 seconds to ensure the full animation has played out.
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 1500); 
});