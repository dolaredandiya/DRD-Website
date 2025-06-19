export default function Home() {
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
            {Object.entries(boardTeam).map(([team, members]) => (
            <div key={team} className="pt-8">
                <h2 className="text-3xl text-superiority-500">{team}</h2>
                <ul className="text-xl pt-2 flex flex-row flex-wrap gap-6 justify-center">
                {(members as BoardMember[]).map(member => (
                    <li key={member.name} className="flex flex-col items-center text-2xl">
                        {member.name}
                        {member.email && (
                            <span className="text-base text-moss-400 break-all mt-1">{member.email}</span>
                        )}
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
    );
    
}