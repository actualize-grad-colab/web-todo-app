import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3300/api/v1/todos", () => {
    return HttpResponse.json([
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        title: "Delete code",
        body: "Very bad code must go.",
        tags: [],
      },
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        title: "Write code",
        body: "All of the code.",
        tags: [],
      },
    ]);
  }),
];
