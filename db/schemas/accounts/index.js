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
    type: Schema.Types.ObjectId,
    ref: "Cities",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    unique: true,
  },
  cellPhone: {
    type: Schema.Types.String,
    unique: true,
  },
  telPhone: {
    type: Schema.Types.String,
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

export default AccountsSchema;
