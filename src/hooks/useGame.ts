import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APIclient<Game>("/games");

const useGame = (slug: string) => {
  const query = useQuery({
    queryKey: ["slug", slug],
    queryFn: () => apiClient.get(slug),
  });

  return query;
};

export default useGame;
