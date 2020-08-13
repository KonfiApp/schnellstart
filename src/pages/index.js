import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Unkompliziert durchstarten</>,
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Diese Seite ist dafür gedacht, um die KonfiApp Ihrer Gemeinde schnell
        startklar zu machen.
      </>
    ),
  },
  {
    title: <>Basics + FAQ</>,
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Hier lernen Sie die Basics der KonfiApp und finden Antworten auf
        einfache Fragen.
      </>
    ),
  },
  {
    title: <>Support</>,
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Falls Sie hier nicht weiterkommen,{" "}
        <a href="mailto:konfiapp@philippdormann.de">kontaktieren Sie mich!</a>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Schnellstart"
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p>
            <b>Hinweis: </b>Wenn Sie Ideen haben, welche Informationen noch
            fehlen:
            <br />
            Kontaktieren Sie mich
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/intro")}
            >
              Los geht's!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
