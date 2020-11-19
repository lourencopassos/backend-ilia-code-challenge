import mongoose, { Schema } from "mongoose";
import { required, string } from "yargs";

export const MovieSchema = new Schema({
  original_title: {
    type: String,
    required: "Original title required",
    min: 3,
  },

  overview: {
    type: String,
    unique: true,
    required: "Overview required",
    min: 3,
  },
  translations: [
    {
      english_name: String,
      data: {
        overview: String,
        title: String,
      },
    },
  ],
});

export const MovieModel = mongoose.model("movies", MovieSchema);

export interface MovieInputDTO {
  original_title: string;
  overview: string;
  translations: string[];
}
