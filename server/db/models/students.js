const Sequelize = require('sequelize');
const db = require('../database');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.TEXT,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/962px-Person_icon_BLACK-01.svg.png'
  },
  gpa: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 4
    }
  }
});

module.exports = Student;
