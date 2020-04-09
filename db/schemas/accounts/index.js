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

const AccountsSchema = new Schema({
  cityCode: {
    type: ObjectId,
    ref: "Cities",
  },
  userId: {
    type: ObjectId,
    ref: "Users",
    unique: true,
  },
  cellPhone: {
    type: String,
    unique: true,
  },
  telPhone: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
  },
  createdDate: {
    type: Date,
  },
  createdDate: {
    type: Date,
  },
});

export default AccountsSchema;
