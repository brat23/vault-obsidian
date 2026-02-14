
class ContentRenderer {
    renderMarkdown(markdown) {
        // Remove double brackets used for internal linking in markdown files
        const cleanedMarkdown = markdown.replace(/\[\[(.*?)\]\]/g, '$1');
        return marked.parse(cleanedMarkdown);
    }

    renderHTML(html) {
        return html;
    }

    renderCustom(contentData) {
        // For gamified or custom interactive content
        return contentData.html || '';
    }
}

class ContentLoader {
    async loadMarkdown(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.text();
        } catch (error) {
            console.error('Error loading markdown:', error);
            return `# Error Loading Content

Could not load content from: ${path}

Please check the file path and try again.`;
        }
    }

    async loadJSON(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Error loading JSON:', error);
            return null;
        }
    }
}

class ContentFactory {
    static createHandler(type) {
        switch(type) {
            case 'markdown':
                return new MarkdownContentHandler();
            case 'html':
                return new HTMLContentHandler();
            case 'custom':
                return new CustomContentHandler();
            default:
                return new MarkdownContentHandler();
        }
    }
}

class ContentHandler {
    async load(path, loader) {
        throw new Error('load method must be implemented');
    }

    render(content, renderer) {
        throw new Error('render method must be implemented');
    }
}

class MarkdownContentHandler extends ContentHandler {
    async load(path, loader) {
        return await loader.loadMarkdown(path);
    }

    render(content, renderer) {
        return `<div class="markdown-content">${renderer.renderMarkdown(content)}</div>`;
    }
}

class HTMLContentHandler extends ContentHandler {
    async load(path, loader) {
        return await loader.loadMarkdown(path); // Can load from file
    }

    render(content, renderer) {
        return renderer.renderHTML(content);
    }
}

class CustomContentHandler extends ContentHandler {
    async load(path, loader) {
        return await loader.loadJSON(path);
    }

    render(content, renderer) {
        return `<div class="custom-content">${renderer.renderCustom(content)}</div>`;
    }
}

export { ContentRenderer, ContentLoader, ContentFactory, ContentHandler, MarkdownContentHandler, HTMLContentHandler, CustomContentHandler };
