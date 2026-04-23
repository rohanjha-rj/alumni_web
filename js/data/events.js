/**
 * BCE Setu Alumni Portal — Events Data
 * Central data store for all alumni events.
 */
const eventsData = [
    {
        id: 1,
        title: "Annual Alumni Meet 2024",
        date: "May 15, 2024",
        time: "10:00 AM - 4:00 PM",
        location: "College Main Auditorium",
        category: "Upcoming",
        rsvpCount: 142,
        description: "Join us for our flagship annual gathering. Reconnect with batchmates, meet current students, and witness the growth of your alma mater.",
        image: "assets/College pictures/college-9.jpeg"
    },
    {
        id: 2,
        title: "Tech Innovation Summit",
        date: "June 10, 2024",
        time: "11:00 AM - 6:00 PM",
        location: "Virtual (Zoom)",
        category: "Upcoming",
        rsvpCount: 89,
        description: "A series of talks and workshops by distinguished alumni in the tech industry. Focus on AI, Sustainability, and FinTech.",
        image: "assets/College pictures/college-12.jpeg"
    },
    {
        id: 3,
        title: "Mentorship Drive",
        date: "July 05, 2024",
        time: "2:00 PM - 5:00 PM",
        location: "Seminar Hall 1",
        category: "Upcoming",
        rsvpCount: 56,
        description: "A platform for alumni to mentor final-year students on career paths, interview prep, and higher education.",
        image: "assets/College pictures/college-13.jpeg"
    },
    {
        id: 4,
        title: "Silver Jubilee Celebration",
        date: "December 20, 2023",
        time: "6:00 PM onwards",
        location: "Grand Heritage Resort",
        category: "Past",
        rsvpCount: 310,
        description: "Celebrating 25 years of the 1998 batch. A night of nostalgia, awards, and dinner.",
        image: "assets/College pictures/college-14.jpeg"
    }
];

/**
 * Jobs Board Data — Feature #1
 */
const jobsData = [
    {
        id: 1,
        title: "Machine Learning Engineer",
        company: "StartupAI",
        location: "Bangalore, India",
        type: "Full-time",
        industry: "Technology",
        postedBy: "Dr. Arjun Sharma",
        postedDate: "April 5, 2026",
        salary: "₹18–28 LPA",
        description: "Looking for passionate ML engineers to build next-gen recommendation systems. Strong Python and PyTorch skills required.",
        tags: ["Python", "ML", "PyTorch", "Remote-friendly"],
        applyLink: "#"
    },
    {
        id: 2,
        title: "Product Manager — Fintech",
        company: "PayTech Global",
        location: "Mumbai, India",
        type: "Full-time",
        industry: "Finance",
        postedBy: "Priya Patel",
        postedDate: "April 3, 2026",
        salary: "₹20–32 LPA",
        description: "Drive product strategy for our payments platform serving 10M+ users across Southeast Asia.",
        tags: ["Product", "Fintech", "Agile", "B2C"],
        applyLink: "#"
    },
    {
        id: 3,
        title: "Civil Engineer — Infrastructure",
        company: "GreenBuild Corp",
        location: "Delhi, India",
        type: "Full-time",
        industry: "Sustainability",
        postedBy: "Sarah Williams",
        postedDate: "March 28, 2026",
        salary: "₹10–16 LPA",
        description: "Work on sustainable urban infrastructure projects across Tier-1 cities. LEED certification preferred.",
        tags: ["Civil", "Green Building", "LEED", "Infrastructure"],
        applyLink: "#"
    },
    {
        id: 4,
        title: "Software Engineering Intern",
        company: "Microsoft",
        location: "Hyderabad, India",
        type: "Internship",
        industry: "Technology",
        postedBy: "Rahul Mehra",
        postedDate: "April 8, 2026",
        salary: "₹80,000/month stipend",
        description: "Summer internship on the Azure Developer Tools team. Work on tools used by millions of developers worldwide.",
        tags: ["C#", ".NET", "Azure", "Summer 2026"],
        applyLink: "#"
    },
    {
        id: 5,
        title: "Management Consultant",
        company: "BCG",
        location: "Singapore",
        type: "Full-time",
        industry: "Consulting",
        postedBy: "Ananya Iyer",
        postedDate: "April 1, 2026",
        salary: "SGD 90,000–120,000",
        description: "Join our digital practice and help Fortune 500 clients navigate complex transformations.",
        tags: ["Strategy", "Digital Transformation", "MBA preferred"],
        applyLink: "#"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { eventsData, jobsData };
}

