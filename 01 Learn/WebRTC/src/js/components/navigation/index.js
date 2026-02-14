
class NavigationManager {
    constructor(container) {
        this.container = container;
        this.expandedModules = new Set();
    }

    render(structure) {
        this.container.innerHTML = structure.modules.map((module, idx) => `
            <div class="nav-section">
                <div class="module-header" data-module="${idx}">
                    <span class="module-icon">${module.icon || '📚'}</span>
                    <span>${module.name}</span>
                    ${module.subtopics.length > 0 ? `<span class="badge">${module.subtopics.length}</span>` : ''}
                    <span class="expand-icon">▶</span>
                </div>
                <div class="subtopics" data-module-content="${idx}">
                    ${module.subtopics.map((subtopic, subIdx) => `
                        <div class="subtopic-item" data-path="${subtopic.path}" data-type="${subtopic.type || 'markdown'}">
                            ${subtopic.name}
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        this.attachEventListeners();
    }

    attachEventListeners() {
        // Module expansion
        this.container.querySelectorAll('.module-header').forEach(header => {
            header.addEventListener('click', (e) => {
                const moduleIdx = e.currentTarget.dataset.module;
                this.toggleModule(moduleIdx);
            });
        });
    }

    toggleModule(moduleIdx) {
        const content = this.container.querySelector(`[data-module-content="${moduleIdx}"]`);
        const icon = this.container.querySelector(`[data-module="${moduleIdx}"] .expand-icon`);
        
        if (this.expandedModules.has(moduleIdx)) {
            this.expandedModules.delete(moduleIdx);
            content.classList.remove('expanded');
            icon.classList.remove('expanded');
        } else {
            this.expandedModules.add(moduleIdx);
            content.classList.add('expanded');
            icon.classList.add('expanded');
        }
    }

    setActiveItem(element) {
        this.container.querySelectorAll('.subtopic-item').forEach(item => {
            item.classList.remove('active');
        });
        element.classList.add('active');
    }
}

class ContentNavigator {
    constructor(flattedSubtopics, navigateCallback) {
        this.flattedSubtopics = flattedSubtopics;
        this.navigateCallback = navigateCallback;
    }

    renderButtons(currentPath, container) {
        const currentIndex = this.flattedSubtopics.findIndex(subtopic => subtopic.path === currentPath);
        
        const navButtons = document.createElement('div');
        navButtons.className = 'nav-buttons';

        if (currentIndex > 0) {
            const prevSubtopic = this.flattedSubtopics[currentIndex - 1];
            const prevButton = document.createElement('button');
            prevButton.textContent = 'Previous';
            prevButton.addEventListener('click', () => this.navigateCallback(prevSubtopic));
            navButtons.appendChild(prevButton);
        }

        if (currentIndex < this.flattedSubtopics.length - 1) {
            const nextSubtopic = this.flattedSubtopics[currentIndex + 1];
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.addEventListener('click', () => this.navigateCallback(nextSubtopic));
            navButtons.appendChild(nextButton);
        }

        container.appendChild(navButtons);
    }
}

export { NavigationManager, ContentNavigator };
