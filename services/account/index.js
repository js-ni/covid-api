/**
 * @name Services
 * @memberof Services
 * @type {Object}
 * @return {Object} List of cities services
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region Schema
import { AccountMdl } from "../../db/models";
//#endregion

/**
 * @name AddNewAccount
 * @memberof Services
 * @type {CITY}
 * @description Add a new account in the database
 * @return {PROMISE/MODEL} - A promise with The account model just created
 */
export const addAccount = async () =>
  await AccountMdl.create({
    cityCode: "NIO",
    cellPhone: "+5051235465498",
    telPhone: "+5051235465497",
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
