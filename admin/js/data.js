/**
 * BCE Setu Admin Portal — Data Layer
 * admin/js/data.js
 *
 * All default seed data and localStorage CRUD helpers live here.
 * Import order: data.js → admin.js
 */

'use strict';

/* ════════════════════════════════════════════════
   SEED DATA
════════════════════════════════════════════════ */
const SEED = {
    alumni: [
        { id: 1, name: "Dr. Arjun Sharma",  role: "Senior AI Researcher", company: "Google DeepMind",  batch: "2012", branch: "CSE",   industry: "Technology",    country: "United Kingdom", bio: "Leading researcher in Reinforcement Learning. PhD from Stanford.", linkedin: "https://linkedin.com", portfolio: "https://example.com" },
        { id: 2, name: "Priya Patel",        role: "Associate Director",   company: "Goldman Sachs",    batch: "2014", branch: "ECE",   industry: "Finance",       country: "United Kingdom", bio: "Leads algorithmic trading infrastructure at Goldman Sachs London.", linkedin: "https://linkedin.com", portfolio: "https://example.com" },
        { id: 3, name: "Michael Chen",       role: "Lead Hardware Engineer",company: "Tesla",            batch: "2010", branch: "ME",    industry: "Automotive",    country: "United States",  bio: "Works on Cybertruck chassis systems. 5 battery-cooling patents.", linkedin: "https://linkedin.com", portfolio: "" },
        { id: 4, name: "Sarah Williams",     role: "Founder & CEO",        company: "EcoScale",         batch: "2016", branch: "Civil", industry: "Sustainability", country: "India",           bio: "Combines civil engineering with sustainability via EcoScale startup.", linkedin: "https://linkedin.com", portfolio: "https://example.com" },
        { id: 5, name: "Rahul Mehra",        role: "Product Manager",      company: "Microsoft",        batch: "2015", branch: "CSE",   industry: "Technology",    country: "United States",  bio: "Leads developer experience for Azure. Microsoft MVP 2021.", linkedin: "https://linkedin.com", portfolio: "https://example.com" },
        { id: 6, name: "Ananya Iyer",        role: "Senior Consultant",    company: "McKinsey & Co",   batch: "2013", branch: "ME",    industry: "Consulting",    country: "Singapore",       bio: "Digital transformation specialist across three continents.", linkedin: "https://linkedin.com", portfolio: "https://example.com" }
    ],

    events: [
        { id: 1, title: "Annual Alumni Meet 2024",     date: "2024-05-15", time: "10:00 AM – 4:00 PM",   location: "College Main Auditorium", category: "Upcoming", rsvpCount: 142, description: "Flagship annual gathering — reconnect, network, inspire.",          image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop" },
        { id: 2, title: "Tech Innovation Summit",       date: "2024-06-10", time: "11:00 AM – 6:00 PM",   location: "Virtual (Zoom)",          category: "Upcoming", rsvpCount: 89,  description: "Talks by distinguished alumni in AI, FinTech, and Sustainability.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop" },
        { id: 3, title: "Mentorship Drive Q3",         date: "2024-07-05", time: "2:00 PM – 5:00 PM",    location: "Seminar Hall 1",          category: "Upcoming", rsvpCount: 56,  description: "Alumni mentor final-year students on career, interviews & higher ed.", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop" },
        { id: 4, title: "Silver Jubilee Celebration",  date: "2023-12-20", time: "6:00 PM onwards",       location: "Grand Heritage Resort",   category: "Past",     rsvpCount: 310, description: "Celebrating 25 years of the 1998 batch — nostalgia, awards, dinner.", image: "" }
    ],

    jobs: [
        { id: 1, title: "Machine Learning Engineer",   company: "StartupAI",       location: "Bangalore, India",   type: "Full-time",   industry: "Technology",    postedBy: "Dr. Arjun Sharma", postedDate: "April 5, 2026",   salary: "₹18–28 LPA" },
        { id: 2, title: "Product Manager — Fintech",   company: "PayTech Global",  location: "Mumbai, India",      type: "Full-time",   industry: "Finance",       postedBy: "Priya Patel",       postedDate: "April 3, 2026",   salary: "₹20–32 LPA" },
        { id: 3, title: "Civil Engineer — Infrastructure", company: "GreenBuild", location: "Delhi, India",       type: "Full-time",   industry: "Sustainability", postedBy: "Sarah Williams",    postedDate: "March 28, 2026",  salary: "₹10–16 LPA" },
        { id: 4, title: "Software Engineering Intern", company: "Microsoft",       location: "Hyderabad, India",   type: "Internship",  industry: "Technology",    postedBy: "Rahul Mehra",       postedDate: "April 8, 2026",   salary: "₹80,000/month" },
        { id: 5, title: "Management Consultant",       company: "BCG",             location: "Singapore",          type: "Full-time",   industry: "Consulting",    postedBy: "Ananya Iyer",       postedDate: "April 1, 2026",   salary: "SGD 90,000–120,000" }
    ],

    pending: [
        { id: 1001, name: "Vikash Kumar",   email: "vikash.k@gmail.com",        batch: "2022", branch: "CSE",   phone: "9876543210", currentWork: "Infosys",   appliedOn: "Apr 10, 2026" },
        { id: 1002, name: "Sneha Gupta",    email: "sneha.g@yahoo.com",         batch: "2020", branch: "ECE",   phone: "9871234567", currentWork: "Wipro",     appliedOn: "Apr 09, 2026" },
        { id: 1003, name: "Ramesh Yadav",   email: "ramesh.y@bcesetu.in",       batch: "2019", branch: "ME",    phone: "9988776655", currentWork: "BHEL",      appliedOn: "Apr 08, 2026" }
    ],

    activity: []
};

/* ════════════════════════════════════════════════
   STORAGE HELPERS
════════════════════════════════════════════════ */
const DB = {
    _key: k => 'bce_' + k,

    get(key) {
        try { return JSON.parse(localStorage.getItem(this._key(key))); }
        catch { return null; }
    },

    set(key, value) {
        try { localStorage.setItem(this._key(key), JSON.stringify(value)); }
        catch (e) { console.warn('Storage write failed:', e); }
    },

    /** Returns stored value, or seed default if key is missing or empty array */
    getOrSeed(key) {
        const stored = this.get(key);
        if (stored !== null && (Array.isArray(stored) ? stored.length > 0 : true)) return stored;
        const seed = SEED[key] || [];
        this.set(key, seed);
        return seed;
    },

    /** Byte size of all bce_ keys */
    usedBytes() {
        let total = 0;
        for (const k of Object.keys(localStorage)) {
            if (k.startsWith('bce_')) total += (localStorage[k].length * 2);
        }
        return total;
    }
};

/* ════════════════════════════════════════════════
   INITIALISE — call once on DOMContentLoaded
════════════════════════════════════════════════ */
function initDB() {
    /* Ensure every key has data; if localStorage was cleared, re-seed from defaults */
    ['alumni','events','jobs','pending'].forEach(k => DB.getOrSeed(k));

    /* Bootstrap activity log */
    if (!DB.get('activity') || DB.get('activity').length === 0) {
        const alumni = DB.get('alumni') || [];
        const events = DB.get('events') || [];
        const jobs   = DB.get('jobs')   || [];
        DB.set('activity', [
            { text: `System data loaded — ${alumni.length} alumni, ${events.length} events, ${jobs.length} jobs`, time: fmtTime(new Date()), type: 'info' },
            { text: 'Admin portal initialised', time: fmtTime(new Date()), type: 'info' }
        ]);
    }
}

/* ════════════════════════════════════════════════
   ACTIVITY LOG
════════════════════════════════════════════════ */
function logActivity(text, type = 'info') {
    const acts = DB.get('activity') || [];
    acts.unshift({ text, time: fmtTime(new Date()), type });
    if (acts.length > 30) acts.pop();
    DB.set('activity', acts);
}

/* ════════════════════════════════════════════════
   UTILITY
════════════════════════════════════════════════ */
function fmtTime(d) {
    return d.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Kolkata' });
}

function fmtDate(str) {
    try { return new Date(str).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); }
    catch { return str || '—'; }
}

function esc(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function initials(name) {
    return (name || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

const AVATAR_COLORS = ['#3b4fd8','#059669','#7c3aed','#d97706','#0891b2','#be185d','#b45309'];
function avatarColor(index) { return AVATAR_COLORS[index % AVATAR_COLORS.length]; }
