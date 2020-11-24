export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
    created: string;
    status: string;
    type: string;
    url: string;
    origin: Origin;
    loation: Location;
    episode: [];
}

interface Origin {
    name: string;
    url: string;
}
interface Location {
    name: string;
    url: string;
}