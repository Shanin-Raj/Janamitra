/**
 * Janamithra Application Logic
 * Handles login, session management, and page data population
 */

// ============ SESSION MANAGEMENT ============

/**
 * Store user session after successful login
 */
// Initialize Data from Storage if available
if (localStorage.getItem('EGramData')) {
    try {
        const savedData = JSON.parse(localStorage.getItem('EGramData'));
        // Merge saved data into EGramDB
        // We do a deep merge for lists like projects/schemes, generic replace for simple keys
        Object.keys(savedData).forEach(key => {
            if (EGramDB[key]) {
                EGramDB[key] = savedData[key];
            }
        });
    } catch (e) {
        console.error("Failed to load saved data", e);
    }
}

// ============ SESSION MANAGEMENT ============

/**
 * Store user session after successful login
 */
function storeSession(id, role) {
    let userData;

    if (role === 'admin') {
        // Use the new loginWithAdminId function from database.js
        userData = loginWithAdminId(id);
    } else {
        userData = loginWithEpic(id);
    }

    if (!userData) return false;

    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('role', role);
    // For admin, id is stored as epicId for consistency in getSession, or we distinguish
    sessionStorage.setItem('epicId', id.toUpperCase());
    sessionStorage.setItem('panchayatId', userData.panchayat_id);
    sessionStorage.setItem('userData', JSON.stringify(userData));
    return true;
}

/**
 * Save current Database state to localStorage
 */
function saveToStorage() {
    localStorage.setItem('EGramData', JSON.stringify(EGramDB));
}

/**
 * Get current user session data
 */
function getSession() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) return null;

    try {
        return {
            isLoggedIn: true,
            role: sessionStorage.getItem('role'),
            epicId: sessionStorage.getItem('epicId'),
            panchayatId: sessionStorage.getItem('panchayatId'),
            userData: JSON.parse(sessionStorage.getItem('userData'))
        };
    } catch (e) {
        return null;
    }
}

/**
 * Clear session (logout)
 */
function clearSession() {
    sessionStorage.clear();
}

/**
 * Check if user is logged in, redirect to login if not
 */
function requireAuth() {
    const session = getSession();
    if (!session) {
        window.location.href = 'login.html';
        return null;
    }
    return session;
}

// ============ PAGE POPULATION FUNCTIONS ============

/**
 * Populate Dashboard page with user data
 */
function populateDashboard() {
    const session = requireAuth();
    if (!session) return;

    const { userData } = session;
    const citizen = userData.citizen;
    const panchayat = userData.panchayat;

    // Update welcome message
    const welcomeSpan = document.querySelector('.user-menu span');
    if (welcomeSpan && citizen) {
        welcomeSpan.innerHTML = `Welcome, <strong>${citizen.name}</strong>`;
    }

    // Update user avatar
    const avatar = document.querySelector('.user-avatar');
    if (avatar && citizen) {
        const initials = citizen.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        avatar.textContent = initials;
    }

    // Update panchayat name in subtitle if exists
    const subtitle = document.querySelector('.logo-text .subtitle');
    if (subtitle && panchayat) {
        subtitle.textContent = panchayat.name;
    }
}

/**
 * Populate Hierarchy page with panchayat leadership data
 */
