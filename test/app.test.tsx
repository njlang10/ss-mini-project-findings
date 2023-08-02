import { app } from "../src/App";
import supertest, { SuperTest } from "supertest";
import { loadTables, sequelize } from "../src/db/dbConfig";

describe("Tests the app endpoitns", () => {
  let testApp: SuperTest<any> | null = null;
  beforeAll(async () => {
    await loadTables();

    testApp = supertest(app);
  });

  it("Checks retrieving single data from the rawFindings", async () => {
    const response = await testApp?.get("/rawFindings").send({ id: 1 });
    expect(response.body).toHaveLength(1);
  });

  it("Checks retrieving all data from rawFindings", async () => {
    const response = await testApp?.get("/rawFindings").send();
    expect(response.body).toHaveLength(263);
  });

  it("Checks retrieving all data from groupedFindings", async () => {
    const response = await testApp?.get("/groupedFindings").send();
    expect(response.body).toHaveLength(215);
  });

  afterAll(async () => await sequelize.close());
});
