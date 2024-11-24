import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const blog = await getBlog(slug);
    return { props: { blog } };
  } catch (error) {
    console.error(error);
    return { props: { error: 'Failed to load blog' } };
  }
}

function BlogDetails({ blog, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      
    </div>
  );
}

export default BlogDetails;
