(function () {
    // Global Namespace for Instagram Clone
    window.IG = {};

    /**
     * IG.Data Module
     * Contains hard-coded arrays of placeholder data.
     */
    IG.Data = (function () {
        const users = [
            { id: 'user_one', username: 'user_one', fullname: 'User One', avatar: '/static/img/placeholders/avatar2.jpg' },
            { id: 'user_two', username: 'user_two', fullname: 'User Two', avatar: '/static/img/placeholders/avatar3.jpg' },
            { id: 'user_three', username: 'user_three', fullname: 'User Three', avatar: '/static/img/placeholders/avatar4.jpg' },
            { id: 'user_four', username: 'user_four', fullname: 'User Four', avatar: '/static/img/placeholders/avatar5.jpg' },
            { id: 'user_five', username: 'user_five', fullname: 'User Five', avatar: '/static/img/placeholders/avatar6.jpg' },
            { id: 'user_six', username: 'user_six', fullname: 'User Six', avatar: '/static/img/placeholders/avatar7.jpg' },
            { id: 'user_seven', username: 'user_seven', fullname: 'User Seven', avatar: '/static/img/placeholders/avatar8.jpg' },
        ];

        const posts = [
            {
                id: 'post1',
                username: 'user_one',
                avatar: '/static/img/placeholders/avatar2.jpg',
                media: '/static/img/placeholders/post1.jpg',
                type: 'image',
                caption: 'Beautiful sunset vibes! 🌅 #sunset #nature',
                likes: 1234,
                comments: [
                    { username: 'demo_user', text: 'Stunning!' },
                    { username: 'user_two', text: 'Love this photo!' }
                ],
                timestamp: '2 hours ago'
            },
            {
                id: 'post2',
                username: 'user_two',
                avatar: '/static/img/placeholders/avatar3.jpg',
                media: '/static/img/placeholders/post2.jpg',
                type: 'image',
                caption: 'Exploring new places. What an adventure! ⛰️ #travel #adventure',
                likes: 876,
                comments: [
                    { username: 'user_one', text: 'Looks amazing!' }
                ],
                timestamp: '5 hours ago'
            },
            {
                id: 'post3',
                username: 'user_three',
                avatar: '/static/img/placeholders/avatar4.jpg',
                media: '/static/img/placeholders/post3.jpg',
                type: 'image',
                caption: 'Coffee time is the best time ☕ #coffee #coffeelover',
                likes: 2100,
                comments: [],
                timestamp: '1 day ago'
            },
            {
                id: 'post4',
                username: 'user_four',
                avatar: '/static/img/placeholders/avatar5.jpg',
                media: '/static/img/placeholders/post4.jpg',
                type: 'image',
                caption: 'City lights at night ✨ #cityscape #nightphotography',
                likes: 1500,
                comments: [],
                timestamp: '3 days ago'
            },
            {
                id: 'post5',
                username: 'user_five',
                avatar: '/static/img/placeholders/avatar6.jpg',
                media: '/static/img/placeholders/post5.jpg',
                type: 'image',
                caption: 'Workout motivation! 💪 #fitness #gym',
                likes: 999,
                comments: [],
                timestamp: '1 week ago'
            },
            {
                id: 'post6',
                username: 'user_six',
                avatar: '/static/img/placeholders/avatar7.jpg',
                media: '/static/img/placeholders/post6.jpg',
                type: 'image',
                caption: 'Foodie adventures! 🍜 #food #delicious',
                likes: 750,
                comments: [],
                timestamp: '2 weeks ago'
            }
        ];

        const stories = [
            { id: 'story1', username: 'user_one', avatar: '/static/img/placeholders/avatar2.jpg', media: '/static/img/placeholders/story1.jpg', type: 'image' },
            { id: 'story2', username: 'user_two', avatar: '/static/img/placeholders/avatar3.jpg', media: '/static/img/placeholders/story2.jpg', type: 'image' },
            { id: 'story3', username: 'user_three', avatar: '/static/img/placeholders/avatar4.jpg', media: '/static/img/placeholders/story3.jpg', type: 'image' },
            { id: 'story4', username: 'user_four', avatar: '/static/img/placeholders/avatar5.jpg', media: '/static/img/placeholders/story4.jpg', type: 'image' },
            { id: 'story5', username: 'user_five', avatar: '/static/img/placeholders/avatar6.jpg', media: '/static/img/placeholders/story5.jpg', type: 'image' },
            { id: 'story6', username: 'user_six', avatar: '/static/img/placeholders/avatar7.jpg', media: '/static/img/placeholders/story6.jpg', type: 'image' },
            { id: 'story7', username: 'user_seven', avatar: '/static/img/placeholders/avatar8.jpg', media: '/static/img/placeholders/story7.jpg', type: 'image' },
        ];

        const reels = [
            {
                id: 'reel1',
                username: 'user_one',
                avatar: '/static/img/placeholders/avatar2.jpg',
                media: '/static/img/placeholders/reel1.mp4', // Placeholder video
                caption: 'Enjoying the view! 🏞️',
                likes: 567,
                comments: 12,
                timestamp: '1 hour ago'
            },
            {
                id: 'reel2',
                username: 'user_two',
                avatar: '/static/img/placeholders/avatar3.jpg',
                media: '/static/img/placeholders/reel2.mp4', // Placeholder video
                caption: 'Quick recipe for success! 🧑‍🍳',
                likes: 987,
                comments: 34,
                timestamp: '1 day ago'
            },
            {
                id: 'reel3',
                username: 'user_three',
                avatar: '/static/img/placeholders/avatar4.jpg',
                media: '/static/img/placeholders/reel3.mp4', // Placeholder video
                caption: 'My morning routine. ☀️',
                likes: 1200,
                comments: 50,
                timestamp: '2 days ago'
            }
        ];

        const messages = [
            {
                id: 'msg_conv1',
                participant: { id: 'user_one', username: 'user_one', avatar: '/static/img/placeholders/avatar2.jpg' },
                lastMessage: 'Hey, how are you?',
                timestamp: '10m',
                unread: true,
                thread: [
                    { sender: 'user_one', text: 'Hey, how are you?', time: '10:00 AM' },
                    { sender: 'self', text: 'I am good, thanks! How about you?', time: '10:01 AM' },
                    { sender: 'user_one', text: 'Doing great! Just chilling.', time: '10:05 AM' }
                ]
            },
            {
                id: 'msg_conv2',
                participant: { id: 'user_two', username: 'user_two', avatar: '/static/img/placeholders/avatar3.jpg' },
                lastMessage: 'Did you see that post?',
                timestamp: '1h',
                unread: false,
                thread: [
                    { sender: 'user_two', text: 'Did you see that post?', time: '09:00 AM' },
                    { sender: 'self', text: 'Which one?', time: '09:05 AM' },
                    { sender: 'user_two', text: 'The one with the cat.', time: '09:10 AM' },
                    { sender: 'self', text: 'Ah, yes! So cute!', time: '09:11 AM' }
                ]
            },
            {
                id: 'msg_conv3',
                participant: { id: 'user_three', username: 'user_three', avatar: '/static/img/placeholders/avatar4.jpg' },
                lastMessage: 'See you tomorrow!',
                timestamp: '1d',
                unread: true,
                thread: [
                    { sender: 'self', text: 'Okay, sounds good!', time: 'Yesterday 5:00 PM' },
                    { sender: 'user_three', text: 'See you tomorrow!', time: 'Yesterday 5:30 PM' }
                ]
            }
        ];

        return {
            users,
            posts,
            stories,
            reels,
            messages
        };
    })();

    /**
     * IG.Utils Module
     * Provides general utility functions.
     */
    IG.Utils = (function () {
        let debounceTimer;

        /**
         * Debounce function to limit how often a function can run.
         * @param {function} func - The function to debounce.
         * @param {number} delay - The delay in milliseconds.
         */
        function debounce(func, delay) {
            return function (...args) {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => func.apply(this, args), delay);
            };
        }

        /**
         * Get data from localStorage.
         * @param {string} key - The key for the localStorage item.
         * @param {*} defaultValue - The default value to return if key not found.
         * @returns {*} Stored data or default value.
         */
        function getLocalStorage(key, defaultValue) {
            try {
                const item = localStorage.getItem('ig_clone_' + key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                console.error(`Error reading localStorage item '${key}':`, e);
                return defaultValue;
            }
        }

        /**
         * Set data to localStorage.
         * @param {string} key - The key for the localStorage item.
         * @param {*} value - The value to store.
         */
        function setLocalStorage(key, value) {
            try {
                localStorage.setItem('ig_clone_' + key, JSON.stringify(value));
            } catch (e) {
                console.error(`Error writing localStorage item '${key}':`, e);
            }
        }

        /**
         * Clears all IG-related items from localStorage.
         */
        function clearLocalStorage() {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('ig_clone_')) {
                    localStorage.removeItem(key);
                }
            });
            console.log('All IG clone localStorage data cleared.');
        }

        /**
         * Helper to create a DOM element.
         * @param {string} tagName - The tag name of the element.
         * @param {object} [attributes={}] - Object of attributes to set.
         * @param {HTMLElement[]} [children=[]] - Array of child elements.
         * @returns {HTMLElement} The created DOM element.
         */
        function createElement(tagName, attributes = {}, children = []) {
            const element = document.createElement(tagName);
            for (const key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    if (key === 'className') {
                        element.className = attributes[key];
                    } else if (key === 'dataset') {
                        for (const dataKey in attributes[key]) {
                            element.dataset[dataKey] = attributes[key][dataKey];
                        }
                    } else {
                        element.setAttribute(key, attributes[key]);
                    }
                }
            }
            children.forEach(child => {
                if (typeof child === 'string') {
                    element.appendChild(document.createTextNode(child));
                } else {
                    element.appendChild(child);
                }
            });
            return element;
        }

        /**
         * Simple client-side router based on URL hash (optional, but preferred)
         * or by intercepting link clicks for Django-style URL comments.
         */
        let currentPage = '';

        function loadPageContent(path) {
            // Remove leading/trailing slashes for consistent matching
            const cleanedPath = path.replace(/^\/|\/$/g, '');
            const mainContent = document.getElementById('main-content');
            if (!mainContent) {
                console.error('Main content area not found.');
                return;
            }

            // Simulate loading HTML from a template file
            // In a real Django app, this would be a server-side render.
            // Here, we'll just map paths to placeholder HTML snippets.
            let htmlContent = '';
            let pageName = 'home'; // Default page

            // Extract page name from path, handling profile with optional username
            if (cleanedPath === '' || cleanedPath === 'home') {
                pageName = 'home';
            } else if (cleanedPath.startsWith('profile')) {
                pageName = 'profile';
                const parts = cleanedPath.split('/');
                if (parts.length > 1 && parts[1]) {
                    // This means it's profile/username
                    const username = parts[1];
                    // We need to fetch the template, then replace the placeholder.
                    // For simplicity, we'll just mark it and JS will update.
                    fetch(`/templates/profile.html`)
                        .then(response => response.text())
                        .then(data => {
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = data;
                            // Find the block content. In a real scenario, this would be passed from Django.
                            // Here, we're assuming the content block is the only child of section.profile-page
                            const profileSection = tempDiv.querySelector('.profile-page');
                            if (profileSection) {
                                // Replace the username placeholder if present, otherwise set the default
                                profileSection.innerHTML = profileSection.innerHTML.replace(/{% if username %}.*?{% else %}(.*?){% endif %}/s, username);
                                mainContent.innerHTML = profileSection.outerHTML;
                                IG.UI.initProfilePage(username); // Initialize profile page with username
                                updateActiveNavLink(pageName);
                            } else {
                                console.error('Could not find .profile-page in profile.html');
                            }
                        })
                        .catch(error => {
                            console.error('Error loading profile.html:', error);
                            // Fallback to generic profile or error
                            mainContent.innerHTML = `
                                <section class="profile-page">
                                    <h2>Profile</h2>
                                    <p>Could not load profile for ${username}.</p>
                                </section>
                            `;
                            updateActiveNavLink(pageName);
                        });
                    currentPage = pageName;
                    return; // Exit early as fetch is async
                }
            } else if (cleanedPath === 'login' || cleanedPath === 'signup') {
                pageName = 'auth'; // Special handling for auth pages
                // For auth pages, we want the whole body class to change
                document.body.classList.add('auth-page-body');
            } else {
                pageName = cleanedPath;
            }


            // Fetch the appropriate HTML template
            const templatePath = pageName.includes('auth') ? `/templates/auth/${pageName}.html` : `/templates/${pageName}.html`;

            fetch(templatePath)
                .then(response => {
                    if (!response.ok) {
                        if (response.status === 404) {
                            console.warn(`Template not found for path: ${templatePath}. Falling back to home.`);
                            return fetch(`/templates/home.html`); // Fallback to home
                        }
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    // Extract content within {% block content %}...{% endblock %}
                    const contentBlockRegex = /{% block content %}(.*?){% endblock %}/s;
                    const match = data.match(contentBlockRegex);
                    if (match && match[1]) {
                        htmlContent = match[1];
                    } else {
                        // If no block content, use the whole file (e.g., for base.html which won't be loaded directly)
                        // Or if we're loading a partial that doesn't use blocks
                        htmlContent = data;
                    }

                    mainContent.innerHTML = htmlContent;

                    // Re-initialize UI components for the new page
                    initializePage(pageName);
                    updateActiveNavLink(pageName);

                    // Handle auth page body class
                    if (pageName.includes('auth')) {
                        document.body.classList.add('auth-page-body');
                    } else {
                        document.body.classList.remove('auth-page-body');
                    }

                    currentPage = pageName;
                })
                .catch(error => console.error('Error loading page:', error));
        }

        function handleLinkClick(event) {
            const target = event.target.closest('a');
            if (target && target.matches('a[href^="{% url "]')) {
                event.preventDefault();
                const href = target.getAttribute('href');
                let path = '';

                // Extract path from Django {% url %} syntax
                // Example: {% url 'home' %} or {% url 'profile' 'demo_user' %}
                const urlMatch = href.match(/'(.*?)'(?: '(.*?)')?/);
                if (urlMatch) {
                    const viewName = urlMatch[1];
                    const param = urlMatch[2];

                    switch (viewName) {
                        case 'home':
                            path = '/';
                            break;
                        case 'explore':
                            path = '/explore/';
                            break;
                        case 'search':
                            path = '/search/';
                            break;
                        case 'reels':
                            path = '/reels/';
                            break;
                        case 'messages':
                            path = '/messages/';
                            break;
                        case 'notifications':
                            path = '/notifications/';
                            break;
                        case 'create':
                            path = '/create/';
                            break;
                        case 'threads':
                            path = '/threads/';
                            break;
                        case 'settings':
                            path = '/settings/';
                            break;
                        case 'profile':
                            path = '/profile/' + (param ? param + '/' : '');
                            break;
                        case 'login':
                            path = '/auth/login/';
                            break;
                        case 'signup':
                            path = '/auth/signup/';
                            break;
                        default:
                            console.warn('Unknown Django URL pattern:', viewName);
                            path = '/'; // Fallback
                    }
                }

                if (path) {
                    history.pushState({}, '', path);
                    loadPageContent(path);
                }
            }
        }

        function updateActiveNavLink(pageName) {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            const activeItem = document.querySelector(`.nav-item[data-nav="${pageName}"]`);
            if (activeItem) {
                activeItem.classList.add('active');
            }
        }

        function initializePage(pageName) {
            // Remove any specific class from body for old page
            document.body.className = document.body.className.replace(/\b(home-page-body|explore-page-body|auth-page-body)\b/g, '');

            // Add specific class for the new page
            document.body.classList.add(`${pageName}-page-body`);

            // Re-initialize common UI elements that might exist on multiple pages
            IG.UI.initModals();
            IG.UI.initDarkModeToggle();

            // Call specific page initialization functions
            switch (pageName) {
                case 'home':
                    IG.UI.initHomePage();
                    break;
                case 'explore':
                    IG.UI.initExplorePage();
                    break;
                case 'search':
                    IG.UI.initSearchPage();
                    break;
                case 'reels':
                    IG.UI.initReelsPage();
                    break;
                case 'messages':
                    IG.UI.initMessagesPage();
                    break;
                case 'notifications':
                    IG.UI.initNotificationsPage();
                    break;
                case 'create':
                    IG.UI.initCreatePostPage();
                    break;
                case 'settings':
                    IG.UI.initSettingsPage();
                    break;
                case 'profile':
                    IG.UI.initProfilePage(); // No specific username for base profile for now
                    break;
                case 'login':
                    IG.UI.initLoginPage();
                    break;
                case 'signup':
                    IG.UI.initSignupPage();
                    break;
            }

            // After new page content is loaded, re-attach event listeners
            IG.UI.attachGlobalEventListeners();
        }

        // Handle browser back/forward buttons
        window.onpopstate = () => {
            loadPageContent(window.location.pathname);
        };

        return {
            debounce,
            getLocalStorage,
            setLocalStorage,
            clearLocalStorage,
            createElement,
            loadPageContent,
            handleLinkClick,
            initializePage,
            currentPage: () => currentPage // Getter for current page
        };
    })();

    /**
     * IG.UI Module
     * Handles all user interface interactions and DOM manipulations.
     */
    IG.UI = (function () {
        let storyModal;
        let storySlideshowContainer;
        let storyCurrentIndex = 0;
        let storyInterval;
        let storyPrevBtn, storyNextBtn;

        let createPostModal;
        let fileUploadInput;
        let createPostDropZone;
        let createPostPreviewContainer;
        let sharePostBtn;

        let editProfileModal;

        let notificationsBadge;

        let reelsObserver;
        let storiesObserver;

        /**
         * Initializes the dark mode toggle.
         */
        function initDarkModeToggle() {
            const toggleButton = document.querySelector('.dark-mode-toggle');
            const settingToggle = document.getElementById('dark-mode-toggle-setting');
            const isDarkMode = IG.Utils.getLocalStorage('darkMode', false);

            if (isDarkMode) {
                document.body.classList.add('dark');
                if (settingToggle) settingToggle.checked = true;
            } else {
                document.body.classList.remove('dark');
                if (settingToggle) settingToggle.checked = false;
            }

            if (toggleButton) {
                toggleButton.onclick = () => {
                    document.body.classList.toggle('dark');
                    const currentMode = document.body.classList.contains('dark');
                    IG.Utils.setLocalStorage('darkMode', currentMode);
                    if (settingToggle) settingToggle.checked = currentMode;
                };
            }

            if (settingToggle) {
                settingToggle.onchange = () => {
                    const isChecked = settingToggle.checked;
                    if (isChecked) {
                        document.body.classList.add('dark');
                    } else {
                        document.body.classList.remove('dark');
                    }
                    IG.Utils.setLocalStorage('darkMode', isChecked);
                };
            }
        }

        /**
         * Initializes all modal functionalities.
         */
        function initModals() {
            storyModal = document.getElementById('story-modal');
            storySlideshowContainer = storyModal ? storyModal.querySelector('.story-slideshow-container') : null;
            storyPrevBtn = storyModal ? storyModal.querySelector('.story-prev-btn') : null;
            storyNextBtn = storyModal ? storyModal.querySelector('.story-next-btn') : null;

            createPostModal = document.getElementById('create-post-modal');
            fileUploadInput = document.getElementById('file-upload-input');
            createPostDropZone = createPostModal ? createPostModal.querySelector('.create-post-drop-zone') : null;
            createPostPreviewContainer = createPostModal ? createPostModal.querySelector('.create-post-preview-container') : null;
            sharePostBtn = document.getElementById('share-post-btn');

            editProfileModal = document.getElementById('edit-profile-modal');

            // Close modal buttons
            document.querySelectorAll('.modal-close-btn').forEach(btn => {
                btn.onclick = (e) => {
                    e.target.closest('.modal-overlay').classList.remove('visible');
                    clearInterval(storyInterval); // Stop story slideshow
                    if (createPostPreviewContainer) createPostPreviewContainer.innerHTML = ''; // Clear preview
                    if (createPostDropZone) createPostDropZone.classList.remove('hidden'); // Show drop zone
                    if (createPostPreviewContainer) createPostPreviewContainer.classList.add('hidden'); // Hide preview
                };
            });

            // Click outside to close modal
            document.querySelectorAll('.modal-overlay').forEach(overlay => {
                overlay.onclick = (e) => {
                    if (e.target === overlay) {
                        overlay.classList.remove('visible');
                        clearInterval(storyInterval);
                        if (createPostPreviewContainer) createPostPreviewContainer.innerHTML = '';
                        if (createPostDropZone) createPostDropZone.classList.remove('hidden');
                        if (createPostPreviewContainer) createPostPreviewContainer.classList.add('hidden');
                    }
                };
            });

            // Open create post modal from sidebar/mobile nav
            document.querySelectorAll('.create-post-button').forEach(btn => {
                btn.onclick = () => {
                    if (createPostModal) {
                        createPostModal.classList.add('visible');
                    }
                };
            });

            // Handle file upload for create post modal
            if (fileUploadInput) {
                fileUploadInput.onchange = (e) => handleFileSelect(e.target.files);
            }
            if (createPostDropZone) {
                createPostDropZone.ondragover = (e) => { e.preventDefault(); e.stopPropagation(); createPostDropZone.style.borderColor = 'var(--link-color)'; };
                createPostDropZone.ondragleave = (e) => { e.preventDefault(); e.stopPropagation(); createPostDropZone.style.borderColor = 'var(--border-color)'; };
                createPostDropZone.ondrop = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    createPostDropZone.style.borderColor = 'var(--border-color)';
                    handleFileSelect(e.dataTransfer.files);
                };
            }
            if (sharePostBtn) {
                sharePostBtn.onclick = () => {
                    alert('Post shared! (This is a demo, no actual upload)');
                    createPostModal.classList.remove('visible');
                    if (createPostPreviewContainer) createPostPreviewContainer.innerHTML = '';
                    if (createPostDropZone) createPostDropZone.classList.remove('hidden');
                    if (createPostPreviewContainer) createPostPreviewContainer.classList.add('hidden');
                };
            }
        }

        /**
         * Handles file selection for post creation.
         * @param {FileList} files - The selected files.
         */
        function handleFileSelect(files) {
            if (files.length === 0) return;

            const file = files[0]; // Only handle one file for simplicity
            const reader = new FileReader();

            reader.onload = (e) => {
                createPostDropZone.classList.add('hidden');
                createPostPreviewContainer.classList.remove('hidden');
                createPostPreviewContainer.innerHTML = ''; // Clear previous preview

                let mediaElement;
                if (file.type.startsWith('image/')) {
                    mediaElement = IG.Utils.createElement('img', { src: e.target.result, alt: 'Preview' });
                } else if (file.type.startsWith('video/')) {
                    mediaElement = IG.Utils.createElement('video', { src: e.target.result, controls: true, autoplay: true, muted: true });
                } else {
                    alert('Unsupported file type.');
                    createPostDropZone.classList.remove('hidden');
                    createPostPreviewContainer.classList.add('hidden');
                    return;
                }
                createPostPreviewContainer.insertBefore(mediaElement, sharePostBtn); // Insert before the share button
            };
            reader.readAsDataURL(file);
        }

        /**
         * Attaches global event listeners like link clicks (for the router).
         */
        function attachGlobalEventListeners() {
            document.body.addEventListener('click', IG.Utils.handleLinkClick);

            // Desktop search dropdown behavior
            const searchButton = document.querySelector('.nav-item.search-button');
            const searchDropdown = document.querySelector('.search-dropdown');
            if (searchButton && searchDropdown) {
                searchButton.onclick = (e) => {
                    if (window.innerWidth >= 600) { // Only for desktop/compact sidebar
                        e.stopPropagation(); // Prevent modal overlay from closing
                        searchDropdown.classList.toggle('hidden');
                        searchButton.classList.toggle('active');
                        // If dropdown is open, focus search input if available
                        const searchInput = searchDropdown.querySelector('input');
                        if (!searchDropdown.classList.contains('hidden') && searchInput) {
                            searchInput.focus();
                        }
                    } else {
                        // On mobile, navigate to search page
                        history.pushState({}, '', '/search/');
                        IG.Utils.loadPageContent('/search/');
                    }
                };

                document.body.addEventListener('click', (e) => {
                    if (!searchButton.contains(e.target) && !searchDropdown.contains(e.target)) {
                        searchDropdown.classList.add('hidden');
                        searchButton.classList.remove('active');
                    }
                });
            }
        }

        /**
         * Initializes the Home page.
         */
        function initHomePage() {
            renderStories();
            renderPosts();
            renderSuggestions();

            // Story modal navigation
            if (storyPrevBtn) storyPrevBtn.onclick = () => showStory(storyCurrentIndex - 1);
            if (storyNextBtn) storyNextBtn.onclick = () => showStory(storyCurrentIndex + 1);

            // Init Intersection Observer for stories
            initStoriesObserver();
        }

        /**
         * Renders the stories row.
         */
        function renderStories() {
            const storiesContainer = document.querySelector('.stories-container');
            if (!storiesContainer) return;
            storiesContainer.innerHTML = ''; // Clear existing

            IG.Data.stories.forEach((story, index) => {
                const storyItem = IG.Utils.createElement('div', { className: 'story-item', dataset: { storyId: story.id, index: index } }, [
                    IG.Utils.createElement('img', { src: story.avatar, alt: story.username, className: 'avatar-lg' }),
                    IG.Utils.createElement('span', { className: 'username' }, [story.username])
                ]);
                storyItem.onclick = () => openStoryModal(index);
                storiesContainer.appendChild(storyItem);
            });
        }

        /**
         * Opens the story modal and starts slideshow.
         * @param {number} startIndex - The index of the story to start with.
         */
        function openStoryModal(startIndex) {
            if (!storyModal || !storySlideshowContainer) return;

            storyCurrentIndex = startIndex;
            storySlideshowContainer.innerHTML = ''; // Clear previous stories

            // Render all stories in the slideshow container for smooth transition
            IG.Data.stories.forEach((story, index) => {
                let mediaElement;
                if (story.type === 'image') {
                    mediaElement = IG.Utils.createElement('img', { src: story.media, alt: story.username });
                } else if (story.type === 'video') {
                    mediaElement = IG.Utils.createElement('video', { src: story.media, controls: true, autoplay: true, muted: true, loop: true });
                }

                const storySlide = IG.Utils.createElement('div', { className: 'story-slide', dataset: { index: index } }, [
                    IG.Utils.createElement('div', { className: 'story-header' }, [
                        IG.Utils.createElement('img', { src: story.avatar, alt: story.username, className: 'avatar-md' }),
                        IG.Utils.createElement('span', { className: 'username' }, [story.username]),
                        IG.Utils.createElement('span', { className: 'timestamp' }, ['Just now']) // Placeholder timestamp
                    ]),
                    mediaElement
                ]);
                storySlideshowContainer.appendChild(storySlide);
            });

            storyModal.classList.add('visible');
            showStory(storyCurrentIndex);
        }

        /**
         * Displays a specific story in the slideshow.
         * @param {number} index - The index of the story to display.
         */
        function showStory(index) {
            if (!storySlideshowContainer) return;

            const totalStories = IG.Data.stories.length;
            if (index < 0) index = 0;
            if (index >= totalStories) index = totalStories - 1;

            storyCurrentIndex = index;

            const translateX = -index * 100; // Move by 100% for each slide
            storySlideshowContainer.style.transform = `translateX(${translateX}%)`;

            // Update navigation button visibility
            if (storyPrevBtn) storyPrevBtn.classList.toggle('hidden', storyCurrentIndex === 0);
            if (storyNextBtn) storyNextBtn.classList.toggle('hidden', storyCurrentIndex === totalStories - 1);

            // Autoplay next story after a delay
            clearInterval(storyInterval);
            storyInterval = setTimeout(() => {
                if (storyCurrentIndex < totalStories - 1) {
                    showStory(storyCurrentIndex + 1);
                } else {
                    storyModal.classList.remove('visible'); // Close modal after last story
                }
            }, 5000); // 5 seconds per story
        }


        /**
         * Renders the main posts feed.
         */
        function renderPosts() {
            const postsContainer = document.querySelector('.posts-container');
            if (!postsContainer) return;
            postsContainer.innerHTML = ''; // Clear existing

            IG.Data.posts.forEach(post => {
                const likedPosts = IG.Utils.getLocalStorage('likedPosts', []);
                const savedPosts = IG.Utils.getLocalStorage('savedPosts', []);
                const isLiked = likedPosts.includes(post.id);
                const isSaved = savedPosts.includes(post.id);

                const postCard = IG.Utils.createElement('article', { className: 'post-card', dataset: { postId: post.id } }, [
                    IG.Utils.createElement('div', { className: 'post-header' }, [
                        IG.Utils.createElement('img', { src: post.avatar, alt: post.username, className: 'avatar-md' }),
                        IG.Utils.createElement('span', { className: 'username' }, [post.username]),
                        IG.Utils.createElement('button', { className: 'icon-btn post-options-btn' }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'More options', fill: 'currentColor', height: '24', role: 'img', viewBox: '0 0 24 24', width: '24' }, [
                                IG.Utils.createElement('circle', { cx: '12', cy: '12', r: '1.5' }),
                                IG.Utils.createElement('circle', { cx: '6', cy: '12', r: '1.5' }),
                                IG.Utils.createElement('circle', { cx: '18', cy: '12', r: '1.5' })
                            ])
                        ])
                    ]),
                    post.type === 'image' ?
                        IG.Utils.createElement('img', { src: post.media, alt: 'Post image', className: 'post-media' }) :
                        IG.Utils.createElement('video', { src: post.media, controls: true, className: 'post-media' }),
                    IG.Utils.createElement('div', { className: 'post-actions' }, [
                        IG.Utils.createElement('button', { className: `icon-btn like-button ${isLiked ? 'active' : ''}` }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'Like', fill: isLiked ? 'var(--alert-color)' : 'currentColor', height: '24', role: 'img', viewBox: '0 0 48 48', width: '24' }, [
                                IG.Utils.createElement('path', { d: 'M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 5.4 2.1 10.9 6.7 15.6l17.7 17.7c.3.3.6.4.9.4.3 0 .6-.1.9-.4l17.7-17.7c4.6-4.7 6.7-10.2 6.7-15.6 0-8-6-14.5-13.4-14.5z' })
                            ])
                        ]),
                        IG.Utils.createElement('button', { className: 'icon-btn comment-button' }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'Comment', fill: 'currentColor', height: '24', role: 'img', viewBox: '0 0 48 48', width: '24' }, [
                                IG.Utils.createElement('path', { d: 'M41 0H7C3.134 0 0 3.134 0 7v34c0 3.866 3.134 7 7 7h27.318L48 48V7c0-3.866-3.134-7-7-7zm-4.5 31.5H11.5c-1.381 0-2.5-1.119-2.5-2.5v-18c0-1.381 1.119-2.5 2.5-2.5h25c1.381 0 2.5 1.119 2.5 2.5v18c0 1.381-1.119 2.5-2.5 2.5z' })
                            ])
                        ]),
                        IG.Utils.createElement('button', { className: 'icon-btn share-button' }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'Share Post', fill: 'currentColor', height: '24', role: 'img', viewBox: '0 0 24 24', width: '24' }, [
                                IG.Utils.createElement('path', { d: 'M21.5 0h-19C.6 0 0 .6 0 1.5v21c0 .9.6 1.5 1.5 1.5h19c.9 0 1.5-.6 1.5-1.5V1.5c0-.9-.6-1.5-1.5-1.5zm-11 5h-4.5c-.3 0-.5.2-.5.5s.2.5.5.5h4.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm5.5 12h-10c-.3 0-.5.2-.5.5s.2.5.5.5h10c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0-4.5h-10c-.3 0-.5.2-.5.5s.2.5.5.5h10c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z' })
                            ])
                        ]),
                        IG.Utils.createElement('button', { className: `icon-btn save-post-btn ${isSaved ? 'active' : ''}` }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'Save', fill: isSaved ? 'currentColor' : 'currentColor', height: '24', role: 'img', viewBox: '0 0 48 48', width: '24' }, [
                                IG.Utils.createElement('path', { d: 'M43.5 48c-.4 0-.8-.2-1.1-.4L24 29.471 5.6 47.6c-.4.3-.9.5-1.4.5-1 0-1.9-.7-1.9-1.8V2.5c0-1.1.9-2 2-2h35c1.1 0 2 .9 2 2V46.2c0 1.1-.9 1.8-1.9 1.8z' })
                            ])
                        ])
                    ]),
                    IG.Utils.createElement('div', { className: 'post-likes' }, [`${post.likes} likes`]),
                    IG.Utils.createElement('div', { className: 'post-caption' }, [
                        IG.Utils.createElement('span', { className: 'username' }, [post.username]),
                        ` ${post.caption}`
                    ]),
                    IG.Utils.createElement('a', { href: '#', className: 'post-comments-link' }, [`View all ${post.comments.length} comments`]),
                    IG.Utils.createElement('div', { className: 'post-comments-section' },
                        post.comments.map(comment =>
                            IG.Utils.createElement('div', { className: 'post-comment' }, [
                                IG.Utils.createElement('span', { className: 'username' }, [comment.username]),
                                comment.text
                            ])
                        )
                    ),
                    IG.Utils.createElement('div', { className: 'post-add-comment' }, [
                        IG.Utils.createElement('input', { type: 'text', placeholder: 'Add a comment...' }),
                        IG.Utils.createElement('button', { className: 'btn btn-link' }, ['Post'])
                    ]),
                    IG.Utils.createElement('div', { className: 'post-timestamp' }, [post.timestamp])
                ]);
                postsContainer.appendChild(postCard);
            });

            // Add event listeners for likes, saves, comments
            postsContainer.querySelectorAll('.like-button').forEach(button => {
                button.onclick = (e) => {
                    const postId = e.target.closest('.post-card').dataset.postId;
                    let likedPosts = IG.Utils.getLocalStorage('likedPosts', []);
                    let likesElement = e.target.closest('.post-card').querySelector('.post-likes');
                    let currentLikes = parseInt(likesElement.textContent.split(' ')[0]);

                    if (likedPosts.includes(postId)) {
                        likedPosts = likedPosts.filter(id => id !== postId);
                        e.currentTarget.classList.remove('active');
                        e.currentTarget.querySelector('svg').style.fill = 'currentColor';
                        currentLikes--;
                    } else {
                        likedPosts.push(postId);
                        e.currentTarget.classList.add('active');
                        e.currentTarget.querySelector('svg').style.fill = 'var(--alert-color)';
                        currentLikes++;
                    }
                    likesElement.textContent = `${currentLikes} likes`;
                    IG.Utils.setLocalStorage('likedPosts', likedPosts);
                };
            });

            postsContainer.querySelectorAll('.save-post-btn').forEach(button => {
                button.onclick = (e) => {
                    const postId = e.target.closest('.post-card').dataset.postId;
                    let savedPosts = IG.Utils.getLocalStorage('savedPosts', []);

                    if (savedPosts.includes(postId)) {
                        savedPosts = savedPosts.filter(id => id !== postId);
                        e.currentTarget.classList.remove('active');
                    } else {
                        savedPosts.push(postId);
                        e.currentTarget.classList.add('active');
                    }
                    IG.Utils.setLocalStorage('savedPosts', savedPosts);
                };
            });

            postsContainer.querySelectorAll('.post-options-btn').forEach(button => {
                button.onclick = () => {
                    document.getElementById('post-options-modal').classList.add('visible');
                };
            });
        }

        /**
         * Renders the suggestions sidebar.
         */
        function renderSuggestions() {
            const suggestionsContainer = document.querySelector('.suggestions-for-you');
            if (!suggestionsContainer) return;
            suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => item.remove()); // Clear old ones

            IG.Data.users.slice(0, 5).forEach(user => { // Show first 5 users as suggestions
                const suggestionItem = IG.Utils.createElement('div', { className: 'suggestion-item' }, [
                    IG.Utils.createElement('img', { src: user.avatar, alt: user.username, className: 'avatar-md' }),
                    IG.Utils.createElement('div', {}, [
                        IG.Utils.createElement('span', { className: 'username' }, [user.username]),
                        IG.Utils.createElement('span', { className: 'text-secondary' }, [`Follows you`]) // Placeholder
                    ]),
                    IG.Utils.createElement('button', { className: 'btn btn-link' }, ['Follow'])
                ]);
                suggestionsContainer.appendChild(suggestionItem);
            });
        }

        /**
         * Initializes search page functionality.
         */
        function initSearchPage() {
            const searchInput = document.getElementById('main-search-input');
            const searchResultsContainer = document.querySelector('.search-results-container');
            const noResultsMessage = document.querySelector('.search-results-container .no-results');

            if (!searchInput || !searchResultsContainer || !noResultsMessage) return;

            const performSearch = IG.Utils.debounce((query) => {
                searchResultsContainer.innerHTML = ''; // Clear previous results
                noResultsMessage.classList.add('hidden');

                if (query.trim() === '') {
                    // Show recent searches or popular content if query is empty
                    searchResultsContainer.innerHTML = '<p class="text-secondary">Type to search for users or posts.</p>';
                    return;
                }

                const filteredUsers = IG.Data.users.filter(user =>
                    user.username.toLowerCase().includes(query.toLowerCase()) ||
                    user.fullname.toLowerCase().includes(query.toLowerCase())
                );

                const filteredPosts = IG.Data.posts.filter(post =>
                    post.caption.toLowerCase().includes(query.toLowerCase()) ||
                    post.username.toLowerCase().includes(query.toLowerCase())
                );

                if (filteredUsers.length === 0 && filteredPosts.length === 0) {
                    noResultsMessage.classList.remove('hidden');
                } else {
                    if (filteredUsers.length > 0) {
                        searchResultsContainer.appendChild(IG.Utils.createElement('h3', { className: 'font-bold' }, ['Users']));
                        filteredUsers.forEach(user => {
                            const userItem = IG.Utils.createElement('div', { className: 'search-result-item suggestion-item' }, [
                                IG.Utils.createElement('img', { src: user.avatar, alt: user.username, className: 'avatar-md' }),
                                IG.Utils.createElement('div', {}, [
                                    IG.Utils.createElement('span', { className: 'username' }, [user.username]),
                                    IG.Utils.createElement('span', { className: 'text-secondary' }, [user.fullname])
                                ])
                            ]);
                            searchResultsContainer.appendChild(userItem);
                        });
                    }

                    if (filteredPosts.length > 0) {
                        searchResultsContainer.appendChild(IG.Utils.createElement('h3', { className: 'font-bold mt-4' }, ['Posts']));
                        const postGrid = IG.Utils.createElement('div', { className: 'explore-posts' }); // Re-use explore-posts styling
                        filteredPosts.forEach(post => {
                            const postItem = IG.Utils.createElement('div', { className: 'explore-post-item' }, [
                                IG.Utils.createElement('img', { src: post.media, alt: 'Post' })
                                // Could add overlay with likes/comments if desired
                            ]);
                            postGrid.appendChild(postItem);
                        });
                        searchResultsContainer.appendChild(postGrid);
                    }
                }
            }, 300); // Debounce by 300ms

            searchInput.onkeyup = (e) => performSearch(e.target.value);

            // Initial render for search dropdown (if on desktop)
            const desktopSearchInput = document.querySelector('.header .search-dropdown input');
            const desktopSearchResults = document.querySelector('.header .search-dropdown');

            if (desktopSearchInput && desktopSearchResults) {
                desktopSearchInput.onkeyup = (e) => {
                    const query = e.target.value;
                    desktopSearchResults.innerHTML = ''; // Clear previous results
                    if (query.trim() === '') {
                        desktopSearchResults.classList.add('hidden');
                        return;
                    }

                    const filteredUsers = IG.Data.users.filter(user =>
                        user.username.toLowerCase().includes(query.toLowerCase()) ||
                        user.fullname.toLowerCase().includes(query.toLowerCase())
                    );

                    if (filteredUsers.length > 0) {
                        filteredUsers.forEach(user => {
                            const userItem = IG.Utils.createElement('div', { className: 'search-result-item suggestion-item' }, [
                                IG.Utils.createElement('img', { src: user.avatar, alt: user.username, className: 'avatar-sm' }),
                                IG.Utils.createElement('div', {}, [
                                    IG.Utils.createElement('span', { className: 'username' }, [user.username]),
                                    IG.Utils.createElement('span', { className: 'text-secondary' }, [user.fullname])
                                ])
                            ]);
                            desktopSearchResults.appendChild(userItem);
                        });
                        desktopSearchResults.classList.remove('hidden');
                    } else {
                        desktopSearchResults.classList.add('hidden');
                    }
                };
            }
        }

        /**
         * Initializes explore page.
         */
        function initExplorePage() {
            const explorePostsContainer = document.querySelector('.explore-posts');
            if (!explorePostsContainer) return;
            explorePostsContainer.innerHTML = ''; // Clear static content

            // Combine some posts and reels for explore
            const exploreItems = [...IG.Data.posts, ...IG.Data.reels].sort(() => 0.5 - Math.random()); // Randomize order

            exploreItems.forEach(item => {
                const exploreItem = IG.Utils.createElement('div', { className: 'explore-post-item' }, [
                    item.type === 'image' ?
                        IG.Utils.createElement('img', { src: item.media, alt: 'Explore content' }) :
                        IG.Utils.createElement('video', { src: item.media, muted: true, loop: true }), // Video for reels in explore
                    IG.Utils.createElement('div', { className: 'explore-post-overlay' }, [
                        IG.Utils.createElement('span', { className: 'likes' }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'Likes', fill: 'currentColor', height: '24', role: 'img', viewBox: '0 0 48 48', width: '24' }, [
                                IG.Utils.createElement('path', { d: 'M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 5.4 2.1 10.9 6.7 15.6l17.7 17.7c.3.3.6.4.9.4.3 0 .6-.1.9-.4l17.7-17.7c4.6-4.7 6.7-10.2 6.7-15.6 0-8-6-14.5-13.4-14.5z' })
                            ]),
                            `${item.likes}`
                        ]),
                        IG.Utils.createElement('span', { className: 'comments' }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'Comment', fill: 'currentColor', height: '24', role: 'img', viewBox: '0 0 48 48', width: '24' }, [
                                IG.Utils.createElement('path', { d: 'M41 0H7C3.134 0 0 3.134 0 7v34c0 3.866 3.134 7 7 7h27.318L48 48V7c0-3.866-3.134-7-7-7zm-4.5 31.5H11.5c-1.381 0-2.5-1.119-2.5-2.5v-18c0-1.381 1.119-2.5 2.5-2.5h25c1.381 0 2.5 1.119 2.5 2.5v18c0 1.381-1.119 2.5-2.5 2.5z' })
                            ]),
                            `${item.comments ? item.comments.length : item.comments}`
                        ])
                    ])
                ]);
                explorePostsContainer.appendChild(exploreItem);
            });
        }

        /**
         * Initializes reels page.
         */
        function initReelsPage() {
            const reelsContainer = document.querySelector('.reels-container');
            if (!reelsContainer) return;
            reelsContainer.innerHTML = ''; // Clear static content

            IG.Data.reels.forEach(reel => {
                const reelItem = IG.Utils.createElement('div', { className: 'reel-item', dataset: { reelId: reel.id } }, [
                    IG.Utils.createElement('video', { src: reel.media, loop: true, muted: true, preload: 'auto', className: 'reel-video' }),
                    IG.Utils.createElement('div', { className: 'reel-controls' }, [
                        IG.Utils.createElement('div', { className: 'username' }, [reel.username]),
                        IG.Utils.createElement('div', { className: 'caption' }, [reel.caption])
                    ]),
                    IG.Utils.createElement('div', { className: 'reel-actions' }, [
                        IG.Utils.createElement('button', { className: 'icon-btn like-button' }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'Like', fill: 'currentColor', height: '24', role: 'img', viewBox: '0 0 48 48', width: '24' }, [
                                IG.Utils.createElement('path', { d: 'M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 5.4 2.1 10.9 6.7 15.6l17.7 17.7c.3.3.6.4.9.4.3 0 .6-.1.9-.4l17.7-17.7c4.6-4.7 6.7-10.2 6.7-15.6 0-8-6-14.5-13.4-14.5z' })
                            ])
                        ]),
                        IG.Utils.createElement('span', {}, [reel.likes]),
                        IG.Utils.createElement('button', { className: 'icon-btn comment-button' }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'Comment', fill: 'currentColor', height: '24', role: 'img', viewBox: '0 0 48 48', width: '24' }, [
                                IG.Utils.createElement('path', { d: 'M41 0H7C3.134 0 0 3.134 0 7v34c0 3.866 3.134 7 7 7h27.318L48 48V7c0-3.866-3.134-7-7-7zm-4.5 31.5H11.5c-1.381 0-2.5-1.119-2.5-2.5v-18c0-1.381 1.119-2.5 2.5-2.5h25c1.381 0 2.5 1.119 2.5 2.5v18c0 1.381-1.119 2.5-2.5 2.5z' })
                            ])
                        ]),
                        IG.Utils.createElement('span', {}, [reel.comments]),
                        IG.Utils.createElement('button', { className: 'icon-btn share-button' }, [
                            IG.Utils.createElement('svg', { 'aria-label': 'Share Post', fill: 'currentColor', height: '24', role: 'img', viewBox: '0 0 24 24', width: '24' }, [
                                IG.Utils.createElement('path', { d: 'M21.5 0h-19C.6 0 0 .6 0 1.5v21c0 .9.6 1.5 1.5 1.5h19c.9 0 1.5-.6 1.5-1.5V1.5c0-.9-.6-1.5-1.5-1.5zm-11 5h-4.5c-.3 0-.5.2-.5.5s.2.5.5.5h4.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm5.5 12h-10c-.3 0-.5.2-.5.5s.2.5.5.5h10c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0-4.5h-10c-.3 0-.5.2-.5.5s.2.5.5.5h10c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z' })
                            ])
                        ])
                    ])
                ]);
                reelsContainer.appendChild(reelItem);
            });

            // Initialize Intersection Observer for reels autoplay
            initReelsObserver();
        }

        /**
         * Initializes messages page.
         */
        function initMessagesPage() {
            renderConversationsList();
            setupMessageThread();
        }

        /**
         * Renders the list of conversations.
         */
        function renderConversationsList() {
            const conversationsList = document.querySelector('.conversations-list');
            if (!conversationsList) return;
            conversationsList.innerHTML = '';

            IG.Data.messages.forEach(conv => {
                const conversationItem = IG.Utils.createElement('div', { className: `conversation-item ${conv.unread ? 'unread' : ''}`, dataset: { conversationId: conv.id } }, [
                    IG.Utils.createElement('img', { src: conv.participant.avatar, alt: conv.participant.username, className: 'avatar-lg' }),
                    IG.Utils.createElement('div', {}, [
                        IG.Utils.createElement('span', { className: 'username' }, [conv.participant.username]),
                        IG.Utils.createElement('span', { className: 'last-message' }, [`${conv.lastMessage} • ${conv.timestamp}`])
                    ])
                ]);
                conversationItem.onclick = () => openMessageThread(conv.id);
                conversationsList.appendChild(conversationItem);
            });
        }

        /**
         * Sets up message thread interaction.
         */
        function setupMessageThread() {
            const messageThreadContainer = document.querySelector('.message-thread-container');
            const backBtn = messageThreadContainer ? messageThreadContainer.querySelector('.back-to-conversations-btn') : null;
            if (backBtn) {
                backBtn.onclick = () => {
                    messageThreadContainer.classList.remove('active');
                    document.querySelector('.messages-sidebar').classList.remove('hidden'); // Show sidebar again
                };
            }
        }

        /**
         * Opens a specific message thread.
         * @param {string} conversationId - The ID of the conversation to open.
         */
        function openMessageThread(conversationId) {
            const conversation = IG.Data.messages.find(msg => msg.id === conversationId);
            if (!conversation) return;

            const messageThreadContainer = document.querySelector('.message-thread-container');
            const threadUsername = messageThreadContainer.querySelector('.thread-username');
            const threadAvatar = messageThreadContainer.querySelector('.thread-avatar');
            const messageThreadBody = messageThreadContainer.querySelector('.message-thread-body');

            if (threadUsername) threadUsername.textContent = conversation.participant.username;
            if (threadAvatar) threadAvatar.src = conversation.participant.avatar;
            if (messageThreadBody) {
                messageThreadBody.innerHTML = ''; // Clear previous messages
                conversation.thread.forEach(msg => {
                    const bubble = IG.Utils.createElement('div', { className: `message-bubble ${msg.sender === 'self' ? 'sent' : 'received'}` }, [msg.text]);
                    messageThreadBody.appendChild(bubble);
                });
                messageThreadBody.scrollTop = messageThreadBody.scrollHeight; // Scroll to bottom
            }

            // Mark as read
            const convItem = document.querySelector(`.conversation-item[data-conversation-id="${conversationId}"]`);
            if (convItem) convItem.classList.remove('unread');
            conversation.unread = false; // Update data directly (for this demo)

            messageThreadContainer.classList.add('active');
            if (window.innerWidth <= 599) { // On mobile, hide sidebar when thread is active
                document.querySelector('.messages-sidebar').classList.add('hidden');
            }
        }

        /**
         * Initializes notifications page.
         */
        function initNotificationsPage() {
            notificationsBadge = document.querySelector('.notification-badge');
            updateNotificationBadge();

            document.querySelectorAll('.notification-item').forEach(item => {
                item.onclick = () => {
                    item.classList.remove('unread');
                    updateNotificationBadge();
                };
            });
        }

        /**
         * Updates the notification badge counter.
         */
        function updateNotificationBadge() {
            const unreadCount = document.querySelectorAll('.notification-item.unread').length;
            if (notificationsBadge) {
                if (unreadCount > 0) {
                    notificationsBadge.textContent = unreadCount;
                    notificationsBadge.classList.remove('hidden');
                } else {
                    notificationsBadge.classList.add('hidden');
                }
            }
        }

        /**
         * Initializes create post page.
         */
        function initCreatePostPage() {
            const pageFileUploadInput = document.getElementById('file-upload-input-page');
            const pageCreatePostDropZone = document.querySelector('.create-page-drop-zone');
            const pageCreatePostPreviewContainer = pageCreatePostDropZone ? pageCreatePostDropZone.querySelector('.create-post-preview-container') : null;
            const pageSharePostBtn = document.getElementById('share-post-btn-page');

            if (pageFileUploadInput && pageCreatePostDropZone && pageCreatePostPreviewContainer && pageSharePostBtn) {
                pageFileUploadInput.onchange = (e) => handleFileSelectPage(e.target.files, pageCreatePostDropZone, pageCreatePostPreviewContainer, pageSharePostBtn);
                pageCreatePostDropZone.ondragover = (e) => { e.preventDefault(); e.stopPropagation(); pageCreatePostDropZone.style.borderColor = 'var(--link-color)'; };
                pageCreatePostDropZone.ondragleave = (e) => { e.preventDefault(); e.stopPropagation(); pageCreatePostDropZone.style.borderColor = 'var(--border-color)'; };
                pageCreatePostDropZone.ondrop = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    pageCreatePostDropZone.style.borderColor = 'var(--border-color)';
                    handleFileSelectPage(e.dataTransfer.files, pageCreatePostDropZone, pageCreatePostPreviewContainer, pageSharePostBtn);
                };
                pageSharePostBtn.onclick = () => {
                    alert('Post shared! (This is a demo, no actual upload)');
                    pageCreatePostPreviewContainer.innerHTML = '';
                    pageCreatePostDropZone.classList.remove('hidden');
                    pageCreatePostPreviewContainer.classList.add('hidden');
                };
            }
        }

        /**
         * Handles file selection for the dedicated create post page.
         * @param {FileList} files - The selected files.
         * @param {HTMLElement} dropZone - The drop zone element.
         * @param {HTMLElement} previewContainer - The preview container element.
         * @param {HTMLElement} shareBtn - The share button element.
         */
        function handleFileSelectPage(files, dropZone, previewContainer, shareBtn) {
            if (files.length === 0) return;

            const file = files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                dropZone.classList.add('hidden');
                previewContainer.classList.remove('hidden');
                previewContainer.innerHTML = '';

                let mediaElement;
                if (file.type.startsWith('image/')) {
                    mediaElement = IG.Utils.createElement('img', { src: e.target.result, alt: 'Preview' });
                } else if (file.type.startsWith('video/')) {
                    mediaElement = IG.Utils.createElement('video', { src: e.target.result, controls: true, autoplay: true, muted: true });
                } else {
                    alert('Unsupported file type.');
                    dropZone.classList.remove('hidden');
                    previewContainer.classList.add('hidden');
                    return;
                }
                previewContainer.insertBefore(mediaElement, shareBtn);
            };
            reader.readAsDataURL(file);
        }

        /**
         * Initializes profile page.
         * @param {string} [username] - The username for the profile (if dynamic).
         */
        function initProfilePage(username = 'demo_user') {
            const profileUsernameEl = document.querySelector('.profile-header .username');
            const postCountEl = document.getElementById('post-count');
            const followersCountEl = document.getElementById('followers-count');
            const followingCountEl = document.getElementById('following-count');
            const profilePostsGrid = document.querySelector('.profile-posts-grid');
            const profileReelsGrid = document.querySelector('.profile-reels-grid');
            const editProfileBtn = document.querySelector('.edit-profile-btn');

            if (profileUsernameEl) profileUsernameEl.textContent = username;

            // Filter posts/reels for the current user (demo_user for now)
            const userPosts = IG.Data.posts.filter(post => post.username === username);
            const userReels = IG.Data.reels.filter(reel => reel.username === username);

            if (postCountEl) postCountEl.textContent = userPosts.length;
            if (followersCountEl) followersCountEl.textContent = '123'; // Placeholder
            if (followingCountEl) followingCountEl.textContent = '456'; // Placeholder

            // Render user posts
            if (profilePostsGrid) {
                profilePostsGrid.innerHTML = '';
                if (userPosts.length === 0) {
                    profilePostsGrid.innerHTML = '<p class="text-secondary" style="grid-column: 1 / -1; text-align: center;">No posts yet.</p>';
                } else {
                    userPosts.forEach(post => {
                        const postItem = IG.Utils.createElement('div', { className: 'explore-post-item post-item' }, [
                            IG.Utils.createElement('img', { src: post.media, alt: 'Post' })
                        ]);
                        profilePostsGrid.appendChild(postItem);
                    });
                }
            }

            // Render user reels
            if (profileReelsGrid) {
                profileReelsGrid.innerHTML = '';
                if (userReels.length === 0) {
                    profileReelsGrid.innerHTML = '<p class="text-secondary" style="grid-column: 1 / -1; text-align: center;">No reels yet.</p>';
                } else {
                    userReels.forEach(reel => {
                        const reelItem = IG.Utils.createElement('div', { className: 'explore-post-item reel-item' }, [
                            IG.Utils.createElement('video', { src: reel.media, muted: true, loop: true, preload: 'metadata' })
                        ]);
                        profileReelsGrid.appendChild(reelItem);
                    });
                }
            }

            // Tab functionality
            document.querySelectorAll('.profile-tabs .tab-button').forEach(button => {
                button.onclick = (e) => {
                    document.querySelectorAll('.profile-tabs .tab-button').forEach(btn => btn.classList.remove('active'));
                    document.querySelectorAll('.profile-content .tab-content').forEach(content => content.classList.add('hidden'));

                    e.currentTarget.classList.add('active');
                    const targetTab = e.currentTarget.dataset.tab;
                    document.getElementById(`${targetTab}-tab-content`).classList.remove('hidden');
                };
            });

            // Edit profile modal
            if (editProfileBtn) {
                editProfileBtn.onclick = () => {
                    if (editProfileModal) editProfileModal.classList.add('visible');
                };
            }
            const saveProfileBtn = document.getElementById('save-profile-btn');
            if (saveProfileBtn) {
                saveProfileBtn.onclick = () => {
                    const newName = document.getElementById('edit-profile-name').value;
                    const newUsername = document.getElementById('edit-profile-username').value;
                    const newBio = document.getElementById('edit-profile-bio').value;

                    // For demo, just update UI
                    document.querySelector('.profile-bio .fullname').textContent = newName;
                    document.querySelector('.profile-header .username').textContent = newUsername;
                    document.querySelector('.profile-bio p:not(.fullname)').textContent = newBio;
                    alert('Profile updated! (Demo only, no persistence)');
                    if (editProfileModal) editProfileModal.classList.remove('visible');
                };
            }
        }

        /**
         * Initializes settings page.
         */
        function initSettingsPage() {
            const darkModeSettingToggle = document.getElementById('dark-mode-toggle-setting');
            const pushNotificationsSetting = document.getElementById('push-notifications-setting');
            const privateAccountSetting = document.getElementById('private-account-setting');
            const logoutButton = document.getElementById('logout-button');

            // Load saved settings
            if (darkModeSettingToggle) {
                darkModeSettingToggle.checked = IG.Utils.getLocalStorage('darkMode', false);
                darkModeSettingToggle.onchange = () => {
                    const isChecked = darkModeSettingToggle.checked;
                    if (isChecked) {
                        document.body.classList.add('dark');
                    } else {
                        document.body.classList.remove('dark');
                    }
                    IG.Utils.setLocalStorage('darkMode', isChecked);
                };
            }
            if (pushNotificationsSetting) {
                pushNotificationsSetting.checked = IG.Utils.getLocalStorage('pushNotifications', true);
                pushNotificationsSetting.onchange = () => IG.Utils.setLocalStorage('pushNotifications', pushNotificationsSetting.checked);
            }
            if (privateAccountSetting) {
                privateAccountSetting.checked = IG.Utils.getLocalStorage('privateAccount', false);
                privateAccountSetting.onchange = () => IG.Utils.setLocalStorage('privateAccount', privateAccountSetting.checked);
            }

            if (logoutButton) {
                logoutButton.onclick = () => {
                    if (confirm('Are you sure you want to log out?')) {
                        IG.Utils.clearLocalStorage(); // Clear all user data
                        history.pushState({}, '', '/auth/login/');
                        IG.Utils.loadPageContent('/auth/login/');
                        alert('Logged out.');
                    }
                };
            }
        }

        /**
         * Initializes login page.
         */
        function initLoginPage() {
            const loginForm = document.getElementById('login-form');
            if (loginForm) {
                loginForm.onsubmit = (e) => {
                    e.preventDefault();
                    const usernameOrEmail = loginForm.children[0].value;
                    const password = loginForm.children[1].value;

                    if (usernameOrEmail === 'test' && password === 'test') {
                        alert('Login successful! (Demo credentials: test/test)');
                        history.pushState({}, '', '/');
                        IG.Utils.loadPageContent('/');
                    } else {
                        alert('Invalid credentials. (Hint: test/test)');
                    }
                };
            }
        }

        /**
         * Initializes signup page.
         */
        function initSignupPage() {
            const signupForm = document.getElementById('signup-form');
            if (signupForm) {
                signupForm.onsubmit = (e) => {
                    e.preventDefault();
                    const mobileOrEmail = signupForm.children[0].value;
                    const fullName = signupForm.children[1].value;
                    const username = signupForm.children[2].value;
                    const password = signupForm.children[3].value;

                    if (mobileOrEmail && fullName && username && password) {
                        alert('Sign up successful! (Demo only, no actual registration)');
                        history.pushState({}, '', '/auth/login/');
                        IG.Utils.loadPageContent('/auth/login/');
                    } else {
                        alert('Please fill in all fields.');
                    }
                };
            }
        }

        /**
         * Initializes Intersection Observer for Reels autoplay.
         */
        function initReelsObserver() {
            if (reelsObserver) {
                reelsObserver.disconnect(); // Disconnect existing observer if any
            }

            const reels = document.querySelectorAll('.reel-video');
            if (reels.length === 0) return;

            const options = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.7 // Play when 70% of the video is visible
            };

            reelsObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.play().catch(error => {
                            // Autoplay was prevented. Mute video and try again.
                            video.muted = true;
                            video.play();
                        });
                    } else {
                        video.pause();
                        video.currentTime = 0; // Reset video when out of view
                    }
                });
            }, options);

            reels.forEach(reel => reelsObserver.observe(reel));
        }

        /**
         * Initializes Intersection Observer for Stories to mark them as "viewed".
         * (Currently just a placeholder for potential future functionality)
         */
        function initStoriesObserver() {
            if (storiesObserver) {
                storiesObserver.disconnect();
            }

            const storyItems = document.querySelectorAll('.story-item');
            if (storyItems.length === 0) return;

            const options = {
                root: document.querySelector('.stories-wrapper'), // Observe within the scrollable container
                rootMargin: '0px',
                threshold: 0.9 // Consider viewed when 90% visible
            };

            storiesObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const storyId = entry.target.dataset.storyId;
                        // In a real app, mark story as viewed in backend or localStorage
                        // console.log(`Story "${storyId}" viewed.`);
                    }
                });
            }, options);

            storyItems.forEach(item => storiesObserver.observe(item));
        }


        return {
            initModals,
            initDarkModeToggle,
            attachGlobalEventListeners,
            initHomePage,
            initSearchPage,
            initExplorePage,
            initReelsPage,
            initMessagesPage,
            initNotificationsPage,
            initCreatePostPage,
            initProfilePage,
            initSettingsPage,
            initLoginPage,
            initSignupPage
        };
    })();

    // Initialize application on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        // Initial setup for dark mode and global listeners
        IG.UI.initDarkModeToggle();
        IG.UI.initModals();
        IG.UI.attachGlobalEventListeners();

        // Load content based on current URL path
        IG.Utils.loadPageContent(window.location.pathname);

        // Responsive header/footer adjustment
        function adjustLayoutForScreenSize() {
            const header = document.querySelector('.header');
            const instagramTextLogo = document.querySelector('.instagram-logo-text');
            const instagramIconLogo = document.querySelector('.instagram-logo-icon');
            const navItems = document.querySelectorAll('.nav-item span');
            const mobileFooter = document.querySelector('.footer-mobile-nav');
            const currentPath = window.location.pathname;

            if (window.innerWidth < 600) {
                // Mobile layout
                header.style.width = '100%';
                header.style.flexDirection = 'row';
                header.style.justifyContent = 'space-between';
                header.style.alignItems = 'center';
                instagramTextLogo.classList.remove('hidden');
                instagramIconLogo.classList.add('hidden');
                navItems.forEach(span => span.classList.add('hidden'));
                mobileFooter.classList.remove('hidden');
                // Hide sidebar elements for auth pages on mobile
                if (currentPath.startsWith('/auth/')) {
                    header.classList.add('hidden');
                    mobileFooter.classList.add('hidden');
                } else {
                    header.classList.remove('hidden');
                    mobileFooter.classList.remove('hidden');
                }

            } else if (window.innerWidth >= 600 && window.innerWidth < 1024) {
                // Compact sidebar layout
                header.style.width = '72px';
                header.style.flexDirection = 'column';
                header.style.justifyContent = 'space-between';
                header.style.alignItems = 'center';
                instagramTextLogo.classList.add('hidden');
                instagramIconLogo.classList.remove('hidden');
                navItems.forEach(span => span.classList.add('hidden'));
                mobileFooter.classList.add('hidden');
                header.classList.remove('hidden'); // Ensure header is visible
            } else {
                // Desktop layout
                header.style.width = '245px';
                header.style.flexDirection = 'column';
                header.style.justifyContent = 'space-between';
                header.style.alignItems = 'stretch';
                instagramTextLogo.classList.remove('hidden');
                instagramIconLogo.classList.add('hidden');
                navItems.forEach(span => span.classList.remove('hidden'));
                mobileFooter.classList.add('hidden');
                header.classList.remove('hidden'); // Ensure header is visible
            }

            // Adjust message thread display on resize if it's active
            const messageThreadContainer = document.querySelector('.message-thread-container');
            const messagesSidebar = document.querySelector('.messages-sidebar');
            if (IG.Utils.currentPage() === 'messages' && messageThreadContainer && messagesSidebar) {
                if (window.innerWidth <= 599) {
                    // On mobile, if thread is active, hide sidebar
                    if (messageThreadContainer.classList.contains('active')) {
                        messagesSidebar.classList.add('hidden');
                    } else {
                        messagesSidebar.classList.remove('hidden');
                    }
                } else {
                    // On desktop, always show both panes
                    messagesSidebar.classList.remove('hidden');
                    messageThreadContainer.classList.remove('active'); // Ensure it's not "fullscreen"
                }
            }
        }

        window.addEventListener('resize', IG.Utils.debounce(adjustLayoutForScreenSize, 200));
        adjustLayoutForScreenSize(); // Initial call
    });
})();



