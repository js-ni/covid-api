/**
 * @file db/models/account/index.js
 * @name Models
 * @memberof DB/Models
 * @type {MODEL}
 * @return {MODEL} Test Model
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region lib
import mongoose from "mongoose";
//#endregion
//#region Schema
import BookSchema from "../schemas";
//#endregion

const Book = mongoose.model("Account", BookSchema);

export default Book;
