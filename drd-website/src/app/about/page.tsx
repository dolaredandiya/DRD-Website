export default function Home() {
    const sections = [
            {
                header: "What is Dola Re Dandiya?",
                headerClass: "text-5xl text-harvest-500 pt-8",
                paragraph: `Founded in 2017, Dola Re Dandiya is UNC-Chapel Hill’s premier intercollegiate dance competition dedicated to showcasing the traditional Indian dance forms of Raas and Garba. Each year, top collegiate teams from across the country travel to compete against one another, making Dola Re Dandiya a leading platform for cultural expression and entertainment.`
            },
            {
                header: "Mission, Vision, and UNC-DRD Values",
                paragraph: `The vision of Dola Re Dandiya is to collaborate with other universities in order to increase the awareness of these dance forms throughout the nation and to create a unified presence of Indian folk dances.
        <br /><br />This organization has been formed to actively entertain the general public and raise cultural awareness of the traditional North Indian dances, raas and garba; our objective is to hold an intercollegiate competition for other dance teams to compete and showcase their performances.`
            },
            {
                header: "DRD 2024-25 Comp Season",
                paragraph: "Images from DRD Comp go here"
            }
        ];
    
    type BoardMember = {
        name: string;
        email: string;
        image: string;
    };
    const boardTeam: Record<string, BoardMember[]> = {
        "Directors": [
            { name: "Smruti Ganta", email: "smruti@example.com", image: "apple.jpg" },
            { name: "Sanjitha Srinath", email: "sanjitha@example.com", image: "banana.jpg" },
            { name: "Raj Yogarajan", email: "raj@example.com", image: "cherry.jpg" }
        ],
        "Marketing": [
            { name: "Diya Parikh", email: "diya@example.com", image: "date.jpg" },
            { name: "Khushil Shah", email: "khushil@example.com", image: "elderberry.jpg" },
            { name: "Aadhi Jayaram", email: "aadhi@example.com", image: "fig.jpg" },
            { name: "Khyati Srivastava", email: "khyati@example.com", image: "grape.jpg" }
        ],
        "Finance": [
            { name: "Keya Mahajan", email: "keya@example.com", image: "honeydew.jpg" },
            { name: "Sithija Ganhewage", email: "sithija@example.com", image: "kiwi.jpg" }
        ],
        "Sponsorship": [
            { name: "Moksha Nemalipuri", email: "moksha@example.com", image: "lemon.jpg" },
            { name: "Aarav Gupta", email: "aarav@example.com", image: "mango.jpg" },
            { name: "Dhiren Akkina", email: "dhiren@example.com", image: "nectarine.jpg" }
        ],
        "Social": [
            { name: "Siya Patel", email: "siya@example.com", image: "orange.jpg" },
            { name: "Anish Abburi", email: "anish@example.com", image: "papaya.jpg" },
            { name: "Emily Alam", email: "emily@example.com", image: "quince.jpg" }
        ],
        "Logistics": [
            { name: "Arya Kamath", email: "arya@example.com", image: "raspberry.jpg" },
            { name: "Anish Patel", email: "anishp@example.com", image: "strawberry.jpg" },
            { name: "Tuhina Dash", email: "tuhina@example.com", image: "tangerine.jpg" }
        ],
        "Tech": [
            { name: "Pranav Mucharla", email: "pranav@example.com", image: "ugli.jpg" },
            { name: "Aditya Mehta", email: "aditya@example.com", image: "vanilla.jpg" },
            { name: "Sahasra Kakani", email: "sahasra@example.com", image: "watermelon.jpg" }
        ],
        "Graphic Design": [
            { name: "Arushi Rathod", email: "arushi@example.com", image: "xigua.jpg" },
            { name: "Adharshana Narayanan", email: "adharshana@example.com", image: "yam.jpg" }
        ]
    };

    return (
        <div className="px-40 text-center text-moss-500 pb-10">
            {sections.map((section, idx) => (
                <div key={idx}>
                    <h1 className={section.headerClass || "text-4xl text-harvest-500 pt-8"}>{section.header}</h1>
                    <p className="text-3xl pt-5" dangerouslySetInnerHTML={{ __html: section.paragraph }} />
                </div>
            ))}
            <h1 className="text-4xl text-harvest-500 pt-8">
                Meet the Board!
            </h1>
            {Object.entries(boardTeam).map(([team, members]) => (
                <div key={team} className="pt-8">
                    <h2 className="text-3xl text-superiority-500">{team}</h2>
                    <ul className="text-xl pt-2 flex flex-row flex-wrap gap-6 justify-center">
                        {(members as BoardMember[]).map(member => (
                            <li key={member.name} className="flex flex-col items-center">
                                {member.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}