function populateHierarchy() {
    const session = requireAuth();
    if (!session) return;

    const { userData } = session;
    const panchayat = userData.panchayat;

    if (!panchayat) return;

    // Update page header
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader) {
        pageHeader.textContent = `Leadership - ${panchayat.name}`;
    }

    // Populate President
    const presidentCard = document.querySelector('.president-card');
    if (presidentCard && panchayat.president) {
        const pres = panchayat.president;
        const presImg = presidentCard.querySelector('.leader-img img');
        const presName = presidentCard.querySelector('.leader-info h3');
        const presBio = presidentCard.querySelector('.leader-info .bio');
        const presContact = presidentCard.querySelector('.contact-info');

        if (presImg) presImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(pres.name)}&background=6c5ce7&color=fff&size=200`;
        if (presName) presName.textContent = pres.name;
        if (presBio) presBio.textContent = `Leading ${panchayat.wards} wards in ${panchayat.district} district. Age: ${pres.age} | Party: ${pres.party}`;
        if (presContact) {
            presContact.innerHTML = `
                <span><i class="fas fa-phone"></i> +91 ${pres.contact}</span>
                <span><i class="fas fa-envelope"></i> ${panchayat.office.email}</span>
            `;
        }
    }

    // Populate Ward Members
    const wardGrid = document.querySelector('.ward-grid');
    if (wardGrid && panchayat.members) {
        wardGrid.innerHTML = panchayat.members.map(member => `
            <div class="ward-card card">
                <div class="leader-img">
                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0984e3&color=fff" alt="Ward ${member.ward}">
                </div>
                <div class="leader-info">
                    <span class="role">Ward ${String(member.ward).padStart(2, '0')} - ${member.portfolio}</span>
                    <h4>${member.name}</h4>
                    <div class="contact-info"><i class="fas fa-phone"></i> +91 ${member.contact}</div>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Populate Projects page with panchayat projects
 */
function populateProjects() {
    const session = requireAuth();
    if (!session) return;

    const { userData } = session;
    const projects = userData.projects;
    const panchayat = userData.panchayat;

    // Update page header
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader && panchayat) {
        pageHeader.textContent = `Projects - ${panchayat.name}`;
    }

    // Find the container for projects
    const mainContent = document.querySelector('.page-content');
    const existingCards = mainContent.querySelectorAll('.project-card');

    if (existingCards.length > 0 && projects && projects.length > 0) {
        // Remove existing static project cards
        existingCards.forEach(card => card.remove());

        // Add dynamic project cards
        const pageHeader = mainContent.querySelector('.page-header');
        projects.forEach(project => {
            const statusClass = project.status === 'ongoing' ? 'status-ongoing' :
                project.progress === 100 ? 'status-completed' : 'status-planned';
            const statusText = project.status === 'ongoing' ? 'Ongoing' :
                project.progress === 100 ? 'Completed' : 'Planned';
            const statusIcon = project.status === 'ongoing' ? 'fa-spinner' :
                project.progress === 100 ? 'fa-check-circle' : 'fa-clock';

            const card = document.createElement('div');
            card.className = 'project-card card';
            card.innerHTML = `
                <div class="project-img">
                    <img src="../assets/hero_projects.png" alt="${project.name}">
                </div>
                <div class="project-details">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="status-badge ${statusClass}"><i class="fas ${statusIcon}"></i> ${statusText}</span>
                        <span style="font-weight: 700; color: var(--ux4g-primary); font-size: 1.1rem;">${project.progress}%</span>
                    </div>
                    <h2>${project.name}</h2>
                    <p>Contractor: ${project.contractor}</p>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${project.progress}%;"></div>
                    </div>
                    <div class="project-meta">
                        <div><i class="fas fa-wallet"></i> Budget: ₹${project.budget_lakhs},00,000</div>
                        <div><i class="fas fa-calendar-alt"></i> Deadline: ${formatDate(project.end_date)}</div>
                        <div><i class="fas fa-play-circle"></i> Started: ${formatDate(project.start_date)}</div>
                    </div>
                </div>
            `;
            pageHeader.insertAdjacentElement('afterend', card);
        });
    }
}

/**
 * Populate Schemes page with available schemes
 */
