export interface Genre {
  id: number;
  name: string;
}

export interface Cast {
  id: number;
  name: string;
  character?: string;
}

export interface Credits {
  cast: Cast[];
}
