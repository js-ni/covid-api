/**
 * @file db/schemas/index.js
 * @name Schemas
 * @memberof db
 * @type {SCHEMA}
 * @return {SCHEMA} Test schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region lib
import mongoose from "mongoose";
//#endregion

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  userName: {
    type: Schema.Types.String,
    unique: true,
  },
  email: {
    type: Schema.Types.String,
    unique: true,
  },
  uid: {
    type: Schema.Types.ObjectId,
    unique: true,
  },
  status: {
    type: Schema.Types.String,
  },
  createdDate: {
    type: Schema.Types.Date,
  },
  updatedDate: {
    type: Schema.Types.Date,
  },
});

export default UsersSchema;
