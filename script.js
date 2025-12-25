// Personal Introduction Page JavaScript
// Author: Rizky Ramdhan Nugraha

// Data Models
const profileData = {
    name: "Rizky Ramdhan Nugraha",
    titles: ["Site Reliability Engineer", "DevOps Engineer", "Cloud Engineer"],
    profileImage: "profile-placeholder.jpg",
    summary: "Passionate about building reliable, scalable systems and automating operations to ensure high availability and performance.",
    contact: {
        email: "rizky@example.com",
        linkedin: "https://www.linkedin.com/in/rizkyr117h/",
        github: "https://github.com/rizkyr117h",
        cv: "https://docs.google.com/document/d/1XFuLpfuc1r5Xq_RWv84AisA-z0E3MUJ6/edit?usp=sharing&ouid=107136889494012192214&rtpof=true&sd=true"
    }
};

// Experience data structure (to be populated later)
const experienceData = {
    experiences: [
        {
            id: "1",
            title: "Site Reliability Engineer",
            company: "TIX ID",
            duration: "July 2025 - Now",
            type: "Hybrid",
            description: "Monitor and maintain AWS-based clusters, ensuring high availability and performance. Develop and manage CI/CD pipelines using Jenkins for streamlined deployments. Troubleshoot and resolve AWS infrastructure and application issues. Implement SigNoz for Application Performance Monitoring (APM) and observability. Provision and manage infrastructure using Terraform for infrastructure-as-code practices.",
            technologies: ["AWS", "Jenkins", "SigNoz", "Terraform", "Kubernetes"]
        },
        {
            id: "2",
            title: "Instructor AWS",
            company: "MARIBELAJAR",
            duration: "October 2025 - December 2025",
            type: "Online",
            description: "Teach Cloud Computing using AWS in Sri-langka for 3 months. Teach Linux, Networking, Security and services in AWS.",
            technologies: ["AWS", "Linux", "Networking", "Security"]
        },
        {
            id: "3",
            title: "DevOps Engineer - Project Lintasarta",
            company: "Inovasi Informatika Indonesia",
            duration: "November 2024 - Juni 2025",
            type: "OnSite",
            description: "Maintain Deka-GPU Kubernetes Project. Troubleshoot Issue Kubernetes Error. Monitoring Cluster with Grafana. Create Daily, Weekly, Monthly Report About Cluster.",
            technologies: ["Kubernetes", "Grafana", "GPU Computing", "Monitoring"]
        },
        {
            id: "4",
            title: "DevOps Engineer - PT KAI Indonesia",
            company: "Inovasi Informatika Indonesia",
            duration: "September 2024 - November 2024",
            type: "Onsite",
            description: "Create & maintain 100+ CI/CD Using Jenkins. Manage OKD at PT KAI Indonesia. Build image docker for Application.",
            technologies: ["Jenkins", "OKD", "Docker", "CI/CD"]
        },
        {
            id: "5",
            title: "Mentor Cloud Computing Class",
            company: "Indonesia Bangkit Academy",
            duration: "September 2024 - Januari 2025",
            type: "Mentoring",
            description: "Leading and mentoring 25 students in class. Teaching Assistant - Tech/Soft Skills ILT ~ Conducted a synchronization session with the instructor. Knowledge-sharing sessions regarding Cloud Computing, Google Cloud Platform.",
            technologies: ["Google Cloud Platform", "Teaching", "Mentoring"]
        },
        {
            id: "7",
            title: "Mentor Cloud Computing Non-Class",
            company: "Indonesia Bangkit Academy",
            duration: "February 2024 - July 2024",
            type: "Mentoring",
            description: "Teaching Assistant - Tech/Soft Skills ILT ~ Conducted a synchronization session with the instructor. Plan weekly activities such as Radio Bangkit. Knowledge-sharing sessions regarding Cloud Computing, Google Cloud Platform.",
            technologies: ["Google Cloud Platform", "Teaching", "Community Building"]
        }
    ]
};

