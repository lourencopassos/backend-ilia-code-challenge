import { Request, Response } from "express";
import { MovieModel, MovieInputDTO } from "../model/Movie";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  async addMovie(req: Request, res: Response) {
    try {
      const movieId = req.params.movieId;

      const movieBusiness = new MovieBusiness();
      const movieExists = await movieBusiness.addMovie(movieId);

      res.status(201).send("Movie inserted sucessfully in database");
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async getAllMovies(req: Request, res: Response) {
    try {
      const limit = Number(req.query.limit);
      const skip = Number(req.query.skip);

      const movieBusiness = new MovieBusiness();
      const movies = await movieBusiness.getAllMovies(skip, limit);
      res.status(200).send({ movies: movies, total: movies.length });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}
