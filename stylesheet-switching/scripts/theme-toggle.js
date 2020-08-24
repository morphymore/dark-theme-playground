// Select the button
const btn = document.querySelector("#theme-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");
// Select theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

// If current theme preference in localStorage is "dark"
if (currentTheme == "dark") {
  // Use dark-theme.css (to apply dark theme)
  theme.href = "dark-theme.css";
}

// Listen for click on the button
btn.addEventListener("click", function() {
  let setTheme;
  // If the current stylesheet is "light-theme.css"
  if (theme.getAttribute("href") == "light-theme.css") {
    // Switch to dark theme by switching stylesheet to "dark-theme.css"
    theme.href = "dark-theme.css";
    setTheme = "dark";
  } else {
    // Switch to to light theme by switching stylesheet to "light-theme.css"
    theme.href = "light-theme.css";
    setTheme = "light";
  }
  // Update theme preference in localStorage
  localStorage.setItem("theme", setTheme);
});