/**
 * @file rest/settings/routes.js
 * @name Settings/Routes
 * @memberof Settings
 * @type {Object}
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

const baseApi = "/api";
const rest = "/rest";
const v1 = "/v1.0.0";
const baseRestUrl = `${baseApi}${rest}${v1}`;
const accountsUrl = `${baseRestUrl}/accounts`;
const citiesUrl = `${baseRestUrl}/cities`;

export const accountsRt = {
  add: `${accountsUrl}`,
};
export const citiesRt = {
  add: `${citiesUrl}`,
};
