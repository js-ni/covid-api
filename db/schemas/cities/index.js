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

const CitiesSchema = new Schema({
  code: {
    type: Schema.Types.String,
    unique: true,
  },
  name: {
    type: Schema.Types.String,
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

export default CitiesSchema;
