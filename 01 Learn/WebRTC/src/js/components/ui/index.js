
class UIController {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.menuToggle = document.getElementById('menuToggle');
        this.resizeHandle = document.getElementById('resizeHandle');
        this.isResizing = false;
        this.sidebarCollapsed = false;
    }

    init() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Toggle sidebar
        this.menuToggle.addEventListener('click', () => this.toggleSidebar());

        // Resize functionality
        this.resizeHandle.addEventListener('mousedown', (e) => this.startResize(e));
        document.addEventListener('mousemove', (e) => this.resize(e));
        document.addEventListener('mouseup', () => this.stopResize());

        // Close sidebar on mobile when clicking outside
        if (window.innerWidth <= 768) {
            document.addEventListener('click', (e) => {
                if (!this.sidebar.contains(e.target) && !this.menuToggle.contains(e.target)) {
                    this.closeSidebar();
                }
            });
        }
    }

    toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this.sidebar.classList.toggle('collapsed');
    }

    closeSidebar() {
        if (window.innerWidth <= 768) {
            this.sidebarCollapsed = true;
            this.sidebar.classList.add('collapsed');
        }
    }

    startResize(e) {
        this.isResizing = true;
        this.resizeHandle.classList.add('dragging');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    }

    resize(e) {
        if (!this.isResizing) return;
        
        const newWidth = e.clientX;
        const minWidth = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue('--sidebar-min-width'));
        const maxWidth = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue('--sidebar-max-width'));
        
        if (newWidth >= minWidth && newWidth <= maxWidth) {
            this.sidebar.style.width = newWidth + 'px';
        }
    }

    stopResize() {
        this.isResizing = false;
        this.resizeHandle.classList.remove('dragging');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }

    updateProgress(percentage) {
        document.getElementById('progressFill').style.width = percentage + '%';
    }
}

class ProgressTracker {
    constructor() {
        this.completed = new Set();
        this.total = 0;
    }

    setTotal(count) {
        this.total = count;
    }

    markComplete(id) {
        this.completed.add(id);
        return this.getProgress();
    }

    getProgress() {
        return this.total > 0 ? (this.completed.size / this.total) * 100 : 0;
    }
}

export { UIController, ProgressTracker };
