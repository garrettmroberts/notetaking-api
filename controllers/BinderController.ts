import { Request, Response } from "express";
import Binder from "../models/Binder";
import { isBinder } from "../util/typeChecks";
import Folder from "../models/Folder";

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
      const binder = await Binder.findByIdAndDelete(req.params.binderId);
      if (binder !== null) {
        for (const folder of binder.folders) {
          console.log(folder);
          await Folder.findByIdAndDelete(folder);
        }
        res.json({ message: "Binder deleted successfully", response: binder });
      } else {
        res.status(500).json({ message: "Failed to find binder." });
      }
    } catch (error) {
      res.status(500).json({ message: "Request failed.", error: error });
    }
  },

  updateById: async (
    req: Request<{ binderId: string }, Binder>,
    res: Response
  ) => {
    try {
      const binder = await Binder.updateOne(
        { _id: req.params.binderId },
        {
          ...req.body
        }
      );
      if (binder.acknowledged) {
        res.json({ message: "Binder updated succesfully." });
      } else {
        res.json({ message: "Update failed" });
      }
    } catch {
      res.status(500).json({ message: "Request failed." });
    }
  }
};
