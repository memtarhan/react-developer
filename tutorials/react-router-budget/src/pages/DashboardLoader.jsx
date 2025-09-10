import {fetchData} from "../helpers.js";

export function dashboardLoader() {
    const username = fetchData("username");
    return {username}
}