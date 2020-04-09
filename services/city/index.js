/**
 * @name Services
 * @memberof Services
 * @type {Object}
 * @return {Object} List of cities services
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region Schema
import { CityMdl } from "../../db/models";
//#endregion

/**
 * @name AddNewCity
 * @memberof Services
 * @type {CITY}
 * @description Add a new city in the database
 * @return {PROMISE/MODEL} - A promise with The city model just created
 */
export const addCity = async () =>
  await CityMdl.create({
    code: "NIO/Man",
    name: "Managua",
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
