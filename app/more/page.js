import StudentGrid from "@/components/test/StudentGrid"


export default function More (){
    const items = []
    let count = 100;
    for(let i=0; i<=count; i++){
        items.push(i);
    };
    
    return (
        <>
        <h1>Hello World This is More Page</h1>
        <StudentGrid/>
        {items.map((item) => (
            <StudentGrid key={item} />
        ))}
        </>
    )
}