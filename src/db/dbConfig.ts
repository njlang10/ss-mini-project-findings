import { Sequelize, DataTypes } from "sequelize";
import { groupedFindings as gfStarter } from "./grouped_findings_starter";
import { rawFindings } from "./raw_findings_starter";

const sequelize = new Sequelize({
  dialect: "sqlite",
  native: true,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
  },
  pool: {
    max: 5, // Maximum number of connections in the pool
    min: 0, // Minimum number of connections in the pool
    acquire: 30000, // Maximum time (in milliseconds) that a connection can be idle before being released
    idle: 10000, // Maximum time (in milliseconds) that a connection can be idle before being released
  },
});

const GroupedFinding = sequelize.define(
  "GroupedFinding",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
        // important to not make this a raw string or else it won't find the table (aka will look for GroupedFinding instead of grouped_findings)
        model: GroupedFinding,
        key: "id",
      },
    },
  },
  { tableName: "raw_findings" }
);

GroupedFinding.hasMany(RawFinding);
RawFinding.belongsTo(GroupedFinding);

async function loadTables(): Promise<void> {
  await sequelize.sync({ force: true });
  await GroupedFinding.bulkCreate(gfStarter);
  await RawFinding.bulkCreate(rawFindings);
}

export { sequelize, GroupedFinding, RawFinding, loadTables };
