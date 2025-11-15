import User from "../models/User.js";
import Product from "../models/Product.js";

export default {
  Query: {
    users: async () => {
      return await User.find();
    },
  },

  Mutation: {
    createUser: async (
      _: any,
      { data }: { data: { name: string; last_name: string } }
    ) => {
      const response = await User.create(data);

      if (!response) {
        throw new Error("Failed to create user");
      }

      return response;
    },
  },

  User: {
    products: async (parent: any) => {
      try {
        const response = await Product.find({ userId: parent._id.toString() });
        return response;
      } catch (error) {
        console.error("Error fetching products:", error);
        return [];
      }
    },
  },
};
