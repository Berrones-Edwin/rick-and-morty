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
  location: Location;
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

export interface LocationCharacter {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}

export interface OriginCharacter {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}
