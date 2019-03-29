'use strict';
var mongoose = require('mongoose'),
  Project = mongoose.model('Projects');

exports.getAllProjects = function (req, res) {
  Project.find({}, function (err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};




exports.createProject = function (req, res) {
  const newProject = new Project(req.body);
  
  Project.findOne({ name: newProject.name }, (err, project) => {
    if (err) return res.status(500).send({ message: "Problema procesando la petición" })
    if (project) return res.status(400).send({ message: "El nombre del proyecto ya existe" })

    newProject.save(function (err, project) {
      if (err)
        return res.send(err);
      return res.json(project);
    })
  })
}

exports.getProject = function (req, res) {
  Project.findById(req.params.projectId, function (err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};

exports.getProjectByName = function (req, res) {
  var ProjectName = req.params.name;
  Project.findOne({ name: ProjectName }, (err, project) => {
    if (project)
      res.json(project);
    if (err)
      res.send(err);
  })
};

exports.updateProject = function (req, res) {
  console.log(JSON.stringify(req.body))
  const logProject = new Project(req.body);

  Project.findOneAndUpdate({ name: logProject.name }, req.body, { new: true }, function (err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};

exports.updateProjectByName = function (req, res) {
  const Projectname = req.params.Projectname;
  const reqName = req.body.name;
  const previousName = req.body.previousName;


  Project.find({ name: req.body.name }, function (err, project1) {
    if (project1.length > 0 && reqName != previousName) {
      return res.status(400).send({ message: "Ya existe un proyecto con ese nombre" })
    } else {
      Project.findOneAndUpdate({ name: Projectname }, req.body, { new: true }, function (err, project) {

        if (err)
          res.send(err);
        res.json(project);
      });
    }
  });
};


exports.deleteProject = function (req, res) {
  Project.remove({name: req.params.name}, function (err, project) {
    if (err)
      res.send(err);
    res.json({ message: 'Project successfully deleted' });
  });
};