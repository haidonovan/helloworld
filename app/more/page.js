import StudentGrid from "@/components/test/StudentGrid"
import ScrollReveal from "@/components/userDefine/scrollReveal/ScrollReveal";
import ScrollRevealChild from "@/components/userDefine/scrollReveal/ScrollRevealChild";
import Srclr from "@/components/userDefine/scrollReveal/Srclr";


export default function More() {
    const items = []
    let count = 10;
    for(let i=0; i<=count; i++){
        items.push(i);
    };

    return (
        <>
            <ScrollRevealChild>
                <h1>
                    Hello World This is More Page
                </h1>
            </ScrollRevealChild>

            <StudentGrid />
            {items.map((item) => (
                <StudentGrid key={item} />
            ))}


            <hr style={{ margin: "20px" }} />

            <ScrollReveal />

            <Srclr>Hello this is the target</Srclr>
        </>
    )
}