// Technology stack data structure with icons
const techStackData = {
    techStack: {
        "Operating System": [
            { name: "Windows", icon: "fab fa-windows" },
            { name: "Linux", icon: "fab fa-linux" }
        ],
        "Cloud Service Provider": [
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Alibaba Cloud", icon: "fas fa-cloud" },
            { name: "Google Cloud Platform", icon: "fab fa-google" },
            { name: "Nutanix", icon: "fas fa-server" }
        ],
        "Containerization": [
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Kubernetes", icon: "fas fa-dharmachakra" }
        ],
        "CI/CD": [
            { name: "GitLab", icon: "fab fa-gitlab" },
            { name: "Jenkins", icon: "fas fa-cogs" }
        ],
        "Version Control System": [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "GitLab", icon: "fab fa-gitlab" }
        ],
        "Monitoring Tools": [
            { name: "Grafana", icon: "fas fa-chart-bar" },
            { name: "Prometheus", icon: "fas fa-chart-line" }
        ],
        "Code Quality": [
            { name: "SonarQube", icon: "fas fa-search" }
        ],
        "Programming": [
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "Python", icon: "fab fa-python" }
        ],
        "Infrastructure as Code": [
            { name: "Terraform", icon: "fas fa-layer-group" }
        ],
        "Configuration Management": [
            { name: "Ansible", icon: "fas fa-robot" }
        ],
        "Database": [
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "MongoDB", icon: "fas fa-leaf" },
            { name: "MySQL", icon: "fas fa-database" }
        ],
        "Automation": [
            { name: "N8N", icon: "fas fa-project-diagram" }
        ],
        "Web Server": [
            { name: "Nginx", icon: "fas fa-server" }
        ]
    }
};

// Personal Projects data structure
const projectsData = {
    projects: [
        {
            id: "kubernetes-monitoring-stack",
            title: "Kubernetes Monitoring Stack",
            description: "Complete monitoring solution for Kubernetes clusters using Prometheus, Grafana, and AlertManager. Includes custom dashboards for GPU workloads and automated alerting for cluster health.",
            technologies: ["Kubernetes", "Prometheus", "Grafana", "AlertManager", "Helm", "YAML"],
            githubUrl: "https://github.com/rizkyr117h/k8s-monitoring-stack",
            status: "Completed"
        },
        {
            id: "terraform-aws-infrastructure",
            title: "AWS Infrastructure as Code",
            description: "Terraform modules for deploying scalable AWS infrastructure including EKS clusters, RDS databases, and VPC networking. Features automated CI/CD pipeline for infrastructure deployment.",
            technologies: ["Terraform", "AWS", "EKS", "RDS", "VPC", "GitHub Actions"],
            githubUrl: "https://github.com/rizkyr117h/terraform-aws-modules",
            status: "Completed"
        },
        {
            id: "cicd-pipeline-automation",
            title: "Multi-Cloud CI/CD Pipeline",
            description: "Automated CI/CD pipeline supporting deployment to AWS, GCP, and Azure. Includes security scanning, automated testing, and rollback capabilities using Jenkins and GitLab CI.",
            technologies: ["Jenkins", "GitLab CI", "Docker", "SonarQube", "AWS", "GCP", "Azure"],
            githubUrl: "https://github.com/rizkyr117h/multi-cloud-cicd",
            status: "In Progress"
        },
        {
            id: "infrastructure-cost-optimizer",
            title: "Cloud Cost Optimization Tool",
            description: "Python-based tool for analyzing and optimizing cloud infrastructure costs across multiple providers. Features automated recommendations and cost tracking dashboards.",
            technologies: ["Python", "AWS SDK", "GCP SDK", "Grafana", "PostgreSQL", "Docker"],
            githubUrl: "https://github.com/rizkyr117h/cloud-cost-optimizer",
            liveUrl: "https://cost-optimizer-demo.herokuapp.com",
            status: "Completed"
        },
        {
            id: "ansible-automation-playbooks",
            title: "Infrastructure Automation Playbooks",
            description: "Collection of Ansible playbooks for automating server configuration, application deployment, and security hardening across Linux environments.",
            technologies: ["Ansible", "Linux", "Nginx", "PostgreSQL", "Security", "YAML"],
            githubUrl: "https://github.com/rizkyr117h/ansible-playbooks",
            status: "Completed"
        },
        {
            id: "microservices-observability",
            title: "Microservices Observability Platform",
            description: "Complete observability solution for microservices architecture using OpenTelemetry, Jaeger, and custom metrics. Includes distributed tracing and performance monitoring.",
            technologies: ["OpenTelemetry", "Jaeger", "Prometheus", "Grafana", "Docker", "Kubernetes"],
            githubUrl: "https://github.com/rizkyr117h/microservices-observability",
            status: "In Progress"
        }
    ]
};

