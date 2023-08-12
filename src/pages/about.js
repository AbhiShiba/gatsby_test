import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  const name = "abhi";
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>
          Hi there! I'm {name}, The proud creator of this site, which I built
          with Gatsby.
        </p>
      </Layout>
    </main>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;
