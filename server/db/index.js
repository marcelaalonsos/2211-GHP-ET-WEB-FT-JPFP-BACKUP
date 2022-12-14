
const db = require('./database')
const Student = require('./models/students');
const Campus = require('./models/campuses');


Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  db,
  Student,
  Campus,
};
