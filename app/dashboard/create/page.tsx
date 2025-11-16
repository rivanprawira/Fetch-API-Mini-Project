import { Poppins } from "next/font/google";
import CommentForm from "./components/CommentForm";

const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});

const headerTextClass = `
  mt-2
  text-[clamp(40px,8vw,60px)]
  text-center
`;

export default function CreatePage() {
  return (
    <main className="dashboard-page">
      <section className="w-full max-w-7xl mx-auto flex flex-col gap-10">
        <div className={`${headerTextClass} ${poppins.className}`}>
          Create a New Comment
        </div>
        <div className="positi">
          <CommentForm />
        </div>
      </section>
    </main>
  );
}