// Utility Functions
function createElement(tag, className = '', textContent = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

function handleImageError(img) {
    // Create fallback with initials
    const initials = profileData.name
        .split(' ')
        .map(name => name.charAt(0))
        .join('')
        .toUpperCase();
    
    const fallback = createElement('div', 'profile-fallback', initials);
    fallback.setAttribute('role', 'img');
    fallback.setAttribute('aria-label', `Profile picture placeholder for ${profileData.name}`);
    
    // Maintain the same accessibility attributes
    if (img.alt) {
        fallback.setAttribute('title', img.alt);
    }
    
    img.parentNode.replaceChild(fallback, img);
    
    console.log('Profile image failed to load, using fallback with initials');
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Personal Introduction Page loaded');
    
    // Set up image error handling
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.addEventListener('error', () => handleImageError(profileImage));
    }
    
    // Initialize sections
    initializeExperienceSection();
    initializeTechStackSection();
    initializeSocialLinks();
    initializeProjectsSection();
});

// Experience Section Functions
function initializeExperienceSection() {
    const experienceList = document.getElementById('experienceList');
    if (!experienceList) {
        console.error('Experience list container not found');
        return;
    }
    
    try {
        if (experienceData.experiences.length === 0) {
            const placeholder = createElement('p', 'experience-placeholder', 'Experience details will be added soon.');
            experienceList.appendChild(placeholder);
        } else {
            renderExperiences();
        }
    } catch (error) {
        console.error('Error initializing experience section:', error);
        showErrorMessage(experienceList, 'Unable to load experience data');
    }
}

function renderExperiences() {
    const experienceList = document.getElementById('experienceList');
    if (!experienceList) return;
    
    try {
        // Clear existing content
        experienceList.innerHTML = '';
        
        // Validate experience data
        if (!Array.isArray(experienceData.experiences)) {
            throw new Error('Experience data is not in expected format');
        }
        
        // Sort experiences by numeric ID (ascending). If no numeric IDs available, fallback to duration sort.
        const sortedExperiences = [...experienceData.experiences].sort((a, b) => {
            const idA = Number(a.id);
            const idB = Number(b.id);
            if (!Number.isNaN(idA) && !Number.isNaN(idB)) {
                return idA - idB; // ascending order by ID (1,2,3...)
            }
            // Fallback to previous duration comparison (keeps recent-first behavior when IDs are not numeric)
            return b.duration.localeCompare(a.duration);
        });
        
        sortedExperiences.forEach((experience, index) => {
            try {
                const experienceItem = createExperienceItem(experience);
                experienceList.appendChild(experienceItem);
            } catch (error) {
                console.error(`Error rendering experience item ${index}:`, error);
            }
        });
        
        if (experienceList.children.length === 0) {
            const placeholder = createElement('p', 'experience-placeholder', 'No experience data available');
            experienceList.appendChild(placeholder);
        }
    } catch (error) {
        console.error('Error rendering experiences:', error);
        showErrorMessage(experienceList, 'Unable to display experience data');
    }
}

