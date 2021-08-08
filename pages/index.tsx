import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/Card';
import { CardType } from '../Types/CardType';
import { GetStaticProps } from 'next';
export const getStaticProps:GetStaticProps = async () => {
    const sportResponse = await fetch('https://anderspink.com/code-test/data/sports.json').then(res => {
        if(res.ok) return res.json();
        return [];
    });
    const marketingResponse = await fetch('https://anderspink.com/code-test/data/marketing.json').then(res => {
        if (res.ok) return res.json();
        return [];
    });
    const environmentResponse = await fetch('https://anderspink.com/code-test/data/marketing.json').then(res => {
        if (res.ok) return res.json();
        return [];
    });

    const sportArticles = sportResponse.map((article:CardType) => {
        article.tag = "Sports";
        return article;
    });
    const marketingArticles = marketingResponse.map((article:CardType)=> {
        article.tag = "Marketing";
        return article;
    });
    const environmentArticles = environmentResponse.map((article: CardType) => {
        article.tag = "Environment";
        return article;
    });
    const articles = [...sportArticles, ...marketingArticles, ...environmentArticles];
    return {
        props: {
            // @ts-ignore
            // articles.sort((a: object, b: object) => new Date(b.date) - new Date(a.date))
            articles: articles
        }
    }
}
export default function Home({ articles }:any) {
  return (
    <>
      <Head>
        <title>Article Feed app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id={styles.container}>
        <h1 id={styles.title}>Articles Archive</h1>
        { articles.map((article:CardType, index:number) => (
            <Card
                key={index}
                image={article.image}
                title={article.title}
                domain={article.domain}
                date={article.date}
                content={article.content}
                tag={article.tag}
            />
        ))}
      </main>
    </>
  )
}
