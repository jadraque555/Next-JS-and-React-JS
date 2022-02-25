import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
  return (
    <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: "Web dev news",
    keywords: "web development, programming",
    description: "Get the latest news,"
}


export default Meta