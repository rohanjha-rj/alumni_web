/**
 * BCE Setu Alumni Portal — Alumni Data
 * Central data store for all alumni profiles.
 */
const alumniData = [
    {
        id: 1,
        name: "Dr. Arjun Sharma",
        role: "Senior AI Researcher",
        company: "Google DeepMind",
        batch: "2012",
        branch: "CSE",
        industry: "Technology",
        country: "United Kingdom",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Arjun is a leading researcher in the field of Reinforcement Learning. After graduating from our college, he pursued his PhD at Stanford and has since published numerous papers in top-tier conferences.",
        skills: ["Machine Learning", "Python", "Deep Learning", "Strategy"],
        achievements: ["Top 30 Under 30 in Tech", "Best Paper Award at NeurIPS 2020"],
        badges: ["🎓 PhD Scholar", "🏅 Forbes 30U30", "📝 Published Researcher"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com",
        lat: 51.5074, lng: -0.1278,   // London, UK
        isMentor: true, mentorBranches: ["CSE"], mentorIndustries: ["Technology", "AI/ML"]
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Associate Director",
        company: "Goldman Sachs",
        batch: "2014",
        branch: "ECE",
        industry: "Finance",
        country: "United Kingdom",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        bio: "Priya transitioned from engineering to finance early in her career. She now leads the algorithmic trading infrastructure team at Goldman Sachs' London office.",
        skills: ["Quantitative Analysis", "Financial Modeling", "C++", "Leadership"],
        achievements: ["Leadership Excellence Award 2022", "Featured in FinTech Weekly"],
        badges: ["💼 Finance Leader", "📊 FinTech Featured"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com",
        lat: 51.5074, lng: -0.1278,
        isMentor: true, mentorBranches: ["ECE", "CSE"], mentorIndustries: ["Finance", "Technology"]
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Lead Hardware Engineer",
        company: "Tesla",
        batch: "2010",
        branch: "ME",
        industry: "Automotive",
        country: "United States",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        bio: "Michael has been instrumental in the development of the Cybertruck's chassis system. He is a passionate advocate for sustainable transportation and energy.",
        skills: ["Mechanical Design", "CAD", "Thermodynamics", "Prototyping"],
        achievements: ["Internal Tesla Innovation Award", "5 Patents in Battery Cooling"],
        badges: ["🔧 Patent Holder", "⚡ EV Pioneer"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com",
        lat: 37.7749, lng: -122.4194,  // San Francisco
        isMentor: false, mentorBranches: [], mentorIndustries: []
    },
    {
        id: 4,
        name: "Sarah Williams",
        role: "Founder & CEO",
        company: "EcoScale",
        batch: "2016",
        branch: "Civil",
        industry: "Sustainability",
        country: "India",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        bio: "Sarah combined her civil engineering background with a passion for the environment to start EcoScale, a startup focused on sustainable urban planning.",
        skills: ["Urban Planning", "Sustainability", "Entrepreneurship", "Public Speaking"],
        achievements: ["Forbes 30 Under 30", "Global Green Tech Grant Winner"],
        badges: ["🌱 Green Innovator", "🏅 Forbes 30U30", "🚀 Startup Founder"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com",
        lat: 28.6139, lng: 77.2090,   // New Delhi
        isMentor: true, mentorBranches: ["Civil"], mentorIndustries: ["Sustainability", "Consulting"]
    },
    {
        id: 5,
        name: "Rahul Mehra",
        role: "Product Manager",
        company: "Microsoft",
        batch: "2015",
        branch: "CSE",
        industry: "Technology",
        country: "United States",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop",
        bio: "Rahul leads the developer experience team for Microsoft Azure. He is passionate about building tools that empower developers to create world-changing applications.",
        skills: ["Product Roadmap", "Agile", "User Experience", "Cloud Computing"],
        achievements: ["Most Valued Professional (MVP) 2021"],
        badges: ["☁️ Cloud Expert", "🏆 MS MVP"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com",
        lat: 47.6062, lng: -122.3321,  // Seattle
        isMentor: true, mentorBranches: ["CSE"], mentorIndustries: ["Technology"]
    },
    {
        id: 6,
        name: "Ananya Iyer",
        role: "Senior Consultant",
        company: "McKinsey & Co",
        batch: "2013",
        branch: "ME",
        industry: "Consulting",
        country: "Singapore",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        bio: "Ananya specializes in digital transformation strategies for manufacturing giants. She has worked across three continents, helping legacy companies modernize.",
        skills: ["Business Strategy", "Data Analytics", "Public Speaking", "Management"],
        achievements: ["Consultant of the Year 2023"],
        badges: ["🌏 Global Consultant", "📈 Strategy Expert"],
        linkedin: "https://linkedin.com",
        portfolio: "https://example.com",
        lat: 1.3521, lng: 103.8198,    // Singapore
        isMentor: true, mentorBranches: ["ME", "Civil"], mentorIndustries: ["Consulting"]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { alumniData };
}

