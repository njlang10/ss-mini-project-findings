import { Request, Response } from "express";
import { RawFinding } from "db/dbConfig";

export async function rawFindings(req: Request, res: Response) {
  const { id } = req.body;
  const filter =
    id != null
      ? {
          where: { grouped_finding_id: id },
        }
      : {};
  try {
    const rawFindings = await RawFinding.findAll(filter);
    if (!rawFindings) {
      return res.status(404).json({ error: "RawFindings not found" });
    }
    res.json(rawFindings);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving RawFindings" });
  }
}
