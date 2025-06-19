export default function Home() {
    const sections = [
            {
                header: "What is Dola Re Dandiya?",
                headerClass: "",
                paragraph: `&emsp;Founded in 2017, Dola Re Dandiya is UNC-Chapel Hill's premier intercollegiate dance competition dedicated to showcasing the traditional Indian dance forms of Raas and Garba. Each year, top collegiate teams from across the country travel to compete against one another, making Dola Re Dandiya a leading platform for cultural expression and entertainment.`
            },
            {
                header: "Our Mission",
                paragraph: `&emsp;Dola Re Dandiya aims to collaborate with other universities to raise awareness of Raas and Garba across the nation and create a unified presence of South Asian culture. By creating opportunities for intercollegiate engagement, we seek to foster cultural exchange and celebrate diversity in academic communities. Through performances and partnerships, Dola Re Dandiya strives to inspire pride in cultural roots while also inviting broader audiences to experience the same cultural richness.`
            }
        ];
    

    return (
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 text-center text-moss-500 pb-10">
            {sections.map((section, idx) => (
            <div key={idx}>
                <h1 className={section.headerClass || "text-5xl text-harvest-500 pt-8"}>{section.header}</h1>
                <p
                    className="text-3xl pt-5 text-left"
                    dangerouslySetInnerHTML={{ __html: section.paragraph }}
                />
            </div>
            ))}
        </div>
    );
}