// static/js/script.js (simplified example)

document.addEventListener('DOMContentLoaded', function() {
    // Header navigation buttons
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            console.log('Search button clicked!');
            // Add logic to show/hide search dropdown
        });
    }

    const notificationsButton = document.querySelector('.notifications-button');
    if (notificationsButton) {
        notificationsButton.addEventListener('click', function() {
            console.log('Notifications button clicked!');
            // Add logic to show/hide notifications dropdown
        });
    }

    const createPostButton = document.querySelector('.create-post-button');
    if (createPostButton) {
        createPostButton.addEventListener('click', function() {
            console.log('Create post button clicked!');
            // Add logic to open create post modal
        });
    }

    const settingsButtonHeader = document.querySelector('.header .settings-button');
    if (settingsButtonHeader) {
        settingsButtonHeader.addEventListener('click', function() {
            console.log('Header settings button clicked!');
            // Add logic for settings action
        });
    }

    // Profile page buttons
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            console.log('Edit profile button clicked!');
            // Add logic to open edit profile modal
            const editProfileModal = document.getElementById('edit-profile-modal');
            if (editProfileModal) {
                editProfileModal.classList.remove('hidden');
            }
        });
    }

    const settingsButtonProfile = document.querySelector('.profile-header .settings-button');
    if (settingsButtonProfile) {
        settingsButtonProfile.addEventListener('click', function() {
            console.log('Profile settings button clicked!');
            // Add logic for profile settings action
        });
    }


    // Profile tabs
    const tabButtons = document.querySelectorAll('.profile-tabs .tab-button');
    const tabContents = document.querySelectorAll('.profile-content .tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Tab button clicked:', this.dataset.tab);

            // Deactivate all buttons and hide all content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));

            // Activate clicked button
            this.classList.add('active');

            // Show corresponding content
            const targetTabId = `${this.dataset.tab}-tab-content`;
            const targetTabContent = document.getElementById(targetTabId);
            if (targetTabContent) {
                targetTabContent.classList.remove('hidden');
            }
        });
    });
});

