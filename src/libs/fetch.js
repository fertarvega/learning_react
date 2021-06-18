const DEV_URL = "http://127.0.0.1:5000/";
const BASE_URL = "https://learning-api-fertarvega.herokuapp.com/";

async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      /* throw new Error('Not Found') */
      return callApi("/all/");
    },
    create(badge) {
      return callApi("/new/", {
        method: "POST",
        body: JSON.stringify(badge),
      });
    },
    read(badgeId) {
      return callApi(`/_id:${badgeId}/`);
    },
    update(badgeId, updates) {
      return callApi(`/_id:${badgeId}/`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado delete, pero delete es un keyword en JavaScript asi que no es buena idea :stuck_out_tongue:
    remove(badgeId) {
      return callApi(`/_id:${badgeId}/`, {
        method: "DELETE",
      });
    },
  },
};

export default api;