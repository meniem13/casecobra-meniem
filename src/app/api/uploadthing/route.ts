import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";
import { NextApiRequest, NextApiResponse } from "next";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