// This ensures the script runs after the entire HTML document is loaded
document.addEventListener('DOMContentLoaded', function() {

    // Example for a header button:
    const searchButton = document.querySelector('.search-button');
    if (searchButton) { // Always check if the element exists before adding a listener
        searchButton.addEventListener('click', function() {
            console.log('Search button was clicked!'); // Check your browser's console for this message
            // Add your logic here, e.g., show/hide a dropdown:
            // document.querySelector('.search-dropdown').classList.toggle('hidden');
        });
    }

    // Example for a profile tab button:
    const tabButtons = document.querySelectorAll('.profile-tabs .tab-button');
    const tabContents = document.querySelectorAll('.profile-content .tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Tab button clicked:', this.dataset.tab); // Check console
            // Logic to activate the clicked tab and hide others:
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));

            this.classList.add('active');
            const targetTabId = `${this.dataset.tab}-tab-content`;
            const targetTabContent = document.getElementById(targetTabId);
            if (targetTabContent) {
                targetTabContent.classList.remove('hidden');
            }
        });
    });

    // Example for a modal trigger button:
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

    if (editProfileBtn && editProfileModal) {
        editProfileBtn.addEventListener('click', function() {
            console.log('Edit profile button clicked, showing modal.');
            editProfileModal.classList.remove('hidden'); // Remove the 'hidden' class to show modal
        });
    }

    // Example for closing modals:
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Modal close button clicked.');
            // Find the parent modal and add 'hidden' class back
            this.closest('.modal-overlay').classList.add('hidden');
        });
    });
});

