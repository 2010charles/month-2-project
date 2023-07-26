import sql from 'mssql';
import config from '../db/config.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};

export const getUsers = async (req, res) => {

  try {
      let pool = await sql.connect(config.sql);

        //establish a connection to the database
      const result = await pool.request()        // make a request to the database
          .query("SELECT * FROM Users");

      !result.recordset[0] ? res.status(404).json({ message: 'Record not found' }) // check if there is a record in the table
          : res.status(200).json(result.recordset); // return the result

  } catch (error) {

      res.status(201).json({ error: error.message });
  } finally {

       //sql.close(); // Close the SQL connection
  }
};

//function to handle user registration
export const register = async (req, res) => {
    const { user_id, Fullname, username, email, password } = req.body;
    const hashedpassword = bcrypt.hashSync(password, 10);
    try {
      let pool = await sql.connect(config.sql);
      const result = await pool
        .request()
        .input('Fullname', sql.VarChar, Fullname)
        .input('username', sql.VarChar, username)
        .input('email', sql.VarChar, email)
        .query('SELECT * FROM Users WHERE email = @email ');
      const user = result.recordset[0]; // Corrected variable name
      if (user) {
        res.status(409).json({ error: 'User already exists' });
      } else {
        await pool
          .request()
          .input('Fullname', sql.VarChar, Fullname)
          .input('username', sql.VarChar, username)
          .input('email', sql.VarChar, email)
          .input('password', sql.VarChar, hashedpassword)
          .query('INSERT INTO Users(Fullname, username, email, password) VALUES(@Fullname, @username, @email, @password)');
        res.status(200).send({ message: 'You have been registered successfully' });
      }
    } catch (error) {
      res.status(500).json(error.message);
    } finally {
      sql.close();
    }
  };
  
  
//login authentication
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .query('SELECT * FROM Users WHERE email = @email');
        const user = result.recordset[0];
        if (!user) {
            res.status(401).json({ error: 'Authentication failed. Wrong credentials.' });

        } else {
            if (!bcrypt.compareSync(password, user.password)) {//password-table field
                res.status(402).json({ error: 'Authentication failed. Wrong credentials.' });
            } else {
                const token = `JWT ${jwt.sign({ username:user.username, email:user.email }, config.jwt_secret)}`;
                res.status(200).json({ email:user.email, username:user.username, id:user.user_id, token: token });
            }
        }

    } catch (error) {
        console.log(error)

    } finally {
        sql.close();
    }
}
