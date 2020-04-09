/**
 * @name Rest/Endpoint/Account
 * @memberof Rest/Endpoint
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */
//#region lib
import express from "express";
//#endregion
//#region settings
import { routes } from "../../settings";
//#endregion
//#region service
import { AccountSvc } from "../../services";
//#endregion
//#region common
//#endregion

const endpoint = express();
const { accountsRt } = routes;
const { addAccount } = AccountSvc;

/**
 * @name AddNewAccount
 * @memberof Rest/Endpoint/Cities
 * @type {POST}
 * @param {STRING} url  - url for express verb
 * @param {Fn} function - closure
 */
endpoint.post(accountsRt.add, (req, res) => {
  let {
    body: { model },
  } = req;
  addAccount();
});

export default endpoint;
