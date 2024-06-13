import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/todos", () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        name: "Delete code",
        body: "Very bad code must go.",
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        title: "Write code",
        body: "All of the code.",
      },
    ]);
  }),
];
