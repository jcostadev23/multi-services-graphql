import User from "../models/User.js";

export default {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
};