function populateSchemes() {
    const session = requireAuth();
    if (!session) return;

    const { userData } = session;
    const schemes = userData.schemes;
    const panchayat = userData.panchayat;

    // Update page header
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader && panchayat) {
        pageHeader.textContent = `Schemes - ${panchayat.name}`;
    }

    // Find the scheme grid
    const schemeGrid = document.querySelector('.scheme-grid');
    if (schemeGrid && schemes && schemes.length > 0) {
        const categoryColors = {
            'Welfare': 'linear-gradient(135deg, #ec4899, #be185d)',
            'Housing': 'linear-gradient(135deg, #f59e0b, #d97706)',
            'Education': 'linear-gradient(135deg, #0ea5e9, #0284c7)',
            'Agriculture': 'linear-gradient(135deg, var(--ux4g-primary), var(--ux4g-primary-dark))',
            'Employment': 'linear-gradient(135deg, #10b981, #059669)',
            'Sports': 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            'Finance': 'linear-gradient(135deg, #06b6d4, #0891b2)',
            'Fisheries': 'linear-gradient(135deg, #3b82f6, #2563eb)'
        };

        const categoryIcons = {
            'Welfare': 'fa-heart',
            'Housing': 'fa-home',
            'Education': 'fa-graduation-cap',
            'Agriculture': 'fa-seedling',
            'Employment': 'fa-briefcase',
            'Sports': 'fa-running',
            'Finance': 'fa-rupee-sign',
            'Fisheries': 'fa-fish'
        };

        schemeGrid.innerHTML = schemes.map(scheme => `
            <div class="scheme-card card">
                <div class="scheme-header" style="background: ${categoryColors[scheme.category] || categoryColors['Welfare']};">
                    <div class="category"><i class="fas ${categoryIcons[scheme.category] || 'fa-hand-holding-heart'}"></i> ${scheme.category}</div>
                    <h3>${scheme.name}</h3>
                </div>
                <div class="scheme-body">
                    <p><strong>Amount:</strong> ${scheme.amount}</p>
                    <p><strong>Eligibility:</strong> ${scheme.eligibility}</p>
                    <ul class="benefit-list">
                        ${scheme.documents.map(doc => `<li><i class="fas fa-check-circle"></i> ${doc} Required</li>`).join('')}
                    </ul>
                </div>
                <div class="scheme-footer">
                    <button class="btn btn-primary" style="width: 100%;" onclick="alert('Redirecting to ${scheme.name} application...')">
                        <i class="fas fa-file-alt"></i> Apply Now
                    </button>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Populate RTI & Complaints page
 */
function populateRTIComplaints() {
    const session = requireAuth();
    if (!session) return;

    const { userData } = session;
    const complaints = userData.rti_complaints;
    const panchayat = userData.panchayat;

    // Update page header
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader && panchayat) {
        pageHeader.textContent = `RTI & Complaints - ${panchayat.name}`;
    }

    // Find complaints list container
    const complaintsContainer = document.getElementById('complaints-list');
    if (complaintsContainer && complaints) {
        if (complaints.length === 0) {
            complaintsContainer.innerHTML = '<p class="no-data">No RTI requests or complaints filed yet.</p>';
        } else {
            complaintsContainer.innerHTML = complaints.map(item => `
                <div class="complaint-item card" style="padding: 1.5rem; margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                        <span class="status-badge ${getStatusClass(item.status)}">${item.type}: ${item.status}</span>
                        <span style="color: var(--text-muted); font-size: 0.85rem;">${item.date}</span>
                    </div>
                    <h4 style="margin-bottom: 0.5rem;">${item.subject}</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">ID: ${item.id}</p>
                </div>
            `).join('');
        }
    }
}

// ============ UTILITY FUNCTIONS ============

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
}

function getStatusClass(status) {
    const statusMap = {
        'Responded': 'status-completed',
        'Resolved': 'status-completed',
        'In Progress': 'status-ongoing',
        'Pending': 'status-planned'
    };
    return statusMap[status] || 'status-planned';
}

// ============ LOGOUT ============

function logout() {
    clearSession();
    window.location.href = '../index.html';
}

// ============ PAGE INITIALIZATION ============

document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    const page = path.split('/').pop().toLowerCase();

    // Safety: Ensure EGramDB is available
    if (typeof EGramDB === 'undefined') {
        console.error("Database not loaded!");
        return;
    }

    if (page.includes('dashboard.html') && !page.includes('admin')) {
        populateDashboard();
    } else if (page.includes('admin_dashboard.html')) {
        populateAdminDashboard();
    } else if (page.includes('hierarchy.html')) {
        populateHierarchy();
    } else if (page.includes('projects.html')) {
        populateProjects();
    } else if (page.includes('schemes.html')) {
        populateSchemes();
    } else if (page.includes('rti_complaints.html')) {
        populateRTIComplaints();
    }
});

// ============ ADMIN DASHBOARD LOGIC ============

function populateAdminDashboard() {
    const session = requireAuth();
    if (!session || !session.userData || !session.userData.is_admin) {
        console.warn("Invalid Admin Session");
        return;
    }

    const { userData } = session;
    // Ensure all properties exist, defaulting to empty if missing to prevent crashes
    const panchayat = userData.panchayat || {};
    const projects = userData.projects || [];
    const schemes = userData.schemes || [];
    const complaints = userData.complaints || [];

    // Update Admin Name
    const nameSpan = document.querySelector('.user-menu span');
    if (nameSpan) nameSpan.innerHTML = `Admin: <strong>${userData.name || 'Admin'}</strong>`;

    const avatar = document.querySelector('.user-avatar');
    if (avatar) avatar.textContent = (userData.name ? userData.name.substring(0, 2).toUpperCase() : 'AD');

    // Update Stats
    if (panchayat.population) {
        setStat('stat-citizens', Math.floor(panchayat.population / 4));
    }
    setStat('stat-projects', projects.length);
    setStat('stat-schemes', schemes.length);
    setStat('stat-complaints', complaints.filter(c => c.status !== 'Resolved' && c.status !== 'Responded').length);

    // Populate Projects Table
    const tbody = document.querySelector('.data-table tbody');
    if (tbody) {
        if (projects.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center">No active projects</td></tr>';
        } else {
            tbody.innerHTML = projects.map(p => `
                <tr>
                    <td>${p.name}</td>
                    <td>₹${p.budget_lakhs}L</td>
                    <td>
                        <div class="progress-cell">
                            <div class="progress-bar-mini">
                                <div class="fill" style="width: ${p.progress}%; background: ${p.progress === 100 ? 'var(--ux4g-success)' : 'var(--ux4g-primary)'}"></div>
                            </div>
                            <span>${p.progress}%</span>
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-outline btn-sm" onclick="editProject('${p.id}')">Edit</button>
                    </td>
                </tr>
             `).join('');
        }
    }

    // Add Event Listeners for Buttons using ID
    const newProjectBtn = document.getElementById('add-project-btn');
    if (newProjectBtn) {
        newProjectBtn.onclick = showAddProjectModal;
    }
}

function setStat(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function showAddProjectModal() {
    // Simple prompt-based input for MVP
    const name = prompt("Enter Project Name:");
    if (!name) return;
    const budget = prompt("Enter Budget (Lakhs):");
    const progress = prompt("Current Progress (%):", "0");

    if (name && budget) {
        const session = getSession();
        const panchayatId = session.userData.panchayat_id;

        const newProject = {
            id: "PRJ" + Date.now(),
            name: name,
            budget_lakhs: parseFloat(budget),
            progress: parseInt(progress),
            status: parseInt(progress) === 100 ? 'completed' : 'ongoing',
            start_date: new Date().toISOString().split('T')[0],
            end_date: new Date(Date.now() + 86400000 * 30).toISOString().split('T')[0],
            contractor: "Internal"
        };

        // Update Global State
        if (!EGramDB.projects[panchayatId]) EGramDB.projects[panchayatId] = [];
        EGramDB.projects[panchayatId].push(newProject);

        // Save
        saveToStorage();

        // Refresh Session Data by "re-logging in" silently to get fresh data
        const newUserData = loginWithAdminId(session.epicId);
        sessionStorage.setItem('userData', JSON.stringify(newUserData));

        alert("Project Added Successfully!");
        location.reload();
    }
}

function editProject(id) {
    const session = getSession();
    const panchayatId = session.userData.panchayat_id;
    const project = EGramDB.projects[panchayatId].find(p => p.id === id);

    if (project) {
        const newProgress = prompt(`Update Progress for ${project.name} (%):`, project.progress);
        if (newProgress !== null) {
            project.progress = parseInt(newProgress);
            if (project.progress === 100) project.status = 'completed';

            saveToStorage();

            // Refresh Session Data
            const newUserData = loginWithAdminId(session.epicId);
            sessionStorage.setItem('userData', JSON.stringify(newUserData));

            location.reload();
        }
    }
}
