import { Movies } from "./model.ts";
import type { Request, Response } from "express";
export const getAllMovie = async (req: Request, res: Response) => {
  try {
    // const movie = await Movies.create({
    //   title: "Galaxy Quest1",
    //   year: 2023,
    //   genres: ["Sci-Fi", "Comedy"],
    //   director: "Jane Smith",
    //   cast: ["Actor X", "Actor Y"],
    //   ratings: {
    //     imdb: 7.8,
    //     metacritic: 75,
    //   },
    //   reviews: [],
    // });
    // let updateMovie = await Movies.updateOne(
    //   { title: "Galaxy Quest1" },
    //   { $push: { genres: "Adventure" } }
    // );
    // res.send(updateMovie);
    // const movie = await Movies.findOne({ title: "Galaxy Quest1" });
    // console.log(movie);
    // res.send(movie);
    // await Movies.deleteOne({ title: "Galaxy Quest1" });
    // res.send("Movie deleted");
    // const year = await Movies.updateMany(
    //   { year: { $gte: 2015 } },
    //   { $inc: { "imdb.ratings": 0.5 } }
    // );
    // res.send(year);
    // console.log(year);

    // const imdb9 = await Movies.findOne({ "imdb.ratings": { $gte: 9 } });
    // res.send(imdb9);
    // console.log(imdb9);

    // const kdarama = await Movies.findOne({
    //   genres: "Drama",
    // });
    // res.send({
    //   name: kdarama?.title,
    //   rating: kdarama?.imdb.rating,
    //   year: kdarama?.year,
    // });
    // console.log(kdarama);

    // const moviesDrama = await Movies.aggregate([
    //   {
    //     $group: {
    //       _id: { genres: "$genres" },
    //       movieCount: { $sum: 1 },
    //     },
    //   },
    // ]);
    // console.log(moviesDrama);
    // res.send(moviesDrama);

    // const movies = await Movies.aggregate([
    //   {
    //     $match: {
    //       year: { $gte: 2000 },
    //       "imdb.rating": { $gte: 7 },
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: null,
    //       count: { $sum: 1 },
    //     },
    //   },
    // ]);
    // console.log(movies);
    // res.send(movies);

    // const movies = await Movies.aggregate([
    //   {
    //     $unwind: "$genres",
    //   },
    //   {
    //     $group: {
    //       _id: "$genres",
    //       count: { $sum: 1 },
    //     },
    //   },
    //   {
    //     $sort: { count: -1 },
    //   },
    //   {
    //     $limit: 3,
    //   },
    // ]);
    // console.log(movies);
    // res.send(movies);

    const movies = await Movies.aggregate([
      {
        $unwind: "$genres",
      },
      {
        $group: {
          _id: "$genres",
          count: { $sum: 1 },
          avgImdb: { $avg: "$imdb.rating" },
        },
      },
    ]);
    console.log(movies);
    res.send(movies);
  } catch (err) {
    res.status(500).send(err);
  }
};
