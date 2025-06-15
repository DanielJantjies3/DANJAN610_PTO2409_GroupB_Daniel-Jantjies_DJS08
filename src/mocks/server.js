import { createServer, Model } from "miragejs";

export default function startMockServer() {
  createServer({
    models: {
      vans: Model,
    },

    seeds(server) {
      // Your seed data here
    },

    routes() {
      this.namespace = "api";
      this.get("/vans", (schema) => schema.vans.all());
      this.get("/vans/:id", (schema, request) => {
        return schema.vans.find(request.params.id);
      });
    }
  });
}