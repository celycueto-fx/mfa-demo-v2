import { IRating } from "./i-raiting";

export interface IProducts {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      IRating;
}