// Ensure the DOM is fully loaded before running script
document.addEventListener('DOMContentLoaded', function() {

    // --- Search Button ---
    const searchButton = document.querySelector('.search-button');
    const searchDropdown = document.querySelector('.search-dropdown'); // Assuming this exists somewhere
    if (searchButton && searchDropdown) {
        searchButton.addEventListener('click', function() {
            searchDropdown.classList.toggle('hidden'); // Toggles visibility
            // You might want to add/remove an 'active' class for styling
            searchButton.classList.toggle('active');
            console.log('Search button clicked! Search dropdown toggled.');
        });
    }

    // --- Create Post Button ---
    const createPostButton = document.querySelector('.create-post-button');
    const createPostModal = document.getElementById('create-post-modal');
    if (createPostButton && createPostModal) {
        createPostButton.addEventListener('click', function() {
            createPostModal.classList.remove('hidden'); // Show the modal
            console.log('Create Post button clicked! Modal shown.');
        });
    }

    // --- Notifications Button ---
    const notificationsButton = document.querySelector('.notifications-button');
    // Assuming you have a notifications modal or dropdown
    // const notificationsModal = document.getElementById('notifications-modal');
    if (notificationsButton /* && notificationsModal */) {
        notificationsButton.addEventListener('click', function() {
            // notificationsModal.classList.toggle('hidden'); // Show/hide notifications
            // notificationsButton.classList.toggle('active');
            console.log('Notifications button clicked!');
            // You might also want to clear the notification badge here
            const notificationBadge = document.querySelector('.notification-badge');
            if (notificationBadge) {
                notificationBadge.classList.add('hidden'); // Hide badge after clicking
                notificationBadge.textContent = '0'; // Reset count
            }
        });
    }

    // --- Settings Button (in header) ---
    const headerSettingsButton = document.querySelector('.header .settings-button');
    // Assuming you have a settings modal or dropdown
    // const settingsModal = document.getElementById('settings-modal');
    if (headerSettingsButton /* && settingsModal */) {
        headerSettingsButton.addEventListener('click', function() {
            // settingsModal.classList.toggle('hidden'); // Show/hide settings
            // headerSettingsButton.classList.toggle('active');
            console.log('Header Settings button clicked!');
        });
    }

    // --- Common Modal Close Button ---
    // This is crucial for all your modals to close
    const modalCloseButtons = document.querySelectorAll('.modal-close-btn');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalOverlay = this.closest('.modal-overlay'); // Find the parent modal
            if (modalOverlay) {
                modalOverlay.classList.add('hidden'); // Hide the modal
                console.log('Modal closed.');
            }
        });
    });

    // --- Dark Mode Toggle (if implemented) ---
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark'); // Toggles a 'dark' class on the body
            console.log('Dark mode toggled!');
        });
    }
});