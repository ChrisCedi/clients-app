import { MainSection } from "@/app/components/clients/MainSection";
import ClientCard from "./components/clients/ClientCard";
import { ClientResponse, Client } from "@/types/clients";

const getClients = async () => {
  const data = await fetch("https://reqres.in/api/users?per_page=12");
  const response = await data.json();
  const mappedResponse = response.data.map((client: ClientResponse) => ({
    firstName: client.first_name,
    lastName: client.last_name,
    avatar: client.avatar,
    id: client.id,
    email: client.email,
  }));

  return mappedResponse;
};

async function Home() {
  const clientList = await getClients();

  return (
    <main>
      <MainSection />
      <div className="px-10 py-11 sm:px-30 lg:px-60">
        {clientList.map((item: Client) => (
          <ClientCard key={item.id} client={item} />
        ))}
      </div>
    </main>
  );
}

export default Home;
