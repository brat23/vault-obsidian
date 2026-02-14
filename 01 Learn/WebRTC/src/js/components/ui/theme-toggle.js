const themeToggle = {
    init() {
        this.themeToggle = document.querySelector('.theme-switch-wrapper input');
        this.initTheme();
        this.attachEventListeners();
    },

    initTheme() {
        const isDarkMode = this.getThemePreference();
        document.documentElement.classList.toggle('dark', isDarkMode);
        this.themeToggle.checked = isDarkMode;
    },

    getThemePreference() {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme') === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    },

    attachEventListeners() {
        this.themeToggle.addEventListener('change', (e) => {
            const isDarkMode = e.target.checked;
            document.documentElement.classList.toggle('dark', isDarkMode);
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                const isDarkMode = e.matches;
                document.documentElement.classList.toggle('dark', isDarkMode);
                this.themeToggle.checked = isDarkMode;
            }
        });
    }
};

export default themeToggle;