function createExperienceItem(experience) {
    const item = createElement('div', 'experience-item');
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Experience at ${experience.company} as ${experience.title}`);
    
    const header = createElement('div', 'experience-header');
    
    const titleCompany = createElement('div');
    const title = createElement('h3', 'experience-title', experience.title);
    const company = createElement('h4', 'experience-company', experience.company);
    titleCompany.appendChild(title);
    titleCompany.appendChild(company);
    
    const durationTypeContainer = createElement('div', 'duration-type-container');
    const duration = createElement('span', 'experience-duration', experience.duration);
    duration.setAttribute('aria-label', `Duration: ${experience.duration}`);
    durationTypeContainer.appendChild(duration);
    
    if (experience.type) {
        const type = createElement('span', 'experience-type', experience.type);
        type.setAttribute('aria-label', `Work type: ${experience.type}`);
        durationTypeContainer.appendChild(type);
    }
    
    header.appendChild(titleCompany);
    header.appendChild(durationTypeContainer);
    
    const description = createElement('p', 'experience-description', experience.description);
    
    item.appendChild(header);
    item.appendChild(description);
    
    if (experience.technologies && experience.technologies.length > 0) {
        const techContainer = createElement('div', 'experience-technologies');
        techContainer.setAttribute('aria-label', 'Technologies used');
        experience.technologies.forEach(tech => {
            const techTag = createElement('span', 'tech-tag', tech);
            techTag.setAttribute('role', 'listitem');
            techContainer.appendChild(techTag);
        });
        item.appendChild(techContainer);
    }
    
    return item;
}

// Tech Stack Section Functions
function initializeTechStackSection() {
    const techCategories = document.getElementById('techCategories');
    if (!techCategories) {
        console.error('Tech categories container not found');
        return;
    }
    
    try {
        const hasContent = Object.values(techStackData.techStack).some(category => 
            Array.isArray(category) && category.length > 0
        );
        
        if (!hasContent) {
            const placeholder = createElement('p', 'tech-placeholder', 'Technology stack details will be added soon.');
            techCategories.appendChild(placeholder);
        } else {
            renderTechStack();
        }
    } catch (error) {
        console.error('Error initializing tech stack section:', error);
        showErrorMessage(techCategories, 'Unable to load technology stack data');
    }
}

function renderTechStack() {
    const techCategories = document.getElementById('techCategories');
    if (!techCategories) return;
    
    try {
        // Clear existing content
        techCategories.innerHTML = '';
        
        // Validate tech stack data
        if (!techStackData.techStack || typeof techStackData.techStack !== 'object') {
            throw new Error('Tech stack data is not in expected format');
        }
        
        let hasValidCategories = false;
        
        Object.entries(techStackData.techStack).forEach(([categoryName, technologies]) => {
            try {
                if (Array.isArray(technologies) && technologies.length > 0) {
                    const categoryElement = createTechCategory(categoryName, technologies);
                    techCategories.appendChild(categoryElement);
                    hasValidCategories = true;
                }
            } catch (error) {
                console.error(`Error rendering tech category ${categoryName}:`, error);
            }
        });
        
        if (!hasValidCategories) {
            const placeholder = createElement('p', 'tech-placeholder', 'No technology stack data available');
            techCategories.appendChild(placeholder);
        }
    } catch (error) {
        console.error('Error rendering tech stack:', error);
        showErrorMessage(techCategories, 'Unable to display technology stack data');
    }
}

// Error handling utility
function showErrorMessage(container, message) {
    container.innerHTML = '';
    const errorElement = createElement('div', 'error-message');
    errorElement.innerHTML = `
        <p style="color: var(--text-light); text-align: center; padding: var(--spacing-lg);">
            ⚠️ ${message}
        </p>
    `;
    container.appendChild(errorElement);
}

function createTechCategory(categoryName, technologies) {
    const category = createElement('div', 'tech-category');
    category.setAttribute('role', 'listitem');
    category.setAttribute('aria-labelledby', `tech-category-${categoryName.replace(/\s+/g, '-').toLowerCase()}`);
    
    const title = createElement('h3', 'tech-category-title', categoryName);
    title.id = `tech-category-${categoryName.replace(/\s+/g, '-').toLowerCase()}`;
    category.appendChild(title);
    
    const itemsContainer = createElement('div', 'tech-items');
    itemsContainer.setAttribute('role', 'list');
    itemsContainer.setAttribute('aria-label', `${categoryName} technologies`);
    
    technologies.forEach(tech => {
        const techItem = createElement('div', 'tech-item');
        techItem.setAttribute('role', 'listitem');
        techItem.setAttribute('tabindex', '0');
        
        // Handle both string and object formats for backward compatibility
        if (typeof tech === 'string') {
            techItem.setAttribute('aria-label', `Technology: ${tech}`);
            techItem.textContent = tech;
        } else {
            techItem.setAttribute('aria-label', `Technology: ${tech.name}`);
            
            const icon = createElement('i');
            icon.className = tech.icon;
            icon.setAttribute('aria-hidden', 'true');
            
            const name = createElement('span', 'tech-name', tech.name);
            
            techItem.appendChild(icon);
            techItem.appendChild(name);
        }
        
        itemsContainer.appendChild(techItem);
    });
    
    category.appendChild(itemsContainer);
    return category;
}

// Social Links Functions
function initializeSocialLinks() {
    const socialLinksContainer = document.getElementById('socialLinks');
    if (!socialLinksContainer) return;
    
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: profileData.contact.linkedin,
            icon: 'fab fa-linkedin',
            color: '#0077b5'
        },
        {
            name: 'GitHub',
            url: profileData.contact.github,
            icon: 'fab fa-github',
            color: '#333'
        },
        {
            name: 'View CV',
            url: profileData.contact.cv,
            icon: 'fas fa-file-pdf',
            color: '#dc2626'
        }
    ];
    
    socialLinks.forEach(link => {
        if (link.url) {
            const socialLink = createSocialLink(link);
            socialLinksContainer.appendChild(socialLink);
        }
    });
}

function createSocialLink(linkData) {
    const link = createElement('a', 'social-link');
    link.href = linkData.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Visit ${linkData.name} profile`);
    link.style.setProperty('--social-color', linkData.color);
    
    const icon = createElement('i');
    icon.className = linkData.icon;
    icon.setAttribute('aria-hidden', 'true');
    
    const text = createElement('span', 'social-text', linkData.name);
    
    link.appendChild(icon);
    link.appendChild(text);
    
    return link;
}

