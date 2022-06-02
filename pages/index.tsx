import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default Home;
