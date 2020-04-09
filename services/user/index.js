/**
 * @name Services
 * @memberof Services
 * @type {Object}
 * @return {Object} List of cities services
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region lib
import mongoose from "mongoose";
//#endregion
//#region Schema
import { UserMdl } from "../../db/models";
//#endregion

/**
 * @name AddNewUser
 * @memberof Services
 * @type {CITY}
 * @description Add a new city in the database
 * @return {PROMISE/MODEL} - A promise with The city model just created
 */
export const addUser = async () =>
  await UserMdl.create({
    userName: "boykland/clenondavis",
    email: "code@boykland.com",
    uid: new mongoose.Types.ObjectId(),
    status: "Active",
    createdDate: new Date(),
    updatedDate: new Date(),
  })
    .then((resp) => {
      console.log("resp", resp);
    })
    .catch((err) => {
      console.log("err", err);
    });