// Function to add technologies dynamically
function addTechnology(category, technology) {
    if (!techStackData.techStack[category]) {
        techStackData.techStack[category] = [];
    }
    
    if (!techStackData.techStack[category].includes(technology)) {
        techStackData.techStack[category].push(technology);
        renderTechStack();
    }
}

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        profileData,
        experienceData,
        techStackData,
        createElement,
        handleImageError,
        addTechnology,
        addExperience,
        updateProfile
    };
}

// Data Management Functions
function addExperience(experience) {
    // Validate required fields
    if (!experience.title || !experience.company || !experience.duration) {
        console.error('Experience must have title, company, and duration');
        return false;
    }
    
    // Add unique ID if not provided
    if (!experience.id) {
        experience.id = `exp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    
    experienceData.experiences.push(experience);
    renderExperiences();
    return true;
}

function updateProfile(updates) {
    Object.assign(profileData, updates);
    
    // Update DOM elements
    if (updates.name) {
        const nameElements = document.querySelectorAll('.hero-name, .nav-brand h1');
        nameElements.forEach(el => el.textContent = updates.name);
    }
    
    if (updates.summary) {
        const summaryElement = document.getElementById('heroSummary');
        if (summaryElement) summaryElement.textContent = updates.summary;
    }
    
    if (updates.profileImage) {
        const imageElement = document.getElementById('profileImage');
        if (imageElement) imageElement.src = updates.profileImage;
    }
}

function clearExperiences() {
    experienceData.experiences = [];
    renderExperiences();
}

function clearTechStack() {
    Object.keys(techStackData.techStack).forEach(category => {
        techStackData.techStack[category] = [];
    });
    renderTechStack();
}
// Projects Section Functions
function initializeProjectsSection() {
    const projectsList = document.getElementById('projectsList');
    if (!projectsList) {
        console.error('Projects list container not found');
        return;
    }
    
    try {
        if (projectsData.projects.length === 0) {
            const placeholder = createElement('p', 'projects-placeholder', 'Personal projects will be showcased here soon. Stay tuned for exciting developments!');
            projectsList.appendChild(placeholder);
        } else {
            renderProjects();
        }
    } catch (error) {
        console.error('Error initializing projects section:', error);
        showErrorMessage(projectsList, 'Unable to load projects data');
    }
}

function renderProjects() {
    const projectsList = document.getElementById('projectsList');
    if (!projectsList) return;
    
    try {
        // Clear existing content
        projectsList.innerHTML = '';
        
        // Validate projects data
        if (!Array.isArray(projectsData.projects)) {
            throw new Error('Projects data is not in expected format');
        }
        
        projectsData.projects.forEach((project, index) => {
            try {
                const projectItem = createProjectItem(project);
                projectsList.appendChild(projectItem);
            } catch (error) {
                console.error(`Error rendering project item ${index}:`, error);
            }
        });
        
        if (projectsList.children.length === 0) {
            const placeholder = createElement('p', 'projects-placeholder', 'No projects data available');
            projectsList.appendChild(placeholder);
        }
    } catch (error) {
        console.error('Error rendering projects:', error);
        showErrorMessage(projectsList, 'Unable to display projects data');
    }
}

function createProjectItem(project) {
    const item = createElement('div', 'project-item');
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Project: ${project.title}`);
    
    const header = createElement('div', 'project-header');
    
    const titleStatus = createElement('div', 'project-title-status');
    const title = createElement('h3', 'project-title', project.title);
    titleStatus.appendChild(title);
    
    if (project.status) {
        const status = createElement('span', `project-status project-status-${project.status.toLowerCase().replace(/\s+/g, '-')}`, project.status);
        titleStatus.appendChild(status);
    }
    
    header.appendChild(titleStatus);
    
    const description = createElement('p', 'project-description', project.description);
    
    item.appendChild(header);
    item.appendChild(description);
    
    if (project.technologies && project.technologies.length > 0) {
        const techContainer = createElement('div', 'project-technologies');
        techContainer.setAttribute('aria-label', 'Technologies used');
        project.technologies.forEach(tech => {
            const techTag = createElement('span', 'tech-tag', tech);
            techTag.setAttribute('role', 'listitem');
            techContainer.appendChild(techTag);
        });
        item.appendChild(techContainer);
    }
    
    // Add project links
    if (project.githubUrl || project.liveUrl) {
        const linksContainer = createElement('div', 'project-links');
        
        if (project.githubUrl) {
            const githubLink = createElement('a', 'project-link github-link');
            githubLink.href = project.githubUrl;
            githubLink.target = '_blank';
            githubLink.rel = 'noopener noreferrer';
            githubLink.setAttribute('aria-label', 'View source code on GitHub');
            
            const githubIcon = createElement('i');
            githubIcon.className = 'fab fa-github';
            githubIcon.setAttribute('aria-hidden', 'true');
            
            const githubText = createElement('span', '', 'GitHub');
            
            githubLink.appendChild(githubIcon);
            githubLink.appendChild(githubText);
            linksContainer.appendChild(githubLink);
        }
        
        if (project.liveUrl) {
            const liveLink = createElement('a', 'project-link live-link');
            liveLink.href = project.liveUrl;
            liveLink.target = '_blank';
            liveLink.rel = 'noopener noreferrer';
            liveLink.setAttribute('aria-label', 'View live demo');
            
            const liveIcon = createElement('i');
            liveIcon.className = 'fas fa-external-link-alt';
            liveIcon.setAttribute('aria-hidden', 'true');
            
            const liveText = createElement('span', '', 'Live Demo');
            
            liveLink.appendChild(liveIcon);
            liveLink.appendChild(liveText);
            linksContainer.appendChild(liveLink);
        }
        
        item.appendChild(linksContainer);
    }
    
    return item;
}

// Function to add projects dynamically
function addProject(project) {
    // Validate required fields
    if (!project.title || !project.description) {
        console.error('Project must have title and description');
        return false;
    }
    
    // Add unique ID if not provided
    if (!project.id) {
        project.id = `project-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    
    projectsData.projects.push(project);
    renderProjects();
    return true;
}