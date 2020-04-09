/**
 * @file db/models/index.js
 * @name DB/Models
 * @return {OBJECT} Lit of models
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region models
import AccountMdl from "./account";
import CityMdl from "./city";
import UserMdl from "./user";
//#endregion

export { AccountMdl, CityMdl, UserMdl };
