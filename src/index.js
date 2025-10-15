export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * Use this to extend or modify Strapi before it starts.
   */
  async register({ strapi }) {
    // Example: console.log("Registering custom logic...");
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * Use this to set up your data model or run startup jobs.
   */
  async bootstrap({ strapi }) {
    // Example: console.log("Strapi is bootstrapped!");
  },
};
