/**
 * Janamithra Database
 * Maps EPIC IDs to Panchayats and stores all related data
 */

const EGramDB = {
    // EPIC ID to Panchayat mapping
    epic_map: {
        "KLF9034101": "P001", "KLF9034102": "P001", "KLF9034103": "P001", "KLF9034104": "P001", "KLF9034105": "P001", "KLF9034106": "P001",
        "KLF9034201": "P002", "KLF9034202": "P002", "KLF9034203": "P002", "KLF9034204": "P002", "KLF9034205": "P002", "KLF9034206": "P002",
        "KLF9034301": "P003", "KLF9034302": "P003", "KLF9034303": "P003", "KLF9034304": "P003", "KLF9034305": "P003", "KLF9034306": "P003",
        "KLF9034401": "P004", "KLF9034402": "P004", "KLF9034403": "P004", "KLF9034404": "P004", "KLF9034405": "P004", "KLF9034406": "P004",
        "KLF9034501": "P005", "KLF9034502": "P005", "KLF9034503": "P005", "KLF9034504": "P005", "KLF9034505": "P005", "KLF9034506": "P005",
        "KLF9034601": "P006", "KLF9034602": "P006", "KLF9034603": "P006", "KLF9034604": "P006", "KLF9034605": "P006", "KLF9034606": "P006",
        "KLF9034701": "P007", "KLF9034702": "P007", "KLF9034703": "P007", "KLF9034704": "P007", "KLF9034705": "P007", "KLF9034706": "P007",
        "KLF9034801": "P008", "KLF9034802": "P008", "KLF9034803": "P008", "KLF9034804": "P008", "KLF9034805": "P008", "KLF9034806": "P008",
        "KLF9034901": "P009", "KLF9034902": "P009", "KLF9034903": "P009", "KLF9034904": "P009", "KLF9034905": "P009", "KLF9034906": "P009",
        "KLF9035001": "P010", "KLF9035002": "P010", "KLF9035003": "P010", "KLF9035004": "P010", "KLF9035005": "P010", "KLF9035006": "P010"
    },

    // Citizens data (linked to EPIC)
    citizens: {
        "KLF9034101": { name: "Anil Kumar", age: 45, gender: "Male", address: "House No 12, Ward 1", phone: "9400112233", aadhaar_last4: "4521" },
        "KLF9034102": { name: "Sreeja M", age: 38, gender: "Female", address: "House No 24, Ward 2", phone: "9447223344", aadhaar_last4: "7832" },
        "KLF9034103": { name: "Rajan P", age: 62, gender: "Male", address: "House No 5, Ward 1", phone: "9495334455", aadhaar_last4: "1290" },
        "KLF9034104": { name: "Lakshmi R", age: 55, gender: "Female", address: "House No 18, Ward 3", phone: "9400445566", aadhaar_last4: "8743" },
        "KLF9034105": { name: "Vipin S", age: 29, gender: "Male", address: "House No 33, Ward 2", phone: "9446556677", aadhaar_last4: "2156" },
        "KLF9034106": { name: "Priya K", age: 34, gender: "Female", address: "House No 7, Ward 4", phone: "9495667788", aadhaar_last4: "9034" },
        "KLF9034201": { name: "Thomas V", age: 58, gender: "Male", address: "House No 45, Ward 1", phone: "9447778899", aadhaar_last4: "3421" },
        "KLF9034202": { name: "Fatima N", age: 41, gender: "Female", address: "House No 22, Ward 3", phone: "9400889900", aadhaar_last4: "6578" },
        "KLF9034203": { name: "Suresh B", age: 50, gender: "Male", address: "House No 11, Ward 2", phone: "9446990011", aadhaar_last4: "1847" },
        "KLF9034204": { name: "Meena K", age: 36, gender: "Female", address: "House No 8, Ward 5", phone: "9495001122", aadhaar_last4: "4923" },
        "KLF9034205": { name: "Krishnan M", age: 67, gender: "Male", address: "House No 31, Ward 4", phone: "9447112233", aadhaar_last4: "7654" },
        "KLF9034206": { name: "Divya R", age: 28, gender: "Female", address: "House No 19, Ward 6", phone: "9400223344", aadhaar_last4: "0987" }
    },

    // Panchayats data
    panchayats: {
        "P001": {
            name: "Athiyal Thuruthu Grama Panchayat",
            district: "Alappuzha",
            block: "Cherthala",
            state: "Kerala",
            population: 18500,
            area_sqkm: 12.5,
            wards: 13,
            president: { name: "S. Manju K", age: 47, contact: "9400001100", photo: "president_p001.jpg", party: "INC" },
            secretary: { name: "Rajesh Kumar T", contact: "9447001100", email: "secretary.athiyal@kerala.gov.in" },
            office: { address: "Panchayat Office, Athiyal Junction", phone: "0478-2552100", email: "athiyalpanchayat@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Rajeev Kumar", ward: 1, portfolio: "Public Works", contact: "9400111001" },
                { name: "Bindu V", ward: 3, portfolio: "Health", contact: "9447111002" },
                { name: "Ashwin P", ward: 5, portfolio: "Education", contact: "9495111003" },
                { name: "Suma L", ward: 7, portfolio: "Women Welfare", contact: "9400111004" },
                { name: "Vijayan M", ward: 9, portfolio: "Agriculture", contact: "9446111005" }
            ],
            total_budget_lakhs: 240
        },
        "P002": {
            name: "Payyavoor Grama Panchayat",
            district: "Kannur",
            block: "Thalassery",
            state: "Kerala",
            population: 24200,
            area_sqkm: 18.3,
            wards: 15,
            president: { name: "Joseph B", age: 55, contact: "9447002200", photo: "president_p002.jpg", party: "CPI(M)" },
            secretary: { name: "Sudheer Mohan", contact: "9495002200", email: "secretary.payyavoor@kerala.gov.in" },
            office: { address: "Panchayat Bhavan, Payyavoor", phone: "0490-2342200", email: "payyavoor@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Ammu S", ward: 2, portfolio: "Health", contact: "9400222001" },
                { name: "Sudheesh R", ward: 6, portfolio: "Public Works", contact: "9447222002" },
                { name: "Niyas KP", ward: 8, portfolio: "Agriculture", contact: "9495222003" },
                { name: "Jameela T", ward: 11, portfolio: "Welfare", contact: "9446222004" }
            ],
            total_budget_lakhs: 385
        },
        "P003": {
            name: "Muttathukonam Grama Panchayat",
            district: "Kottayam",
            block: "Changanassery",
            state: "Kerala",
            population: 15800,
            area_sqkm: 9.8,
            wards: 11,
            president: { name: "Neethu K", age: 42, contact: "9895001122", photo: "president_p003.jpg", party: "INC" },
            secretary: { name: "Anitha Mol", contact: "9447331122", email: "secretary.muttathukonam@kerala.gov.in" },
            office: { address: "Grama Panchayat Office, Muttathukonam", phone: "0481-2451122", email: "muttathukonam@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Jacob S", ward: 1, portfolio: "Finance", contact: "9400333001" },
                { name: "Lekha P", ward: 7, portfolio: "Education", contact: "9447333002" },
                { name: "Pranav M", ward: 8, portfolio: "Transport", contact: "9495333003" }
            ],
            total_budget_lakhs: 310
        },
        "P004": {
            name: "Poothrikka Grama Panchayat",
            district: "Ernakulam",
            block: "Muvattupuzha",
            state: "Kerala",
            population: 31200,
            area_sqkm: 22.1,
            wards: 17,
            president: { name: "Ravi Sankar", age: 50, contact: "9800004455", photo: "president_p004.jpg", party: "CPI(M)" },
            secretary: { name: "Mini Joseph", contact: "9447441155", email: "secretary.poothrikka@kerala.gov.in" },
            office: { address: "Panchayat Bhavan, Poothrikka Junction", phone: "0485-2264455", email: "poothrikka@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Meera L", ward: 2, portfolio: "Health", contact: "9400444001" },
                { name: "Sanoj V", ward: 4, portfolio: "Public Works", contact: "9447444002" },
                { name: "Usha M", ward: 7, portfolio: "Women Welfare", contact: "9495444003" }
            ],
            total_budget_lakhs: 520
        },
        "P005": {
            name: "Kattoor Grama Panchayat",
            district: "Thrissur",
            block: "Kodungallur",
            state: "Kerala",
            population: 28900,
            area_sqkm: 16.7,
            wards: 15,
            president: { name: "Chithra P", age: 46, contact: "9645001122", photo: "president_p005.jpg", party: "INC" },
            secretary: { name: "Sreekumar V", contact: "9447551122", email: "secretary.kattoor@kerala.gov.in" },
            office: { address: "Panchayat Office, Kattoor", phone: "0480-2801122", email: "kattoor@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Mukesh L", ward: 1, portfolio: "Sports", contact: "9400555001" },
                { name: "Daliya S", ward: 6, portfolio: "Education", contact: "9447555002" },
                { name: "Varun R", ward: 8, portfolio: "Fisheries", contact: "9495555003" }
            ],
            total_budget_lakhs: 690
        },
        "P006": {
            name: "Chittur Grama Panchayat",
            district: "Palakkad",
            block: "Chittur",
            state: "Kerala",
            population: 22100,
            area_sqkm: 28.4,
            wards: 13,
            president: { name: "Murugan", age: 61, contact: "9443011122", photo: "president_p006.jpg", party: "CPI(M)" },
            secretary: { name: "Jayakumar P", contact: "9447661122", email: "secretary.chittur@kerala.gov.in" },
            office: { address: "Grama Panchayat Bhavan, Chittur", phone: "0492-2220011", email: "chittur@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Deepa K", ward: 4, portfolio: "Health", contact: "9400666001" },
                { name: "Venu T", ward: 9, portfolio: "Agriculture", contact: "9447666002" }
            ],
            total_budget_lakhs: 230
        },
        "P007": {
            name: "Vellinezhi Grama Panchayat",
            district: "Palakkad",
            block: "Ottapalam",
            state: "Kerala",
            population: 19600,
            area_sqkm: 14.2,
            wards: 12,
            president: { name: "Aboobacker", age: 57, contact: "9207501100", photo: "president_p007.jpg", party: "IUML" },
            secretary: { name: "Prasad Menon", contact: "9447771100", email: "secretary.vellinezhi@kerala.gov.in" },
            office: { address: "Panchayat Office, Vellinezhi", phone: "0466-2281100", email: "vellinezhi@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Fathima T", ward: 1, portfolio: "Women Welfare", contact: "9400777001" },
                { name: "Nandhan S", ward: 6, portfolio: "Education", contact: "9447777002" }
            ],
            total_budget_lakhs: 305
        },
        "P008": {
            name: "Panamaram Grama Panchayat",
            district: "Wayanad",
            block: "Mananthavady",
            state: "Kerala",
            population: 17400,
            area_sqkm: 45.6,
            wards: 11,
            president: { name: "Rasiya O", age: 49, contact: "9495009100", photo: "president_p008.jpg", party: "CPI(M)" },
            secretary: { name: "Sunil Kumar", contact: "9447889100", email: "secretary.panamaram@kerala.gov.in" },
            office: { address: "Grama Panchayat Office, Panamaram", phone: "04935-240100", email: "panamaram@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Arun B", ward: 2, portfolio: "Tourism", contact: "9400888001" },
                { name: "Shylaja", ward: 5, portfolio: "Health", contact: "9447888002" },
                { name: "Fasal", ward: 9, portfolio: "Agriculture", contact: "9495888003" }
            ],
            total_budget_lakhs: 410
        },
        "P009": {
            name: "Thrikkaipetta Grama Panchayat",
            district: "Wayanad",
            block: "Sulthan Bathery",
            state: "Kerala",
            population: 14200,
            area_sqkm: 38.9,
            wards: 10,
            president: { name: "Pramod V", age: 52, contact: "9446501100", photo: "president_p009.jpg", party: "INC" },
            secretary: { name: "Beena K", contact: "9447991100", email: "secretary.thrikkaipetta@kerala.gov.in" },
            office: { address: "Panchayat Bhavan, Thrikkaipetta", phone: "04936-221100", email: "thrikkaipetta@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Hemalatha", ward: 3, portfolio: "Health", contact: "9400999001" },
                { name: "Shibin", ward: 7, portfolio: "Public Works", contact: "9447999002" },
                { name: "Rehana", ward: 8, portfolio: "Welfare", contact: "9495999003" }
            ],
            total_budget_lakhs: 250
        },
        "P010": {
            name: "Muttar Grama Panchayat",
            district: "Alappuzha",
            block: "Ambalappuzha",
            state: "Kerala",
            population: 21300,
            area_sqkm: 11.8,
            wards: 14,
            president: { name: "Suseela", age: 45, contact: "9447550044", photo: "president_p010.jpg", party: "CPI(M)" },
            secretary: { name: "Vineeth R", contact: "9447100044", email: "secretary.muttar@kerala.gov.in" },
            office: { address: "Grama Panchayat Office, Muttar", phone: "0477-2701044", email: "muttar@kerala.gov.in", timing: "10:00 AM - 5:00 PM" },
            members: [
                { name: "Udayan", ward: 2, portfolio: "Fisheries", contact: "9400100001" },
                { name: "Varsha", ward: 6, portfolio: "Women Welfare", contact: "9447100002" }
            ],
            total_budget_lakhs: 330
        }
    },

    // Projects by Panchayat
    projects: {
        "P001": [
            { id: "PRJ001001", name: "Canal Cleaning", progress: 65, budget_lakhs: 12, start_date: "2025-04-15", end_date: "2026-03-31", contractor: "Kerala Water Authority", status: "ongoing" },
            { id: "PRJ001002", name: "Smart Street Lights", progress: 40, budget_lakhs: 18, start_date: "2025-08-01", end_date: "2026-06-30", contractor: "KSEB Ltd", status: "ongoing" }
        ],
        "P002": [
            { id: "PRJ002001", name: "Irrigation Pipeline Expansion", progress: 82, budget_lakhs: 55, start_date: "2024-11-01", end_date: "2026-02-28", contractor: "Minor Irrigation Dept", status: "ongoing" },
            { id: "PRJ002002", name: "Waste Segregation Unit", progress: 25, budget_lakhs: 32, start_date: "2025-09-15", end_date: "2026-08-31", contractor: "Suchitwa Mission", status: "ongoing" }
        ],
        "P003": [
            { id: "PRJ003001", name: "Road Tarring - Ward 6", progress: 90, budget_lakhs: 40, start_date: "2025-02-01", end_date: "2026-01-31", contractor: "PWD Kerala", status: "ongoing" },
            { id: "PRJ003002", name: "Library Modernisation", progress: 30, budget_lakhs: 15, start_date: "2025-10-01", end_date: "2026-05-31", contractor: "State Library Council", status: "ongoing" }
        ],
        "P004": [
            { id: "PRJ004001", name: "Market Solid Waste Project", progress: 58, budget_lakhs: 27, start_date: "2025-05-01", end_date: "2026-04-30", contractor: "Clean Kerala Co", status: "ongoing" },
            { id: "PRJ004002", name: "Indoor Stadium", progress: 12, budget_lakhs: 140, start_date: "2025-11-01", end_date: "2027-10-31", contractor: "Sports Authority Kerala", status: "ongoing" }
        ],
        "P005": [
            { id: "PRJ005001", name: "Coastal Road Strengthening", progress: 73, budget_lakhs: 210, start_date: "2024-08-15", end_date: "2026-07-31", contractor: "PWD Kerala", status: "ongoing" },
            { id: "PRJ005002", name: "Water Desalination Pilot", progress: 40, budget_lakhs: 98, start_date: "2025-06-01", end_date: "2026-12-31", contractor: "KWA", status: "ongoing" }
        ],
        "P006": [
            { id: "PRJ006001", name: "New PHC Building", progress: 45, budget_lakhs: 110, start_date: "2025-03-01", end_date: "2026-09-30", contractor: "Health Dept Kerala", status: "ongoing" }
        ],
        "P007": [
            { id: "PRJ007001", name: "Cultural Hall Renovation", progress: 32, budget_lakhs: 60, start_date: "2025-07-15", end_date: "2026-06-30", contractor: "Cultural Affairs Dept", status: "ongoing" },
            { id: "PRJ007002", name: "Water Tank Upgradation", progress: 81, budget_lakhs: 38, start_date: "2025-01-15", end_date: "2026-01-31", contractor: "KWA", status: "ongoing" }
        ],
        "P008": [
            { id: "PRJ008001", name: "Eco Tourism Footpath", progress: 78, budget_lakhs: 90, start_date: "2024-12-01", end_date: "2026-03-31", contractor: "Tourism Dept", status: "ongoing" },
            { id: "PRJ008002", name: "Organic Market", progress: 52, budget_lakhs: 48, start_date: "2025-04-01", end_date: "2026-03-31", contractor: "Agri Marketing Board", status: "ongoing" }
        ],
        "P009": [
            { id: "PRJ009001", name: "Forest Safety Fencing", progress: 66, budget_lakhs: 120, start_date: "2025-02-15", end_date: "2026-08-31", contractor: "Forest Dept Kerala", status: "ongoing" }
        ],
        "P010": [
            { id: "PRJ010001", name: "Canal Dredging", progress: 34, budget_lakhs: 75, start_date: "2025-06-15", end_date: "2026-05-31", contractor: "Irrigation Dept", status: "ongoing" },
            { id: "PRJ010002", name: "Water Testing Lab", progress: 22, budget_lakhs: 62, start_date: "2025-09-01", end_date: "2026-08-31", contractor: "KWA", status: "ongoing" }
        ]
    },

    // Schemes (common + panchayat-specific availability)
    schemes: [
        { id: "SCH001", name: "Old Age Pension", category: "Welfare", ministry: "Ministry of Social Justice", amount: "₹1,500/month", eligibility: "Age 60+, BPL", documents: ["Aadhaar", "Age Proof", "BPL Card"], panchayats: ["P001", "P003", "P006", "P010"] },
        { id: "SCH002", name: "PMAY Housing", category: "Housing", ministry: "Ministry of Housing", amount: "₹2,50,000", eligibility: "Homeless families, BPL", documents: ["Aadhaar", "Income Certificate", "Land Document"], panchayats: ["P001", "P002", "P004", "P008"] },
        { id: "SCH003", name: "Laptop Subsidy", category: "Education", ministry: "State IT Mission", amount: "₹15,000", eligibility: "College students, family income < 3L", documents: ["Aadhaar", "College ID", "Income Certificate"], panchayats: ["P002", "P005", "P007"] },
        { id: "SCH004", name: "Farmer Fertilizer Support", category: "Agriculture", ministry: "Ministry of Agriculture", amount: "₹5,000/season", eligibility: "Registered farmers", documents: ["Aadhaar", "Land Record", "Farmer ID"], panchayats: ["P002", "P006", "P008", "P009"] },
        { id: "SCH005", name: "Skill India Training", category: "Employment", ministry: "Ministry of Skill Development", amount: "Free Training + ₹8,000 stipend", eligibility: "Age 18-35, unemployed", documents: ["Aadhaar", "Education Certificate"], panchayats: ["P003", "P004", "P007"] },
        { id: "SCH006", name: "Youth Sports Grant", category: "Sports", ministry: "Sports Authority", amount: "₹25,000", eligibility: "Age 15-25, state level players", documents: ["Aadhaar", "Sports Certificate"], panchayats: ["P003", "P005"] },
        { id: "SCH007", name: "Self Employment Loan", category: "Finance", ministry: "MSME Ministry", amount: "Up to ₹10,00,000", eligibility: "Entrepreneurs, valid business plan", documents: ["Aadhaar", "Business Plan", "Bank Statement"], panchayats: ["P004", "P006", "P010"] },
        { id: "SCH008", name: "Fishermen Insurance", category: "Welfare", ministry: "Fisheries Dept", amount: "₹5,00,000 coverage", eligibility: "Registered fishermen", documents: ["Aadhaar", "Fisherman ID", "Boat License"], panchayats: ["P005", "P010"] },
        { id: "SCH009", name: "Farm Soil Subsidy", category: "Agriculture", ministry: "Agriculture Dept", amount: "₹2,000/acre", eligibility: "Farmers with degraded soil", documents: ["Aadhaar", "Land Record", "Soil Test Report"], panchayats: ["P006", "P009"] },
        { id: "SCH010", name: "Minority Scholarship", category: "Education", ministry: "Minority Affairs", amount: "₹30,000/year", eligibility: "Minority students, merit based", documents: ["Aadhaar", "Minority Certificate", "Marksheet"], panchayats: ["P007", "P008"] },
        { id: "SCH011", name: "Tribal Scholarship", category: "Education", ministry: "Tribal Affairs", amount: "₹50,000/year", eligibility: "ST students", documents: ["Aadhaar", "Caste Certificate", "Marksheet"], panchayats: ["P008", "P009"] },
        { id: "SCH012", name: "Organic Farming Grant", category: "Agriculture", ministry: "Agriculture Dept", amount: "₹10,000/hectare", eligibility: "Organic certified farms", documents: ["Aadhaar", "Land Record", "Organic Certificate"], panchayats: ["P008"] },
        { id: "SCH013", name: "Medicinal Herb Cultivation", category: "Agriculture", ministry: "AYUSH Ministry", amount: "₹15,000/acre", eligibility: "Farmers in identified zones", documents: ["Aadhaar", "Land Record"], panchayats: ["P009"] },
        { id: "SCH014", name: "Fish Farming Incentive", category: "Fisheries", ministry: "Fisheries Dept", amount: "₹50,000", eligibility: "New fish farmers", documents: ["Aadhaar", "Land/Water Body Lease"], panchayats: ["P010"] }
    ],

    // RTI & Complaints by Panchayat
    rti_complaints: {
        "P001": [
            { id: "RTI001001", type: "RTI", subject: "Road fund utilization 2024-25", filed_by: "KLF9034101", date: "2025-12-10", status: "Responded", response_date: "2025-12-25" },
            { id: "CMP001001", type: "Complaint", subject: "Drainage blockage Ward 3", filed_by: "KLF9034103", date: "2026-01-05", status: "In Progress", assigned_to: "Public Works" }
        ],
        "P002": [
            { id: "RTI002001", type: "RTI", subject: "Contractor payment details", filed_by: "KLF9034201", date: "2025-11-20", status: "Responded", response_date: "2025-12-05" },
            { id: "CMP002001", type: "Complaint", subject: "Incomplete road work", filed_by: "KLF9034204", date: "2026-01-15", status: "Pending", assigned_to: "Public Works" }
        ],
        "P003": [
            { id: "CMP003001", type: "Complaint", subject: "Street light not working", filed_by: "KLF9034301", date: "2026-01-10", status: "Resolved", resolved_date: "2026-01-18" }
        ],
        "P004": [
            { id: "RTI004001", type: "RTI", subject: "Stadium tender documents", filed_by: "KLF9034402", date: "2026-01-08", status: "In Progress" }
        ],
        "P005": [],
        "P006": [
            { id: "CMP006001", type: "Complaint", subject: "PHC medicine shortage", filed_by: "KLF9034601", date: "2026-01-20", status: "In Progress", assigned_to: "Health" }
        ],
        "P007": [],
        "P008": [
            { id: "RTI008001", type: "RTI", subject: "Eco tourism revenue sharing", filed_by: "KLF9034801", date: "2025-12-28", status: "Pending" }
        ],
        "P009": [],
        "P010": [
            { id: "CMP010001", type: "Complaint", subject: "Water quality issues", filed_by: "KLF9035001", date: "2026-01-12", status: "In Progress", assigned_to: "Health" }
        ]
    },

    // Admin accounts (for admin login)
    admins: {
        "ADM001": { panchayat: "P001", username: "admin_athiyal", name: "Admin - Athiyal", role: "Panchayat Admin" },
        "ADM002": { panchayat: "P002", username: "admin_payyavoor", name: "Admin - Payyavoor", role: "Panchayat Admin" },
        "ADM003": { panchayat: "P003", username: "admin_muttathukonam", name: "Admin - Muttathukonam", role: "Panchayat Admin" },
        "ADM004": { panchayat: "P004", username: "admin_poothrikka", name: "Admin - Poothrikka", role: "Panchayat Admin" },
        "ADM005": { panchayat: "P005", username: "admin_kattoor", name: "Admin - Kattoor", role: "Panchayat Admin" },
        "ADM006": { panchayat: "P006", username: "admin_chittur", name: "Admin - Chittur", role: "Panchayat Admin" },
        "ADM007": { panchayat: "P007", username: "admin_vellinezhi", name: "Admin - Vellinezhi", role: "Panchayat Admin" },
        "ADM008": { panchayat: "P008", username: "admin_panamaram", name: "Admin - Panamaram", role: "Panchayat Admin" },
        "ADM009": { panchayat: "P009", username: "admin_thrikkaipetta", name: "Admin - Thrikkaipetta", role: "Panchayat Admin" },
        "ADM010": { panchayat: "P010", username: "admin_muttar", name: "Admin - Muttar", role: "Panchayat Admin" },
        "SUPERADMIN": { panchayat: null, username: "superadmin", name: "Super Administrator", role: "Super Admin" }
    }
};

