"use client";
import { Client } from "@/types/clients";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ClientCardProps {
  client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  const router = useRouter();

  return (
    <motion.div
      onClick={() => {
        router.push(`/clientDetail/${client.id}`);
      }}
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.9 }}
      className="grid grid-cols-1 h-fit md:grid-cols-2 border-solid border-2 py-11 my-8 rounded-md hover:cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg md:text-2xl font-bold">
          {client.firstName} {client.lastName}
        </h1>
        <h1 className="text-md md:text-xl pb-6">{client.email}</h1>
      </div>
      <div className="flex justify-center">
        <img src={client.avatar} alt="avatar" className="h-40 w-40" />
      </div>
    </motion.div>
  );
};

export default ClientCard;
