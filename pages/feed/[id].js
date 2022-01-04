export function Feed({ pageNumber, articles }) {
  return (
    <>
    </>
  );
}

export async function getServerSideProps(context) {
  // gets id from url
  const pageNumber = context.query.id;

  // handles invalid url ids
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        pageNumber: 1,
        articles: []
      }
    };
  }

  return {
    props: {
      // todo
    }
  };
}
export default Feed;
