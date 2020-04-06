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

const BookSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  author: String,
});

export default BookSchema;
