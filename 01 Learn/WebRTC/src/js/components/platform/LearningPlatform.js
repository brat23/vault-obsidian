import { ContentLoader, ContentRenderer, ContentFactory } from '../content/index.js';
import { NavigationManager, ContentNavigator } from '../navigation/index.js';
import { UIController, ProgressTracker } from '../ui/index.js';

export class LearningPlatform {
    constructor(contentLoader, contentRenderer, navigationManager, uiController) {
        this.contentLoader = contentLoader;
        this.contentRenderer = contentRenderer;
        this.navigationManager = navigationManager;
        this.uiController = uiController;
        this.progressTracker = new ProgressTracker();
        this.currentContent = null;
        this.flattedSubtopics = [];
        this.contentNavigator = null;
    }

    async init(structure) {
        this.structure = structure;
        this.flattedSubtopics = structure.modules.flatMap(module => module.subtopics);
        this.contentNavigator = new ContentNavigator(this.flattedSubtopics, this.navigateTo.bind(this));
        this.navigationManager.render(structure);
        this.attachContentListeners();
        this.uiController.init();
        
        // Calculate total subtopics for progress
        const totalSubtopics = this.flattedSubtopics.length;
        this.progressTracker.setTotal(totalSubtopics);

        // Load first content if available
        if (this.flattedSubtopics.length > 0) {
            const firstSubtopic = this.flattedSubtopics[0];
            await this.loadContent(firstSubtopic.path, firstSubtopic.type || 'markdown');
        }
    }

    attachContentListeners() {
        document.querySelectorAll('.subtopic-item').forEach(item => {
            item.addEventListener('click', async (e) => {
                const path = e.currentTarget.dataset.path;
                const type = e.currentTarget.dataset.type || 'markdown';
                
                this.navigationManager.setActiveItem(e.currentTarget);
                await this.loadContent(path, type);
                this.uiController.closeSidebar();
                
                // Update progress
                const progress = this.progressTracker.markComplete(path);
                this.uiController.updateProgress(progress);
            });
        });
    }

    async loadContent(path, type) {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading content...</p></div>';

        const handler = ContentFactory.createHandler(type);
        const content = await handler.load(path, this.contentLoader);
        const rendered = handler.render(content, this.contentRenderer);
        
        mainContent.innerHTML = rendered;
        this.currentContent = { path, type, content };
        
        // Add navigation buttons
        this.contentNavigator.renderButtons(path, mainContent);
        
        // Scroll to top
        document.getElementById('contentArea').scrollTop = 0;
    }

    async navigateTo(subtopic) {
        const { path, type } = subtopic;
        const subtopicItem = document.querySelector(`.subtopic-item[data-path="${path}"]`);

        if (subtopicItem) {
            this.navigationManager.setActiveItem(subtopicItem);
        }
        
        await this.loadContent(path, type || 'markdown');
        this.uiController.closeSidebar();
        
        // Update progress
        const progress = this.progressTracker.markComplete(path);
        this.uiController.updateProgress(progress);
    }
}
