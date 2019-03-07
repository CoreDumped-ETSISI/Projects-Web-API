'use strict';
var mongoose = require('mongoose'),
  Project = mongoose.model('Projects');

  exports.getAllProjects = function(req, res) {
    console.log("getAllProjects")
    Project.find({}, function(err, project) {
      if (err)
        res.send(err);
      res.json(project);
    });
  };
  
  
  
  
  exports.createProject = function(req, res) {
    const newProject = new Project(req.body);
  
    Project.findOne({name:newProject.name}, (err, project) => {
      if (err) return res.status(500).send({message: "Error processing request"})
      if (project) return res.status(403).send({message: "Project already exists"})
  
      newProject.save(function(err, project) {
        if (err)
          return res.send(err);
        return res.json(project);
      })
    })
  }
  
  exports.getProject = function(req, res) {
    Project.findById(req.params.projectId, function(err, project) {
      if (err)
        res.send(err);
      res.json(project);
    });
  };
  
  exports.getProjectByName = function(req, res) {
    var ProjectName = req.params.name;
  
    Project.findOne({name:ProjectName}, (err, project) => {
      if (project)
        res.json(project);
      if (err)
        res.send(err);   
    })  
  };
  
  exports.updateProject = function(req, res) {
    console.log(JSON.stringify(req.body))
    const logProject = new Project(req.body);
    
    Project.findOneAndUpdate({name:logProject.name}, req.body, {new: true}, function(err, project) {
      console.log(project)
      if (err)
        res.send(err);   
      res.json(project);
    });
  };
  
  exports.updateProjectByName = function(req, res) {
    const Projectname = req.params.Projectname;
    console.log(Projectname)
    Project.findOneAndUpdate({name:Projectname}, req.body, {new: true}, function(err, project) {
      console.log(project)
      if (err)
        res.send(err);   
      res.json(project);
    });
  };
  
  
  exports.deleteProject = function(req, res) {
    Project.remove({
      _id: req.params.ProjectId
    }, function(err, project) {
      if (err)
        res.send(err);
      res.json({ message: 'Project successfully deleted' });
    });
  };