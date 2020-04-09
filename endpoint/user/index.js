/**
 * @name Rest/Endpoint/User
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
import { UserSvc } from "../../services";
//#endregion
//#region common
//#endregion

const endpoint = express();
const { usersRt } = routes;
const { addUser } = UserSvc;

/**
 * @name AddNewUser
 * @memberof Rest/Endpoint/User
 * @type {POST}
 * @param {STRING} url  - url for express verb
 * @param {Fn} function - closure
 */
endpoint.post(usersRt.add, (req, res) => {
  let {
    body: { model },
  } = req;
  addUser();
});

export default endpoint;
