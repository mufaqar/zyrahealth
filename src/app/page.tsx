import Sidebar from "@/components/Sidebar";
import SideNav from "@/components/side-nav";

export default function Home() {
  return (
    <main className="w-full h-full mx-auto p-5 flex md:flex-row flex-col justify-between gap-5 relative">
      <SideNav Cstm_class="md:max-w-[241px] h-[620px] md:sticky top-24" />
      <section className="min-h-[1280px] bg-white w-full rounded-[15px] flex items-center justify-center">
        Home
      </section>
      <Sidebar Cstm_class="md:max-w-[301px]" />
    </main>
  );
}
