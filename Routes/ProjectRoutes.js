'use strict';
module.exports = function(app) {
  var projects = require('../Controllers/ProjectControllers');

 
  app.route('/project')
    .get(projects.getAllProjects)
    .post(projects.createProject);

  app.route('/project/:ProjectId')
    .get(projects.getProject)   
    .delete(projects.deleteProject);

  app.route('/projectname/:name')
    .get(projects.getProjectByName)

  app.route('/projectupdate')  
    .put(projects.updateProject)

  app.route('/projectupdate/:Projectname')  
    .put(projects.updateProjectByName)
  
};