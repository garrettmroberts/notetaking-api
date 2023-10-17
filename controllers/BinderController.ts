import { Request, Response } from "express";
import Binder from "../models/Binder";

type BinderProps = {
  title: string;
  meta: {
    color: string;
    tags: [{ type: string }];
  };
};

export default {
  findAll: async (req: Request, res: Response) => {
    const queryResponse = await Binder.find({});
    return res.json(queryResponse);
  },
  createBinder: async (req: Request<BinderProps>, res: Response) => {
    if (req.body.title && req.body.meta.color && req.body.meta.tags) {
      try {
        const queryResponse = await Binder.create({ ...req.body });
        res.json(queryResponse);
      } catch {
        res.json({ message: "Binder creation failure." }).status(500);
      }
      res.json({ message: "Binder creation failure." }).status(500);
    }
  }
};
