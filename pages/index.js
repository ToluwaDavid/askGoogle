import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="ask-google"></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
      </Head>
      <h4 className="text-center mt-5 text-decoration-underline">
        Welcome, this is built with NEXTJS
      </h4>
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>When in douth, ask Google.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          quote by Someone famous -- <cite title="Source Title">me</cite>
        </figcaption>
      </figure>
      <p className="text-center">
        You are here because you need answers to some questions, click the
        button to get your answer
      </p>
      <div className="text-center">
        <img src="/khabyLaneNo.png" width="100" />
        <Link href="https://www.google.com/" target="_blank">
          <span className="btn btn-lg btn-secondary text-danger fw-bold border-white bg-white">
            So, Ask Google by Clicking here
          </span>
        </Link>
      </div>
      <div className="text-center mt-4">
        <Link href="/resource">
          Click here to get more Resources to help answer your questions,{" "}
          <b>(PLENTY!)</b>
        </Link>
      </div>
    </>
  );
}
