import express from "express";
import cors from "cors";

export const app = express();
app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));