// ============ HELPER FUNCTIONS ============

/**
 * Validate EPIC ID and get Panchayat ID
 * @param {string} epicId - The EPIC ID to validate
 * @returns {string|null} Panchayat ID or null if invalid
 */
function getPanchayatByEpic(epicId) {
    return EGramDB.epic_map[epicId.toUpperCase()] || null;
}

/**
 * Get citizen details by EPIC ID
 * @param {string} epicId - The EPIC ID
 * @returns {object|null} Citizen data or null
 */
function getCitizenByEpic(epicId) {
    return EGramDB.citizens[epicId.toUpperCase()] || null;
}

/**
 * Get full panchayat details
 * @param {string} panchayatId - The Panchayat ID (e.g., "P001")
 * @returns {object|null} Panchayat data or null
 */
function getPanchayatDetails(panchayatId) {
    return EGramDB.panchayats[panchayatId] || null;
}

/**
 * Get projects for a panchayat
 * @param {string} panchayatId - The Panchayat ID
 * @returns {array} Array of projects
 */
function getProjectsByPanchayat(panchayatId) {
    return EGramDB.projects[panchayatId] || [];
}

/**
 * Get available schemes for a panchayat
 * @param {string} panchayatId - The Panchayat ID
 * @returns {array} Array of available schemes
 */
