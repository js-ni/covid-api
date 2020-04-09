/**
 * @file services/index.js
 * @name Services
 * @return {OBJECT} Lit of schemas
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region schemas
import * as AccountSvc from "./account";
import * as CitySvc from "./city";
import * as UserSvc from "./user";
//#endregion

export { AccountSvc, CitySvc, UserSvc };
