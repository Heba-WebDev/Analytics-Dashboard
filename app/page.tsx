import Graphe from "./components/home/Graphes";
import Widgets from "./components/home/Widgets";

export default function Home() {
  return (
    <main className=" container mx-auto px-2 py-6">
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-5 items-center justify-between gap-5">
        <Graphe />
        <Widgets />
      </section>
    </main>
  );
}