function getSchemesByPanchayat(panchayatId) {
    return EGramDB.schemes.filter(scheme => scheme.panchayats.includes(panchayatId));
}

/**
 * Get RTI/Complaints for a panchayat
 * @param {string} panchayatId - The Panchayat ID
 * @returns {array} Array of RTI/Complaints
 */
function getRTIComplaintsByPanchayat(panchayatId) {
    return EGramDB.rti_complaints[panchayatId] || [];
}

/**
 * Get RTI/Complaints filed by a citizen
 * @param {string} epicId - The EPIC ID
 * @returns {array} Array of RTI/Complaints
 */
function getRTIComplaintsByCitizen(epicId) {
    const panchayatId = getPanchayatByEpic(epicId);
    if (!panchayatId) return [];
    const all = EGramDB.rti_complaints[panchayatId] || [];
    return all.filter(item => item.filed_by === epicId.toUpperCase());
}

/**
 * Full login validation - returns all relevant data for dashboard
 * @param {string} epicId - The EPIC ID
 * @returns {object|null} Complete user context or null
 */
function loginWithEpic(epicId) {
    const panchayatId = getPanchayatByEpic(epicId);
    if (!panchayatId) return null;

    return {
        citizen: getCitizenByEpic(epicId),
        panchayat: getPanchayatDetails(panchayatId),
        projects: getProjectsByPanchayat(panchayatId),
        schemes: getSchemesByPanchayat(panchayatId),
        rti_complaints: getRTIComplaintsByCitizen(epicId),
        panchayat_id: panchayatId,
        epic_id: epicId.toUpperCase()
    };
}

