export interface ItemInterface {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: "story";
  url: string;
}

export interface IUser {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
}
