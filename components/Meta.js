import Head from "next/head"

function Meta({ title, description }) {
  return (
    <Head>
      <link rel="shortcut icon" href="/static/favicon.png" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

Meta.defaultProps = {
  title: "Next.js + Netlify CMS Starter",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit deleniti, dignissimos, expedita libero rerum corporis minus excepturi fugiat aliquid adipisci, cupiditate eum ex voluptatum. Quidem necessitatibus ducimus consequatur adipisci.",
}

export default Meta