/**
 * Admin login validation
 * @param {string} adminId - The Admin/Employee ID
 * @returns {object|null} Complete admin context or null
 */
function loginWithAdminId(adminId) {
    const adminReq = adminId.toUpperCase();
    const adminData = EGramDB.admins[adminReq];
    if (!adminData) return null;

    // Superadmin check
    if (adminReq === 'SUPERADMIN') return { role: 'superadmin', ...adminData };

    const panchayatId = adminData.panchayat;
    const panchayat = getPanchayatDetails(panchayatId);

    return {
        is_admin: true,
        admin_id: adminReq,
        name: panchayat.president.name, // Use President Name
        role: "President",
        panchayat_id: panchayatId,
        panchayat: panchayat,
        // These will be fetched dynamically in app.js if we use localStorage, 
        // but for initial login we return static data
        projects: getProjectsByPanchayat(panchayatId),
        schemes: getSchemesByPanchayat(panchayatId),
        complaints: getRTIComplaintsByPanchayat(panchayatId)
    };
}

/**
 * Add a new project to a panchayat
 * @param {string} panchayatId - The Panchayat ID
 * @param {object} projectData - The project data object
 * @returns {object} The created project with ID
 */
function addNewProject(panchayatId, projectData) {
    if (!EGramDB.projects[panchayatId]) {
        EGramDB.projects[panchayatId] = [];
    }
    
    // Ensure required fields
    const project = {
        id: projectData.id || generateProjectId(panchayatId),
        name: projectData.name,
        progress: projectData.progress || 0,
        budget_lakhs: projectData.budget_lakhs,
        start_date: projectData.start_date,
        end_date: projectData.end_date,
        contractor: projectData.contractor,
        description: projectData.description || "",
        status: projectData.status || 'ongoing',
        created_date: projectData.created_date || new Date().toISOString().split('T')[0]
    };
    
    EGramDB.projects[panchayatId].push(project);
    return project;
}

