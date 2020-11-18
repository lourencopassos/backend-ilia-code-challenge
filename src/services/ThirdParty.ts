import axios from "axios";

export class ThirdParty {
  public async getMovieDetail(movieId: string) {
    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = process.env.API_KEY;

    try {
      const response = await axios.get(
        `${baseUrl}/authentication/token/new?api_key=${apiKey}`
      );

      const token = response.data.request_token;

      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const movieDetail = await axios.get(
        `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`,
        axiosConfig
      );

      console.log(movieDetail);

      return movieDetail.data;
    } catch (error) {
      console.log(error);
    }
  }
  public async getMovieTranslations(movieId: string) {
    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = process.env.API_KEY;

    try {
      const response = await axios.get(
        `${baseUrl}/authentication/token/new?api_key=${apiKey}`
      );

      const token = response.data.request_token;

      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const movieDetail = await axios.get(
        `${baseUrl}/movie/${movieId}/translations?api_key=${apiKey}`,
        axiosConfig
      );
      
      return movieDetail.data.translations;
    } catch (error) {
      console.log(error);
    }
  }
}
