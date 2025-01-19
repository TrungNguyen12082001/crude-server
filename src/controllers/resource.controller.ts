import { Request, Response } from "express";
import { ResourceService } from "../services/resource.service";

export class ResourceController {
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const resource = await ResourceService.create(req.body);
      res.status(201).json(resource); // No return statement
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async list(req: Request, res: Response): Promise<void> {
    try {
      const type = req.query.type as string | undefined;
      if (type && typeof type !== "string") {
        res.status(400).json({ message: "Invalid type parameter" });
      }

      const resources = await ResourceService.list(type);
      res.json(resources);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async get(req: Request, res: Response): Promise<void> {
    try {
      const resource = await ResourceService.get(req.params.id);
      if (!resource) {
        res.status(404).json({ message: "Not found" });
        return;
      }
      res.json(resource);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response): Promise<void> {
    try {
      const updatedResource = await ResourceService.update(
        req.params.id,
        req.body
      );
      res.json(updatedResource);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      await ResourceService.delete(req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
