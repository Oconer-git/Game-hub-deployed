import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIclient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });

export default useGenres;
