import { groupedFindings } from "routes/GroupedFindingsRoute";
import { Sequelize, DataTypes } from "sequelize";
import { groupedFindings as gfStarter } from "./grouped_findings_starter";
import { rawFindings } from "./raw_findings_starter";

const sequelize = new Sequelize({
  dialect: "sqlite",
});

// Define your models for GroupedFinding and RawFinding
const GroupedFinding = sequelize.define(
  "GroupedFinding",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    grouping_type: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    grouping_key: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    severity: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    grouped_finding_created: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sla: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    security_analyst: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    owner: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    workflow: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    progress: {
      type: DataTypes.REAL,
      allowNull: false,
    },
  },
  { tableName: "grouped_findings" }
);

const RawFinding = sequelize.define(
  "RawFinding",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    source_security_tool_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    source_security_tool_id: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    source_collaboration_tool_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    source_collaboration_tool_id: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    severity: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    finding_created: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ticket_created: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    asset: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    remediation_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    remediation_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    grouped_finding_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "GroupedFindings",
        key: "id",
      },
    },
  },
  { tableName: "raw_findings" }
);

// Define the association between GroupedFinding and RawFinding
GroupedFinding.hasMany(RawFinding, { foreignKey: "grouped_finding_id" });
RawFinding.belongsTo(GroupedFinding, { foreignKey: "id" });

async function loadTables(): Promise<void> {
  await GroupedFinding.bulkCreate(gfStarter);
  await RawFinding.bulkCreate(rawFindings);
}

export { sequelize, GroupedFinding, RawFinding, loadTables };
