import { Request, Response } from "express";
import { GroupedFinding } from "db/dbConfig";

export async function groupedFindings(req: Request, res: Response) {
  const { id } = req.body;
  try {
    const groupedFindings = await GroupedFinding.findAll();
    if (!groupedFindings) {
      return res.status(404).json({ error: "GroupedFindings not found" });
    }
    res.json(groupedFindings);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving GroupedFindings" });
  }
}
