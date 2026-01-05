import { model, Schema } from "mongoose";

interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}
interface IImdb {
  rating: number;
  votes: number;
  id: number;
}

interface IViewer {
  rating: number;
  numReviews: number;
  meter: number;
}
interface ICritic {
  rating: number;
  numReviews: number;
  meter: number;
}
interface ITomatoes {
  viewer: IViewer;
  dvd: Date;
  critic: ICritic;
  lastUpdated: Date;
  rotten: number;
  production: string;
  fresh: number;
}
interface IEmbeddedMovies {
  plot: string;
  genres: string[];
  runtime: number;
  rated: string;
  cast: string[];
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: IAwards;
  lastUpdated: string;
  year: number;
  imdb: IImdb;
  countries: string[];
  type: "movie";
  tomatoes: ITomatoes;
}

const IAwardsSchema = new Schema<IAwards>({
  wins: Number,
  nominations: Number,
  text: String,
});
const IImdbSchema = new Schema<IImdb>({
  rating: Number,
  votes: Number,
  id: Number,
});
const IViewerSchema = new Schema<IViewer>({
  rating: Number,
  numReviews: Number,
  meter: Number,
});
const ICriticSchema = new Schema<ICritic>({
  rating: Number,
  numReviews: Number,
  meter: Number,
});
const ITomatoesSchema = new Schema<ITomatoes>({
  viewer: IViewerSchema,
  dvd: Date,
  critic: ICriticSchema,
  lastUpdated: Date,
  rotten: Number,
  production: String,
  fresh: Number,
});
const EmbeddedMoviesSchema = new Schema<IEmbeddedMovies>({
  plot: String,
  genres: [String],
  runtime: Number,
  rated: String,
  cast: [String],
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  writers: [String],
  awards: IAwardsSchema,
  lastUpdated: String,
  year: Number,
  imdb: IImdbSchema,
  countries: [String],
  type: String,
  tomatoes: ITomatoesSchema,
});
export const EmbeddedMovies = model<IEmbeddedMovies>(
  "embeddedMovies",
  EmbeddedMoviesSchema
);
