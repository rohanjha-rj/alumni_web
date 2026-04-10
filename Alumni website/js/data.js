const alumniData = [
    {
        id: 1,
        name: "Dr. Arjun Sharma",
        role: "Senior AI Researcher",
        company: "Google DeepMind",
        batch: "2012",
        branch: "CSE",
        industry: "Technology",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Arjun is a leading researcher in the field of Reinforcement Learning. After graduating from our college, he pursued his PhD at Stanford and has since published numerous papers in top-tier conferences.",
        skills: ["Machine Learning", "Python", "Deep Learning", "Strategy"],
        achievements: ["Top 30 Under 30 in Tech", "Best Paper Award at NeurIPS 2020"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com"
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Associate Director",
        company: "Goldman Sachs",
        batch: "2014",
        branch: "ECE",
        industry: "Finance",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        bio: "Priya transitioned from engineering to finance early in her career. She now leads the algorithmic trading infrastructure team at Goldman Sachs' London office.",
        skills: ["Quantitative Analysis", "Financial Modeling", "C++", "Leadership"],
        achievements: ["Leadership Excellence Award 2022", "Featured in FinTech Weekly"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Lead Hardware Engineer",
        company: "Tesla",
        batch: "2010",
        branch: "ME",
        industry: "Automotive",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        bio: "Michael has been instrumental in the development of the Cybertruck's chassis system. He is a passionate advocate for sustainable transportation and energy.",
        skills: ["Mechanical Design", "CAD", "Thermodynamics", "Prototyping"],
        achievements: ["Internal Tesla Innovation Award", "5 Patents in Battery Cooling"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com"
    },
    {
        id: 4,
        name: "Sarah Williams",
        role: "Founder & CEO",
        company: "EcoScale",
        batch: "2016",
        branch: "Civil",
        industry: "Sustainability",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        bio: "Sarah combined her civil engineering background with a passion for the environment to start EcoScale, a startup focused on sustainable urban planning.",
        skills: ["Urban Planning", "Sustainability", "Entrepreneurship", "Public Speaking"],
        achievements: ["Forbes 30 Under 30", "Global Green Tech Grant Winner"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com"
    },
    {
        id: 5,
        name: "Rahul Mehra",
        role: "Product Manager",
        company: "Microsoft",
        batch: "2015",
        branch: "CSE",
        industry: "Technology",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop",
        bio: "Rahul leads the developer experience team for Microsoft Azure. He is passionate about building tools that empower developers to create world-changing applications.",
        skills: ["Product Roadmap", "Agile", "User Experience", "Cloud Computing"],
        achievements: ["Most Valued Professional (MVP) 2021"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com"
    },
    {
        id: 6,
        name: "Ananya Iyer",
        role: "Senior Consultant",
        company: "McKinsey & Co",
        batch: "2013",
        branch: "ME",
        industry: "Consulting",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        bio: "Ananya specializes in digital transformation strategies for manufacturing giants. She has worked across three continents, helping legacy companies modernize.",
        skills: ["Business Strategy", "Data Analytics", "Public Speaking", "Management"],
        achievements: ["Consultant of the Year 2023"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com"
    }
];

const eventsData = [
    {
        id: 1,
        title: "Annual Alumni Meet 2024",
        date: "May 15, 2024",
        time: "10:00 AM - 4:00 PM",
        location: "College Main Auditorium",
        category: "Upcoming",
        description: "Join us for our flagship annual gathering. Reconnect with batchmates, meet current students, and witness the growth of your alma mater.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop"
    },
    {
        id: 2,
        title: "Tech Innovation Summit",
        date: "June 10, 2024",
        time: "11:00 AM - 6:00 PM",
        location: "Virtual (Zoom)",
        category: "Upcoming",
        description: "A series of talks and workshops by distinguished alumni in the tech industry. Focus on AI, Sustainability, and FinTech.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop"
    },
    {
        id: 3,
        title: "Mentorship Drive",
        date: "July 05, 2024",
        time: "2:00 PM - 5:00 PM",
        location: "Seminar Hall 1",
        category: "Upcoming",
        description: "A platform for alumni to mentor final-year students on career paths, interview prep, and higher education.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Silver Jubilee Celebration",
        date: "December 20, 2023",
        time: "6:00 PM onwards",
        location: "Grand Heritage Resort",
        category: "Past",
        description: "Celebrating 25 years of the 1998 batch. A night of nostalgia, awards, and dinner.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { alumniData, eventsData };
}