/**
 * Generate a unique project ID for a panchayat
 * @param {string} panchayatId - The Panchayat ID
 * @returns {string} Generated project ID
 */
function generateProjectId(panchayatId) {
    const existingProjects = EGramDB.projects[panchayatId] || [];
    const count = existingProjects.length + 1;
    return `PRJ${panchayatId}${String(count).padStart(3, '0')}`;
}

/**
 * Update an existing project
 * @param {string} panchayatId - The Panchayat ID
 * @param {string} projectId - The Project ID
 * @param {object} updatedData - Updated project data
 * @returns {object|null} Updated project or null if not found
 */
function updateProject(panchayatId, projectId, updatedData) {
    const projects = EGramDB.projects[panchayatId];
    if (!projects) return null;
    
    const projectIndex = projects.findIndex(p => p.id === projectId);
    if (projectIndex === -1) return null;
    
    projects[projectIndex] = { ...projects[projectIndex], ...updatedData };
    return projects[projectIndex];
}

/**
 * Delete a project
 * @param {string} panchayatId - The Panchayat ID
 * @param {string} projectId - The Project ID
 * @returns {boolean} True if deleted, false if not found
 */
function deleteProject(panchayatId, projectId) {
    const projects = EGramDB.projects[panchayatId];
    if (!projects) return false;
    
    const projectIndex = projects.findIndex(p => p.id === projectId);
    if (projectIndex === -1) return false;
    
    projects.splice(projectIndex, 1);
    return true;
}

