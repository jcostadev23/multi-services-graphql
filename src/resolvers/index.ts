import user from "./users.js";
import product from "./products.js";

export default {
  Query: {
    ...user.Query,
    ...product.Query,
  },

  Mutation: {
    ...user.Mutation,
    ...product.Mutation,
  },

  User: {
    ...user.User,
  },
};
