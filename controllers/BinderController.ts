import { Request, Response } from "express";
import Binder from "../models/Binder";
import { isBinder } from "../util/typeChecks";

export default {
  findAll: async (req: Request, res: Response) => {
    const queryResponse = await Binder.find({});
    return res.json(queryResponse);
  },

  createBinder: async (req: Request<Binder>, res: Response) => {
    if (isBinder(req.body)) {
      try {
        const queryResponse = await Binder.create({ ...req.body });
        res.json(queryResponse);
      } catch {
        res.status(500).json({ message: "Binder creation failure." });
      }
    } else {
      res.status(500).json({ message: "Invalid request body." });
    }
  },

  findById: async (req: Request, res: Response) => {
    try {
      const binder = await Binder.findById(req.params.binderId);
      res.json(binder);
    } catch {
      res.status(500).json({ message: "Request failed. Check your id param." });
    }
  },

  deleteById: async (req: Request, res: Response) => {
    try {
      const binder = await Binder.deleteOne({ _id: req.params.binderId });
      res.json(binder);
    } catch {
      res.status(500).json({ message: "Request failed. Check your id param." });
    }
  }
};
