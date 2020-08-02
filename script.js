const copy = document.getElementById('copyright');
const toggleSwitch = document.getElementById('checkbox');
const toggletext = document.getElementById('toggle-text');
const toggleIcon = document.getElementById('theme-icon');
const handleCopy = () => {
  console.log(copy.innerText);
  const today = new Date();
  let year = today.getFullYear();
  copy.innerText = `Copyright ${year} © Alejandro Suárez Losada. All rights reserved`;
};
// switch Theme Dinamycally
const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggletext.textContent = 'Dark Mode';
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggletext.textContent = 'Light Mode';
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
  }
};
// Listeners
toggleSwitch.addEventListener('change', switchTheme);
window.addEventListener('DOMContentLoaded', () => {
  handleCopy();
});
