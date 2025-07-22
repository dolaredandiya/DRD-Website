export default function Home() {
    type BoardMember = {
        name: string;
        email: string;
        image: string;
    };
    const boardTeam: Record<string, BoardMember[]> = {
        "Directors": [
            { name: "Smruti Ganta", email: "sganta@unc.edu", image: "" },
            { name: "Sanjita Srinath", email: "sanjita@unc.edu", image: "" },
            { name: "Raj Yogarajan", email: "ryogaraj@unc.edu", image: "" }
        ],
        "Marketing": [
            { name: "Diya Parikh", email: "dparikh@unc.edu", image: "" },
            { name: "Khushil Shah", email: "khushil@unc.edu", image: "" },
            { name: "Aadhi Jayaram", email: "aadhidev@unc.edu", image: "" },
            { name: "Khyati Srivastava", email: "khyatish@unc.edu", image: "" }
        ],
        "Finance": [
            { name: "Keya Mahajan", email: "keyam@unc.edu", image: "" },
            { name: "Sithija Ganhewage", email: "ganhew@unc.edu", image: "" }
        ],
        "Sponsorship": [
            { name: "Moksha Nemalipuri", email: "moksha@unc.edu", image: "" },
            { name: "Aarav Gupta", email: "aaravgup@unc.edu", image: "" },
            { name: "Dhiren Akkina", email: "akkindhi@unc.edu", image: "" }
        ],
        "Social": [
            { name: "Siya Patel", email: "siyap7@unc.edu", image: "" },
            { name: "Anish Abburi", email: "aabburi@unc.edu", image: "" },
            { name: "Emily Alam", email: "emilyal@unc.edu", image: "" }
        ],
        "Logistics": [
            { name: "Arya Kamath", email: "akkamath@unc.edu", image: "" },
            { name: "Anish Patel", email: "anish13@unc.edu", image: "" },
            { name: "Tuhina Dash", email: "tuhinad@unc.edu", image: "" }
        ],
        "Tech": [
            { name: "Pranav Mucharla", email: "pmucharl@unc.edu", image: "" },
            { name: "Aditya Mehta", email: "adityam@unc.edu", image: "" },
            { name: "Sahasra Kakani", email: "sahasrak@unc.edu", image: "" }
        ],
        "Graphic Design": [
            { name: "Arushi Rathod", email: "rarushi@unc.edu", image: "" },
            { name: "Adarshana Narayanan", email: "adarln@unc.edu", image: "" }
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