DARK_MODE_ICON = "./assets/dark-mode.svg";
LIGHT_MODE_ICON = "./assets/light-mode.svg";

function handleTheme() {
  const newTheme = isDarkMode() ? "light" : "dark";
  changeTheme(newTheme);
}

function changeTheme(newTheme) {
  const body = document.querySelector("body");
  const oldTheme = newTheme === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  body.classList.replace(oldTheme, newTheme);
  updateThemeSwitcher();
}

function updateThemeSwitcher() {
  if (isDarkMode()) {
    themeSwitcher.children[0].src = LIGHT_MODE_ICON;
  } else {
    themeSwitcher.children[0].src = DARK_MODE_ICON;
  }
}

function isDarkMode() {
  return localStorage.getItem("theme") === "dark";
}

const themeSwitcher = document.querySelector(".theme-switcher");
themeSwitcher.addEventListener("click", handleTheme);

const theme = localStorage.getItem("theme");
const body = document.querySelector("body");
body.classList.add(theme);
updateThemeSwitcher();
