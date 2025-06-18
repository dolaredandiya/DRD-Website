export default function Home() {
    const sections = [
            {
                header: "What is Dola Re Dandiya?",
                headerClass: "text-5xl text-harvest-500 pt-8",
                paragraph: `&emsp;Founded in 2017, Dola Re Dandiya is UNC-Chapel Hill's premier intercollegiate dance competition dedicated to showcasing the traditional Indian dance forms of Raas and Garba. Each year, top collegiate teams from across the country travel to compete against one another, making Dola Re Dandiya a leading platform for cultural expression and entertainment.`
            },
            {
                header: "Mission, Vision, and UNC-DRD Values",
                paragraph: `&emsp;The vision of Dola Re Dandiya is to collaborate with other universities in order to increase the awareness of these dance forms throughout the nation and to create a unified presence of Indian folk dances.
        <br /><br />&emsp;This organization has been formed to actively entertain the general public and raise cultural awareness of the traditional North Indian dances, raas and garba; our objective is to hold an intercollegiate competition for other dance teams to compete and showcase their performances.`
            },
            {
                header: "DRD 2024-25 Comp Season",
                headerClass: "text-4xl text-harvest-500 pt-14",
                paragraph: "&emsp;Images from DRD Comp go here"
            }
        ];
    
    type BoardMember = {
        name: string;
        email: string;
        image: string;
    };
    const boardTeam: Record<string, BoardMember[]> = {
        "Directors": [
            { name: "Smruti Ganta", email: "sganta@unc.edu", image: "" },
            { name: "Sanjitha Srinath", email: "sanjita@unc.edu", image: "" },
            { name: "Raj Yogarajan", email: "ryogaraj@unc.edu", image: "" }
        ],
        "Marketing": [
            { name: "Diya Parikh", email: "", image: "" },
            { name: "Khushil Shah", email: "", image: "" },
            { name: "Aadhi Jayaram", email: "", image: "" },
            { name: "Khyati Srivastava", email: "", image: "" }
        ],
        "Finance": [
            { name: "Keya Mahajan", email: "", image: "" },
            { name: "Sithija Ganhewage", email: "", image: "" }
        ],
        "Sponsorship": [
            { name: "Moksha Nemalipuri", email: "", image: "" },
            { name: "Aarav Gupta", email: "", image: "" },
            { name: "Dhiren Akkina", email: "", image: "" }
        ],
        "Social": [
            { name: "Siya Patel", email: "", image: "" },
            { name: "Anish Abburi", email: "", image: "" },
            { name: "Emily Alam", email: "", image: "" }
        ],
        "Logistics": [
            { name: "Arya Kamath", email: "", image: "" },
            { name: "Anish Patel", email: "", image: "" },
            { name: "Tuhina Dash", email: "", image: "" }
        ],
        "Tech": [
            { name: "Pranav Mucharla", email: "", image: "" },
            { name: "Aditya Mehta", email: "", image: "" },
            { name: "Sahasra Kakani", email: "", image: "" }
        ],
        "Graphic Design": [
            { name: "Arushi Rathod", email: "", image: "" },
            { name: "Adharshana Narayanan", email: "", image: "" }
        ]
    };

    return (
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 text-center text-moss-500 pb-10">
            {sections.map((section, idx) => (
            <div key={idx}>
                <h1 className={section.headerClass || "text-4xl text-harvest-500 pt-8"}>{section.header}</h1>
                <p
                    className="text-3xl pt-5 text-left"
                    dangerouslySetInnerHTML={{ __html: section.paragraph }}
                />
            </div>
            ))}
            <h1 className="text-4xl text-harvest-500 pt-14">
            Meet the Board!
            </h1>
            {Object.entries(boardTeam).map(([team, members]) => (
            <div key={team} className="pt-8">
                <h2 className="text-3xl text-superiority-500">{team}</h2>
                <ul className="text-xl pt-2 flex flex-row flex-wrap gap-6 justify-center">
                {(members as BoardMember[]).map(member => (
                    <li key={member.name} className="flex flex-col items-center text-2xl">
                    {member.name} {member.email != "" ? "|" : ""} {member.email}
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
    );
}