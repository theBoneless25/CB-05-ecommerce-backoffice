const baseUrl = "https://api.escuelajs.co/api/v1/";

export const GET = async (type, id = "") => {
  return fetch(baseUrl + type + id).then((res) => res.json());
};
