/**
 * @name Services
 * @memberof Services
 * @type {Object}
 * @return {Object} List of cities services
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region Schema
import BookModel from "../db/models";
//#endregion

/**
 * @name AddNewBook
 * @memberof Services
 * @type {CITY}
 * @description Add a new city in the database
 * @return {PROMISE/MODEL} - A promise with The city model just created
 */
export const addBook = async () =>
  await BookModel.create({
    title: "Un dia a la vez",
    author: "Carlos Lenon",
  })
    .then((resp) => {
      console.log("resp", resp);
    })
    .catch((err) => {
      console.log("err", err);
    });
