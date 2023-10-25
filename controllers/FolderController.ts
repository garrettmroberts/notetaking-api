import { Request, Response } from "express";
import Binder from "../models/Binder";
import Folder from "../models/Folder";
import { isFolder } from "../util/typeChecks";

export default {
  findById: async (req: Request, res: Response) => {
    try {
      const binder = await Binder.findById(req.params.binderId).populate(
        "folders"
      );
      res.json(binder?.folders);
    } catch {
      res
        .status(500)
        .json({ message: "Failed to find folders. Check your binderId" });
    }
  },

  findAll: async (req: Request, res: Response) => {
    try {
      const folders = await Folder.find();
      res.json(folders);
    } catch {
      res.status(500).json({ message: "Folders not found" });
    }
  },

  deleteById: async (req: Request, res: Response) => {
    try {
      const folderResponse = await Folder.findByIdAndDelete(
        req.params.folderId
      );
      res.json({
        message: "Folder deleted successfully",
        response: folderResponse
      });
    } catch {
      res.status(500).json({ message: "Folders not deleted" });
    }
  },

  createFolder: async (req: Request, res: Response) => {
    try {
      const binder = await Binder.findById(req.params.binderId);
      if (isFolder(req.body) && binder) {
        const folderRes = await Folder.create(req.body);
        await Binder.findByIdAndUpdate(req.params.binderId, {
          folders: [folderRes._id, ...(binder?.folders || "")]
        });
        res.json({
          message: "Folder created successfully",
          response: folderRes
        });
      } else {
        res.status(500).json({
          message: "Folder creation failed. Check your request body."
        });
      }
    } catch {
      res.status(500).json({ message: "Folder creation failed." });
    }
  }

  // updateOne: async ( req: Request, res: Response) => {

  // }
};
