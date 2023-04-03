import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section>
          <Navbar></Navbar>
        </section>

        <div className="grid grid-cols-[200px,auto]">
          <aside className="">
            <GenreList />
          </aside>
          <main>
            <GameGrid />
          </main>
        </div>
      </div>
    </>
  );
}
