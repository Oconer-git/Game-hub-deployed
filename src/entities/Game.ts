import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  slug: string;
  metacritic: number;
  description_raw: string;
}
