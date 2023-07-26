import sql from 'mssql';
import config from '../db/config.js';

// // Get all project
export const getProjects = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query("select * from Project");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(201).json({ error: 'an error occurred while retrieving the project' });
    } finally {
        sql.close(); // Close the SQL connection
    }
};

// // Get a single Project
export const getProject = async (req, res) => {
    try {
        const { id } = req.params;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("projectId", sql.Int, id)
            .query("select * from Project where id = @projectId");
        res.status(200).json(result.recordset[0]);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving project' });
    } finally {
        sql.close();
    }
};

// // Create a new project
export const createProject = async (req, res) => {
    console.log(req.body);
    try {
        const { description } = req.body;
        let pool = await sql.connect(config.sql);
        let insertProject = await pool.request()
            .input("description", sql.VarChar, description) // Insert the description into the SQL query
            .query('insert into Project(description) values(@description)'); // Execute the SQL query
        res.status(201).json({ message: 'Project created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating the Project' });
    } finally {
        sql.close();   // Close the SQL connection
    }
};
// // Update Project
export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("projectId", sql.Int, id)
            .input("projectDescription", sql.VarChar, description)
            .query("UPDATE Project SET description = @projectDescription WHERE id = @projectId");
        res.status(200).json({ message: 'project updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the project' });
    } finally {
        sql.close();
    }
};
// // Delete Project
export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM Project WHERE id = ${id}`;
        res.status(200).json({ message: 'project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the project' });
    } finally {
        sql.close();
    }
};
