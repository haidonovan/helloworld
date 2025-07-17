async function Page({ params }) {
// asynchronous access of `params.id`.
  const { id } = await params
  return <p>ID: {id}</p>
};

export default Page;

// This return parent meta data to the dynamic page here
export async function generateMetadata({ params }, parent) {
    const parentMetadata = await parent;
    // console.log("parentMetadata.title =", parentMetadata.title);

    return {
        title: "This is not a NEXTJS FRAMEWORK",
        description: `This page is not really that special | ${parentMetadata.title?.absolute ?? "Untitled"}`,
    };
};

// export const metadata = {
//     title: "testing about testimonial meta data",
//     description: "This is a meta data that I'm trying to put it in here",
//     keywords: ["next.js", "react", "seo", "about", "testimonial"],
//     author: "Donovan Desmond",
// };