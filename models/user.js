const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("users", {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: Sequelize.STRING,
    validate: {
      customValidator(value) {
        if (!value.length || value.length < 3 || value.length > 100) {
          throw new Error("First Name is field not valid");
        }
      }
    }
  },
  last_name: {
    type: Sequelize.STRING,
    validate: {
      customValidator(value) {
        if (!value.length || value.length < 3 || value.length > 100) {
          throw new Error("Last Name is field not valid");
        }
      }
    }
  },
  full_name : {
    type: Sequelize.VIRTUAL,
    get(){
      return this.getDataValue("first_name") +" "+this.getDataValue("last_name")
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true,
      len: [5,100],
      isEmail: {
        msg: "Email field is not valid"
      }
    }
  },
  mobile: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
    validate:{
      customValidator(value) {
        if (!value.length || value.length < 9) {
          throw new Error("Password must grater than 8 character");
        }
      }
    }
  },
  verification_status: {
    type: Sequelize.BOOLEAN,
    default: 0
  },
  user_status: {
    type: Sequelize.BOOLEAN,
    default: 0
  },
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: "updated_at",
    type: Sequelize.DATE,
  },
  deleted_at: {
    type: Sequelize.DATE,
  }
},
{ paranoid: true, deletedAt: "deleted_at"}
);


module.exports = User;