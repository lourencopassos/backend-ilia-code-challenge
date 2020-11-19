import { MovieBusiness } from "../../src/business/MovieBusiness";
import { ThirdParty } from "../../src/services/ThirdParty";

describe("addMovie()", () => {

  test("It should return an error, when there's no movie Id related to the one provided", async () => {
    try {
      const apiIntegration = new ThirdParty();
      await apiIntegration.getMovieDetail("1");
    } catch (error) {
      expect(error.message).toEqual(
        "Error Code 404 : The resource you requested could not be found."
      );
    }
  });

  test("It should return an error, when the movie is already in the database", async () => {
    try {
      const movieBusiness = new MovieBusiness();
      const movieAlreadyInDatabase = await movieBusiness.getMovieByName(
        "Predator"
      );
    } catch (error) {
      expect(error.message).toEqual("Movie Already in Database");
    }
  });
});
