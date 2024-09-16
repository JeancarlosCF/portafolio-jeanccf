export const CheckDarkmode = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
};

export const toggleDarkmode = () => {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "light");
    // Whenever the user explicitly chooses light mode
    document.documentElement.classList.remove("dark");
  } else {
    // Whenever the user explicitly chooses dark mode
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }
};

export const getPreferredTheme = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkScheme.matches) {
    return "dark";
  } else {
    return "light";
  }
}
