import Product from "../models/Product.js";

export default {
  Query: {
    products: async () => {
      return await Product.find();
    },
  },

  Mutation: {
    createProduct: async (
      _: any,
      {
        data,
      }: {
        data: {
          name: string;
          description: string;
          isNew: Boolean;
          userId: string;
        };
      }
    ) => {
      const response = await Product.create(data);

      if (!response) {
        throw new Error("Failed to create product");
      }

      return response;
    },
  },
};
