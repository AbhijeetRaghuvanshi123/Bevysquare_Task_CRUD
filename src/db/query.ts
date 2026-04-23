import { pool } from "./pool";

type User = {
  id: number;
  name: string;
  email: string;
};

const getAllUsers = async (): Promise<User[]> => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );

  return result.rows[0] || null;
};

const updateUserById = async (user: User): Promise<void> => {
  await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [user.name, user.email, user.id]
  );
};

const deleteUserById = async (id: number): Promise<void> => {
  await pool.query(
    "DELETE FROM users WHERE id = $1",
    [id]
  );
};

const addNewUser = async (user: {
  name: string;
  email: string;
}): Promise<void> => {
  await pool.query(
    "INSERT INTO users(name, email) VALUES ($1, $2)",
    [user.name, user.email]
  );
};

const userDB = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  addNewUser,
};

export default userDB;