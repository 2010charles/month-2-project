import sql from 'mssql';
import config from '../db/config.js';
export const getTask = async (req, res) => {
    try {
      let pool = await sql.connect(config.sql);
      const result = await pool.request().query("SELECT t.TaskName, t.Priority, t.Status, t.StartDate, t.CloseDate, u.Fullname  FROM Tasks t JOIN Users u ON t.user_id = u.user_id");
      res.status(200).json(result.recordset);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'An error occurred while retrieving the tasks' });
    } finally {
      sql.close(); // Close the SQL connection
    }
  };
  export const updateTask = async(req, res) =>{
    const { id } = req.params;
  
    const pool = await sql.connect(config.sql);
    try {
          await pool.request()
          .input('id', sql.Int, id)
          .query('UPDATE Tasks SET user_id WHERE Id = @id');
          res.status(200).send({ message: 'Task updated successfully' });   
  
    } catch (error) {
  
        res.status(500).json({ error: error.message });
  
    }
  }

  //create task
 export const createTask = async (req, res) => {
    const { TaskName, Priority, Status,ProjectId, user_id} = req.body;
    console.log(TaskName, Priority, Status, user_id);
    const pool = await sql.connect(config.sql);
    try {
        await pool.request()
        .input('TaskName', sql.VarChar, TaskName)
        .input('Priority', sql.VarChar, Priority)
        .input('Status', sql.VarChar, Status)
        .input('ProjectId',sql.Int ,ProjectId)
        .input('user_id', sql.Int, user_id)
        .query('INSERT INTO Tasks(TaskName, Priority, Status,ProjectId, user_id) VALUES(@TaskName, @priority, @Status,@ProjectId, @user_id)')
      res.status(200).send({ message: 'Task added successfully'})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    finally{
      sql.close();
    }
  };


  export const updateTask1 = async (req, res) => {
    const { TaskId, TaskName, Priority, Status, ProjectId, user_id } = req.body;
    console.log(TaskId, TaskName, Priority, Status, user_id);

    const pool = await sql.connect(config.sql);
    try {
        await pool.request()
            .input('TaskId', sql.Int, TaskId)
            .input('TaskName', sql.VarChar, TaskName)
            .input('Priority', sql.VarChar, Priority)
            .input('Status', sql.VarChar, Status)
            .input('ProjectId', sql.Int, ProjectId)
            .input('user_id', sql.Int, user_id)
            .query('UPDATE Tasks SET TaskName = @TaskName, Priority = @Priority, Status = @Status, ProjectId = @ProjectId, user_id = @user_id WHERE TaskId = @TaskId');

        res.status(200).send({ message: 'Task updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        sql.close();
    }
}
