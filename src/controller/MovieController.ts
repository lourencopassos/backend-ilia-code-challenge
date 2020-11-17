import { Request, Response } from "express";
import { MovieModel, MovieInputDTO } from "../model/Movie";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  async addMovie(req: Request, res: Response) {
    try {
      const movieId = req.params.movieId;

      const movieBusiness = new MovieBusiness();
      await movieBusiness.addMovie(movieId);

      res.status(201).send("Movie inserted sucessfully in database");
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  //   async deleteProduct(req: Request, res: Response) {
  //     try {
  //       const authenticator = new Authenticator();
  //       const token = req.headers.authorization;

  //       if (!token) {
  //         return res.status(401).send({ error: "Unauthorized check token" });
  //       }

  //       const role = authenticator.getData(token);

  //       if (role !== UserRole.MANAGER) {
  //         return res.status(403).send({
  //           error:
  //             "Unauthorized, only manager has permission to delete products ",
  //         });
  //       }

  //       const id = req.params.id;

  //       const userDatabase = new UserDatabase();
  //       const db = await userDatabase.getConnection();

  //       const isObjectIdValid = validateId(id);

  //       if (!isObjectIdValid) {
  //         return res
  //           .status(400)
  //           .send({ error: "Id is not a valid database Object Id" });
  //       }

  //       const product = await ProductModel.findById(id).exec();
  //       if (!product) {
  //         return res
  //           .status(404)
  //           .send({ error: "Product does not exist, check id provided" });
  //       }

  //       await ProductModel.deleteOne({ _id: id }).exec();

  //       res.status(200).send("Sucess");
  //     } catch (error) {
  //       res.status(400).send({ error: error.message });
  //     }
  //   }

  //   async updateProduct(req: Request, res: Response) {
  //     try {
  //       const authenticator = new Authenticator();
  //       const token = req.headers.authorization;

  //       const userDatabase = new UserDatabase();
  //       await userDatabase.getConnection();

  //       if (!token) {
  //         return res.status(401).send("Unauthorized, check token");
  //       }

  //       const role = authenticator.getData(token);

  //       if (role !== UserRole.MANAGER) {
  //         return res.status(403).send({
  //           error:
  //             "Unauthorized, only manager has permission to update products ",
  //         });
  //       }
  //       const productToUpdateId = req.params.id;

  //       const isObjectIdValid = validateId(productToUpdateId);

  //       if (!isObjectIdValid) {
  //         return res
  //           .status(400)
  //           .send({ error: "Id is not a valid database Object Id" });
  //       }

  //       const product = await ProductModel.findById(productToUpdateId).exec();
  //       if (!product) {
  //         return res
  //           .status(404)
  //           .send({ error: "Product does not exist, check id provided" });
  //       }

  //       if (req.body.category) {
  //         const productBusiness = new ProductBusiness();
  //         await productBusiness.updateProductCategory(
  //           req.body.category,
  //           productToUpdateId
  //         );
  //       }

  //       if (req.body.price) {
  //         const productBusiness = new ProductBusiness();
  //         await productBusiness.updateProductPrice(
  //           req.body.price,
  //           productToUpdateId
  //         );
  //       }

  //       if (req.body.name) {
  //         const productBusiness = new ProductBusiness();
  //         await productBusiness.updateProductName(
  //           req.body.name,
  //           productToUpdateId
  //         );
  //       }

  //       if (req.body.quantity) {
  //         const productBusiness = new ProductBusiness();
  //         await productBusiness.updateProductQuantity(
  //           req.body.quantity,
  //           productToUpdateId
  //         );
  //       }

  //       res.status(200).send("Product update sucess");
  //     } catch (error) {
  //       res.status(400).send({ error: error.message });
  //     }
  //   }

  //   async getAllProducts(req: Request, res: Response) {
  //     try {
  //       const authenticator = new Authenticator();
  //       const token = req.headers.authorization;
  //       const limit = Number(req.query.limit);
  //       const skip = Number(req.query.skip);

  //       if (!token) {
  //         return res.status(401).send("Unauthorized, check token");
  //       }

  //       const role = authenticator.getData(token);

  //       if (role !== UserRole.MANAGER) {
  //         return res
  //           .status(403)
  //           .send(
  //             "Unauthorized, only manager has permission to delete products "
  //           );
  //       }
  //       const productBusiness = new ProductBusiness();
  //       const products = await productBusiness.getAllProducts(skip, limit);
  //       res.status(200).send({ products: products, total: products.length });
  //     } catch (error) {
  //       res.status(400).send({ error: error.message });
  //     }
  //   }

  //   async getAvailableProducts(req: Request, res: Response) {
  //     try {
  //       const authenticator = new Authenticator();
  //       const token = req.headers.authorization;
  //       const limit = Number(req.query.limit);
  //       const skip = Number(req.query.skip);

  //       if (!token) {
  //         return res.status(401).send("Unauthorized, check token");
  //       }

  //       const role = authenticator.getData(token);

  //       if (role !== UserRole.MANAGER) {
  //         return res
  //           .status(403)
  //           .send(
  //             "Unauthorized, only manager has permission to delete products "
  //           );
  //       }
  //       const productBusiness = new ProductBusiness();
  //       const products = await productBusiness.getAllAvailableProducts(
  //         skip,
  //         limit
  //       );
  //       res.status(200).send({ products: products, total: products.length });
  //     } catch (error) {
  //       res.status(400).send({ error: error.message });
  //     }
  //   }

  //   async getProductByName(req: Request, res: Response) {
  //     try {
  //       const authenticator = new Authenticator();
  //       const token = req.headers.authorization;
  //       const limit = Number(req.query.limit);
  //       const skip = Number(req.query.skip);

  //       const productName = req.query.name as string;

  //       if (!token) {
  //         return res.status(401).send("Unauthorized, check token");
  //       }

  //       const role = authenticator.getData(token);

  //       if (role !== UserRole.MANAGER) {
  //         return res
  //           .status(403)
  //           .send(
  //             "Unauthorized, only manager has permission to delete products "
  //           );
  //       }

  //       const productBusiness = new ProductBusiness();
  //       const product = await productBusiness.getProductByName(
  //         productName,
  //         limit,
  //         skip
  //       );
  //       res.status(200).send(product);
  //     } catch (error) {
  //       res.status(400).send({ error: error.message });
  //     }
  //   }

  //   async getProductById(req: Request, res: Response) {
  //     try {
  //       const authenticator = new Authenticator();
  //       const token = req.headers.authorization;

  //       const userDatabase = new UserDatabase();
  //       await userDatabase.getConnection();

  //       const productId = req.params.id;

  //       if (!token) {
  //         return res.status(401).send("Unauthorized, check token");
  //       }

  //       const role = authenticator.getData(token);

  //       if (role !== UserRole.CLIENT) {
  //         return res
  //           .status(403)
  //           .send("Unauthorized, log as client to check product details ");
  //       }

  //       const isObjectIdValid = validateId(productId);

  //       if (!isObjectIdValid) {
  //         return res.status(400).send("Id is not a valid database Object Id");
  //       }

  //       const productExists = await ProductModel.findById(productId).exec();
  //       if (!productExists) {
  //         return res.status(404).send("Product doesn't exist, check id provided");
  //       }

  //       const productBusiness = new ProductBusiness();
  //       const product = await productBusiness.getProductById(productId);
  //       res.status(200).send(product);
  //     } catch (error) {}
  //   }
}
