import { Request, Response } from "express";
const db = require('../models');

export default {
  findAll: (req: Request, res: Response) => {
    return res.json({message: 'Hello binder'});
  }
}