import { ContentLoader, ContentRenderer } from './components/content/index.js';
import { NavigationManager } from './components/navigation/index.js';
import { UIController } from './components/ui/index.js';
import { LearningPlatform } from './components/platform/index.js';
import themeToggle from './components/ui/theme-toggle.js';

document.addEventListener('DOMContentLoaded', async () => {
    themeToggle.init();
    const contentLoader = new ContentLoader();
    const contentRenderer = new ContentRenderer();
    const navigationManager = new NavigationManager(document.getElementById('sidebarContent'));
    const uiController = new UIController();
    
    const platform = new LearningPlatform(
        contentLoader,
        contentRenderer,
        navigationManager,
        uiController
    );

    const response = await fetch('src/course-structure.json');
    const courseStructure = await response.json();

    await platform.init(courseStructure);
});
