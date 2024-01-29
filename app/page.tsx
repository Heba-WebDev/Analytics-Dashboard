import Graphe from "./components/home/Graphes";
import LastOrders from "./components/home/LastOrders";
import TopPlatforms from "./components/home/TopPlatforms";
import Widgets from "./components/home/Widgets";

export default function Home() {
  return (
    <main className=" px-2 py-6 grid gap-5">
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-5 items-center justify-between gap-5">
        <Graphe />
        <Widgets />
      </section>
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-5 items-center justify-between gap-5">
        <LastOrders />
        <TopPlatforms />
      </section>
    </main>
  );
}
