// react components
import { Navbar } from "../../components/navbar";
import { NextBar } from "../../components/nextbar";

export function Feed({ pageNumber, articles }) {
  return (
    <>
    <Navbar/>
      {articles.map( article =>
        <div key={article.url}>
          <h1>
            {article.title}
          </h1>
          <p>
            {article.description}
          </p>
        </div>
      )}
      <NextBar pageNumber={pageNumber}/>
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

  // fetches news data from News API
  const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`;
  const apiResponse = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEWS_KEY}`
    }
  });

  // parses data into json
  const data = await apiResponse.json();

  return {
    props: {
      // converts number string into num to allow for better handling in component
      pageNumber: Number.parseInt(pageNumber),
      articles: data.articles
    }
  };
}
export default Feed;
