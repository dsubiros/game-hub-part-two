import { Genre } from "./Genre";
import { Platform } from "../hooks/Platform";
import { Publisher } from "./Publisher";


export interface Game {
  id: number;
  name: string;
  slug: string;
  description: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  genres: Genre[];
  metacritic: number;
  rating_top: number;
  publishers: Publisher[];
}
