import { MovieDatabase } from "../data/MovieDatabase";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";
import { MovieInputDTO } from "../model/Movie";
import { ThirdParty } from "../services/ThirdParty";

export class MovieBusiness {
  async addMovie(movieId: string) {
    const movieDatabase = new MovieDatabase();

    const apiIntegration = new ThirdParty();
    const movie = await apiIntegration.getMovieDetail(movieId);

    const movieAlreadyExistsInDatabase = await this.getMovieByName(
      movie.original_title
    );

    if (movieAlreadyExistsInDatabase) {
      throw new InvalidParameterError("Movie Already in Database");
    }

    const translations = await apiIntegration.getMovieTranslations(movieId);

    if (!movie.original_title || !movie.overview) {
      throw new InvalidParameterError(
        "Original title, overview and translations are mandatory fields"
      );
    }

    if (!translations) {
      throw new InvalidParameterError(
        "Original title, overview and translations are mandatory fields"
      );
    }

    await movieDatabase.addMovie(
      movie.original_title,
      movie.overview,
      translations
    );
  }

  async getAllMovies(skip: number, limit: number) {
    const movieDatabase = new MovieDatabase();
    const movies = await movieDatabase.getAllMovies(skip, limit);
    return movies;
  }

  async getMovieById(id: string) {
    if (!id) {
      throw new InvalidParameterError("Check movie id");
    }
    const movieDatabase = new MovieDatabase();
    const movie = await movieDatabase.getMovieById(id);
    return movie;
  }

  async getMovieByName(movieName: string) {
    if (!movieName) {
      throw new InvalidParameterError("Movie name missing");
    }
    const movieDatabase = new MovieDatabase();
    const movie = await movieDatabase.getMovieByName(movieName);
    return movie;
  }
}