/**
 * Add a new scheme to the database
 * @param {object} schemeData - The scheme data object
 * @returns {object} The created scheme with ID
 */
function addNewScheme(schemeData) {
    const scheme = {
        id: schemeData.id || generateSchemeId(),
        name: schemeData.name,
        category: schemeData.category,
        ministry: schemeData.ministry,
        amount: schemeData.amount,
        eligibility: schemeData.eligibility,
        documents: schemeData.documents || [],
        panchayats: schemeData.panchayats || [],
        description: schemeData.description || "",
        created_date: schemeData.created_date || new Date().toISOString().split('T')[0]
    };
    
    EGramDB.schemes.push(scheme);
    return scheme;
}

/**
 * Generate a unique scheme ID
 * @returns {string} Generated scheme ID
 */
function generateSchemeId() {
    const count = EGramDB.schemes.length + 1;
    return `SCH${String(count).padStart(3, '0')}`;
}

/**
 * Update an existing scheme
 * @param {string} schemeId - The Scheme ID
 * @param {object} updatedData - Updated scheme data
 * @returns {object|null} Updated scheme or null if not found
 */
function updateScheme(schemeId, updatedData) {
    const schemeIndex = EGramDB.schemes.findIndex(s => s.id === schemeId);
    if (schemeIndex === -1) return null;
    
    EGramDB.schemes[schemeIndex] = { ...EGramDB.schemes[schemeIndex], ...updatedData };
    return EGramDB.schemes[schemeIndex];
}

