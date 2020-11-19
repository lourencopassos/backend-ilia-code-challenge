import { MovieModel } from "../model/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  public addMovie = async (
    original_title: string,
    overview: string,
    translations: string[]
  ) => {
    try {
      await this.getConnection();
      new MovieModel({ original_title, overview, translations }).save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getAllMovies = async (skip: number, limit: number) => {
    try {
      await this.getConnection();
      const movies = await MovieModel.find({}).skip(skip).limit(limit).exec();
      return movies;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getMovieById = async (id: string) => {
    try {
      await this.getConnection();
      const movie = await MovieModel.findById(id);
      return movie;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getMovieByName = async (movieName: string) => {
    try {
      await this.getConnection();
      const movie = await MovieModel.findOne({
        original_title: movieName,
      }).exec();
      return movie;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
