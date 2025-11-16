import { getComments } from "./fetchData";
import ClientInteractive from "./components/ClientInteractive";

export default async function DashboardPage() {
  const comments = await getComments(); // SSR

  return (
    <main className="dashboard-page">
      <ClientInteractive initialComments={comments} />
    </main>
  );
}
