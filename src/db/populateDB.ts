import { Client } from "pg";
import "dotenv/config";

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT
);

INSERT INTO users (name, email)
VALUES
  ('Abhijeet', 'abhijeet@gmail.com'),
  ('BevySquare', 'bevySquare@gmail.com');
`;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function main(): Promise<void> {
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Seeding failed:", err);
  } finally {
    await client.end();
  }
}

main();