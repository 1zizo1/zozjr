// @flow strict
import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  try {
    
    const res = await fetch(
      `https://dev.to/api/articles/${personalData.devUsername}/${slug}`
    );


    if (!res.ok) {
      console.error("Failed to fetch blog data:", res.statusText);
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error in getBlog:", error.message);
    throw error; // Re-throw to handle the error in the calling function
  }
}
async function BlogDetails({ params }) {
  console.log("BlogDetails params:", params); // Log params object
  const slug = params.slug;

  try {
    const blog = await getBlog(slug);
    console.log("Blog details:", blog); // Log fetched blog data

    return <div>{/* Render your blog details here */}</div>;
  } catch (error) {
    console.error("Error fetching blog details:", error.message);
    return <div>Error fetching blog details.</div>; // Show a fallback error message
  }
}

export default BlogDetails;
