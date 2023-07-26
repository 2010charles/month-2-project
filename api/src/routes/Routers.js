import { register,login,loginRequired,getUsers } from "../controller/userAuthentication.js";
import { getProjects,getProject,createProject,updateProject,deleteProject } from "../controller/projectController.js";
import { getTask,createTask } from "../controller/asssignTaskcontroller.js";
const routes =(app)=>{

    app.route('/project')
    .get(getProjects)
    .post(loginRequired, createProject);

    app.route('/users')
    .get(getUsers)

    app.route('/project/:id')
    .put(updateProject)
    .get(getProject)
    .delete(deleteProject);


    app.route('/task')
    .get(getTask)
    .post(createTask)
    //auth routes
    app.route("/auth/register")
    .post(register);

    app.route("/auth/login")
    .post(login);


}
export default routes;