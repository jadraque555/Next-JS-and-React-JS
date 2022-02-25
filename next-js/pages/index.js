import {server} from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <h1>Welcome to next js</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   let obj = { 
//     hapikey: "444ff1d3-1f2a-405f-842e-0b7724cb6760", 
//     count: "10" 
//   };
//   // obj["param4"] = "yetanother";
//   const url = new URL(
//     `https://api.hubapi.com/contacts/v1/lists/all/contacts/all`
//   );
//   url.search = new URLSearchParams(obj);
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   // Pass data to the page via props
//   return { props: { data } };
// }
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
