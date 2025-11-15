import User from "../models/User.js";

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
};