/**
 * Delete a scheme
 * @param {string} schemeId - The Scheme ID
 * @returns {boolean} True if deleted, false if not found
 */
function deleteScheme(schemeId) {
    const schemeIndex = EGramDB.schemes.findIndex(s => s.id === schemeId);
    if (schemeIndex === -1) return false;
    
    EGramDB.schemes.splice(schemeIndex, 1);
    return true;
}

/**
 * Get all schemes (admin only)
 * @returns {array} Array of all schemes
 */
function getAllSchemes() {
    return EGramDB.schemes;
}

/**
 * Initialize comments storage if not exists
 */
function initializeComments() {
    if (!EGramDB.project_comments) {
        EGramDB.project_comments = {};
    }
}

/**
 * Add a comment to a project
 * @param {string} projectId - The Project ID
 * @param {string} citizenName - Name of the citizen posting comment
 * @param {string} commentText - The comment text
 * @returns {object} The created comment
 */
function addProjectComment(projectId, citizenName, commentText) {
    initializeComments();
    
    if (!EGramDB.project_comments[projectId]) {
        EGramDB.project_comments[projectId] = [];
    }
    
    const comment = {
        id: `CMT${projectId}${Date.now()}`,
        author: citizenName,
        text: commentText,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
    
    EGramDB.project_comments[projectId].push(comment);
    return comment;
}

/**
 * Get comments for a project
 * @param {string} projectId - The Project ID
 * @returns {array} Array of comments
 */
function getProjectComments(projectId) {
    initializeComments();
    return EGramDB.project_comments[projectId] || [];
}

/**
 * Delete a comment
 * @param {string} projectId - The Project ID
 * @param {string} commentId - The Comment ID
 * @returns {boolean} True if deleted, false if not found
 */
function deleteProjectComment(projectId, commentId) {
    initializeComments();
    
    if (!EGramDB.project_comments[projectId]) return false;
    
    const commentIndex = EGramDB.project_comments[projectId].findIndex(c => c.id === commentId);
    if (commentIndex === -1) return false;
    
    EGramDB.project_comments[projectId].splice(commentIndex, 1);
    return true;
}

/**
 * Add a new complaint to the database
 * @param {string} panchayatId - The Panchayat ID
 * @param {string} citizenName - Name of the citizen filing complaint
 * @param {string} epicId - EPIC ID of the citizen
 * @param {object} complaintData - Complaint details
 * @returns {object} The created complaint
 */
function addComplaint(panchayatId, citizenName, epicId, complaintData) {
    if (!EGramDB.rti_complaints[panchayatId]) {
        EGramDB.rti_complaints[panchayatId] = [];
    }
    
    const complaint = {
        id: generateComplaintId(panchayatId),
        type: 'Complaint',
        subject: complaintData.subject,
        category: complaintData.category,
        description: complaintData.description,
        filed_by: epicId.toUpperCase(),
        filed_by_name: citizenName,
        date: new Date().toISOString().split('T')[0],
        status: 'Pending',
        assigned_to: null,
        response: null,
        resolved_date: null
    };
    
    EGramDB.rti_complaints[panchayatId].push(complaint);
    return complaint;
}

/**
 * Generate unique complaint ID
 * @param {string} panchayatId - The Panchayat ID
 * @returns {string} Generated complaint ID
 */
function generateComplaintId(panchayatId) {
    const complaints = EGramDB.rti_complaints[panchayatId] || [];
    const count = complaints.length + 1;
    return `CMP${panchayatId}${String(count).padStart(3, '0')}`;
}

/**
 * Update complaint status (admin only)
 * @param {string} panchayatId - The Panchayat ID
 * @param {string} complaintId - The Complaint ID
 * @param {object} updateData - Data to update
 * @returns {object|null} Updated complaint or null if not found
 */
function updateComplaintStatus(panchayatId, complaintId, updateData) {
    const complaints = EGramDB.rti_complaints[panchayatId];
    if (!complaints) return null;
    
    const complaintIndex = complaints.findIndex(c => c.id === complaintId);
    if (complaintIndex === -1) return null;
    
    complaints[complaintIndex] = { ...complaints[complaintIndex], ...updateData };
    return complaints[complaintIndex];
}

/**
 * Get all complaints for a panchayat (admin)
 * @param {string} panchayatId - The Panchayat ID
 * @returns {array} Array of all complaints
 */
function getAllComplaintsByPanchayat(panchayatId) {
    return EGramDB.rti_complaints[panchayatId] || [];
}

/**
 * Delete a complaint
 * @param {string} panchayatId - The Panchayat ID
 * @param {string} complaintId - The Complaint ID
 * @returns {boolean} True if deleted, false if not found
 */
function deleteComplaint(panchayatId, complaintId) {
    const complaints = EGramDB.rti_complaints[panchayatId];
    if (!complaints) return false;
    
    const complaintIndex = complaints.findIndex(c => c.id === complaintId);
    if (complaintIndex === -1) return false;
    
    complaints.splice(complaintIndex, 1);
    return true;
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EGramDB, getPanchayatByEpic, getCitizenByEpic, getPanchayatDetails, getProjectsByPanchayat, getSchemesByPanchayat, getRTIComplaintsByPanchayat, getRTIComplaintsByCitizen, loginWithEpic, loginWithAdminId, addNewProject, generateProjectId, updateProject, deleteProject, addNewScheme, generateSchemeId, updateScheme, deleteScheme, getAllSchemes, addProjectComment, getProjectComments, deleteProjectComment, addComplaint, generateComplaintId, updateComplaintStatus, getAllComplaintsByPanchayat, deleteComplaint };
}
